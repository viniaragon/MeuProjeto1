const listaPacientes = [];

function adcionarpaciente() {
  const inputNomePaciente = document.getElementById("nome-paciente");
  const buttonTipoPacienteNormal = document.getElementById(
    "botao-paciente-normal"
  );
  const buttonTipoPacientePrioritario = document.getElementById(
    "botao-paciente-prioritario"
  );
  const ulListapacientes = document.getElementById("lista-pacientes");

  buttonTipoPacienteNormal.addEventListener("click", function () {
    console.log("Botão paciente normal foi pressionado");
    const paciente = `${inputNomePaciente.value} - Normal`;
    listaPacientes.push(paciente);
    const liPaciente = document.createElement("li");
    liPaciente.innerText = paciente;
    ulListapacientes.appendChild(liPaciente);
    inputNomePaciente.value = "";
  });

  buttonTipoPacientePrioritario.addEventListener("click", function () {
    console.log("Botão paciente prioritário foi pressionado");
    const paciente = `${inputNomePaciente.value} - Prioritário`;
    listaPacientes.push(paciente);
    const liPaciente = document.createElement("li");
    liPaciente.innerText = paciente;
    ulListapacientes.appendChild(liPaciente);
    inputNomePaciente.value = "";
    for (pacientes of listaPacientes) {
      console.log(pacientes);
    }
  });
}
adcionarpaciente();
