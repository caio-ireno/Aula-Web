// js.js

const form = document.querySelector(".formLogin");
const submitButton = form.querySelector(".btn");
const messageDiv = document.createElement("div");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const newUser = {
    email,
    name,
    password,
  };

  createUser(newUser)
    .then((user) => {
      console.log("Novo usuário criado:", user);
      showMessage("Usuário criado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao criar usuário:", error);
      showMessage("Erro ao criar usuário. Tente novamente mais tarde.");
    });
});

function showMessage(message) {
  messageDiv.textContent = message;
  messageDiv.classList.add("message");
  form.appendChild(messageDiv);

  // Remover a mensagem após alguns segundos (opcional)
  setTimeout(() => {
    form.removeChild(messageDiv);
  }, 3000);
}
