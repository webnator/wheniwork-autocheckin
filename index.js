'use strict';

const config = require('./config');

const appService = require('./appconnector.service');

async function checkIn() {
  if (!appService.dayIsValid()) {
    console.log(`The day is not valid to log hours`);
    return;
  }

  let user;
  try {
    user = await appService.login(config.user, config.pw);
  } catch (err) {
    console.log(`The request for login ended with the following error: ${err}`);
    return err;
  }

  for (const time of config.times) {
    try {
      await appService.sendTime(user, time);
    } catch (err) {
      console.log(`The request for ${JSON.stringify(time)} ended with the following error: ${err.response.data.error}`);
      return err;
    }
  }
}

checkIn();
