const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SayembedCommand extends BaseCommand {
  constructor() {
    super('sayembed', 'general', []);
  }

  run(client, message, args) {

    
    const embed = new Discord.MessageEmbed()
      .setColor('ORANGE')
      .setTitle('HerraduraRP:')
      .setDescription(args.join(' '))
      
    
      message.channel.send(embed);



  }
}