'use strict';

module.exports = (response) => ({
  id: response.data.person.id,
  token: response.data.person.token
});
