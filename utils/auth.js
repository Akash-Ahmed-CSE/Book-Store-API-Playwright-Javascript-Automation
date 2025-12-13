const { getApiContext } = require('./apiContext');

async function createUserAndToken(username, password) {
  const api = await getApiContext();

  // Dynamic username if not provided
  if (!username) username = `user_${Date.now()}`;
  if (!password) password = 'Test@1234';

  // 1️⃣ Create User
  const createRes = await api.post('/Account/v1/User', {
    data: { userName: username, password }
  });

  if (createRes.status() !== 201) {
    throw new Error(`User creation failed: ${createRes.status()}`);
  }
  const userBody = await createRes.json();

  // 2️⃣ Generate Token
  const tokenRes = await api.post('/Account/v1/GenerateToken', {
    data: { userName: username, password }
  });

  if (tokenRes.status() !== 200) {
    throw new Error(`Token generation failed: ${tokenRes.status()}`);
  }

  const tokenBody = await tokenRes.json();

  return {
    username,
    password,
    userID: userBody.userID,
    token: tokenBody.token
  };
}

module.exports = { createUserAndToken };
