// 1. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o
// filter

let NumberList: number[] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

let NewList = NumberList.filter((item) => {
  if (item % 2 !== 0) {
    return item;
  }
});
console.log("A nova lista com os números ímpares é: ");
console.log(NewList);

// 2. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce

let newReduce = NumberList.reduce((current, item) => {
  return current + item;
}, 0);

console.log("A soma do valor total é: " + newReduce);

// 3. Crie uma classe chamada Pessoa que contém os seguintes
// atributos: nome (string) e idade (number), que receba esses valores
// pelo construtor. Depois crie uma lista de Pessoa com algumas
// idades diferentes e por fim crie uma nova lista a partir dessa lista
// inicial utilizando o filter somente com as pessoas que possuem a
// idade menor que 23.

export class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

let ListaPessoas: Pessoa[] = [
  new Pessoa("João", 30),
  new Pessoa("Maria", 31),
  new Pessoa("José", 45),
  new Pessoa("Joana", 22),
  new Pessoa("Pedro", 19),
];

let menor23 = ListaPessoas.filter((item) => {
  if (item.idade < 23) {
    return true;
  }
  return false;
});

console.log("Pessoas com menos de 23 anos são: ");
console.log(menor23);

// 4. Utilizando a lista de Pessoa criada na atividade 3, filtre somente as
// pessoas que possuem a idade menor que 30 e calcule a média das
// idades das pessoas filtradas utilizando o reduce..

let menor30 = ListaPessoas.filter((item) => {
  if (item.idade < 30) {
    return true;
  }
  return false;
});
console.log("As pessoas com menos de 30 anos são: ");
console.log(menor30);

let soma = menor30.reduce((current, item) => {
  return current + item.idade;
}, 0);

console.log("A soma das idades com menos de 30: ");
console.log(soma);
let media = soma / menor30.length;

console.log("A média de idade entre as pessoas com menos de 30 é: ");
console.log(media);

// 5. Utilizando a classe Pessoa da atividade 3, adicione mais um atributo
// chamado salario (number), faça receber esse valor pelo construtor.
// Depois filtre todas as pessoas que possuem o salário menor que
// R$1027,00 e crie uma nova lista somente com o nome e a idade da
// pessoa.

export class NovaPessoa extends Pessoa {
  push(ListaNomeIdade: any[]): any[] {
    throw new Error("Method not implemented.");
  }
  salario: number;

  constructor(nome: string, idade: number, salario: number) {
    super(nome, idade);
    this.salario = salario;
  }
}

let NovaListaPessoas: NovaPessoa[] = [
  new NovaPessoa("João", 30, 1500),
  new NovaPessoa("Maria", 31, 1900),
  new NovaPessoa("José", 45, 2000),
  new NovaPessoa("Joana", 22, 1000),
  new NovaPessoa("Pedro", 19, 890),
];

let menor1027 = NovaListaPessoas.filter((item) => {
  if (item.salario < 1027) {
    return true;
  }
  return false;
});

console.log("As pessoas com salário inferior a R$1027,00 são: ");
console.log(menor1027);

let novaListagem = menor1027.map((pessoa) => {
  return {
    nome: pessoa.nome,
    idade: pessoa.idade,
  };
});

console.log("Nova lista: ");
console.log(novaListagem);

////////////////////////////////////////////////////////////////
//Ex. 6.

export class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: "Aprovado" | "Reprovado";

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  atribuirResposta(gabarito: string[]) {
    const resposta = ["A", "B", "C"];
    const respostasAluno = [];
    this.nota = 0;
    for (let item of gabarito) {
      let resultado = Math.floor(Math.random() * 10) % 3;
      respostasAluno.push(resposta[resultado]);
      if (item === resposta[resultado]) {
        this.nota += 1;
      }
    }
    this.atribuirSatus();

    console.log(`Aluno: ${this.nome}`);
    console.log(`Gabarito:  ${gabarito}`);
    console.log(`Respostas: ${respostasAluno}`);
    console.log(`Nota: ${this.nota}`);
    console.log(`Status: ${this.status}\n\n`);
  }

  atribuirSatus() {
    this.status = this.nota! >= 6 ? "Aprovado" : "Reprovado";
  }
}

let minhaLista: Aluno[] = [
  new Aluno("João", 22),
  new Aluno("Maria", 35),
  new Aluno("Joana", 22),
  new Aluno("Juliana", 28),
  new Aluno("Pedro", 15),
  new Aluno("Carlos", 19),
  new Aluno("Rebecca", 18),
];

let Gabarito: string[] = ["A", "B", "A", "A", "C", "B", "C", "A", "B", "C"];

minhaLista.map((aluno) => aluno.atribuirResposta(Gabarito));

const aprovados = minhaLista.filter((aluno) => aluno.status === "Aprovado");
console.log("Alunos Aprovados");
console.log(aprovados);

const reprovados = minhaLista.filter((aluno) => aluno.status === "Reprovado");
console.log("Alunos Reprovados");
console.log(reprovados);

const somaNotas = minhaLista.reduce((current, aluno) => {
  return current + aluno.nota!;
}, 0);

let mediaTurma = somaNotas / minhaLista.length;
console.log("A média da turma é: " + mediaTurma.toFixed(2));

let melhorAluno = minhaLista.reduce((valorInicial, valorAtual) => {
  if (valorInicial.nota! > valorAtual.nota!) {
    return valorInicial;
  } else {
    return valorAtual;
  }
});

console.log(`O Melhor aluno(a) foi: \n\n Nome: ${melhorAluno.nome} - Nota: ${melhorAluno.nota}\n`);

let piorAluno = minhaLista.reduce((valorInicial, valorAtual) => {
  if (valorInicial.nota! > valorAtual.nota!) {
    return valorAtual;
  } else {
    return valorInicial;
  }
});

console.log(`O pior aluno(a) foi: \n\n Nome: ${piorAluno.nome} - Nota: ${piorAluno.nota}\n`);
