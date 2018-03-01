# Кафе с клиентской и серверной частью.

Мой самый первый проект на JS

Фронт
> * Вход для клиента с главной страницы
> * Возможность пополнить баланс, заказать блюда и отслеживание готовности (стейт)
> * Страница повара (кухни) для отслеживания заказов /#!/kitchen
> * В режиме реального времени заказанные блюда появляются в списке. Нужно выбрать блюдо для начала приготовдения.
> * После приготовления, блюдо отдается в логистику (сторонний бек) с рандомным исходом (доставил или уронил)))
> * В режиме реального времени у блюд в заказе меняются стейты в зависимости от их готовности (socket.io)

Сервер
> * Фейковая регистрация пользователя
> * База данных для хранения пользователей и заказанных блюд
> * REST Api для доступа к данным
> * Обмен данными в реальном времени (socket.io)

## Технологии

* Angular 1
* Node JS
* Mongo DB
* Express
* Socket.io

## Старт проекта

##### Склонируйте репозиторий и перейдите в папку проекта

```
git clone https://github.com/zahar517/Drone-Cafe.git
```

##### Установите модули локально

```
npm install | yarn install
```

##### Установите mongo DB сервер и запустите локально

```
mongod --dbpath path/to/db
```

##### Запустите сборку проекта

```
npm start | yarn start
```
