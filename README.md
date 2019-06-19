# Auto checker on wheniwork

The purpose of this app is to automate the checkin/checkout of attendance in wheniwork site. It uses their own APIs so the process is perfectly safe.

## Config

* You need to create a .env file with your user and password
* If needed, you can change your working hours in the config.js file, putting you start and end times for each period. You can have as many periods as you'd like

## Using it

The app checks in for the current day you're on, so it's just a matter of executing

```javascript
node index.js
```

## Extras
There's also a checkin.desktop shortcut that you can put on your desktop to execute the script with a single click
