const buttonTipoPacienteNormal = document.getElementById(
  "botao-paciente-normal"
);
buttonTipoPacienteNormal.addEventListener("click", function () {
  const nome = document.getElementById("nome-paciente");
  const paciente = new Paciente({ nome: nome.value, tipo: "Normal" });
  listaPacientes.push(paciente);
  reorganizarPacientes(listaPacientes);
  renderizarListaPacientes();
  //   nome.value = "";
});

const buttonTipoPacientePrioritario = document.getElementById(
  "botao-paciente-prioritario"
);
buttonTipoPacientePrioritario.addEventListener("click", function () {
  const nome = document.getElementById("nome-paciente");
  const paciente = new Paciente({ nome: nome.value, tipo: "Prioritario" });
  listaPacientes.push(paciente);
  reorganizarPacientes(listaPacientes);
  renderizarListaPacientes();
  //   nome.value = "";
});

// redenrizaçao da lista de pacientes no html
