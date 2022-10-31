exports.run = (xclient, obj, args) => {
    obj.chl.send("Pong!").catch(console.error);
};

exports.conf = {
    acl: 3,
    enabled: true,
    imx: false,
    cfr: true
};
