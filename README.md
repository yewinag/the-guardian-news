### News Web App

#### Available Scripts
- pre-install
    ```
        - touch .env.development && .env.production file in the directory
        - need to add 
        -----------------
        REACT_APP_API_URL = ''; // guardianapis url
        REACT_APP_API_KEY = ''; // api key
        -----------------
    ```
- install dependencies
    ```
        yarn install
    ```
- run the app 
    ```
        yarn run start 
    ```
    will run on http://localhost:3000/
- run scripts 
    ```
        yarn run test 
        yarn run lint
        yarn run lint-fix
    ```
    will run on http://localhost:3000/

- build the production
    ```
        yarn run build
    ```
