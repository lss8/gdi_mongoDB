db.dropDatabase();

//criando coleção de alunos
db.createCollection("alunos");

//inserindo alunos na coleção
db.alunos.insertMany([

{
    nome: "thais",
    cpf: "100000000-11",
    data_nascimento: "16/07/2001",
    email: "thais@gmail.com",
    senha_id: "0001"
},

{
    nome: "alexandra",
    cpf: "200000000-22",
    data_nascimento: "23/03/2001",
    email: "alexandra@cin.ufpe.br",
    senha_id: "0002"
},

{
    nome: "thayna",
    cpf: "300000000-33",
    data_nascimento: "03/09/2000",
    email: "thayna@gmail.com",
    senha_id: "0003"
},

{
    nome: "lucas",
    cpf: "400000000-44",
    data_nascimento: "13/11/1999",
    email: "lucas@cin.ufpe.br",
    senha_id: "0004"
},

{
    nome: "wilton",
    cpf: "500000000-55",
    data_nascimento: "21/04/1999",
    email: "wilton@gmail.com",
    senha_id: "0005"
},

{
    nome: "guilherme",
    cpf: "600000000-66",
    data_nascimento: "22/08/1995",
    email: "guilherme@gmail.com",
    senha_id: "0006"
},

{
    nome: "isabela",
    cpf: "700000000-77",
    data_nascimento: "01/12/2000",
    email: "isabela@hotmail.com",
    senha_id: "0007"
},

{
    nome: "renato",
    cpf: "800000000-88",
    data_nascimento: "09/04/1999",
    email: "renato@gmail.com",
    senha_id: "0008"
},

{
    nome: "gustavo",
    cpf: "900000000-99",
    data_nascimento: "19/09/1968",
    email: "gustavo@gmail.com",
    senha_id: "0009"
},

{
    nome: "debora",
    cpf: "110000000-11",
    data_nascimento: "25/07/1971",
    email: "debora@gmail.com",
    senha_id: "0010"
},

{
    nome: "nathalia",
    cpf: "220000000-22",
    data_nascimento: "07/05/2003",
    email: "nathalia@gmail.com",
    senha_id: "0011"
},

{
    nome: "theo",
    cpf: "330000000-33",
    data_nascimento: "18/08/1990",
    email: "theo@gmail.com",
    senha_id: "0012"
},

{
    nome: "miguel",
    cpf: "440000000-44",
    data_nascimento: "06/10/1965",
    email: "miguel@hotmail.com",
    senha_id: "0013"
},

{
    nome: "carolina",
    cpf: "550000000-55",
    data_nascimento: "22/02/1973",
    email: "carolina@gmail.com",
    senha_id: "0014"
},

{
    nome: "valentina",
    cpf: "660000000-66",
    data_nascimento: "15/01/1968",
    email: "valentina@gmail.com",
    senha_id: "0015"
},

{
    nome: "giovana",
    cpf: "770000000-77",
    data_nascimento: "06/11/1995",
    email: "giovana@gmail.com",
    senha_id: "0016"
},

{
    nome: "sophia",
    cpf: "880000000-88",
    data_nascimento: "19/05/2005",
    email: "sophia@cin.ufpe.br",
    senha_id: "0017"
},

{
    nome: "arthur",
    cpf: "990000000-99",
    data_nascimento: "07/06/2006",
    email: "arthur@gmail.com",
    senha_id: "0018"
},

{
    nome: "bernardo",
    cpf: "111000000-11",
    data_nascimento: "13/12/2002",
    email: "bernardo@gmail.com",
    senha_id: "0019"
},

{
    nome: "samuel",
    cpf: "222000000-22",
    data_nascimento: "02/11/1997",
    email: "samuel@hotmail.com",
    senha_id: "0020"
}

]);

//criando coleção de funcionarios
db.createCollection("funcionarios");

