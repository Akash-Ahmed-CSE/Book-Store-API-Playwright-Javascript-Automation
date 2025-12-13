const { test, expect } = require('../../fixtures/authFixture');

// Number of times you want to repeat the full suite
const REPEAT_COUNT = 1; // Change this to 10 if needed

for (let i = 0; i < REPEAT_COUNT; i++) {
  test.describe.serial(`BookStore API - Full Flow (Run #${i + 1})`, () => {

    test(`03 - Get User Details`, async ({ auth, request }) => {
      // get user details code
    });

    test(`04 - Get Books`, async ({ auth, request }) => {
      // get books code
    });

    test(`05 - Order Books`, async ({ auth, request }) => {
      // order books code
    });

    test(`06 - Verify Orders`, async ({ auth, request }) => {
      // verify orders code
    });

    test(`07 - Get ISBN Details`, async ({ auth, request }) => {
      // get ISBN details code
    });

    test(`08 - Delete Single Book`, async ({ auth, request }) => {
      // delete single book code
    });

    test(`09 - Update Book Order`, async ({ auth, request }) => {
      // update book order code
    });

    test(`10 - Delete All Books`, async ({ auth, request }) => {
      // delete all books code
    });

    test(`11 - Delete User`, async ({ auth, request }) => {
      // delete user code
    });

  });
}
