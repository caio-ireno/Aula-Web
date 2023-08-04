const userList = document.getElementById("userList");

// Função para buscar e exibir a lista de usuários
async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Nome:</span> ${user.name} <br> <span>E-mail:</span> ${user.email}`;

      listItem.appendChild(userText);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

// Chama a função para buscar e exibir os usuários ao carregar a página
getUsers();