//inserindo funcionarios na coleção (instrutores+alunos)
db.funcionarios.insertMany([

{
    nome: "marcelo",
    cargo: "instrutor",
    cpf: "100000000-00",
    salario: "2000",
    alunos_responsavel: [
        db.alunos.findOne({nome: "thais"})._id,
        db.alunos.findOne({nome: "alexandra"})._id,
        db.alunos.findOne({nome: "thayna"})._id,
        db.alunos.findOne({nome: "lucas"})._id
    ]
},

{
    nome: "bruna",
    cargo: "instrutor",
    cpf: "200000000-00",
    salario: "2000",
    alunos_responsavel: [
        db.alunos.findOne({nome: "wilton"})._id,
        db.alunos.findOne({nome: "guilherme"})._id,
        db.alunos.findOne({nome: "isabela"})._id,
        db.alunos.findOne({nome: "renato"})._id
    ]
},

{
    nome: "ricardo",
    cargo: "instrutor",
    cpf: "300000000-00",
    salario: "2000",
    alunos_responsavel: [
        db.alunos.findOne({nome: "gustavo"})._id,
        db.alunos.findOne({nome: "debora"})._id,
        db.alunos.findOne({nome: "nathalia"})._id,
        db.alunos.findOne({nome: "theo"})._id
    ]
},

{
    nome: "milena",
    cargo: "instrutor",
    cpf: "400000000-00",
    salario: "2000",
    alunos_responsavel: [
        db.alunos.findOne({nome: "miguel"})._id,
        db.alunos.findOne({nome: "carolina"})._id,
        db.alunos.findOne({nome: "valentina"})._id,
        db.alunos.findOne({nome: "giovana"})._id
    ]
},

{
    nome: "nicole",
    cargo: "instrutor",
    cpf: "500000000-00",
    salario: "2000",
    alunos_responsavel: [
        db.alunos.findOne({nome: "sophia"})._id,
        db.alunos.findOne({nome: "arthur"})._id,
        db.alunos.findOne({nome: "bernardo"})._id,
        db.alunos.findOne({nome: "samuel"})._id
    ]
},


]);

//inserindo funcionarios na coleção (professores)
db.funcionarios.insertMany([

{
    nome: "marina",
    cargo: "professor",
    cpf: "100000000-10",
    salario: "2500"
    
},

{
    nome: "junior",
    cargo: "professor",
    cpf: "200000000-20",
    salario: "2500"
    
},

{
    nome: "aisha",
    cargo: "professor",
    cpf: "300000000-30",
    salario: "2500"
    
},

{
    nome: "gabriel",
    cargo: "professor",
    cpf: "400000000-40",
    salario: "2500"
    
},

{
    nome: "marcio",
    cargo: "professor",
    cpf: "500000000-50",
    salario: "2500"
    
},

{
    nome: "jonathas",
    cargo: "professor",
    cpf: "600000000-60",
    salario: "2500"
    
},

{
    nome: "lucia",
    cargo: "professor",
    cpf: "700000000-70",
    salario: "2500"
    
}
    
]);

//criando coleção de aulas (+funcionarios professores)
db.createCollection("aulas");

