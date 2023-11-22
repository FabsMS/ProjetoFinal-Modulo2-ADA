import Emprestimo from "./emprestimo";

class EmprestimoAutomovel extends Emprestimo{
    constructor(nome: string,
        idade: number,
        valorEmprestimo: number,
        quantidadeParcelas: number,
        rendaMensal: number,
        possuiHabilitacao: boolean,
        matriculaCursoSuperior: boolean){
            super(nome, idade, valorEmprestimo, quantidadeParcelas, rendaMensal, possuiHabilitacao, matriculaCursoSuperior)
    }
}

export default EmprestimoAutomovel;