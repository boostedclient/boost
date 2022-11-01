exports.run = (xclient, obj, args) => {
    message.chl.send(`You have access level: \`${xclient.getAccessLevel(message)}\``).catch(console.error);
};

exports.conf = {
    acl: 0,
    enabled: true,
    imx: true
};
