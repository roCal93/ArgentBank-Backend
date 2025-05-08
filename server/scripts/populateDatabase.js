const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron',
    //%%
    accounts: [  // Ajout des comptes
      { accountId: '1', balance: 2082.79, accountType: 'Argent Bank Checking (x8349)' },
      { accountId: '2', balance: 10928.42, accountType: 'Argent Bank Savings (x6712)' },
      { accountId: '3', balance: 184, accountType: 'Argent Bank Credit Card (x8349)' }
    ]
    //%%
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain',
    //%%
    accounts: [  // Ajout des comptes
      { accountId: '1', balance: 1029.36, accountType: 'Argent Bank Checking (x8349)' },
      { accountId: '2', balance: 7893.25, accountType: 'Argent Bank Savings (x6712)' },
      { accountId: '3', balance: 58, accountType: 'Argent Bank Credit Card (x8349)' }
    ]
    //%%
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})
