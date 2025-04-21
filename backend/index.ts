import express, { Request, Response } from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/scrape", async (req: Request, res: Response): Promise<void> => {
  const keyword = req.query.keyword as string;
  if (!keyword) {
    res.status(400).json({ error: "Keyword is required." });
    return;
  }

  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const items = document.querySelectorAll(
      "div.s-main-slot div[data-component-type='s-search-result']"
    );

    const results = [...items].map((item: Element) => {
      let title =
        item.querySelector("h2 a span")?.textContent?.trim() ||
        item.querySelector("h2 span")?.textContent?.trim() ||
        item.querySelector("h2")?.textContent?.trim() ||
        "Título não disponível";

      const ratingText = item.querySelector(".a-icon-alt")?.textContent || "";
      const rating = ratingText.split(" ")[0] || "N/A";

      const reviewElements = item.querySelectorAll(".a-size-base");
      let reviews = "0";
      for (let i = reviewElements.length - 1; i >= 0; i--) {
        const text = reviewElements[i].textContent?.trim() || "";
        if (/^[\d,.]+$/.test(text)) {
          reviews = text;
          break;
        }
      }

      const image =
        item.querySelector("img.s-image")?.getAttribute("src") || "";
      const url =
        "https://www.amazon.com" +
        (item.querySelector("h2 a")?.getAttribute("href") || "");

      return { title, rating, reviews, image, url };
    });

    res.json({ keyword, results });
  } catch (error) {
    console.error("Scraping error:", error);
    res.status(500).json({ error: "Failed to fetch data from Amazon." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
