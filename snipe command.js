client.snipe = new Map()

client.on("messageDelete", async(message,channel) => {
    if(message.author.bot) return;
    if(!message.guild) return;
    client.snipes.set(message.channel.id, {
    msg:message.content,
    user:message.author.tag,
    profilephoto:message.author.displayAvatarURL(),
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

async(client,message)=> {
    let snip = client.snipe.get(message.channel.id)

    if(!snip) return message.channel.send("There is nothing to snipe.")

    let embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setAuthor(snip.user,snipe.profilephoto)
    .setDescription(`${snip.msg}`)
    if(snip.image) embed.setImage(snip.image)

    if(message.content.startsWith('prefix!snipe')) {
    message.channel.send(embed)
  }
}
