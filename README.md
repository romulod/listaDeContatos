Esta aplicação é uma WEB API construida em node.js, express e MongoDB utilizando o
padrão de projeto padrão MVC.

# Faça Download da IDE MongoDB Compass Community para uma melhor visualização do banco de dados através do link  -> https://www.mongodb.com/download-center/community

# A aplicação aponta para o cloud do proprio mongodb, para utilizar a base criada previamente, é necessário que entre em contato com o desenvolvedor, informando o IP da máquina em que a aplicação será testada, para que o mesmo seja cadastrado na aplicação do cloud, entre tanto, caso você prefira criar a sua própria base de dados, basta se cadastrar no cloud da mongodb, segue o link => https://www.mongodb.com/cloud.

# Caso opte por criar um novo banco, pegue o link gerado pelo cloud do mongodb e substua pelo link que se encontra no arquivo app.js na linha 9.

Pacotes instalados
+Express;
+Nodemon;
+body-parser;
+mongoose 
+morgan;

::::Para reduzir o tempo de download, o projeto não possui a pasta "node_modules"::::
+ Acesse a pasta do projeto e execute os comandos a seguir;

      **Comandos a serem executados**

+ npm install                           # (lê todos os dados no arquivo "package.json") 
+ npm start                             # (inícia o sevidor)
+ node server.js                  # (caso o npm start não funcione corretamente)


--EndPoint---
******OBS:
*A api está programada para a exibição de 10 consultas por página, para alterar a página você precisa seguir o exemplo a seguir:
"localhost:3000/contatos/?page=2"

Para utilização do Postman:

GET:
Listar Contatos: /contatos
Listar por id: /id                      # (Os ids estão disponíveis no na consulta por todos os contatos)

POST:
Cadastra contato: /contatos

PUT:
Alterar contato: /id

DELETE:
Remover contato: /id

Exemplos para utilização de pronpt command:

GET:
curl --location --request GET 'http://localhost:3000/contatos'

GET('ID'):
curl --location --request GET 'http://localhost:3000/contatos/5bw22'

POST:
curl --location --request POST 'localhost:3000/contatos/' \
--header 'Content-Type: application/json' \
--data-raw '{
   "nome": "Fulano de Tal",
   "tipo": "celula",
   "telefone": "00 000000000"
}'

PUT:
curl --location --request PUT 'localhost:3000/contatos/5dfcffe80deaad3710ef9ae3' \
--header 'Content-Type: application/json' \
--data-raw '[{
    "nome": "Aroldo",
    "tipo": "fixo",
    "telefone": "21 978694002",
    "descricao": "Encontrei na rua",
    "observacao": "Antigo"
}]'

DELETE:
curl --location --request DELETE 'http://localhost:3000/contatos/5dfd28931cab663e80b19f21'


**Recomendo o Postman para melhor consumo da api**

