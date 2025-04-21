let allResults = [];
let currentPage = 1;
const itemsPerPage = 5;

function toggleMessage(id, show, message = "") {
  const el = document.getElementById(id);
  if (show) {
    el.classList.remove("hidden");
    if (message) el.textContent = message;
  } else {
    el.classList.add("hidden");
  }
}

function renderPage(page) {
  const resultsList = document.getElementById("resultsList");
  const totalPages = Math.ceil(allResults.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = allResults.slice(start, end);

  resultsList.innerHTML = "";

  currentItems.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.innerHTML = `
      <img src="${product.image}" alt="Imagem do Produto" />
      <div>
      <h3><a href="${product.url}" target="_blank" rel="noopener noreferrer">${product.title}</a></h3>
        <p>⭐ ${product.rating} estrelas</p>
        <p>${product.reviews} avaliações</p>
      </div>
    `;
    resultsList.appendChild(li);
  });

  document.getElementById("resultsContainer").classList.remove("hidden");
  toggleMessage("pageInfo", true, `Página ${currentPage} de ${totalPages}`);

  document.getElementById("prevBtn").classList.toggle("hidden", currentPage === 1);
  document.getElementById("nextBtn").classList.toggle("hidden", currentPage === totalPages);
}

async function scrape() {
  const keyword = document.getElementById("keyword").value;

  // Reset de mensagens e listas
  toggleMessage("loading", true, "Carregando...");
  toggleMessage("error", false);
  toggleMessage("noResults", false);
  toggleMessage("resultsContainer", false);
  toggleMessage("pageInfo", false);
  document.getElementById("resultsList").innerHTML = "";

  try {
    const response = await fetch(`http://localhost:3001/api/scrape?keyword=${encodeURIComponent(keyword)}`);
    const data = await response.json();
    toggleMessage("loading", false);

    if (!data.results || data.results.length === 0) {
      toggleMessage("noResults", true, "Nenhum resultado encontrado.");
      return;
    }

    allResults = data.results;
    currentPage = 1;
    renderPage(currentPage);
  } catch (err) {
    console.error(err);
    toggleMessage("loading", false);
    toggleMessage("error", true, "Erro ao buscar dados. Tente novamente.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBtn").addEventListener("click", scrape);
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    const totalPages = Math.ceil(allResults.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });
});
