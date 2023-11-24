# Projetos do Segundo Módulo ADA-Tech & IFood

Tratam-se de dois projetos propostos, com o uso de TypeScript, com o objetivo de usar os conhecimentos adquiridos sobre POO (Programação Orientada a Objetos) no segundo módulo do curso de desenvolvimento back-end, ministrado pela Ada Tech, com parceria do IFood

# Projeto Individual
## Sistema de Aprovação de Empréstimos

Este projeto consiste em um sistema simples de aprovação de empréstimos, desenvolvido em TypeScript. Ele utiliza conceitos de orientação a objetos para processar diferentes tipos de solicitações de empréstimos e determinar se são aprovadas ou reprovadas com base em critérios específicos.

### Estruruta do Projeto 

O projeto é composto por classes abstratas e classes concretas para representar três tipos de empréstimos: pessoal, automóvel e estudantil. A estrutura principal é a seguinte:

- **SolicitacaoEmprestimo:** Classe abstrata que serve como base para todas as solicitações de empréstimo. Contém uma função estática para adicionar solicitações e processar a aprovação.
- **EmprestimoPessoal**, **EmprestimoAutomovel**, **EmprestimoEstudantil**: Classes concretas que herdam de *SolicitacaoEmprestimo*. Cada uma implementa a função *verificarAprovacao*, aplicando critérios específicos para o tipo de empréstimo.

### Como Usar
1. Clone o repositório para o seu ambiente local:
> `git clone https://github.com/FabsMS/ProjetoFinal-Modulo2-ADA`

2. Instale as dependências
> `npm i -D sucrase`

3. Edite o arquivo **app.ts** com as solicitações de empréstimo desejadas

4. Execute o script a seguir para processar as solicitações
> `npx sucrase-node app.ts`

5. Os resultados das solicitações aprovadas e reprovadas serão exibidos no console local

# Projeto em Grupo
## Sistema de Locadora de Veículos

Esse projeto consiste em um sistema para uma Locadora de Veículos, desenvolvida em NodeJS e TypeScript. Também utiliza de conceitos de Programação Orientada a Objetos em seu desenvolvimento.

## Squad de Desenvolvimento 
### Monte Olimpo

- Maurilo Santos
- Pedro Rodrigues
- Fabricio Moreno
- Douglas Quintanilha
- Jeferson barreto
- Pedro Augusto

### Como Usar
1. Clone o repositório para o seu ambiente local:
> `git clone https://github.com/FabsMS/ProjetoFinal-Modulo2-ADA`

2. Instale as dependências
> `npm instal`

3. Edite o arquivo **App.ts** com as solicitações desejadas

4. Execute o script a seguir para processar as solicitações
> `npx run start`

5. Os resultados das solicitações serão exibidos no console local

### Contribuindo 

Se você deseja contribuir para o desenvolvimento deste projeto, sinta-se à vontade para abrir problemas (issues) ou enviar pull requests.