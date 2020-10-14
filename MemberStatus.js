 const members = message.guild.members.cache.array();
    const online = members.filter((m) => m.presence.status === 'online').length;
    const offline =  members.filter((m) => m.presence.status === 'offline').length;
    const dnd =  members.filter((m) => m.presence.status === 'dnd').length;
    const afk =  members.filter((m) => m.presence.status === 'idle').length;
    const embed = new MessageEmbed()
      .setTitle(`Total Members: ${message.guild.members.cache.size}`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField(`Online`, `${emojis.online} \`${online}\``)
      .addField(`Busy`, `${emojis.dnd}  \`${dnd}\``)
      .addField(`AFK`, ` ${emojis.idle}  \`${afk}\``)
      .addField(`Offline`, ` ${emojis.offline} \`${offline}\``)
