const { request } = require('@playwright/test');

let api;

async function getApiContext() {
  if (!api) {
    api = await request.newContext({
      baseURL: 'https://bookstore.toolsqa.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
  return api;
}

module.exports = { getApiContext };
