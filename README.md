# About
Just using PassportJS with PostgreSQL for user authentification.

Created for future reference.

# Requirements
A '.env' file required.

.env file contains:

- PSQL Database name:
- 
  ```PG_DB='dbname'```

- PSQL Database user:
- 
  ```PG_USER='username'```

- PSQL Database password:
- 
  ```PG_PW='password'```

- PSQL Database IP:
- 
  ```PG_IP=192.168.1.1```

- PSQL Port:
- 
  ```PG_PORT='pg server port'``` - eg. '5432'

- Secret for web session:
- 
  ```SECRET='secret_string'```

- Port for Express:
- 
  ```PORT=3000```

- Admin code when registering an Admin:
- 
  ```ADMIN_CODE=123456```

# To Run

```sh-session
    $ git clone https://github.com/ng9891/passport-postgre-reference.git
    $ mkdir passport-postgre & cd passport-postgre
    $ npm i
    $ npm start or node app.js
```

Go to http://localhost:3000/ with your preferred browser.