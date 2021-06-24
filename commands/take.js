const profileModel = require("../models/profileSchema");
//10
module.exports = {
  name: "take",
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  description: "take a player some coins",
  async execute(client, message, args, Discord, cmd, profileData) {
    function checkrole(role) {
      return message.member.roles.cache.some(r => r.name === role);
    }
    if (checkrole(process.env.ADMIN_ROLE) != true) return message.channel.send(`Sorry only owners can run this command 😔`);
    if (!args.length) return message.channel.send("You need to mention a player to give them coins");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");

    try {
      const targetData = await profileModel.findOne({
        userID: target.id
      });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate({
        userID: target.id,
      }, {
        $inc: {
          coins: -amount,
        },
      });

      return message.channel.send(`hippity hoppity ${amount} coins are no longer your property`);
    } catch (err) {
      console.log(err);
    }
  },
};