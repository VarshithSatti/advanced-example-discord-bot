require('dotenv').config();
module.exports = {
    name: 'ban',
    description: 'bans mentioned user',
    execute(client, message, args, Discord) {
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
        const target = message.mentions.users.first();
        if(checkrole(process.env.ADMIN_ROLE) == false) return send("your dont have \"OWNER\" role")
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send(`You coudn't kick that banned!`);
        }
    }
}