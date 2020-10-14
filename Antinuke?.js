client.on('guildMemberAdd', member =>{
  if(member.user.bot) {
    member.ban({ days: 7, reason: 'wuds antinuke xd LOL' })
    .then(console.log)
    .catch(console.error);
  }
});
