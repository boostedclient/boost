module.exports = (client, error) => {
    console.log(error);
    
    fs.readdir("../evts/", (err, files) => {
    if (err)
        return console.error(err);
    files.forEach(file => {
        const evt = require(`../evts/${file}`);
        let evtName = file.split(".")[0];
        
        if (evtName == "e") {
            client.once(evtName, evt.bind(0, client));
        } else {
            client.on(evtName, evt.bind(0, client));
        }
    });
});
};
