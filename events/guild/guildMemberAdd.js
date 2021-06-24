const profileModel = require("../../models/profileSchema");

module.exports = async (Discord, client, member) => {
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0,
  });
  member.send("Thanks for joining this server if you ever get kicked or if the server gets raided here is the invite link to join the server back: https://discord.gg/X4dUAs4YXQ. IF THE SERVER GETS RAIDED JUST WAIT 2 DAYS AND TRY TO JOIN BACK!! :)");
  profile.save();
};