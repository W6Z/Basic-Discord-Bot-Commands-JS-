client.on('guildMemberAdd', member => {
    let whitelisted = ["155149108183695360", "159985870458322944"] // Dyno and MEE6
    if (member.user.bot) {
        if (whitelisted.includes(member.user.id)) return;
        member.ban({
                days: 7,
                reason: 'wuds antinuke xd LOL'
            })
            .then(console.log)
            .catch(console.error);
    }
});
