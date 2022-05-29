/* eslint-disable no-undef */
import request from "supertest";
import app from "./app";

test("/books works", async () => {
  const response = await request(app.callback()).get("/books");
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toEqual([
    {
      id: "5d596c01-e20b-4049-91e9-a0be77715260",
      name: "name",
      author: "author",
      release_year: 1980,
      isbn: "isbn",
    },
  ]);
});
test("/books/id works", async () => {
  const response = await request(app.callback()).get(
    "/books/5d596c01-e20b-4049-91e9-a0be77715260"
  );
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toEqual({
    id: "5d596c01-e20b-4049-91e9-a0be77715260",
    name: "name",
    author: "author",
    release_year: 1980,
    isbn: "isbn",
  });
});

test("/books/id put works", async () => {
  const response = await request(app.callback())
    .put("/books/5d596c01-e20b-4049-91e9-a0be77715260")
    .send({
      name: "name test",
      author: "author test",
      release_year: 1981,
      isbn: "isbn test",
    });
  expect(response.status).toBe(200);
});
test("/books/id after put works works", async () => {
  const response = await request(app.callback()).get(
    "/books/5d596c01-e20b-4049-91e9-a0be77715260"
  );
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toEqual({
    id: "5d596c01-e20b-4049-91e9-a0be77715260",
    name: "name test",
    author: "author test",
    release_year: 1981,
    isbn: "isbn test",
  });
});
test("/books/ post works", async () => {
  const response = await request(app.callback()).post("/books/").send({
    name: "name test",
    author: "author test",
    release_year: 1981,
    isbn: "isbn test",
  });
  expect(response.status).toBe(200);
});
