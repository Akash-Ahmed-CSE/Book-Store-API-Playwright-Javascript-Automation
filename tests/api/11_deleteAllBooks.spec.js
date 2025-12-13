const { test, expect } = require('../../fixtures/authFixture');

test('Delete All Books', async ({ auth, request }) => {
  const res = await request.delete(`/BookStore/v1/Books?UserId=${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });

  expect(res.status()).toBe(204);

  const verifyRes = await request.get(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });

  expect(verifyRes.status()).toBe(200);
  const body = await verifyRes.json();
  expect(body.books.length).toBe(0);
});
