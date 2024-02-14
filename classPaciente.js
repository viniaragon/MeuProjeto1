class Paciente {
  static contadorGeral = 0;
  static contadorTipo = {
    contadorNormal: 0,
    contadorPrioritario: 0,
  };
  constructor({ nome, tipo }) {
    this.ordenGeral = Paciente.contadorGeral += 1;
    this.nome = nome;
    this.tipo = tipo;
    if (tipo === "Prioritario") {
      this.ordenPrioritario = Paciente.contadorTipo.contadorPrioritario += 1;
    } else {
      this.ordenNormal = Paciente.contadorTipo.contadorNormal += 1;
    }
  }
}
