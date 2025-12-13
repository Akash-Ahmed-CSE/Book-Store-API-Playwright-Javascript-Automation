const { test, expect } = require('../../fixtures/authFixture');

test('Authorized', async ({ auth, request }) => {
  const res = await request.post('/Account/v1/Authorized', {
    headers: { Authorization: `Bearer ${auth.token}` },
    data: {
      userName: auth.username,
      password: auth.password,
    },
  });

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toBe(true);
});
