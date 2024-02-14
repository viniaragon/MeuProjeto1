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
