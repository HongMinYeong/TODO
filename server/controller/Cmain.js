const { todoList } = require('../models');
// const Sequelize = require('sequelize');

exports.getTodos = async (_, res) => {
  try {
    // 내림차순
    let result = await todoList.findAll({ order: [['id', 'desc']] });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.postTodo = async (req, res) => {
  const { title, done } = req.body;
  try {
    let newTodo = await todoList.create({
      title,
      done,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    let result = await todoList.destroy({
      where: { id },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.patchTodo = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    await todoList.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: { id },
      }
    );
    res.end();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
