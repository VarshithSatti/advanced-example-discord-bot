module.exports = {
    name: 'youtube',
    description: 'this is to get my yt channel name',
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
        send(`${message.author}` + " here is the yt: https://www.youtube.com/channel/UC6FTMFf_1vMdbJK9nNY6HaA");
    }
}