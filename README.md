<!-- ABOUT THE PROJECT -->

# Fetch Points API
Back end assessment for Fetch Rewards!

## Technologies Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## API Endpoints
| Method        | Endpoint      | Description   | JSON Body    |
| ------------- | ------------- | ------------- | ------------- |
| GET           | /payers/points | Retrieves all payer point balances ||
| GET           | /transactions | Retrieves unspent transactions ||
| POST          | /transactions | Posts a transaction | {"payer": <string>, "points": <integer>, "timestamp": <date>} |
| PUT           | /transactions/spend | Updates spent transactions | {"points": <integer>} |

