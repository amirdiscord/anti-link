const Discord = require('discord.js') // discord.js
const client = new Discord.Client(); // discord client
const antiLink = require("anti-link-discord"); // module

// console log when ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// Module Setup
client.on('message', async message => {
    antiLink(client, message, {
        staffRole: "ROLEID", // staff/admin/mod role id (will ignore this role)
        warnMSG: `<@${message.author.id}> لینک نفرستید`, // warn message
    });
    client.on('message', async message => {

        if (message.content === '##join') {
            const connection = await message.member.voice.channel.join();

        }
    });
});

// Client Login
client.login('NjkxOTg3NTUyMTgxMTU3OTM4.Xnn9oA.xPv1z8H3NmcF6Ox6C5b3qj_wSoM')