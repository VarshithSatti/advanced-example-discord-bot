module.exports = {
    name: 'clear',
    description: 'clears messages',
    execute(client, message, args, Discord){
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
            if(returnedobj == undefined) {
                return "asd";
            }
            return returnedobj.username;
        }
        if(!args[0]) return send("please enter the amount of messages you want to clear");
        if(isNaN(args[0])) return send("please enter a real number!");
        
        if(args[0] < 1) return send("at least delete one message");
        if(args[0] > 100) return send("only until 100");
        async function m() {
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        })}
        m();
    }
}