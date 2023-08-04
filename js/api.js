// api.js
const BASE_URL = "http://localhost:3000";

// Função para realizar uma requisição GET para a API
async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
}

// Função para realizar uma requisição POST para a API
async function createUser(user) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
}

// Função para realizar uma requisição PUT para a API
async function updateUser(id, user) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}
