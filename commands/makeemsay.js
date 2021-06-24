require('dotenv').config();
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'trump',
    aliases: ['say'],
    description: 'captcha',
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
        try {
            const text = args.join(' ')
            const url = `https://api.no-api-key.com/api/v2/trump?message=`
            const encoded = url + encodeURIComponent(text);
            console.log(url)
            const embed = new MessageEmbed()
                .setImage(encoded)
            await message.channel.send(embed)
        } catch (e) {
            console.log(e)
        }
    }
}