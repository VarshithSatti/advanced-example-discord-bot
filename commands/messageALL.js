module.exports = {
    name: 'msg-all',
    description: 'this sends an image to a discord text channel',
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

        var msgToSend = args.join('');
        message.guild.members.cache.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) member.send(msgToSend);
        });
    }
}