// ระบบนี้ เขียนโดย Fost ต้นฉบับโดย GOTji
const { MessageEmbed, Collection } = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports = {
  
        name: "airdrop",
        aliases: [],
        category: 'airdrop',
        description: 'ดรอบของ',
        usage: '<airdrop',
        accessableby: "everyone",
    run: async (bot, message, args) => {
//เองดูตรงนี้ ตอบบบบบบบบบบบบบบบบบบบบบบบบบบบบ
const random =[
  "Airdrop Meoawji 1",  //ดูดิเองไม่ได้ใส่ , มันจะ error D:
  "Airdrop Meoawji 2",
  "Airdrop Meoawji 3",
  "Airdrop Meoawji 4",
  "Airdrop Meoawji 5",
  "Airdrop Meoawji 6",
  "Airdrop Meoawji 7",
  "Airdrop Meoawji 8",
  "Airdrop Meoawji 9",
  "Airdrop Meoawji 10",
  "Airdrop Meoawji 11",
  "Airdrop Meoawji 12",
  "Airdrop Meoawji 13",
  "Airdrop Meoawji 14",
  "Airdrop Meoawji 15",
  "Airdrop Meoawji 16",
  "Airdrop Meoawji 17",
  "Airdrop Meoawji 18",
  "Airdrop Meoawji 19"
]
        let user = message.author;
        let author = await db.fetch(`airdrop.${user.id}.${message.guild.id}`)
        let minutes = db.get("cooldown.airdrop."+message.guild.id) || 30
        let timeout = minutes * 60 * 1000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You have already received airdrop.\n\nPlease pick up another airdrop in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
const results = random[Math.floor((Math.random()*random.length))]
const amount = Math.floor(Math.random() * 80) + 10 *2 +600;

          message.channel.send(new MessageEmbed()
          .setTitle("Airdrop has been released from the plane!!")
          .setDescription(`🚀 Your airdrop has the following rewards:\n**${results}\n and has a total value of more than ${amount} ฿**`)
          .setColor("RED"));

            db.add(`airdrops.${user.id}.${message.guild.id}`, 1)
            db.add(`money.${message.guild.id}.${user.id}`, amount)
            db.set(`airdrop.${user.id}.${message.guild.id}`, Date.now())
        };


    }
};

//ahhh some time
