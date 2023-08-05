const userList = document.getElementById("userList");

// Função para buscar e exibir a lista de usuários
async function deleteUserById() {
  try {
    users = await getUser();

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

// Chama a função para buscar e exibir os usuários ao carregar a página
deleteUserById();
