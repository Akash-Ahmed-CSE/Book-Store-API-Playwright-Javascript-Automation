const { test, expect } = require('../../fixtures/authFixture');

test('Delete User', async ({ auth, request }) => {
  const res = await request.delete(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });

  expect(res.status()).toBe(204);

  const verifyRes = await request.get(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });

  expect(verifyRes.status()).toBe(404);
});
