import { Sequelize } from "sequelize";
import bookModel from "../book/models/book.js";

const sequelize = process.env.DB_CONNECTION_URL
  ? new Sequelize(process.env.DB_CONNECTION_URL)
  : new Sequelize({
      dialect: "sqlite",
      storage: "book.sqlite",
      logQueryParameters: true,
      benchmark: true,
    });

const modelDefiners = [bookModel];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

export default sequelize;
