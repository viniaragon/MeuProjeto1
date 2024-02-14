const listaPacientes = [];

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
function renderizarListaPacientes() {
  const ulListapacientes = document.getElementById("lista-pacientes");
  ulListapacientes.innerHTML = "";
  for (const paciente of listaPacientes) {
    console.log("lista atualizada!");
    const liPaciente = document.createElement("li");
    liPaciente.innerHTML = `${paciente.ordenGeral} ${
      paciente.tipo === "Prioritario"
        ? `${'<span style="color: red;">P</span>'}`
        : `${'<span style="color: blue;">N</span>'}`
    }  ${
      paciente.tipo === "Prioritario"
        ? paciente.ordenPrioritario
        : paciente.ordenNormal
    } ${`
      <span style="color: black">
        <strong>${paciente.nome}</strong>
      </span>
    `}`;
    ulListapacientes.appendChild(liPaciente);
  }
}
