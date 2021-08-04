# Course API

This is api for adaptive course ( still in development ) that created using [Express js](https://www.npmjs.com/package/express).

This project using [dotenv-flow](https://www.npmjs.com/package/dotenv-flow) to handle the environtment variabel

You can modify the env variabel in [.env](./.env) file

```bash
NODE_ENV=production

MONGO_ROOT_USERNAME=root
MONGO_ROOT_PASSWORD=nathan123
DB_HOST=localhost
DB_NAME=course-api
PORT=5000

TOKEN_SECRET=adfwrgrgavacxcdfwqefds
```
there are 3 environtment in this project

| Environtment |             File Location              |       ENV VARIABEL   |
|--------------|:--------------------------------------:|---------------------:|
|  Development | [.env.development](./.env.development) | NODE_ENV=development |
|    Testing   | [.env.testing](./.env.testing)         | NODE_ENV=testing     |
|  Production  | [.env.production](./.env.production)   | NODE_ENV=production  |

according to dotenv-flow, you can override env file by set the environtment variable with the value of ENV VARIABEL on table above.

## List of Env Variabel
- MONGO_ROOT_USERNAME = Username of mongodb user
- MONGO_ROOT_PASSWORD = Password of mongodb user
- DB_HOST = hostname of mongodb server
- DB_NAME = the name of database
- PORT = port that running the api
- TOKEN_SECRET = random secret using for jwt

# Using this API
## on local
clone this [repo](https://github.com/launathiel/adaptivecourse-api), and you have mongodb running on your localhost:27017
```bash
git clone https://github.com/launathiel/adaptivecourse-api
cd adaptivecourse-api
npm install
npm run start
```
and now your api running on localhost:5000/api

## Docker-compose
```bash
git clone https://github.com/launathiel/adaptivecourse-api

# Set NODE_ENV on .env file
# you can also edit the mongodb password on ./.env.credential. if you change it, you must edit env variabel based on your NODE_ENV file

docker-compose up -d --build
```

## So far, there are 2 API on this project
### ***1. auth***

   1. Register [localhost:5000/api/auth/register](localhost:5000/api/auth/register)
       - POST
            ```bash
            {
                "firstname": "firstname",
                "lastname": "lastname",
                "username": "username",
                "password": "password",
                "email": "email",
                "address": {
                    "street": "street",
                    "city" : "city",
                    "zipCode": "zipCode"
                }
            }
            ````
       - DELETE 
  
            you can delete the registered user using delete method with _id. request to, [localhost:5000/api/auth/register/_id](localhost:5000/api/auth/register/_id) with delete method.

   2. Login [localhost:5000/api/atuh/login](localhost:5000/api/auth/register)
       - POST
            ```bash
            {
                "username" : "yourusername",
                "email" : "youremail@domain.tld",
                "password" : "yourpassword"
            }
            ```
            if you have post the right value of username, email, and password as you registered earlier, you can have jwt token as response from the server
### ***2. course***
A. [localhost:5000/api/course](localhost:5000/api/course)
- GET
- POST
    ```bash
    {
        "judul": "judulcourse",
        "pemateri": "pemateri",
        "deskripsi": "isi deskripsi",
        "bintang": "5",
        "jumlahPenilai": "23345",
        "imageMateri": "assets/images/materi32/",
        "imageNetwork": "https://tsting/photo",
        "harga": "Rp. 167.323.000",
        "isDiskon": true,
        "hargaDiskon": "Rp.100.000.000",
    }
    ```
  
B. [localhost:5000/api/course/_id](localhost:5000/api/course/_id)
- GET 
- PATCH
- DELETE
