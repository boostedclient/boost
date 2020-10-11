exports.run = async (client, obj, args) => {
    await obj.reply("rebooting...");
    process.exit(1);
};

exports.conf = {
    acl: 4,
    enabled: true,
    imx: false
};
