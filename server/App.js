const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 8000;
const { sequelize } = require('./models');

// const server = require('http').createServer(app);
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// JSON 형식의 요청 본문(body)을 파싱하기 위한 미들웨어 설정
app.use(express.json());

app.get('/', (req, res) => {
  // 요청패스에 대한 콜백함수를 넣어줍니다.
  res.send({ message: 'hello' });
});

const list = require('./routes/list');
app.use('/', list); // 기본주소: localhost:PORT/

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
