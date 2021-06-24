const { GuildEmojiRoleManager } = require('discord.js');
var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'this sends an image to a discord text channel',
    async execute(client, message, args, Discord){
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

        var image_query = args.join('');
        if(image_query.includes("bitch") || image_query.includes("bitch") || image_query.includes("bitch"))
        if(!image_query) return send("please enter an image name");

        const image_results = await google.scrape(image_query, 1);
        send(image_results[0].url);
    }
}