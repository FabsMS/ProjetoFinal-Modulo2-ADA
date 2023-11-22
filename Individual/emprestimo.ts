abstract class Emprestimo{
    protected nome: string;
    protected idade: number;
    protected valorEmprestimo: number;
    protected quantidadeParcelas: number;
    protected rendaMensal: number;
    protected possuiHabilitacao: boolean;
    protected matriculaCursoSuperior: boolean;

    constructor(nome: string,
                idade: number,
                valorEmprestimo: number,
                quantidadeParcelas: number,
                rendaMensal: number,
                possuiHabilitacao: boolean,
                matriculaCursoSuperior: boolean){
                    this.nome = nome,
                    this.idade = idade,
                    this.valorEmprestimo = valorEmprestimo,
                    this.quantidadeParcelas = quantidadeParcelas,
                    this.rendaMensal = rendaMensal,
                    this.possuiHabilitacao = possuiHabilitacao,
                    this.matriculaCursoSuperior = matriculaCursoSuperior
                }

}

export default Emprestimo;