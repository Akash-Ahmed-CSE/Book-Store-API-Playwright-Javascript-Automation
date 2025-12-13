const { test, expect } = require('../../fixtures/authFixture');

test('Get ISBN Details', async ({ request }) => {
  const booksRes = await request.get('/BookStore/v1/Books');
  expect(booksRes.status()).toBe(200);

  const books = (await booksRes.json()).books;
  const isbn = books[0].isbn;

  const res = await request.get(`/BookStore/v1/Book?ISBN=${isbn}`);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.isbn).toBe(isbn);
});
