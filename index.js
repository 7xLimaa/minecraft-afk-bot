const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'lima.seedloaf.gg', // <-- Mude para o IP do seu Seedloaf (sem a porta)
        port: 25565,                             // <-- Se o Seedloaf te deu uma porta diferente (ex: 12345), mude aqui
        username: 'Bot_AFK_Seedloaf', 
        version: "26.2"              
    });

    bot.on('spawn', () => {
        console.log('Bot entrou no servidor com sucesso e está AFK!');
    });

    bot.on('end', () => {
        console.log('Bot foi desconectado. Tentando reconectar em 30 segundos...');
        setTimeout(createBot, 30000); 
    });

    bot.on('error', (err) => {
        console.log('Erro no bot:', err);
    });
}

createBot();
