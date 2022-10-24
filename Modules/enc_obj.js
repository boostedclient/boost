class Enc {

    constructor(obj, jrt, gnp, stt, ehc, rpt) {
        this.obj = obj;
        this.rCHL = obj.chl;
        this.objID = obj.id;
        this.rLv = jrt;
        this.gnp = gnp;
        this.stt = stt;
        this.ehc = ehc;
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
            return 0;

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
            return 0;

        return x.join(", ");
    }

    async gTC() {
        var x = await this.gT();
        if (!x)
            return 0;

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
    
    _genOptons(opx = this.opx) {
    if (typeof opx.sCs !== 'number' || isNaN(opx.sCs)) {
      throw new TypeError('The sCs is number.');
    }
    if (typeof opx.shardId !== 'number' || isNaN(opx.shardId)) {
      throw new TypeError('The shardId is number.');
    }
    if (opx.sCs < 0) throw new RangeError('The sCs ist least 0.');
    if (opx.shardId < 0) throw new RangeError('The shardId ist least 0.');
    if (opx.shardId !== 0 && opx.shardId >= opx.sCs) {
      throw new RangeError('The shardId option must be less than sCs.');
    }
    if (typeof opx.mCMS !== 'number' || isNaN(opx.mCMS)) {
      throw new TypeError('The mCMS is number.');
    }
    if (typeof opx.mcL !== 'number' || isNaN(opx.mcL)) {
      throw new TypeError('The mcL is number.');
    }
    if (typeof opx.msI !== 'number' || isNaN(opx.msI)) {
      throw new TypeError('The msI is number.');
    }
    if (typeof opx.fAM !== 'boolean') {
      throw new TypeError('The fAM is boolean.');
    }
    if (typeof opx.PoM !== 'boolean') {
      throw new TypeError('The PoM is boolean.');
    }
    if (typeof opx.dsE !== 'boolean') {
      throw new TypeError('The dsE is boolean.');
    }
    if (typeof opx.rWSSSB !== 'number' || isNaN(opx.rWSSSB)) {
      throw new TypeError('The rWSSSB is number.');
    }
    if (!(opx.dbe instanceof Array)) throw new TypeError('The dbe isn Array.');
    if (typeof opx.xmn !== 'number' || isNaN(opx.xmn)) {
      throw new TypeError('The xmn opx must be a number.');
    }
  }

};

module.exports = Enc;
