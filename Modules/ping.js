exports.run = (client, obj, args) => {
    obj.chl.send("Pong!").catch(console.error);
};

exports.conf = {
    acl: 0,
    enabled: true,
    guildOnly: false
};
