abstract class SolicitacaoEmprestimo {
    static emprestimos: Array<SolicitacaoEmprestimo> = [];
  
    static add(emprestimo: SolicitacaoEmprestimo) {
      this.emprestimos.push(emprestimo);
    }
  
    abstract verificarAprovacao(): boolean;
  
    static processarSolicitacoes() {
      const aprovados: string[] = [];
      const reprovados: string[] = [];
  
      for (const emprestimo of this.emprestimos) {
        if (emprestimo.verificarAprovacao()) {
          aprovados.push(`${emprestimo.nome} [APROVADO]`);
        } else {
          reprovados.push(`${emprestimo.nome} [REPROVADO]`);
        }
      }
  
      console.log("Solicitações Aprovadas:");
      console.log(aprovados.join("\n"));
  
      console.log("\nSolicitações Reprovadas:");
      console.log(reprovados.join("\n"));
    }

    constructor(protected nome: string,
        protected idade: number,
        protected valorEmprestimo: number,
        protected quantidadeParcelas: number,
        protected valorParcela: number,
        protected rendaMensal: number,
        protected possuiHabilitacao: boolean,
        protected matriculaCursoSuperior: boolean){}
}

export default SolicitacaoEmprestimo;