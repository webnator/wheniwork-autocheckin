'use strict';

const config = require('./config');

const appService = require('./appconnector.service');

async function checkIn() {
  const user = await appService.login(config.user, config.pw);

  for (const time of config.times) {
    try {
      await appService.sendTime(user, time);
    } catch (err) {
      console.log(`The request for ${time} ended with the following error: ${err}`);
    }
  }
}

checkIn();
