'use strict';

const config = require('./config');

const moment = require('moment');

const requestService = require('./request.service');

const userModel = require('./models/user.model');

function formatTime(hour) {
  const format = {
    hour: hour.split(':')[0],
    minute: hour.split(':')[1],
    second: hour.split(':')[2],
    millisecond: 0
  }
  return moment().set(format);
}

module.exports = {
  dayIsValid() {
    const weekends = [ 6, 0 ];
    return !weekends.includes(moment().day());
  },

  async login(user, pwd) {
    const loginResponse = await requestService.post(config.urls.login, {
      email: user,
      password: pwd
    });
    return userModel(loginResponse);
  },

  async sendTime({ id, token }, { start, end }) {
    await requestService.post(config.urls.hours, {
      user_id: id,
      start_time: formatTime(start),
      end_time: formatTime(end)
    }, {
      headers: {
        Authorization: token
      }
    });
  }
}