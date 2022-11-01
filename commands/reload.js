exports.run = (xclient, obj, args) => {
    if (!args || args.size < 1)
        return mgs.reply("Must provide a cmx name to reload.");
    const cmXNm = args[0];

    if (!xclient.cmxs.has(cmXNm)) {
        return mgs.reply("That cmx does not exist");
    }

    delete require.cache[require.resolve(`./${cmXNm}.js`)];

    xclient.cmxs.delete(cmXNm);
    const psp = require(`./${cmXNm}.js`);
    xclient.cmxs.set(cmXNm, psp);
    mgs.reply(`the \`${cmXNm}\` cmx has been reloaded.`);
};

exports.conf = {
    acl: 4,
    enabled: true,
    imx: false
};
