function reorganizarPacientes(parametroNomeDaLista) {
  // Criar uma cópia dos valores de ordenGeral
  const ordenGeralOriginal = parametroNomeDaLista.map(
    (paciente) => paciente.ordenGeral
  );

  // Separar pacientes por tipo para facilitar o controle
  let prioritarios = parametroNomeDaLista
    .filter((paciente) => paciente.tipo === "Prioritario")
    .sort(
      (primeiro, segundo) =>
        primeiro.ordenPrioritario - segundo.ordenPrioritario
    );
  let normais = parametroNomeDaLista
    .filter((paciente) => paciente.tipo === "Normal")
    .sort((primeiro, segundo) => primeiro.ordenNormal - segundo.ordenNormal);

  let listaOrganizada = [];

  // A cada 3 posições, garantir que haja um prioritário, se disponível
  for (let indice = 0; indice < parametroNomeDaLista.length; indice++) {
    if (parametroNomeDaLista[indice]) {
      if (
        ((parametroNomeDaLista[indice].ordenGeral - 1) % 3 === 0 &&
          prioritarios.length > 0) ||
        normais.length === 0
      ) {
        listaOrganizada.push(prioritarios.shift());
      } else if (
        ((parametroNomeDaLista[indice].ordenGeral - 1) % 3 !== 0 &&
          normais.length > 0) ||
        prioritarios.length === 0
      ) {
        listaOrganizada.push(normais.shift());
      }
    }
  }

  // Restaurar ordenGeral com base na cópia original
  listaOrganizada.forEach((paciente, index) => {
    paciente.ordenGeral = ordenGeralOriginal[index];
  });

  // Limpar a parametroNomeDaLista original e inserir os elementos da listaOrganizada
  parametroNomeDaLista.splice(
    0,
    parametroNomeDaLista.length,
    ...listaOrganizada
  );
}
