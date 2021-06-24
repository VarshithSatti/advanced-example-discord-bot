module.exports = {
    name: 'roleall',
    description: 'this is a basic ping command',
    execute(client, message, args, Discord, cmd, profileData) {
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
        let role = message.guild.roles.cache.find(r => r.name == args[0]);

        // if role doesn't exist, notify the author of command that the role couldn't be found
        if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

        // find all guild members that aren't bots, and add the "Community" role to each
        message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.cache.addRole(role))

        // notify the author of the command that the role was successfully added to all members
        message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`)
    }
}