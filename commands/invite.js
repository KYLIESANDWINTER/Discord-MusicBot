const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Thanks For Choosing Me",
        "https://cdn.discordapp.com/emojis/846803912840314922.gif?size=2048"
      )
      .setColor("FF98E0")
      .setDescription(
        `• [Click Here To Invite Me](https://discord.com/api/oauth2/authorize?client_id=843749085457940510&permissions=8&scope=bot)
• [Click Here To Join My Support Server](https://discord.gg/3MVMpZDmnE)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, interaction, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Thanks For Choosing Me",
        "https://cdn.discordapp.com/emojis/846803912840314922.gif?size=2048"
      )
      .setColor("FF98E0")
      .setDescription(
        `• [Click Here To Invite Me](https://discord.com/api/oauth2/authorize?client_id=843749085457940510&permissions=8&scope=bot)
• [Click Here To Join My Support Server](https://discord.gg/3MVMpZDmnE)`
      );
    message.channel.send(embed);
  },
  },
};
