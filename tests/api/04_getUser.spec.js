const { test, expect } = require('../../fixtures/authFixture');

test('Get User Details', async ({ auth, request }) => {
  const res = await request.get(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.username).toBe(auth.username);
});
