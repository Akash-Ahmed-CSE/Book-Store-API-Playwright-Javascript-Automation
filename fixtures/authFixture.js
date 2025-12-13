const { test: baseTest, expect } = require('@playwright/test');
const { getApiContext } = require('../utils/apiContext');

const test = baseTest.extend({
  auth: async ({}, use) => {
    const api = await getApiContext();

    // 1. Generate a unique username
    const username = `user_${Date.now()}`;
    const password = 'Test@1234';

    // 2. Create user
    const createUserRes = await api.post('/Account/v1/User', {
      data: { userName: username, password },
    });

    if (createUserRes.status() !== 201) {
      throw new Error(`User creation failed: ${await createUserRes.text()}`);
    }

    const userBody = await createUserRes.json();
    const userID = userBody.userID;

    // 3. Generate token
    const tokenRes = await api.post('/Account/v1/GenerateToken', {
      data: { userName: username, password },
    });

    if (tokenRes.status() !== 200) {
      throw new Error(`Token generation failed: ${await tokenRes.text()}`);
    }

    const tokenBody = await tokenRes.json();
    const token = tokenBody.token;

    // 4. Expose auth object to tests
    await use({ username, password, token, userID });

    // 5. Cleanup: delete user after test
    await api.delete(`/Account/v1/User/${userID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
});

module.exports = { test, expect };
