const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { loginValidation, userValidation } = require('./middlewares/validate');

const app = express();
const NotFound = require('./errors/NotFound');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.post('/signup', userValidation, createUser);
app.post('/signin', loginValidation, login);

app.use('/', auth, usersRouter);

app.use('/', auth, cardsRouter);

app.use('*', () => {
    throw new NotFound('Запрашиваемый ресурс не найден');
});

// подключаемся к серверу mongo
app.use(errors());

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;

    res
        .status(statusCode)
        .send({
            message: statusCode === 500 ?
                'На сервере произошла ошибка' : message,
        });
    next();
});

mongoose.connect('mongodb://localhost:27017/mestodbnew');

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listeningnpm run dev  on port ${PORT}`);
});