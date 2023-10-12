const { todoList } = require('../models');
const Sequelize = require('sequelize');

exports.getTodos = async (req, res) => {
  try {
    const result = await todoList.findAll();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.postTodo = async (req, res) => {
  const { title, done } = req.body;

  try {
    const result = await todoList.create({
      title,
      done,
    });
    res.send({ result, message: '등록이 완료되었습니다.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoList.destroy({
      where: { id },
    });
    res.send({ result, message: '삭제가 완료되었습니다.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
