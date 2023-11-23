import SolicitacaoEmprestimo from "./emprestimo";

class EmprestimoAutomovel extends SolicitacaoEmprestimo{
    constructor(nome: string,
                idade: number,
                valorEmprestimo: number,
                quantidadeParcelas: number,
                valorParcela: number,
                rendaMensal: number,
                possuiHabilitacao: boolean,
                matriculaCursoSuperior: boolean){
            super(nome, idade, valorEmprestimo, quantidadeParcelas, valorParcela, rendaMensal, possuiHabilitacao, matriculaCursoSuperior)
    }

    verificarAprovacao(): boolean {
        return (
          this.idade >= 18 &&
          this.valorEmprestimo === this.quantidadeParcelas * this.valorParcela &&
          this.rendaMensal > 3000 &&
          this.possuiHabilitacao
        );
      }
}

export default EmprestimoAutomovel;