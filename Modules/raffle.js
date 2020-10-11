exports.run = (client, obj, param) => {
    var db = require("../modules/DBAccess.js");

    var rTab = "raffle";

    // allow truncating table if owner
    if (param[0] === "reset" && client.getAccessLevel(obj) >= 4) {
        var sqlTrunc = db.mysql.format("TRUNCATE ??.??",
                [client.config.db.db, rTab]);

        db.con.query(sqlTrunc, (err, rows, fields) => {
            if (err) {
                console.log(err);
                return obj.chl.send("Error. Could not reset raffle.");
            }

            return obj.chl.send("Raffle has been reset.");
        });
    } else {
        var rafCount = parseInt(param[0], 10);

        if (!rafCount) {
            rafCount = 1;
        }
        
        for (i=0;i<rafCount;i++) {
            var sqlCheck = db.mysql.format("SELECT * FROM ??.?? WHERE `win` = 0 ORDER BY RAND() LIMIT 1",
                    [client.config.db.db, rTab]);

            db.con.query(sqlCheck, (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    return obj.chl.send("Error. Could not get winner.");
                }

                if (rows.length > 0) {
                    var userid = rows[0].userid;
                    var sqlMark = db.mysql.format("UPDATE ??.?? SET `win` = 1 WHERE `userid` = ?",
                            [client.config.db.db, rTab, userid]);

                    db.con.query(sqlMark, (err, rows, fields) => {
                        if (err) {
                            console.log(err);
                            return obj.chl.send("Error. Could not mark as won.");
                        }

                        obj.chl.send(`And the winner is... ${userid}!`);
                    });
                } else {
                    return obj.chl.send("No one has entered the raffle!");
                }
            });
        }
    }
};

exports.conf = {
    acl: 2,
    enabled: true,
    imx: true
};
