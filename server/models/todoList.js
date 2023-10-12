const todoList = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'todoList',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'todoList',
      freezeTableName: true,
      timestamps: true,
      updatedAt: false,
    }
  );

  return model;
};

module.exports = todoList;
