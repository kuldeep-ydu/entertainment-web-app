const express = require("express");
const cors = require("cors");
const app = express();
const mediaData = require("./data.json");

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.get("/api/recommended-media", async (_, response) => {
  const recommended = mediaData.slice(mediaData.length - 8, mediaData.length);
  return response.json(recommended);
});

app.get("/api/trending-media", async (_, response) => {
  const data = mediaData.filter((media) => media.isTrending);
  return response.json(data);
});

app.get("/api/movies", async (_, response) => {
  const data = mediaData.filter((media) => media.category === "Movie");
  return response.json(data);
});

app.get("/api/tv-series", async (_, response) => {
  const data = mediaData.filter((media) => media.category === "TV Series");
  return response.json(data);
});

app.get("/api/bookmarks", async (_, response) => {
  const data = mediaData.filter((media) => media.isBookmarked);
  const movies = data.filter((media) => media.category === "Movie");
  const tvSeries = data.filter((media) => media.category === "TV Series");

  return response.json({ movies, tvSeries });
});

module.exports = app;
