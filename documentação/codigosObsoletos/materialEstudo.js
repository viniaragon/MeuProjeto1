function adcionarPacientes({ nome, tipo }) {
  const paciente = {
    ordenGeral: (contadorGeral += 1),
    nome: nome,
    tipo: tipo,
    // O operador de propagação (...) é usado para adicionar propriedades ao objeto paciente.
    ...(tipo === "Prioritario" // A expressão entre parênteses é uma expressão ternária, que é uma forma curta de escrever uma instrução if...else.
      ? { ordenPrioritario: (contadorTipo.contadorPrioritario += 1) } // Se tipo for igual a "Prioritario", então o objeto { ordenPrioritario: contadorTipo.contadorPrioritario += 1 } é criado e suas propriedades são adicionadas ao objeto paciente.
      : { ordenNormal: (contadorTipo.contadorNormal += 1) }), // Se tipo não for igual a "Prioritario", então o objeto { ordenNormal: contadorTipo.contadorNormal += 1 } é criado e suas propriedades são adicionadas ao objeto paciente.
  };
  //   essa é outra forma de fazer a mesma coisa que o operador de propagação.
  if (tipo === "Prioritario") {
    contadorTipo.contadorPrioritario += 1;
    paciente.ordenPrioritario = contadorTipo.contadorPrioritario;
  } else {
    contadorTipo.contadorNormal += 1;
    paciente.ordenNormal = contadorTipo.contadorNormal;
  }

  listaPacientes.push(paciente);
  //   console.log("paciente adicionado com sucesso!");
}

function reorganizarPacientes(parametroNomeDaLista) {
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
    if ((indice % 3 === 0 && prioritarios.length > 0) || normais.length === 0) {
      // Posição para prioritário
      listaOrganizada.push(prioritarios.shift()); // Remove e adiciona o primeiro prioritário
    } else if (
      (indice % 3 !== 0 && normais.length > 0) ||
      prioritarios.length === 0
    ) {
      listaOrganizada.push(normais.shift()); // Adiciona um paciente normal
    }
  }

  // Atualizar ordenGeral para refletir a nova ordem
  listaOrganizada.forEach((paciente, index) => {
    paciente.ordenGeral = index + 1;
  });

  // Limpar a parametroNomeDaLista original e inserir os elementos da listaOrganizada
  parametroNomeDaLista.splice(
    0,
    parametroNomeDaLista.length,
    ...listaOrganizada
  );
}
