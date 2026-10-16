import express from 'express'

// 앱 객체 생성
const app = express();
const PORT = 8000;  //포트 설정

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express!!</h1>");
});