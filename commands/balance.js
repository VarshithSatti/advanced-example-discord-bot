module.exports = {
  name: "balance",
  aliases: ["bal", "bl"],
  description: "Check the user balance",
  execute(client, message, args, Discord, cmd, profileData) {
    message.channel.send(`Your wallet bal is ${profileData.coins}, you banks bal is ${profileData.bank}`);
  },
};