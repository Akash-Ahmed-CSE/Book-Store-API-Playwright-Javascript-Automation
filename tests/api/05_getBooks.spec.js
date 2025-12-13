const { test, expect } = require('../../fixtures/authFixture');

test('Get Books', async ({ request }) => {
  const res = await request.get('/BookStore/v1/Books');
  expect(res.status()).toBe(200);

  const body = await res.json();
  // Store first 4 ISBNs for later use
  test.info().annotations.push({ type: 'isbn', description: JSON.stringify(body.books.slice(0, 4)) });
});
