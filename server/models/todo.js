module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: models => {
        Todo.hasMany(models.TodoItem, {
          foriegnKey: 'todoId',
          as: 'todoItems',
        });
      },
    },
  });
  return Todo;
};
