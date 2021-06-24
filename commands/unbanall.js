require('dotenv').config();
module.exports = {
    name: 'unbana',
    permissions: [],
    description: 'creates a suggestion!',
    execute(client, message, args, discord, cmd) {
        return message.channel.send("no");
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) {message.reply("There are no banned users."); throw "No members to unban."};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);
            });
        }).then(() => message.reply("Unbanned all users.")).catch(e => console.log(e));
    }
}