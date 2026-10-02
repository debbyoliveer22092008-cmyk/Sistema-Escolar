/* Aqui temos a nossa classe pai(pessoa) */

class Pessoa {
    #nome;
    #email;

    constructor(nome, cpf, dataNascimento, email, telefone, turno) {

        this.#nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.#email = email;
        this.telefone = telefone;
        this.turno = turno;

    }

     getNome(){
        return this.#nome;
    }
   
    setNome(novoNome){
        if(novoNome.length >= 3){
            this.#nome = novoNome;
        }
    }

    apresentar() {

        console.log(`Olá, meu nome é ${this.#nome}`);

    }

    getEmail(){
        return this.#email;

    }

    setEmail(novoEmail){
        if(novoEmail.include("@")) {
            this.#email = novoEmail;
        }
    }

}


/* Aqui temos a classe aluno */

class Aluno extends Pessoa {

    constructor(
        nome,
        cpf,
        dataNascimento,
        matricula,
        email,
        telefone,
        turno,
        curso
    ) {

        super(
            nome,
            cpf,
            dataNascimento,
            email,
            telefone,
            turno
        );

        this.matricula = matricula;

        this.curso = curso;

    }


    estudar() {

        console.log(`${this.nome} está estudando.`);

    }

}


/*Criando a classe profº */

class Professor extends Pessoa {

    constructor(
        nome,
        cpf,
        dataNascimento,
        materia,
        email,
        telefone,
        turno
    ) {

        super(
            nome,
            cpf,
            dataNascimento,
            email,
            telefone,
            turno
        );

        this.materia = materia;

    }


    dar_aula() {

        console.log(
            `${this.nome} está ensinando ${this.materia}.`
        );

    }

}


/* Criando a classe sistema*/

class Sistema {

    constructor() {

        this.alunos = [];

        this.professores = [];

    }


    adicionar_Aluno(aluno) {

        this.alunos.push(aluno);

    }


    adicionar_Professor(professor) {

        this.professores.push(professor);

    }


    listar_Alunos() {

        console.log("Lista de alunos:");

        for (
            let i = 0;
            i < this.alunos.length;
            i++
        ) {

            console.log(
                "Nome: " + this.alunos[i].nome +
                " | Data de nascimento: " +
                this.alunos[i].dataNascimento
            );

        }

    }


    listar_Professor() {

        console.log("Lista de professores:");

        for (
            let i = 0;
            i < this.professores.length;
            i++
        ) {

            console.log(
                "Nome: " + this.professores[i].nome +
                " | Data de nascimento: " +
                this.professores[i].dataNascimento
            );

        }

    }


    BuscarAluno(nome) {

        for (
            let i = 0;
            i < this.alunos.length;
            i++
        ) {

            if (this.alunos[i].nome === nome) {

                console.log(
                    "Aluno encontrado: " + nome
                );

                return;

            }

        }

        console.log("Aluno não encontrado.");

    }


    BuscarProfessor(nome) {

        for (
            let i = 0;
            i < this.professores.length;
            i++
        ) {

            if (this.professores[i].nome === nome) {

                console.log(
                    "Professor encontrado: " + nome
                );

                return;

            }

        }

        console.log("Professor não encontrado.");

    }


    removerAlunos(nome) {

        for (
            let i = 0;
            i < this.alunos.length;
            i++
        ) {

            if (this.alunos[i].nome === nome) {

                this.alunos.splice(i, 1);

                console.log(
                    "Aluno removido: " + nome
                );

                return;

            }

        }

        console.log("Aluno não encontrado.");

    }


    removerProfessor(nome) {

        for (
            let i = 0;
            i < this.professores.length;
            i++
        ) {

            if (this.professores[i].nome === nome) {

                this.professores.splice(i, 1);

                console.log(
                    "Professor removido: " + nome
                );

                return;

            }

        }

        console.log("Professor não encontrado.");

    }

}

