const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

const app = express();

// Подключение к базе данных
connectDB();

// Настройка EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Парсинг тела запроса
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Статические файлы
app.use(express.static('public'));

// Маршруты
const letterRoutes = require('./routes/letterRoutes');
app.use('/', letterRoutes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
