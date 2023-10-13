const { todoList } = require('../models');
// const Sequelize = require('sequelize');

exports.getTodos = async (_, res) => {
  try {
    let todos = await todoList.findAll();
    res.send(todos);
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
    res.end();
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todoList.destroy({
      where: { id },
    });
    res.end();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.patchTodo = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  // await User.update(
  //   {
  //     name: req.body.name,
  //     pw: req.body.pw,
  //   },
  //   {
  //     where: { userid: req.body.userid },
  //   }
  // );
  try {
    const result = await todoList.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: { id },
      }
    );
    res.send({ result, message: '수정이 완료되었습니다.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
