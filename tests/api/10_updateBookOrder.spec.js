const { test, expect } = require('../../fixtures/authFixture');

test('Update Book Order', async ({ auth, request }) => {
  const userBooksRes = await request.get(`/Account/v1/User/${auth.userID}`, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });
  expect(userBooksRes.status()).toBe(200);

  const userBooks = (await userBooksRes.json()).books;
  if (!userBooks.length) test.skip('No books to update');

  const oldIsbn = userBooks[0].isbn;
  const booksRes = await request.get('/BookStore/v1/Books');
  const newIsbn = (await booksRes.json()).books[1].isbn;

  const res = await request.put('/BookStore/v1/Books', {
    headers: { Authorization: `Bearer ${auth.token}` },
    data: { userId: auth.userID, isbn: oldIsbn, newIsbn },
  });

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.books[0].isbn).toBe(newIsbn);
});
