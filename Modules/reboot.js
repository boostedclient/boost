exports.run = async (xclient, obj, args) => {
    await obj.reply("Rebooting...");
    process.exit(1);
};

exports.conf = {
    acl: 10,
    enabled: true,
    imx: false,
    tmq: true
};
