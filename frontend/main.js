async function scrape() {
  const keyword = document.getElementById("keyword").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "Loading...";
  try {
    const response = await fetch(`http://localhost:3001/api/scrape?keyword=${keyword}`);
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      resultsDiv.innerHTML = "No results found.";
      return;
    }
    resultsDiv.innerHTML = data.results.map(product => `
      <div class="product">
        <img src="${product.image}" alt="Product Image" />
        <div>
          <h3>${product.title}</h3>
          <p>Rating: ${product.rating} stars</p>
          <p>${product.reviews} reviews</p>
        </div>
      </div>
    `).join("");
  } catch (error) {
    console.error(error);
    resultsDiv.innerHTML = "Error fetching data.";
  }
}