function ListarAlunos(){
    let lista = document.getElementById("listaAlunos");
    lista.innerHTML = ""; for (let i = 0; i < sistema.alunos.length; i++){
        lista.innerHTML += `
        <div class="aluno-card">
            <h3>${sistema.alunos[i].getNome()}</h3>
           
            <p>
            Matricula:
            ${sistema.alunos[i].matricula}
            </p>

            <p>
            Curso:
            ${sistema.alunos[i].curso}
            </p>
            <p>
            Turno:
            ${sistema.alunos[i].turno}
            </p>
           
        </div>
        `;
       
    }
    }


/* Função que cadastrar o nosso aluno */

function CadastrarAluno() {

    let nome =
        document.getElementById("nome").value;

    let cpf =
        document.getElementById("CPF").value;

    let dataNascimento =
        document.getElementById("dataNascimento").value;

    let matricula =
        document.getElementById("matricula").value;

    let email =
        document.getElementById("email").value;

    let telefone =
        document.getElementById("telefone").value;

    let turno =
        document.getElementById("turno").value;

    let curso =
        document.getElementById("curso").value;


     if (nome == "") {
        alert("Digite o nome do aluno.");
        return;
    }

    if (cpf == "") {
        alert("Digite o CPF do aluno.");
        return;
    }

    if (dataNascimento == "") {
        alert("Digite a data de nascimento.");
        return;
    }

    if (matricula == "") {
        alert("Digite a matrícula do aluno.");
        return;
    }

    if (email == "") {
        alert("Digite o e-mail do aluno.");
        return;
    }

    if (telefone == "") {
        alert("Digite o telefone do aluno.");
        return;
    }

    if (turno == "") {
        alert("Selecione o turno do aluno.");
        return;
    }

    if (curso == "") {
        alert("Selecione o curso do aluno.");
        return;
    }



    
    let aluno = new Aluno(
        nome,
        cpf,
        dataNascimento,
        matricula,
        email,
        telefone,
        turno,
        curso
    );

    sistema.adicionar_Aluno(aluno);
    ListarAlunos();
    console.log(sistema.alunos);
    alert("Aluno cadastrado com sucesso!");
}

function ListarProfessores(){
    let lista = document.getElementById("listaProfessores");
    lista.innerHTML = ""; for (let i = 0; i < sistema.professores.length; i++){
        lista.innerHTML += `
        <div class="professor-card">
            <h3>${sistema.professores[i].nome}</h3>
           
            <p>
            Matéria:
            ${sistema.professores[i].materia}
            </p>
            <p>
            Turno:
            ${sistema.professores[i].turno}
            </p>
           
        </div>
        `;
       
    }
    }

/* Função que cadastra o professor */

function CadastrarProfessor() {

    let nome =
        document.getElementById("nome").value;

    let cpf =
        document.getElementById("CPF").value;

    let dataNascimento =
        document.getElementById("dataNascimento").value;

    let email =
        document.getElementById("email").value;

    let telefone =
        document.getElementById("telefone").value;

    let turno =
        document.getElementById("turno").value;

    let materia =
        document.getElementById("materia").value;


    if (nome == "") {
        alert("Digite o nome do professor.");
        return;
    }

    if (cpf == "") {
        alert("Digite o CPF do professor.");
        return;
    }

    if (dataNascimento == "") {
        alert("Digite a data de nascimento.");
        return;
    }

    if (email == "") {
        alert("Digite o e-mail do professor.");
        return;
    }

    if (telefone == "") {
        alert("Digite o telefone do professor.");
        return;
    }

    if (turno == "") {
        alert("Selecione o turno do professor.");
        return;
    }

    if (materia == "") {
        alert("Digite a matéria do professor.");
        return;
    }



    let professor = new Professor(
        nome,
        cpf,
        dataNascimento,
        materia,
        email,
        telefone,
        turno
    );
    sistema.adicionar_Professor(professor);
    ListarProfessores();
    console.log(sistema.professores);
    alert("Professor cadastrado com sucesso!");

}


/* Objeto criado a partir do sistema*/

const sistema = new Sistema();