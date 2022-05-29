import sequelize from "./sequilize.js";

//our default values init DB
async function initDB() {
  await sequelize.sync({ force: true });
  await sequelize.models.book.bulkCreate([
    {
      id: "5d596c01-e20b-4049-91e9-a0be77715260",
      name: "name",
      author: "author",
      release_year: 1980,
      isbn: "isbn",
    },
  ]);
}
export default initDB;
