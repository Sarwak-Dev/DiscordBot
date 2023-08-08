// Requerimientos
const Discord = require('discord.js');

// Definir Cliente
const Client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.DirectMessages,
        Discord.IntentsBitField.Flags.GuildMembers
    ]
});

const config = require('../config.json');

// Contenido
Client.on('Ready', async ( client ) => {
    console.log('Estoy Listo!')
});

// Conectar

 Client.login('ODM5NDkyMzcxMTkxOTU1NTI4.GrTkvW.OD_d0n3H5wtkdhUSh0eimW8QhiyVb2RfAfDiUY');