require('dotenv').config();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const {
    MessageEmbed
} = require('discord.js')
module.exports = {
    name: 'cat',
    description: '"cat"',
    aliases: [],
    async execute(client, message, args, Discord) {
        function send(a) {
            message.channel.send(a);
        }

        function checkrole(role) {
            return message.member.roles.cache.some(r => r.name === role);
        }

        function addRoleMSGS(ole) {
            //adds role to message sender
            let role = message.guild.roles.cache.find(r => r.name === ole);
            message.member.roles.add(role).catch(console.error);
        }

        function firstMentioned() {
            var returnedobj = message.mentions.users.first();
            if (returnedobj == undefined) {
                return "asd";
            }
            return returnedobj.username;
        }

        function httpGet(theUrl) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            xmlHttp.send(null);
            return xmlHttp.responseText;
        }
        var a = httpGet("https://no-api-key.com/api/v1/animals/cat");
        var b = JSON.parse(a);
        const embed = new MessageEmbed()
            .setImage(b.image);
        await message.channel.send(embed);
        await message.channel.send('fact: __' + b.fact + '__')
    }
}