import DataTypes from "sequelize";

//initilize sequilize model
const exported = (sequelize) => {
  sequelize.define(
    "book",
    {
      // id as UUID ?
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      release_year: {
        type: DataTypes.INTEGER,
      },
      isbn: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};

export default exported;
