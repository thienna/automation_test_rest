Feature('Get Users');
const assert = require('assert');

Scenario('get user by email - pass', async (I) => {
  let user = await I.sendGetRequest('/users/1');
  let user_email = user.data["email"];

  let result = await I.sendGetRequest('/users/' + user_email);

  assert.equal(user_email, result.data["email"]);

});

Scenario('get user by email - fail', async (I) => {
  let user = await I.sendGetRequest('/users/1');
  let user_email = user.data["email"];

  let result = await I.sendGetRequest('/users/' + user_email);

  assert.notEqual(user_email, result.data["email"]);

});

Scenario('search a user by name', async (I) => {

  let users = await I.sendGetRequest('/users/hsobtka0@sphinn.com');
  assert.equal(users.data.email, "hsobtka0@sphinn.com");
});
