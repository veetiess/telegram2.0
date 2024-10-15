const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Используйте cors, чтобы разрешить все домены (для разработки)
app.use(cors());

app.use(bodyParser.json());

// Массив для хранения комментариев
let comments = [];

// Обработка GET-запроса для корневого маршрута
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Обработка GET-запроса для получения комментариев
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Обработка POST-запроса для добавления комментария
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    const newComment = {
        username,
        comment,
        date: new Date()
    };
    comments.push(newComment);
    res.json(newComment);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});