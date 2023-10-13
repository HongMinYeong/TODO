const { todoList } = require('../models');
// const Sequelize = require('sequelize');

exports.getTodos = async (req, res) => {
  try {
    const result = await todoList.findAll();
    res.send(result);
    // res.send('연결완료');
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.postTodo = async (req, res) => {
  const { title, done } = req.body;
  console.log(req.body); //{ title: 'ㅎㅎ', done: false }

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
    // await todoList.update({id:,},{where:{id:}});
    res.send({ result, message: '삭제가 완료되었습니다.' });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.patchTodo = async (req, res) => {
  const { id } = req.params;
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