//inserindo aulas na coleção
db.aulas.insertMany([

{
    descricao: "pilates",
    professor: db.funcionarios.findOne({nome: "marina"})._id,
    horario_inicio: "15:30",
    horario_fim: "16:30",
    qtd_alunos: "5",
    preco: "50",
    alunos: [
        db.alunos.findOne({nome: "thais"})._id,
        db.alunos.findOne({nome: "giovana"})._id,
        db.alunos.findOne({nome: "nathalia"})._id,
        db.alunos.findOne({nome: "debora"})._id,
        db.alunos.findOne({nome: "gustavo"})._id
    ]
},

{
    descricao: "fitdance",
    professor: db.funcionarios.findOne({nome: "junior"})._id,
    horario_inicio: "18:30",
    horario_fim: "19:30",
    qtd_alunos: "10",
    preco: "20",
    alunos: [
        db.alunos.findOne({nome: "thais"})._id,
        db.alunos.findOne({nome: "giovana"})._id,
        db.alunos.findOne({nome: "nathalia"})._id,
        db.alunos.findOne({nome: "isabela"})._id,
        db.alunos.findOne({nome: "guilherme"})._id,
        db.alunos.findOne({nome: "debora"})._id,
        db.alunos.findOne({nome: "gustavo"})._id,
        db.alunos.findOne({nome: "miguel"})._id,
        db.alunos.findOne({nome: "valentina"})._id,
        db.alunos.findOne({nome: "carolina"})._id
    ]
},

{
    descricao: "yoga",
    professor: db.funcionarios.findOne({nome: "aisha"})._id,
    horario_inicio: "7:00",
    horario_fim: "8:00",
    qtd_alunos: "7",
    preco: "15",
    alunos: [
        db.alunos.findOne({nome: "wilton"})._id,
        db.alunos.findOne({nome: "lucas"})._id,
        db.alunos.findOne({nome: "giovana"})._id,
        db.alunos.findOne({nome: "alexandra"})._id,
        db.alunos.findOne({nome: "debora"})._id,
        db.alunos.findOne({nome: "guilherme"})._id,
        db.alunos.findOne({nome: "valentina"})._id
    ]
},

{
    descricao: "spinning",
    professor: db.funcionarios.findOne({nome: "gabriel"})._id,
    horario_inicio: "06:00",
    horario_fim: "07:00",
    qtd_alunos: "10",
    preco: "25",
    alunos: [
        db.alunos.findOne({nome: "arthur"})._id,
        db.alunos.findOne({nome: "bernardo"})._id,
        db.alunos.findOne({nome: "nathalia"})._id,
        db.alunos.findOne({nome: "samuel"})._id,
        db.alunos.findOne({nome: "sophia"})._id,
        db.alunos.findOne({nome: "carolina"})._id,
        db.alunos.findOne({nome: "isabela"})._id,
        db.alunos.findOne({nome: "miguel"})._id,
        db.alunos.findOne({nome: "renato"})._id,
        db.alunos.findOne({nome: "thayna"})._id
    ]
},

{
    descricao: "jump",
    professor: db.funcionarios.findOne({nome: "marcio"})._id,
    horario_inicio: "16:30",
    horario_fim: "17:30",
    qtd_alunos: "7",
    preco: "10",
    alunos: [
        db.alunos.findOne({nome: "bernardo"})._id,
        db.alunos.findOne({nome: "sophia"})._id,
        db.alunos.findOne({nome: "isabela"})._id,
        db.alunos.findOne({nome: "lucas"})._id,
        db.alunos.findOne({nome: "samuel"})._id,
        db.alunos.findOne({nome: "arthur"})._id,
        db.alunos.findOne({nome: "nathalia"})._id
    ]
},

{
    descricao: "muay thai",
    professor: db.funcionarios.findOne({nome: "jonathas"})._id,
    horario_inicio: "17:30",
    horario_fim: "18:30",
    qtd_alunos: "5",
    preco: "40",
    alunos: [
        db.alunos.findOne({nome: "guilherme"})._id,
        db.alunos.findOne({nome: "gustavo"})._id,
        db.alunos.findOne({nome: "renato"})._id,
        db.alunos.findOne({nome: "thais"})._id,
        db.alunos.findOne({nome: "giovana"})._id
    ]
},

{
    descricao: "hidroginastica",
    professor: db.funcionarios.findOne({nome: "lucia"})._id,
    horario_inicio: "8:00",
    horario_fim: "9:00",
    qtd_alunos: "5",
    preco: "50",
    alunos: [
        db.alunos.findOne({nome: "theo"})._id,
        db.alunos.findOne({nome: "debora"})._id,
        db.alunos.findOne({nome: "carolina"})._id,
        db.alunos.findOne({nome: "thayna"})._id,
        db.alunos.findOne({nome: "arthur"})._id
    ]
}

]);
