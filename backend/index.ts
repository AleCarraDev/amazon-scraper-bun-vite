import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword as string;
  if (!keyword) return res.status(400).json({ error: "Keyword is required." });

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const items = document.querySelectorAll("div.s-main-slot div[data-component-type='s-search-result']");

    const results = Array.from(items).map((item) => {
      const title = item.querySelector("h2 a span")?.textContent || "N/A";
      const rating = item.querySelector(".a-icon-alt")?.textContent?.split(" ")[0] || "N/A";
      const reviews = item.querySelector(".a-size-base")?.textContent || "0";
      const image = item.querySelector("img.s-image")?.getAttribute("src") || "";

      return { title, rating, reviews, image };
    });

    res.json({ keyword, results });
  } catch (error) {
    console.error("Scraping error:", error);
    res.status(500).json({ error: "Failed to fetch data from Amazon." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
