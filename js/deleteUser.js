// delete.js

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
      userText.innerHTML = `<span>Nome:</span> ${user.name} <br> <span>E-mail:</span> ${user.email} `;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", () => deleteUser(user.id));

      listItem.appendChild(userText);
      listItem.appendChild(deleteButton);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

// Função para deletar um usuário pelo ID
async function deleteUser(userId) {
  try {
    const response = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Se a resposta for bem-sucedida, remove o usuário da lista
      const listItem = document.querySelector(`li[data-id="${userId}"]`);
      if (listItem) {
        listItem.remove();
      }
    } else {
      console.error("Erro ao deletar usuário:", response.status);
    }
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
  }
}

// Chama a função para buscar e exibir os usuários ao carregar a página
getUsers();
