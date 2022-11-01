<!-- ABOUT THE PROJECT -->

# Fetch Points API
Back end assessment for Fetch Rewards!

## Technologies Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Starting the Application
1. Please make sure you have Node.js downloaded by entering 'node -v' in the terminal command line
1. In the terminal, type `npm install` and press enter to set up the dependencies.
1. In the terminal, type `npm run server` and press enter to start up the server.
1. If all goes well, terminal should say `App listening on port 3000` and is good to go.
1. Please make sure that the JSON body is exactly as it appears below when using http put and post methods.

## API Endpoints
| Method        | Endpoint      | Description   | JSON Body    |
| ------------- | ------------- | ------------- | ------------- |
| GET           | /payers/points | Retrieves all payer point balances ||
| GET           | /transactions | Retrieves unspent transactions ||
| POST          | /transactions | Adds a transaction | {"payer": string, "points": integer, "timestamp": date} |
| PUT           | /transactions/spend | Updates spent transactions | {"points": integer} |

