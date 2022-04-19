# Проект Mesto бэкенд

### Ссылка на сайт размещенный на сервере: https://mattzenn.nomoredomains.club/
### Ссылка: на итоговый общий репозиторий frontend и backend: https://github.com/Mattzenn/react-mesto-api-full

## Описание
Репозиторий для приложения проекта Mesto, включающий бэкенд часть приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями.

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

### Роуты для пользователей: 

* GET /users - возвращает всех пользователей; 
* GET /users/:userId - возвращает пользователя по переданному _id; 
* POST /users - создает пользователя с переданными в теле запроса name, about и avatar;

### Роуты для карточек:

* GET /cards - возвращает все карточки из базы данных; 
* POST /cards - создаёт карточку с переданными в теле запроса name и link.; 
* DELETE /cards/:cardId - удаляет карточку по переданному _id; 

## Технологии:

* nodejs 
* express 
* nodemon 
* MongoDB
* Mongoose

# Инструкция по установке:

Клонировать репозиторий:

* `git clone https://github.com/Mattzenn/express-mesto.git`

В директории проекта запустить приложение в режиме разработки:

* `npm install` - устанавливает зависимости; 
* `npm run dev` - запускает сервер; 
* `npm run start` - запускает сервер с hot-reload;

## Языки:

* JavaScript
* RegExp 

## Библиотеки:

* expressjs

## База данных: 

* MongoDB (сопоставитель Mongoose)

## Чеклисты проектной работы:

* [Чеклист 1](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-12/index.html) 
* [Чеклист 2](https://code.s3.yandex.net/web-developer/checklists/new-program/checklist-13/index.html) 
