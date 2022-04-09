//ATIVIDADE 1
//CRIA UMA FUNÇÃO QUE RETORNA O NOME DOS MEMBROS DE UM MAP QUE TEM O PAPEL 'ADMIN' NO SISTEMA.
//1. CRIE UMA FUNÇÃO getAdmins QUE RECEBE UM Map;
//2. CRIE UM MAP E POPULE-O COM NOME DE USUÁRIOS E SEUS PAPEIS NO SISTEMA (EX: 'LUIZ' => 'ADMIN');
//3. DENTRO DE getAdmin, UTILIZE O LOOP FOR...OF PARA RETORNAR UMA LISTA COM OS NOMES DOS USUÁRIOS QUE SÃO ADMINISTRADORES


function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

//criar o map
const usuarios = new Map();

usuarios.set('Joao', 'Admin');
usuarios.set('Maria', 'Admin');
usuarios.set('Jose', 'User');
usuarios.set('Paulo', 'User');

console.log(getAdmins(usuarios));