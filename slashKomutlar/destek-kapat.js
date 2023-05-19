const { MessageEmbed,Client,CommandInteraction } = require("discord.js");
const model = require("../models/ticketSetup");
module.exports = {
    name:"destek-kapat",
    description: 'Destek Servisini Kapatırsınız',
    options:[],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        if(!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({content:"Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!",ephemeral:true});
        await model.deleteOne({GuildID:interaction.guild.id});
     const embed = new MessageEmbed().setDescription(`Sunucu için destek hizmeti kapatıldı`)
     interaction.reply({embeds:[embed]});
      
}
};