const form = document.querySelector(".formCreate");
const submitButton = form.querySelector(".btn");

function create() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const newUser = {
      email,
      name,
      password,
    };

    try {
      const user = await createUser(newUser);
      console.log("Novo usuário criado:", user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  });
}

create();
