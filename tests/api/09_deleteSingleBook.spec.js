const { test, expect } = require('../../fixtures/authFixture');

test('Delete Single Book', async ({ auth, request }) => {
  const userBooksRes = await request.get(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });
  expect(userBooksRes.status()).toBe(200);

  const userBooks = (await userBooksRes.json()).books;
  if (!userBooks.length) test.skip('No books to delete');

  const isbn = userBooks[0].isbn;

  const res = await request.delete('/BookStore/v1/Book', {
    headers: { Authorization: `Bearer ${auth.token}` },
    data: { userId: auth.userID, isbn },
  });

  expect(res.status()).toBe(204);
});
