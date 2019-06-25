'use strict';

require('dotenv').config({ path: `${__dirname}/.env` });

module.exports = {
  user: process.env.CL_USER,
  pw: process.env.CL_PWD,
  urls: {
    login: 'https://api.login.wheniwork.com/login',
    hours: 'https://app.wheniwork.com/rest/times'
  },
  times: [
    { start: '09:00:00', end: '14:00:00' },
    { start: '15:00:00', end: '17:30:00' }
  ]
}