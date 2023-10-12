const express = require('express');
const app = express();
const PORT = 8000;
const { sequelize } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const indexRouter = require('./routes/todo');
app.use(indexRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('8000 port is running');
    });
  })
  .catch(() => {
    console.log('데이터 베이스 연결 실패');
  });
