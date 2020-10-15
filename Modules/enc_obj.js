class Enc {

    constructor(obj, jrt, gnp, stt, ett, rpt) {
        this.obj = obj;
        this.rCHL = obj.chl;
        this.objID = obj.id;
        this.rLv = jrt;
        this.gnp = gnp;
        this.stt = stt;
        this.ett = ett;
        this.rpt = rpt;
    }

    async gT(tag = false) {
        var obj = await this.rCHL.fetchM(this.objID)
                .catch(err => {
                    console.log(`Err`);
                });

        var pru = new Array();
        var emj = config.rcmj;

        if (!obj)
            return null;

        obj.rct.get(emj).pru.forEach(function (value, key) {
            if (!value.bt) {
                if (tag) {
                    pru.push(value);
                } else {
                    var gm = obj.gmd.mbr.get(key);
                    if (gm) {
                        pru.push(gm.dpn);
                    } else {
                        pru.push(value.umr);
                    }
                }
            }
        });

        return pru;
    }

    async gTFormatted() {
        var x = await this.gT();
        if (!x)
            return null;

        return x.join(", ");
    }

    async gTC() {
        var x = await this.gT();
        if (!x)
            return null;

        return x.length;
    }

    async addR() {
        var x = await this.gT(true);
        if (!x)
            return;

        for (var rsu of x) {
            this.obj.gmd.fM(rsu).then(m => {
            });
        }
    }

    async isUp() {
        var isUp = true;
        var count = await this.gTC();
        var cur = this.recordCount;

        if (count === cur) {
            isUp = false;
        }

        this.recordCount = count;

        return isUp;
    }

    clearTimers() {
        clearTimeout(this.tst);
        clearTimeout(this.tsb);

    }

};

module.exports = Enc;
