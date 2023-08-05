const userList = document.getElementById("userList");
const updateFormContainer = document.getElementById("updateFormContainer");

// Função para buscar e exibir a lista de usuários
async function UpdateUserById() {
  try {
    users = await getUser();

    users.forEach((user) => {
      const listItem = document.createElement("div");
      listItem.classList.add("userItem");

      const userText = document.createElement("p");
      userText.innerHTML = `<span>Nome:</span> ${user.name} <br> <span>E-mail:</span> ${user.email} `;

      const SendButton = document.createElement("button");
      SendButton.textContent = "Atualizar";
      SendButton.classList.add("updateButton");
      SendButton.addEventListener("click", () =>
        openUpdateForm(user.id, user.email, user.name, user.password)
      );

      listItem.appendChild(userText);
      listItem.appendChild(SendButton);
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Erro ao obter a lista de usuários:", error);
  }
}

async function openUpdateForm(userId, email, name, password) {
  const updateFormHTML = `
    <form id="updateForm" class="formUpdate">
      <h2>Atualizar Usuário</h2>
      <label for="email">E-mail</label>
      <input type="email" placeholder="Digite o novo e-mail" id="email" value="${email}" required>
      <label for="name">Nome</label>
      <input type="text" placeholder="Digite o novo nome" id="name" value="${name}" required>
      <label for="password">Senha</label>
      <input type="password" placeholder="Digite a nova senha" id="password" value="${password}" required>
      <button type="submit" class="btn">Atualizar</button>
    </form>
  `;

  updateFormContainer.innerHTML = updateFormHTML;

  const updateForm = document.getElementById("updateForm");

  updateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const newUser = {
      email,
      name,
      password,
    };

    await updateUser(userId, newUser);
  });
}

// Chama a função para buscar e exibir os usuários ao carregar a página
UpdateUserById();
