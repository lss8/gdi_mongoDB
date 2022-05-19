//FIND e PRETTY: retorna todos os alunos no banco de dados de forma elegante
db.alunos.find().pretty();

//FINDONE: retorna um funcionario que eh professor
db.funcionarios.findOne({cargo: "professor"});

//COUNT: retorna a quantidade de aulas oferecidas pela academia 
db.aulas.count();

//SET e UPDATE: adequando a modalidade de yoga
db.aulas.updateOne({descricao: "yoga"}, {$set:{"descricao": "hatha yoga"}});

//SORT: ordenando os alunos por ordem alfabetica. Mostrando antes e depois
db.alunos.find().pretty();
db.alunos.find().sort({nome: 1}).pretty();

//RENAMECOLLECTION: mudando o nome da coleção alunos para clientes 
db.alunos.renameCollection("clientes");

//GROUP, SUM e AGGREGATE: agrupa todos os funcionarios e calcula a soma de seus salarios
db.funcionarios.aggregate([
    {
        $group: {
            _id: "$cargo",
            total_wins: {
                $sum: "$salario"
            }
        }
    }
]);

//GTE: retorna todas as aulas com 7 ou mais alunos
db.aulas.find({qtd_alunos: {$gte: 7}}).pretty();

//TEXT e SEARCH: lista todos os clientes que possuem email do google
db.clientes.createIndex({email: "text"});
db.clientes.find({$text: {$search: "\"gmail\""}}).pretty();

//UNSET e EXISTS: hatha yoga se tornou uma aula gratis entao vamos tirar o seu valor e lista-la novamente
db.aulas.updateOne({name: "hatha yoga"}, {$unset: {"preco": null}});
db.aulas.find({preco: {$exists: false}}).pretty();

//SIZE: lista as aulas com 5 alunos
db.aulas.find({alunos:{$size: 5}}).pretty();

//AVG: retorna a media do valor das aulas
db.aulas.aggregate([
    {
        $group:
            {
                _id: "$descricao",
                preco_medio: {$avg: "$preco"}
            }
    }
]);

//MAX: retorna a aula com o maior preco
db.aulas.aggregate([
     {
        $group:
            {
                _id: "$descricao",
                mais_caro: {$max: "$preco"},
            }
    }
]);

//MATCH: retorna todos funcionarios que sao instrutores
db.funcionarios.aggregate({$match:{cargo: "instrutor"}}).pretty();

//PROJECT e COND: classificando as aulas em populares (mais de 5 alunos) e impopulares (menor ou igual a 5 alunos)
db.aulas.aggregate([
    {    
        $project:
         {
            _id: 0,
            name: 1,
            qtd_alunos:
            {
                $cond: {if: {$gte: ["$qtd_alunos", 6]}, then: "Popular", else: "Impopular"}
            } 
         }
    }
]);

//ALL: lista as aulas que possuem os clientes citados
db.aulas.find({clientes: {$all: [
    db.clientes.findOne({nome: "guilherme"})._id,
    db.clientes.findOne({nome: "giovana"})._id,
]}}).pretty();

//LOOKUP e LIMIT: lista 1 funcionario e quais outros funcionarios tem o mesmo salario
db.funcionarios.aggregate([
    {
        $lookup: {
            from: "funcionarios",
            localField: "salario",
            foreignField: "salario",
            as: "Funcionarios com o mesmo salario"
        }
    },
    {$limit: 1}
]).pretty();

//ADDTOSET e EACH: adicionando alunos na aula de hatha yoga
db.aulas.updateMany({descricao: "hatha yoga"}, {$addToSet:
    {
        clientes:
        {
            $each:
            [
                db.clientes.findOne({nome: "thais"})._id,
                db.clientes.findOne({nome: "thayna"})._id,
            ]
        }
    }   
});

//WHERE e FUNCTION: lista a aula de nome hatha yoga
db.aulas.find({$where: function() {
        return (this.descricao == "hatha yoga")}
    }
).pretty();

//MAPREDUCE: criando duas funções, uma map e uma reduce, para listar as aulas e seus respectivos precos 
var mapFunction2 = function() {
    emit (this.descricao, this.preco);
};
var reduceFunction2 = function(descricao, preco) {
    return Array.sum(preco);
};
db.aulas.mapReduce (
    mapFunction2,
    reduceFunction2,
    { out: "mapReduce_ex"}
);
db.mapReduce_ex.find().sort({_id: 1});

//FILTER: lista os ultimos clientes matriculados numa aula
db.aulas.aggregate([
    {
       $project: {
           _id: 0,
           name: 1,
           clientes: {
             $filter: {
                input: "$clientes",
                as: "ultimos_clientes",
                cond: { $gte: ["$$clientes.senha_id", 10]}
            }
          }
       }
    }
 ]);

 //SAVE: salvando um novo cliente
db.clientes.save({
    nome: "pablo",
    cpf: "333000000-33",
    data_nascimento: "13/02/1989",
    email: "pablo@cin.ufpe.br",
    senha_id: "0021"
 });
