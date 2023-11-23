import SolicitacaoEmprestimo from "./emprestimo";
import EmprestimoAutomovel from "./emprestimoAutomovel";
import EmprestimoEstudantil from "./emprestimoEstudantil";
import EmprestimoPessoal from "./emprestimoPessoal";

SolicitacaoEmprestimo.add(new EmprestimoPessoal("João", 25, 5000, 12, 400, 3000, false, true));
SolicitacaoEmprestimo.add(new EmprestimoAutomovel("Maria", 22, 15000, 24, 600, 3500, true, true));
SolicitacaoEmprestimo.add(new EmprestimoEstudantil("Carlos", 19, 3000, 6, 500, 2000, false, true));
  
SolicitacaoEmprestimo.processarSolicitacoes();