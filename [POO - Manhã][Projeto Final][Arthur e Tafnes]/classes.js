class Tecnico{
    constructor(id, nome, telefone, cpf, endereco, email, senha){
        this.id = id;
        this.nome = nome;  
        this.telefone = telefone;
        this.cpf = cpf;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha; 
    } 
}
class Cliente{
    constructor(id, nome, email, senha){
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
    }
}

class Agendamento{
    constructor(id, clienteID, dataHora){
        this.id = id;
        this.clienteID = clienteID;
        this.dataHora = dataHora;
    }
}

class Localizacoes{
    constructor(id, clienteID, cep, bairro){
        this.id = id;
        this.clienteID = clienteID;
        this.cep = cep;
        this.bairro = bairro;


    }
}