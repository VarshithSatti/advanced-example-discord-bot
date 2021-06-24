const profileModel = require("../models/profileSchema");
module.exports = {
    name: "help",
    aliases: [],
    description: "give a list of all commands",
    async execute(client, message, args, Discord, cmd, profileData) {
        if (args[0] == 'currency') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#7300ff')
                .setTitle('COMMANDS HELP')
                .setAuthor('varram#0001')
                .addFields({
                    name: 'balance/bal/bl',
                    value: 'shows how much money you have'
                })
                .addFields({
                    name: 'give',
                    value: 'only people with the "botperms" role can use this. give money to someone'
                })
                .addFields({
                    name: 'deposit',
                    value: 'puts your money from wallet to bank'
                })
                .addFields({
                    name: 'withdraw',
                    value: 'gets money back from bank'
                }).setTimestamp()
                .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        } else if (args[0] == 'music') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#7300ff')
                .setTitle('COMMANDS HELP')
                .setAuthor('varram#0001')
                .addFields({
                    name: 'play/add',
                    value: 'MUSIC BOT. join voice channel and starts playing music'
                })
                .addFields({
                    name: 'leave',
                    value: 'MUSIC BOT COMMAND leave he voice channel'
                }).setTimestamp()
                .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        } else if (args[0] == "mod") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#7300ff')
                .setTitle('COMMANDS HELP')
                .setAuthor('varram#0001')
                .setDescription('__***only people with the role "botperms" can use these commands***__')
                .addFields({
                    name: 'ban',
                    value: 'bans a person only works with people who have OWNER ROLE contact bot dev to add more roles'
                })
                .addFields({
                    name: 'clear',
                    value: 'clears a specific amout of amount of messages'
                })
                .addFields({
                    name: 'kick',
                    value: 'kicks members. only works with people who have the "owner role" '
                }).setTimestamp()
                .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        } else if (args[0] == 'misc') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#7300ff')
                .setTitle('COMMANDS HELP')
                .setAuthor('varram#0001')
                .addFields({
                    name: 'help',
                    value: 'sends a list of all the commands'
                })
                .addFields({
                    name: 'minecraft',
                    value: 'checks staus of servers. and gives info'
                })
                .addFields({
                    name: 'nuke',
                    value: 'deletes all message in a server'
                })
                .addFields({
                    name: 'ping',
                    value: 'sends back pong'
                })
                .addFields({
                    name: 'suggestions',
                    value: 'sends suggestions to #suggestions channel'
                })
                .addFields({
                    name: 'youtube',
                    value: 'sends my yt. pls sub :)'
                })
                .setTimestamp()
                .setFooter('contact me for any errors on from my discord bot. varram#0001')
            message.channel.send(exampleEmbed);
        }
        else if (args[0] == 'image') {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#7300ff')
            .setTitle('COMMANDS HELP')
            .setAuthor('varram#0001')
            .addFields({
                name: '8ball',
                value: 'bacically magic 8 ball'
            })
            .addFields({
                name: 'image',
                value: 'send a image of anything you type.'
            })
            .addFields({
                name: 'doggo/dog',
                value: 'send an image of a epic doggo with a cool fact (i like dogs better than cats).'
            })
            .addFields({
                name: 'cat',
                value: 'send an image of a cat with a fact (i like dogs better than cats).'
            })
            .addFields({
                name: 'bear',
                value: 'send an image of a bear with a fact.'
            })
            .addFields({
                name: 'panda',
                value: 'send an image of a panda with a fact'
            })
            .addFields({
                name: 'meme',
                value: 'send an image of a meme. what do you expect HUH'
            })
            .setTimestamp()
            .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        }
        else if(args[0] == 'no-api-key') {
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#7300ff')
            .setTitle('COMMANDS HELP')
            .setAuthor('varram#0001')
            .addFields({
                name: 'doggo/dog',
                value: 'send an image of a epic doggo with a cool fact (i like dogs better than cats).'
            })
            .addFields({
                name: 'cat',
                value: 'send an image of a cat with a fact (i like dogs better than cats).'
            })
            .addFields({
                name: 'bear',
                value: 'send an image of a bear with a fact.'
            })
            .addFields({
                name: 'panda',
                value: 'send an image of a panda with a fact'
            })
            .addFields({
                name: 'meme',
                value: 'send an image of a meme. what do you expect HUH'
            })
            .addFields({
                name: 'quote',
                value: 'gives a epic quote from a person'
            })
            .addFields({
                name: 'flip',
                value: 'flips a coin for you'
            })
            .setTimestamp()
            .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        }
        else {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#7300ff')
                .setTitle('COMMANDS HELP')
                .setAuthor('varram#0001')
                .addFields({
                    name: '```!help currency```',
                    value: 'shows currency commands'
                })
                .addFields({
                    name: '```!help music```',
                    value: 'shows music commands'
                })
                .addFields({
                    name: '```!help mod```',
                    value: 'shows mod commands'
                })
                .addFields({
                    name: '```!help misc```',
                    value: 'shows misalanius commands'
                })
                .addFields({
                    name: '```!help no-api-key```',
                    value: 'a bunch of cool commands like trashing stuff and other stuff (my fav commands)'
                })
                .setTimestamp()
                .setFooter('contact me for any errors on from my discord bot. varram#0001');
            message.channel.send(exampleEmbed);
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#7300ff')
            .setTitle('COMMANDS HELP')
            .setAuthor('varram#0001')
            .setTimestamp()
            .setFooter('contact me for any errors on from my discord bot. varram#0001')
    }
};