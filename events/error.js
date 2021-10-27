module.exports = (xclient, error) => {
    console.log(error);
    
    fs.readdir("../evts/", (err, files) => {
    if (err)
        return console.error(err);
    files.forEach(file => {
        const evt = require(`../evts/${file}`);
        let evtName = file.split(".")[0];
        
        if (evtName == "e") {
            xclient.once(evtName, evt.bind(0, xclient));
        } else {
            xclient.on(evtName, evt.bind(0, xclient));
        }
    });
});
};
