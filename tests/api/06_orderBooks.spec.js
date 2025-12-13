const { test, expect } = require('../../fixtures/authFixture');

test('Order Books for User', async ({ auth, request }) => {
  // Fetch books first
  const booksRes = await request.get('/BookStore/v1/Books');
  expect(booksRes.status()).toBe(200);
  const books = (await booksRes.json()).books;

  // Order first book for user
  const res = await request.post('/BookStore/v1/Books', {
    headers: { Authorization: `Bearer ${auth.token}` },
    data: {
      userId: auth.userID,
      collectionOfIsbns: [{ isbn: books[0].isbn }]
    }
  });

  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.books[0].isbn).toBe(books[0].isbn);
});
