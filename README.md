# Foods API

Foods API is an application that allows you to manage users, food, food variations, and orders. The project is built using MongoDB, Express.js, Node.js, Winston, JSON Web Token (JWT) technologies, and can be tested with Postman. This API allows you to perform basic operations such as registering users, adding food and food variations such as fillings and toppings, and placing food orders.

## Docker Image

You can also access this project via the Docker image available on Docker Hub.

- Docker Hub Repository: [hikio/foods-api](https://hub.docker.com/r/hikio/foods-api)

### Pull and Run the Docker Image

You can pull and run the Docker image as follows:

```bash
docker pull hikio/foods-api

docker run -d -p 3000:5000 hikio/foods-api
```

## Installation
Before you can run this project, make sure you have [node.js](https://nodejs.org/en/download) and [MongoDB](https://www.mongodb.com/try/download/community) installed. Then follow these steps:

1. Clone this repository to your local computer:
```bash
   git clone https://github.com/hikio-17/foods-api.git
```

2. Enter the project directory:
```bash
   cd foods-api
```

3. Install all dependencies with the following command:
```bash
   npm install
```
4. Create an environment configuration file (.env) and configure your MongoDB connection and JWT secret. Example .env.example:
```bash
# SERVER
PORT=5000

# DATABASE CLOUD
# MONGO_URI=mongodb+srv://<username>:<password>@project.b4wyhrv.mongodb.net/?retryWrites=true&w=majority

#DATABASE LOCAL
MONGO_URI='mongodb://localhost:27017/foods'

#JWT
JWT_SECRET_KEY=eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4Nj
```

5. Run the app:
```bash
   npm start
```

## Docker Container
You can also run this application in a Docker container. Build and run the Docker image using the following commands:

```bash
   docker build -t foods-api .

   docker run -d -p 3000:5000 foods-api
```

## Testing
You can use [Postman](https://www.postman.com/) to test this API. Import the Postman collection provided in this project [CollectionFoodsApi](https://documenter.getpostman.com/view/20149138/2s9YXe6iym) to start testing. You will need to set environment variables in Postman to work with your environment configuration file.


## Logging
This project uses [Winston](https://github.com/winstonjs/winston#readme) to log the logs. You can find the logs in the logs/app-date.log file.

## Author

[Fajri Muhammad Tio](https://github.com/hikio-17)