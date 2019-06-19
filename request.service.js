'use strict';

const axios = require('axios');

module.exports = {
  post(url, body, opts = {}) {
    return axios.post(url, body, opts);
  }
}