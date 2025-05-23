// 1.1. Sistema de Atendimento de Hamburgueria ( if else )
// 📌 Descrição:
// O sistema recebe o tamanho do lanche escolhido pelo cliente (pequeno, médio ou grande).
// Se for pequeno, informa que demora 5 minutos para ficar pronto.
// Se for médio, informa que demora 10 minutos.
// Se for grande, informa que demora 15 minutos.
// Se o tamanho for inválido, exibe uma mensagem de erro.

let tamanho = 'pequeno'
let novoTamanho = tamanho.toLocaleLowerCase()
if (novoTamanho == 'pequeno') {
    console.log('Seu lanche demorará 5 minutos para ficar pronto!✨');
}
else if (novoTamanho == 'medio') {
    console.log("Seu lanche demorará 10 minutos para ficar pronto!✨");
}
else if (novoTamanho == 'grande'){
    console.log("Seu lanche demorará 15 minutos para ficar pronto!✨");
}



// 1.2. Sistema de Atendimento Telefônico ( if else ) 
// 📌 Descrição:
// O cliente liga e o sistema verifica a prioridade do atendimento.
// Se for um caso urgente, direciona para um atendente imediatamente.
// Se for um caso comum, coloca o cliente na fila de espera.
// Se o cliente deseja informações gerais, redireciona para um menu automático.
// Se a opção for inválida, informa que não pode processar a solicitação.


 // 2.1. Sistema de Pedidos de Pizza ( switch )
// 📌 Descrição:
// O sistema recebe o sabor da pizza escolhido pelo cliente.
// Se o cliente escolher Calabresa, o sistema informa que custa R$ 30,00.
// Se for Mussarela, informa que custa R$ 28,00.
// Se for Frango com Catupiry, informa que custa R$ 35,00.
// Se o sabor não estiver no menu, exibe uma mensagem de erro.




 // 2.2. Sistema de Suporte Técnico ( switch )
// 📌 Descrição:
// O sistema recebe um código de erro relatado pelo cliente.
// Se o código for E101, informa que há um problema na conexão de internet.
// Se for E202, indica que há uma falha no servidor.
// Se for E303, informa que há um erro no login do sistema.
// Se o código não for reconhecido, exibe a mensagem "Erro desconhecido, entre em contato com o suporte".



//Dev Web: // 3.1. Sistema de Atendimento de Consultoria ( array )
// 📌 Descrição:
// O sistema contém um array de serviços disponíveis (consultoria financeira, empresarial e de marketing).
// O cliente escolhe um serviço, e o sistema executa a função correspondente.
// Se escolher consultoria financeira, exibe um plano de orçamento personalizado.
// Se escolher consultoria empresarial, oferece dicas de gestão.
// Se escolher consultoria de marketing, recomenda estratégias para divulgação.
// Se o serviço não for encontrado, informa que não há disponibilidade.


//Dev Web: // 3.2. Sistema de atendimento de escola de música ( array )
//📌 Descrição:
// O sistema contém um array de instrumentos musicais (violão, piano, bateria).
// O cliente escolhe um instrumento, e o sistema verifica a disponibilidade.
// Se o cliente escolher violão, informa que há aulas disponíveis.
// Se escolher piano, informa que há aulas disponíveis.
// Se escolher bateria, informa que há aulas disponíveis.
// Se o instrumento não estiver disponível, informa que não há aulas disponíveis.