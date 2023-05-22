const t = [{
    width: 17,
    height: 17,
    data: "uTv=,%$-$-$-$-$%,v=,v=,%$-$-$-$-$%,v=,M4M,%$-$%$#$%$-$%,M$#$M,M$#$M,%$-$%$#$%$-$%,M$#$M<-T-4+$-$C$-$;$-$C$-$;<C<+",
    name: "01 Rear Security Annex",
    hint: "! Look around with the mouse, move with W/A/S/D.",
    intro: "[SEC REF 672.A]\n\nThank you for arriving quickly. As you can see, the facility has been breached, and our security monitoring is offline. Containment and establishment of vision are our top priorities.\n\nAll occupants, codenamed 'Raven', will manifest as stationary statues when visible. Do not let your guard down, as they are active and extremely dangerous.\n\nYour mission is simple: enter the facility, bring our security cameras back online, and contain all active Raven. Ni pukha, ni pyera, comrade.",
    enter: {
        p1: {
            x: 96,
            y: 448
        },
        p2: {
            x: 160,
            y: 512
        }
    },
    exit: {
        p1: {
            x: 384,
            y: 448
        },
        p2: {
            x: 448,
            y: 512
        }
    },
    d: [{
        u: 3,
        v: 13,
        entranceDoor: !0
    }, {
        u: 12,
        v: 13,
        exitDoor: !0
    }],
    e: [{
        x: 463,
        y: 136,
        wake: "los"
    }],
    t: [],
    c: []
}, {
    width: 20,
    height: 14,
    data: "dDt;$5$t;$5$t;$5$+<d$5$+$-$d$5$+$-u5<-,vU,vU,vU,-uT-$tC$-$tC<tC",
    name: "02 Rear Annex Corridor",
    hint: "! Turn on all cameras using nearby terminals to proceed.",
    enter: {
        p1: {
            x: 32,
            y: 352
        },
        p2: {
            x: 96,
            y: 416
        }
    },
    exit: {
        p1: {
            x: 544,
            y: 128
        },
        p2: {
            x: 608,
            y: 192
        }
    },
    d: [{
        u: 17,
        v: 6,
        exitDoor: !0
    }, {
        u: 1,
        v: 10,
        entranceDoor: !0
    }],
    e: [{
        x: 368,
        y: 111
    }],
    t: [{
        u: 6,
        v: 7,
        control: "A"
    }],
    c: [{
        u: 12,
        v: 9,
        control: "A",
        facing: 260,
        enabled: !1
    }]
}, {
    width: 20,
    height: 16,
    data: "[u$[$n$[$n$[$n$[$5D-$[$5$5$-$[$5$5$-$3<#$5$5<3$-$#$5$5$K$-$#$5$5$3<-45$5$3$v=$3$v=$3$v=$3u,5$t;D3",
    name: "03 Rear Hallway SW",
    hint: "! Raven are immobilized if spotted by security cameras.",
    chx: 0,
    chy: 32,
    enter: {
        p1: {
            x: 128,
            y: 256
        },
        p2: {
            x: 192,
            y: 320
        }
    },
    exit: {
        p1: {
            x: 544,
            y: 160
        },
        p2: {
            x: 608,
            y: 224
        }
    },
    d: [{
        u: 17,
        v: 4,
        exitDoor: !0
    }, {
        u: 4,
        v: 10,
        entranceDoor: !0
    }],
    e: [{
        x: 53,
        y: 427
    }, {
        x: 448,
        y: 192,
        wake: "los"
    }, {
        x: 448,
        y: 77,
        wakeRadius: 192
    }],
    t: [{
        u: 14,
        v: 14,
        control: "A"
    }],
    c: [{
        u: 11,
        v: 10,
        control: "A",
        facing: 135,
        enabled: !1
    }]
}, {
    width: 24,
    height: 18,
    data: "S<+<t3$-$+$-$t3$-$+$-$lD-<-DK$vE$K$%,=,=,%$K$%,=,=,%$3<vEDvv,vv,-$vED-$%,=,=,%$3$-$%,=,=,%$3$-$vE$3]-<-Dl$-$+$-$t3$-$+$-$t3<+<S",
    name: "04 Lobby SW",
    hint: "! Plan a route that exposes you as little as possible.",
    enter: {
        p1: {
            x: 448,
            y: 480
        },
        p2: {
            x: 512,
            y: 544
        }
    },
    exit: {
        p1: {
            x: 32,
            y: 384
        },
        p2: {
            x: 96,
            y: 448
        }
    },
    d: [{
        u: 1,
        v: 11,
        exitDoor: !0
    }, {
        u: 14,
        v: 14,
        entranceDoor: !0
    }],
    e: [{
        x: 702,
        y: 287
    }, {
        x: 480,
        y: 63
    }, {
        x: 288,
        y: 65
    }, {
        x: 288,
        y: 513
    }],
    t: [{
        u: 13,
        v: 11,
        control: "A"
    }, {
        u: 19,
        v: 4,
        control: "B"
    }, {
        u: 19,
        v: 13,
        control: "C"
    }],
    c: [{
        u: 17,
        v: 7,
        control: "C",
        facing: 15,
        enabled: !1
    }, {
        u: 16,
        v: 6,
        control: "B",
        facing: 165,
        enabled: !1
    }, {
        u: 10,
        v: 11,
        control: "A",
        facing: 262,
        enabled: !1
    }]
}, {
    width: 22,
    height: 27,
    data: ";<#,t;$-$#,t;$-$tK,-Dt+$U$t+$U$t+$U$t+$U$t+$U$t#,%$%$%$%TK$v5$K$v5$K$v5D+$vU$+$%$M$%$%$E,#$vU$+$%$v%L#$v5$K$%$v%$#$+$#$v5$K$v5$K$E$-$E$K$E$-$E$K$E$-$E$K$E<E$K$v5$KuD;",
    name: "05 Mezzanine",
    hint: "! Some Raven are more active than others.",
    enter: {
        p1: {
            x: 288,
            y: 704
        },
        p2: {
            x: 352,
            y: 768
        }
    },
    exit: {
        p1: {
            x: 160,
            y: 32
        },
        p2: {
            x: 224,
            y: 96
        }
    },
    d: [{
        u: 5,
        v: 3,
        exitDoor: !0
    }, {
        u: 9,
        v: 21,
        entranceDoor: !0
    }],
    e: [{
        x: 615,
        y: 494,
        wake: "los"
    }, {
        x: 271,
        y: 242
    }, {
        x: 207,
        y: 240
    }, {
        x: 224,
        y: 771,
        wake: "los",
        patrolDX: -96,
        patrolDY: 0
    }],
    t: [{
        u: 20,
        v: 14,
        control: "A"
    }, {
        u: 7,
        v: 10,
        control: "B"
    }],
    c: [{
        u: 14,
        v: 25,
        control: "A",
        facing: 270,
        enabled: !1
    }, {
        u: 5,
        v: 10,
        control: "B",
        facing: 70,
        enabled: !1
    }, {
        u: 9,
        v: 10,
        control: "B",
        facing: 110,
        enabled: !1
    }]
}, {
    width: 22,
    height: 19,
    data: "CuDK$-$v$K$-$%$%$%$%4%$K$-$%$%$%$E$K$-$%$%$%$%4%$#L-$%$%$%$E$#$vU,#$vU$+$vU$+L-$%$%$%$=$S$-$%$%$%$=$S$-$%$%$%$=$S$-$%$%$%$=$S$-$n$Su-<[$v%$[$-$-$=$%$[$v%$[u4",
    name: "06 Lab Storage",
    hint: "! Although dangerous, looking away may be a useful ruse.",
    chx: 0,
    chy: 32,
    enter: {
        p1: {
            x: 192,
            y: 32
        },
        p2: {
            x: 256,
            y: 96
        }
    },
    exit: {
        p1: {
            x: 192,
            y: 384
        },
        p2: {
            x: 256,
            y: 448
        }
    },
    d: [{
        u: 6,
        v: 3,
        entranceDoor: !0
    }, {
        u: 6,
        v: 11,
        exitDoor: !0
    }],
    e: [{
        x: 655,
        y: 497,
        wake: "los"
    }, {
        x: 367,
        y: 83,
        wake: "los"
    }, {
        x: 431,
        y: 142,
        wake: "los"
    }, {
        x: 305,
        y: 329,
        wake: "los"
    }, {
        x: 365,
        y: 378,
        wake: "los"
    }, {
        x: 493,
        y: 312,
        wake: "los"
    }, {
        x: 432,
        y: 528,
        wake: "los"
    }],
    t: [{
        u: 1,
        v: 7,
        control: "A"
    }, {
        u: 10,
        v: 16,
        control: "B"
    }],
    c: [{
        u: 18,
        v: 8,
        control: "A",
        facing: 185,
        enabled: !1
    }, {
        u: 18,
        v: 16,
        control: "B",
        facing: 175,
        enabled: !1
    }]
}, {
    width: 21,
    height: 16,
    data: "3uL;$v=$;$v=$#<v=$#$M$5$%$%$5$#$M$5$5$5$#$M$5$%$%$5$#u$5Tv^,v^,v^,-$-<%$%$%$%D-$-$v-,-$-$v-]v-$Ku<",
    name: "07 Chemical Lab",
    hint: "! Most Raven will not attack you until they see you.",
    enter: {
        p1: {
            x: 128,
            y: 384
        },
        p2: {
            x: 192,
            y: 448
        }
    },
    exit: {
        p1: {
            x: 32,
            y: 384
        },
        p2: {
            x: 96,
            y: 448
        }
    },
    d: [{
        u: 1,
        v: 11,
        exitDoor: !0
    }, {
        u: 4,
        v: 11,
        entranceDoor: !0
    }],
    e: [{
        x: 560,
        y: 199,
        wake: "los",
        patrolDX: 0,
        patrolDY: -128
    }, {
        x: 144,
        y: 54,
        wake: "los"
    }, {
        x: 431,
        y: 285,
        wake: "los"
    }, {
        x: 240,
        y: 421,
        wake: "los",
        patrolDX: 384,
        patrolDY: 0
    }, {
        x: 200,
        y: 111,
        wake: "los"
    }, {
        x: 47,
        y: 152,
        wake: "los"
    }],
    t: [{
        u: 19,
        v: 9,
        control: "A"
    }, {
        u: 9,
        v: 6,
        control: "B"
    }, {
        u: 2,
        v: 6,
        control: "C"
    }],
    c: [{
        u: 13,
        v: 7,
        control: "A",
        facing: 90,
        enabled: !1
    }, {
        u: 18,
        v: 3,
        control: "B",
        facing: 185,
        enabled: !1
    }, {
        u: 6,
        v: 5,
        control: "C",
        facing: 180,
        enabled: !1
    }]
}, {
    width: 19,
    height: 18,
    data: "t#<t;$-$t;$-$dT-$d$^$3T^$3$E$-<-DE$-$^,-<-$^,^<-$-,^$-$-$-,-<-$-$-D-$-$-$-$-$-,-$-$-$-$-$-,-$-$-$-$-$-,E$-$^,E$-$^ue",
    name: "08 Maintenance Corridor",
    hint: "",
    enter: {
        p1: {
            x: 224,
            y: 480
        },
        p2: {
            x: 288,
            y: 544
        }
    },
    exit: {
        p1: {
            x: 416,
            y: 32
        },
        p2: {
            x: 480,
            y: 96
        }
    },
    d: [{
        u: 13,
        v: 3,
        exitDoor: !0
    }, {
        u: 7,
        v: 14,
        entranceDoor: !0
    }],
    e: [{
        x: 446,
        y: 165,
        wake: "los",
        patrolDX: -192,
        patrolDY: 0
    }, {
        x: 543,
        y: 418,
        wake: "los",
        patrolDX: 0,
        patrolDY: 64
    }, {
        x: 352,
        y: 514,
        wake: "los",
        patrolDX: 96,
        patrolDY: 0
    }, {
        x: 351,
        y: 258,
        wake: "los"
    }, {
        x: 47,
        y: 433,
        wake: "los"
    }, {
        x: 544,
        y: 291,
        wake: "los"
    }],
    t: [{
        u: 17,
        v: 10,
        control: "C"
    }, {
        u: 5,
        v: 7,
        control: "A"
    }, {
        u: 5,
        v: 12,
        control: "B"
    }],
    c: [{
        u: 15,
        v: 16,
        control: "C",
        facing: 268,
        enabled: !1
    }, {
        u: 6,
        v: 10,
        control: "A",
        facing: 280,
        enabled: !1
    }, {
        u: 11,
        v: 13,
        control: "B",
        facing: 105,
        enabled: !1
    }]
}, {
    width: 21,
    height: 17,
    data: "Cu$d$-$U$d$-$U$d$-$U$d$-$5$5DC$-$5$U$C$-$5$U$C$M$U$C$M$5u45$5$;$v$5$;$v$5$;$v$5$;L-ed$-$tK$-$tK<t#",
    name: "09 Front Annex",
    hint: "",
    chx: 0,
    chy: 32,
    enter: {
        p1: {
            x: 192,
            y: 32
        },
        p2: {
            x: 256,
            y: 96
        }
    },
    exit: {
        p1: {
            x: 192,
            y: 448
        },
        p2: {
            x: 256,
            y: 512
        }
    },
    d: [{
        u: 6,
        v: 3,
        entranceDoor: !0
    }, {
        u: 6,
        v: 13,
        exitDoor: !0
    }],
    e: [{
        x: 304,
        y: 81,
        wake: "los"
    }, {
        x: 112,
        y: 340,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0
    }, {
        x: 80,
        y: 367,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0,
        patrolStart: 150
    }, {
        x: 48,
        y: 398,
        wake: "los",
        patrolDX: 256,
        patrolDY: 0,
        patrolStart: 300
    }, {
        x: 495,
        y: 390,
        wake: "los"
    }, {
        x: 432,
        y: 391,
        wake: "los"
    }, {
        x: 336,
        y: 54,
        wake: "los"
    }],
    t: [{
        u: 14,
        v: 12,
        control: "A"
    }, {
        u: 19,
        v: 5,
        control: "B"
    }],
    c: [{
        u: 11,
        v: 12,
        control: "A",
        facing: 185,
        enabled: !1
    }, {
        u: 18,
        v: 7,
        control: "B",
        facing: 220,
        enabled: !1
    }]
}, {
    width: 19,
    height: 23,
    data: "+u4C$=$U$C$=$U$C,5$-$5,K$5$-$5$S$5$-$5$S$5$-$5$;<5$-$5<#$vE$#$vE$#$-$5$-$5<#$-$5$-$5$;$-$5$-$5$;<5$-$5$S$5$-$5D3$5$-$U$3$5$-$U$3$5$-$5D3$5$-$5$5$3$5<5$5$3$v5$3$v5$3uD",
    name: "10 Facility Parking",
    hint: "! So many choices...",
    enter: {
        p1: {
            x: 256,
            y: 544
        },
        p2: {
            x: 320,
            y: 608
        }
    },
    exit: {
        p1: {
            x: 32,
            y: 352
        },
        p2: {
            x: 96,
            y: 416
        }
    },
    d: [{
        u: 1,
        v: 10,
        exitDoor: !0
    }, {
        u: 8,
        v: 16,
        entranceDoor: !0
    }],
    e: [{
        x: 367,
        y: 401,
        wake: "los",
        patrolDX: 0,
        patrolDY: -192
    }, {
        x: 532,
        y: 523,
        wake: "los"
    }, {
        x: 207,
        y: 207,
        wake: "los",
        patrolDX: 0,
        patrolDY: 192
    }, {
        x: 415,
        y: 160,
        wake: "los",
        patrolDX: 0,
        patrolDY: 288
    }, {
        x: 159,
        y: 447,
        wake: "los",
        patrolDX: 0,
        patrolDY: -288
    }, {
        x: 159,
        y: 603,
        wake: "los",
        patrolDX: 32,
        patrolDY: 64
    }, {
        x: 542,
        y: 595,
        wake: "los",
        patrolDX: 0,
        patrolDY: 64,
        patrolStart: 1400
    }, {
        x: 143,
        y: 76,
        wake: "los"
    }],
    t: [{
        u: 15,
        v: 19,
        control: "B"
    }, {
        u: 14,
        v: 2,
        control: "A"
    }, {
        u: 3,
        v: 1,
        control: "C"
    }],
    c: [{
        u: 13,
        v: 19,
        control: "B",
        facing: 170,
        enabled: !1
    }, {
        u: 16,
        v: 8,
        control: "A",
        facing: 175,
        enabled: !1
    }, {
        u: 7,
        v: 8,
        control: "C",
        facing: 120,
        enabled: !1
    }]
}];
t.outro = "[SEC REF 672.C]\n\nThe facility is now in code yellow, thanks to your efforts. With all cameras back online, secondary cleanup crews will finish the job with minimal danger. We are pleased to report that no Raven escaped during the operation.\n\nYou are cleared to leave. Do svidaniya, comrade...\n\nYOU WIN";
const i = {
    i: {
        camera_arm: {
            x: 32,
            y: 32,
            w: 32,
            h: 32
        },
        camera_head: {
            x: 0,
            y: 32,
            w: 21,
            h: 12
        },
        door: {
            x: 64,
            y: 0,
            w: 32,
            h: 32
        },
        floor: {
            x: 32,
            y: 0,
            w: 32,
            h: 32
        },
        player: {
            x: 64,
            y: 32,
            w: 21,
            h: 15
        },
        raven: {
            x: 96,
            y: 32,
            w: 18,
            h: 30
        },
        terminal: {
            x: 96,
            y: 0,
            w: 32,
            h: 32
        },
        wall: {
            x: 0,
            y: 0,
            w: 32,
            h: 32
        }
    },
    s: {},
    a: "Monaco,'Lucida Sans Typewriter','Andale Mono','Lucida Console','Courier New',Courier,monospace",
    o(t) {
        const i = new Image;
        return i.src = t,
        i
    },
    r(t, i, s, h) {
        let e = this.i[t];
        i.drawImage(this.s.i, e.x, e.y, e.w, e.h, s, h, e.w, e.h)
    },
    l(t, i, s, h, e, a, o, r, l, n) {
        let$ = this.i[t];
        i.drawImage(this.s.i, $.x + s, $.y + h, e, a, o, r, l, n)
    },
    loadAllAssets() {
        i.s.i = i.o("assets/sprites.png")
    },
    n: t=>t + "px " + i.a
};
class s {
    constructor() {
        let t = window.AudioContext || window.webkitAudioContext;
        if (!t)
            return void (this.disabled = !0);
        this.ctx = new t,
        this.$ = {},
        [["click", .1], ["bloop", .5], ["siren", .1], ["tri", .5], ["music", .4], ["m1", 1, "music"], ["m2", 1, "music"], ["m3", 1, "music"]].forEach(([t,i,s])=>{
            this.$[t] = this.ctx.createGain(),
            this.$[t].gain.value = i,
            this.$[t].connect(s ? this.$[s] : this.ctx.destination)
        }
        ),
        this.g = [this.$.m1, this.$.m2, this.$.m3],
        this.m = 0,
        this.p = {
            click: 0
        },
        this.f = {
            game: [[22, 19], [], [], [], [22, 15], [21], [], [], [22, 19], [], [16], [], [22, 15], [], [14], [], [22, 19], [], [], [16], [22, 15], [], [20], [], [22, 19], [14], [], [16], [22, 15], [], [21], [20]],
            death: [[22, 16], [21, 15], [22, 16], [21, 15], [22, 16], [19], [23, 17], [20], [24, 18], [21], [25, 19], [22], [26, 20], [23], [27, 21], [24], [28, 22], [25], [29, 23], [26], [30, 24], [27], [31, 25], [28], [], [], [], [], [], [], [], [], [], [], [], []]
        };
        let i = this.f.game.map(t=>t.map(t=>t - 4));
        i[30] = [16],
        i[31] = [15];
        let s = this.f.game.map((t,i)=>t.map(t=>t - 3));
        this.f.game = this.f.game.concat(this.f.game).concat(i).concat(s),
        this.f.game.repeat = !0,
        this.f.death.repeat = !1,
        this.M = .2,
        this.b = this.M
    }
    update(t) {
        if (!this.disabled && (game.player && game.player.dead ? (this.$.music.gain.value = Math.max(0, .4 - game.deathFrame / 1e3),
        this.k !== this.f.death && (this.k = this.f.death,
        this.D = 0)) : (this.$.music.gain.value = .4,
        this.k !== this.f.game && (this.k = this.f.game,
        this.D = 0)),
        this.b - this.ctx.currentTime < .2)) {
            this.m = (this.m + 1) % this.g.length;
            let t = this.g[this.m];
            this.A(this.k, this.D, this.b, this.M, t),
            this.D++,
            this.b < this.ctx.currentTime && (this.b = this.ctx.currentTime),
            this.b += this.M
        }
    }
    A(t, i, s, h, e) {
        let a = t.repeat ? t[i % t.length] : t[i]
          , o = 1.39 * h;
        if (a)
            for (let t = 0; t < a.length; t++) {
                let i = this.ctx.createOscillator()
                  , h = 988 / 1.06 ** a[t];
                i.frequency.value = h,
                i.type = "triangle",
                i.connect(e),
                i.start(s),
                e.gain.setValueAtTime(0, s),
                e.gain.linearRampToValueAtTime(1, s + .05 * o),
                e.gain.setValueAtTime(1, s + .95 * o),
                e.gain.linearRampToValueAtTime(0, s + o),
                i.stop(s + o)
            }
    }
    C(t, i, s, h, e, a, o, r) {
        if (this.disabled)
            return;
        let l = r || this.ctx.currentTime;
        if (o && l - this.p[t] < o)
            return;
        this.p[t] = l;
        let n = this.ctx.createOscillator();
        n.frequency.setValueAtTime(s, l),
        h && n.frequency.exponentialRampToValueAtTime(h, l + e),
        n.type = i,
        n.connect(this.$[t]),
        n.start(l),
        n.stop(l + a)
    }
    playClick() {
        this.C("click", "sine", 988 / 1.06, 988 / 1.06 * .6, .1, .01, .05)
    }
    playBloop() {
        this.C("bloop", "square", 988 / 1.06 ** 28, 988 / 1.06 ** 28 * 1.6, .2, .09)
    }
    playSiren() {
        this.C("siren", "sawtooth", 988 / 1.06 ** 11, 988 / 1.06 ** 11 * 2, 1.1, .65, .5)
    }
    playTri() {
        let t = this.ctx.currentTime;
        this.C("tri", "square", 988 / 1.06 ** 10, 0, 0, .1, !1, t),
        this.C("tri", "square", 988 / 1.06 ** 8, 0, 0, .1, !1, t + .08),
        this.C("tri", "square", 988 / 1.06 ** 2, 0, 0, .2, !1, t + .16)
    }
}
class h {
    constructor(t) {
        Object.assign(this, t),
        this.fov = 60,
        this.S(),
        this.U = void 0
    }
    update(t) {
        this.U && (this.enabled = !this.enabled),
        this.U = void 0
    }
    render() {
        game.ctx.save(),
        game.ctx.translate(game.offset.x + 32 * this.u + 16, game.offset.y + 32 * this.v + 16),
        game.ctx.rotate(g.d2r(this.armFacing)),
        i.r("camera_arm", game.ctx, -16, -16),
        game.ctx.restore(),
        game.ctx.save(),
        game.ctx.translate(game.offset.x + this.x, game.offset.y + this.y),
        game.ctx.rotate(g.d2r(this.facing)),
        i.r("camera_head", game.ctx, -6, -5),
        game.ctx.fillStyle = this.enabled ? "rgba(36,204,36,0.8)" : "rgba(204,36,36,0.8)",
        game.ctx.fillRect(0, -1, 3, 3),
        game.ctx.restore()
    }
    toggle() {
        this.U = !0
    }
    S() {
        g.T(this.u, this.v - 1) ? (this.armFacing = 0,
        this.x = 32 * this.u + 15,
        this.y = 32 * this.v + 11) : g.T(this.u - 1, this.v) ? (this.armFacing = 270,
        this.x = 32 * this.u + 11,
        this.y = 32 * this.v + 16) : g.T(this.u, this.v + 1) ? (this.armFacing = 180,
        this.x = 32 * this.u + 15,
        this.y = 32 * this.v + 20) : (this.armFacing = 90,
        this.x = 32 * this.u + 20,
        this.y = 32 * this.v + 16)
    }
}
class e {
    constructor(t) {
        this.u = t.u,
        this.v = t.v,
        this.type = t.type,
        this.exitDoor = t.exitDoor,
        this.entranceDoor = t.entranceDoor,
        this.exitDoor && (this.locked = !0),
        this.x = 32 * this.u + 32,
        this.y = 32 * this.v + 16,
        this.toggleRadius = 58,
        this.control = t.control,
        this.slide = 0,
        this.toggled = void 0
    }
    update(t) {
        !g.pointNearPoint(this, game.player, this.toggleRadius) || game.levelComplete || this.locked ? this.slide > 0 && (this.slide = Math.max(0, this.slide - 32 * t)) : this.slide < 30 && (this.slide = Math.min(30, this.slide + 32 * t)),
        this.entranceDoor && 0 === this.slide && !g.Y(game.player, game.level.enter) && (this.locked = !0);
        let i = 0;
        game.terminals.forEach(t=>{
            t.enabled || i++
        }
        ),
        this.exitDoor && 0 === i && (this.locked = !1),
        this.toggled = void 0
    }
    render() {
        let t = Math.floor(this.slide);
        game.ctx.save(),
        game.ctx.translate(game.offset.x + this.x, game.offset.y + this.y),
        i.l("door", game.ctx, t, 0, 32 - t, 32, -32, -16, 32 - t, 32),
        game.ctx.rotate(g.d2r(180)),
        i.l("door", game.ctx, t, 0, 32 - t, 32, -32, -16, 32 - t, 32),
        this.locked && (game.ctx.fillStyle = "rgba(204, 36, 36, 0.8)",
        game.ctx.fillRect(10, 8, 14, 2),
        game.ctx.fillRect(-24, 8, 14, 2),
        game.ctx.fillRect(10, -10, 14, 2),
        game.ctx.fillRect(-24, -10, 14, 2)),
        game.ctx.restore()
    }
    toggle() {
        this.toggled = !0
    }
    getLosEdges() {
        let t = game.tileVisibilityInset;
        return this.slide < 3 ? [{
            p1: {
                x: this.x - 32 - t,
                y: this.y - 12 + t
            },
            p2: {
                x: this.x + 32 + t,
                y: this.y - 12 + t
            }
        }, {
            p1: {
                x: this.x - 32 - t,
                y: this.y + 12 - t
            },
            p2: {
                x: this.x + 32 + t,
                y: this.y + 12 - t
            }
        }] : [{
            p1: {
                x: this.x - 32 - t,
                y: this.y - 12 + t
            },
            p2: {
                x: this.x - this.slide - t,
                y: this.y - 12 + t
            }
        }, {
            p1: {
                x: this.x - this.slide - t,
                y: this.y - 12 + t
            },
            p2: {
                x: this.x - this.slide - t,
                y: this.y + 12 - t
            }
        }, {
            p1: {
                x: this.x - 32 - t,
                y: this.y + 12 - t
            },
            p2: {
                x: this.x - this.slide - t,
                y: this.y + 12 - t
            }
        }, {
            p1: {
                x: this.x + this.slide + t,
                y: this.y - 12 + t
            },
            p2: {
                x: this.x + 32 + t,
                y: this.y - 12 + t
            }
        }, {
            p1: {
                x: this.x + this.slide + t,
                y: this.y - 12 + t
            },
            p2: {
                x: this.x + this.slide + t,
                y: this.y + 12 - t
            }
        }, {
            p1: {
                x: this.x + this.slide + t,
                y: this.y + 12 - t
            },
            p2: {
                x: this.x + 32 + t,
                y: this.y + 12 - t
            }
        }]
    }
}
class a {
    constructor(t) {
        this.x = t.x,
        this.y = t.y,
        this.vx = 0,
        this.vy = 0,
        this.ax = 10,
        this.ay = 10,
        this.maxSpeed = 0,
        this.K = 18,
        this.R = 30,
        this._ = 18,
        this.L = 6,
        this.width = this.K,
        this.height = this.R,
        this.wake = t.wake || "radius",
        this.wakeRadius = t.wakeRadius || 384,
        this.killRadius = 14,
        this.X = [, , , , , , , , , , , , ],
        void 0 !== t.patrolDX && void 0 !== t.patrolDY && (this.B = [{
            x: this.x,
            y: this.y
        }, {
            x: this.x + t.patrolDX,
            y: this.y + t.patrolDY
        }],
        this.B.next = 1,
        this.B.after = game.framems + 1e3 + (t.patrolStart || 0)),
        this.state = "asleep"
    }
    update(t) {
        let i, s = g.N(this);
        switch (this.state) {
        case "asleep":
            if (s)
                this.state = "frozen";
            else if ("radius" === this.wake && g.O(this, game.player) < this.wakeRadius)
                this.state = "idle";
            else if ("los" === this.wake && void 0 !== this.P(0, !0))
                this.state = "idle";
            else if (this.B && game.framems > this.B.after) {
                let i = this.B[this.B.next];
                if (this.x === i.x && this.y === i.y)
                    this.B.after = game.framems + 1e3,
                    this.B.next = (this.B.next + 1) % this.B.length;
                else {
                    let s = g.atanPoints(this, i);
                    50 * t > g.O(this, i) ? (this.vx = 0,
                    this.vy = 0,
                    this.x = i.x,
                    this.y = i.y) : (this.vx = 50 * g.cos(s),
                    this.vy = 50 * g.sin(s),
                    this.x += this.vx * t,
                    this.y += this.vy * t)
                }
            }
            break;
        case "idle":
            if (s) {
                this.state = "frozen";
                break
            }
            void 0 !== (i = this.W()) && (this.state = "attack",
            this.attackAngle = i,
            this.attackVel = 265,
            this.attackAccel = 670,
            game.audio.playSiren());
            break;
        case "attack":
            if (s) {
                this.state = "idle";
                break
            }
            void 0 === (i = this.W()) ? this.state = "idle" : (this.vx = g.cos(i) * this.attackVel,
            this.vy = g.sin(i) * this.attackVel,
            this.x += this.vx * t,
            this.y += this.vy * t);
            break;
        case "frozen":
            s || (this.state = "idle")
        }
        "attack" === this.state ? (this.width = this._,
        this.height = this.L) : (this.width = this.K,
        this.height = this.R)
    }
    render() {
        if ("attack" !== this.state && ("asleep" !== this.state || 0 === this.vx && 0 === this.vy)) {
            let t, s, h, e, a, o, r, l = game.framems - this.frozenms;
            [t,s,h,e,a,o,r] = l < 300 ? [g.rf(11) - 5, g.rf(11) - 5, g.rf(7) - 3, g.rf(7) - 3, .4, .7, 1] : l < 600 ? [g.rf(7) - 3, g.rf(7) - 3, g.rf(5) - 2, g.rf(5) - 2, .3, .6, 1] : [g.rf(5) - 2, g.rf(5) - 2, g.rf(3) - 1, g.rf(3) - 1, .1, .2, 1],
            game.ctx.globalAlpha = a,
            i.r("raven", game.ctx, game.offset.x + this.x + t - this.width / 2, game.offset.y + this.y + s - this.height / 2),
            game.ctx.globalAlpha = o,
            i.r("raven", game.ctx, game.offset.x + this.x + s - this.width / 2, game.offset.y + this.y + e - this.height / 2),
            game.ctx.globalAlpha = r,
            i.r("raven", game.ctx, game.offset.x + this.x - this.width / 2, game.offset.y + this.y - this.height / 2),
            game.ctx.globalAlpha = 1
        } else
            "asleep" === this.state && this.B && Math.random() > .9 && (game.ctx.globalAlpha = .4,
            i.r("raven", game.ctx, game.offset.x + this.x - this.width / 2, game.offset.y + this.y - this.height / 2),
            game.ctx.globalAlpha = 1)
    }
    renderPost() {
        "attack" === this.state || "asleep" === this.state && this.B && (0 !== this.vx || 0 !== this.vy) ? this.X.push({
            x: this.x + 8 * Math.cos(game.framems / 300),
            y: this.y - 6 + Math.abs(5 * Math.sin(game.framems / 300))
        }) : this.X.push(!1),
        this.X.shift();
        for (let t = 0; t < this.X.length; t++) {
            let i = this.X[t];
            i && (game.ctx.fillStyle = "rgba(165, 10, 16, " + .05 * t + ")",
            game.ctx.fillRect(game.offset.x + i.x - 5 - 1, game.offset.y + i.y - 1, 3, 3),
            game.ctx.fillRect(game.offset.x + i.x + 5 - 1, game.offset.y + i.y - 1, 3, 3),
            game.ctx.fillStyle = "rgba(254, 20, 32, " + .05 * t + ")",
            game.ctx.fillRect(game.offset.x + i.x - 5, game.offset.y + i.y, 2, 2),
            game.ctx.fillRect(game.offset.x + i.x + 5 - 1, game.offset.y + i.y, 2, 2))
        }
    }
    W() {
        let t = this.P(0);
        if (void 0 === t && (t = this.P(24)),
        void 0 === t && (t = this.P(48)),
        void 0 === t) {
            let i = this.z(Math.floor(this.x / 32), Math.floor(this.y / 32));
            i && (t = g.atanPoints(this, {
                x: 32 * i[0] + 16,
                y: 32 * i[1] + 16
            }))
        }
        return t
    }
    z(t, i, s) {
        let h = [[t, i], [t - 1, i], [t + 1, i], [t, i - 1], [t, i + 1]];
        if (!game.attackGrid)
            return;
        for (let t = 0; t < h.length; t++)
            h[t][2] = game.attackGrid[h[t][1] * game.level.width + h[t][0]];
        h[0] < 1e4 && h[1] < 1e4 && h[3] < 1e4 && h.push([t - 1, i - 1, game.attackGrid[(i - 1) * game.level.width + t - 1]]),
        h[0] < 1e4 && h[2] < 1e4 && h[4] < 1e4 && h.push([t + 1, i + 1, game.attackGrid[(i + 1) * game.level.width + t + 1]]),
        h[0] < 1e4 && h[1] < 1e4 && h[4] < 1e4 && h.push([t - 1, i + 1, game.attackGrid[(i + 1) * game.level.width + t - 1]]),
        h[0] < 1e4 && h[2] < 1e4 && h[3] < 1e4 && h.push([t + 1, i - 1, game.attackGrid[(i - 1) * game.level.width + t + 1]]);
        let e = h.sort((t,i)=>t[2] - i[2])[0];
        return e[2] < 1e4 ? e : void 0
    }
    P(t, i) {
        let s = {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        }
          , h = {
            x: game.player.x - g.cos(game.facing) * t,
            y: game.player.y - g.sin(game.facing) * t
        }
          , e = g.atanPoints(this, h)
          , a = 4 * g.cos(e)
          , o = 4 * g.sin(e);
        for (; (i || !g.N(s)) && !g.I(s.x, s.y); ) {
            if (g.O(s, game.player) <= this.killRadius)
                return e;
            s.x += a,
            s.y += o
        }
    }
    static renderAttackWarning() {
        if ("dead" === game.player.state)
            return;
        let t = !1;
        for (let i = 0; i < game.enemies.length; i++)
            if ("attack" === game.enemies[i].state) {
                t = !0;
                break
            }
        if (t) {
            a.attackWarningMs || (a.attackWarningMs = game.framems);
            let t = (game.framems - a.attackWarningMs) % 500 / 1800 + .1
              , i = game.canvas.width
              , s = game.canvas.height;
            game.ctx.save(),
            game.ctx.fillStyle = "rgba(255, 0, 0, " + t + ")",
            game.ctx.beginPath(),
            game.ctx.moveTo(0, .25 * s),
            game.ctx.lineTo(.1 * i, .5 * s),
            game.ctx.lineTo(0, .75 * s),
            game.ctx.closePath(),
            game.ctx.fill(),
            game.ctx.beginPath(),
            game.ctx.moveTo(i, .25 * s),
            game.ctx.lineTo(.9 * i, .5 * s),
            game.ctx.lineTo(i, .75 * s),
            game.ctx.closePath(),
            game.ctx.fill(),
            game.ctx.restore()
        } else
            a.attackWarningMs = void 0
    }
}
class o {
    constructor(t) {
        this.queue = [],
        this.map = [],
        this.map[87] = "up",
        this.map[83] = "down",
        this.map[65] = "left",
        this.map[68] = "right",
        this.map[38] = "up",
        this.map[40] = "down",
        this.map[37] = "left",
        this.map[39] = "right",
        this.map[32] = "toggle",
        this.map[13] = "toggle",
        this.map[27] = "escape",
        this.handlers = t,
        this.virtualMove = [],
        this.virtualX = 0,
        this.virtualY = 0,
        this.mouseAngle = 0
    }
    init() {
        return document.addEventListener("keydown", t=>{
            let i = this.map[t.keyCode];
            i && (this[i] = !0,
            this.handlers[i] && "function" == typeof this.handlers[i] ? this.handlers[i]() : this.handlers[i] && "function" == typeof this.handlers[i].down && this.handlers[i].down())
        }
        ),
        document.addEventListener("keyup", t=>{
            let i = this.map[t.keyCode];
            this.queue.unshift(t.key),
            this.queue.splice(10),
            i && (this[i] = void 0,
            this.handlers[i] && "function" == typeof this.handlers[i].up && this.handlers[i].up())
        }
        ),
        document.addEventListener("mousemove", t=>{
            this.handlers.mousemove(t.movementX, t.movementY, t.clientX, t.clientY)
        }
        ),
        document.addEventListener("click", t=>{
            this.handlers.mouseclick()
        }
        ),
        this
    }
}
class r {
    constructor(t) {
        this.F = t,
        this.V = 0,
        this.j = 56,
        this.state = "alive"
    }
    update(t) {
        this.V += t,
        this.q = Math.min(this.F.length, this.V * this.j),
        this.q !== this.F.length && game.audio.playClick()
    }
    render() {
        game.ctx.font = i.n(18),
        game.ctx.fillStyle = "rgba(204,255,204,0.9)";
        let t = this.F.substring(0, this.q).split("\n");
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            for (; game.ctx.measureText(s).width > game.canvas.width - 30; )
                s = s.split(" ").slice(0, -1).join(" ");
            game.ctx.fillText(s.trim(), 15, 30 + 28 * i);
            let h = t[i].slice(s.length);
            h.length > 0 && (t = t.slice(0, i + 1).concat([h]).concat(t.slice(i + 1)))
        }
        this.q === this.F.length && g.G(game.canvas.width - 20, game.canvas.height - 20)
    }
    toggle() {
        this.q === this.F.length ? (this.state = "dead",
        game.audio.playBloop()) : (this.V = 1e4,
        game.audio.playBloop())
    }
}
class l {
    constructor(t, i) {
        this.H = t.slice(0),
        this.J = i,
        this.Q = 0
    }
    open() {
        this.scale = 5
    }
    update() {
        this.scale > 0 && (this.scale -= 1)
    }
    render() {
        game.ctx.fillStyle = "rgba(0,0,0,0.7)",
        game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
        let t = game.canvas.height / 2 - 27 * this.H.length;
        game.ctx.save(),
        game.ctx.translate(game.canvas.width / 2, game.canvas.height / 2),
        game.ctx.scale(1 + this.scale, 1 + this.scale),
        game.ctx.translate(-game.canvas.width / 2, -game.canvas.height / 2),
        this.H.forEach((s,h)=>{
            game.ctx.font = i.n(18),
            s.w = game.ctx.measureText(s.text).width,
            s.x = game.canvas.width / 2 - s.w / 2,
            s.y = t + 36 * h,
            h === this.Q && 0 === this.scale ? game.ctx.fillStyle = "rgba(255,255,255,1)" : game.ctx.fillStyle = "rgba(204,204,204,1)",
            game.ctx.fillText(s.text, s.x, s.y)
        }
        ),
        game.ctx.restore()
    }
    onUp() {
        this.Q = (this.Q - 1 + this.H.length) % this.H.length,
        game.audio.playClick()
    }
    onDown() {
        this.Q = (this.Q + 1) % this.H.length,
        game.audio.playClick()
    }
    onEscape() {
        this.J()
    }
    onMouseMove(t, i) {
        let s = this.Q;
        this.H.forEach((s,h)=>{
            t >= s.x && t <= s.x + s.w && i >= s.y - 30 && i <= s.y && (this.Q = h)
        }
        ),
        s !== this.Q && game.audio.playClick()
    }
    select() {
        this.H[this.Q].handler(),
        game.audio.playBloop()
    }
}
class n {
    constructor() {
        this.x = 105,
        this.y = 40,
        this.vx = 0,
        this.vy = 0,
        this.Z = 400,
        this.tt = 400,
        this.it = 110,
        this.width = 8,
        this.height = 6,
        this.dead = !1
    }
    update(t) {
        if (this.dead)
            return;
        if (game.levelComplete) {
            let i = {
                x: (game.level.exit.p1.x + game.level.exit.p2.x) / 2,
                y: (game.level.exit.p1.y + game.level.exit.p2.y) / 2
            }
              , s = g.atanPoints(this, i);
            return this.vx = g.cos(s) * this.it / 2,
            this.vy = g.sin(s) * this.it / 2,
            this.x += this.vx * t,
            void (this.y += this.vy * t)
        }
        if (game.input.up)
            this.vy -= this.Z * t,
            this.vy < -this.it && (this.vy = -this.it);
        else if (game.input.down)
            this.vy += this.Z * t,
            this.vy > this.it && (this.vy = this.it);
        else {
            let i = this.vy > 0 ? -1 : 1;
            this.vy += this.tt * i * t,
            (this.vy < 0 && -1 === i || this.vy > 0 && 1 === i) && (this.vy = 0)
        }
        if (game.input.left)
            this.vx -= this.Z * t,
            this.vx < -this.it && (this.vx = -this.it);
        else if (game.input.right)
            this.vx += this.Z * t,
            this.vx > this.it && (this.vx = this.it);
        else {
            let i = this.vx > 0 ? -1 : 1;
            this.vx += this.tt * i * t,
            (this.vx < 0 && -1 === i || this.vx > 0 && 1 === i) && (this.vx = 0)
        }
        let i = this.x
          , s = this.y;
        this.x += this.vx * t,
        this.y += this.vy * t,
        g.st(this),
        game.lockCrosshairToMap || (game.crosshair.x += this.x - i,
        game.crosshair.y += this.y - s)
    }
    render() {
        if (this.dead) {
            let t = [[204, 204, 204], [54, 10, 10], [239, 17, 35], [211, 15, 31], [171, 12, 15], [120, 6, 6]];
            if (!this.ht) {
                this.ht = [];
                for (let i = 0; i < 45; i++) {
                    let i = Math.floor(30 * Math.random())
                      , s = Math.floor(30 * Math.random())
                      , h = Math.floor(Math.random() * t.length);
                    this.ht[30 * s + i] = h
                }
            }
            game.ctx.save(),
            game.ctx.translate(game.offset.x + this.x, game.offset.y + this.y);
            for (let i = 0; i < 30; i++)
                for (let s = 0; s < 30; s++) {
                    let h = this.ht[30 * i + s];
                    h && (h = t[h],
                    game.ctx.fillStyle = "rgba(" + h[0] + "," + h[1] + "," + h[2] + ")",
                    game.ctx.fillRect(i - 15, s - 15, 2, 2))
                }
            return void game.ctx.restore()
        }
        let t = [-6, , 3][Math.floor(game.framems % 800 / 200)];
        0 === this.vx && 0 === this.vy && (t = !1),
        game.ctx.save(),
        game.ctx.translate(game.offset.x + this.x, game.offset.y + this.y),
        game.ctx.rotate(g.d2r(game.facing + 90)),
        t && (game.ctx.fillStyle = "rgba(32, 32, 48, 1)",
        game.ctx.fillRect(t, -6, 3, 3)),
        i.r("player", game.ctx, -10, -7),
        game.ctx.restore()
    }
    renderCrosshair() {
        let t = game.offset.x + game.crosshair.x
          , i = game.offset.y + game.crosshair.y;
        game.ctx.strokeStyle = "rgba(255, 24, 24, 0.9)",
        game.ctx.beginPath(),
        [[-2, -2], [-2, 2], [2, -2], [2, 2]].forEach(s=>{
            game.ctx.moveTo(t + 3 * s[0], i + s[1]),
            game.ctx.lineTo(t + s[0], i + s[1]),
            game.ctx.lineTo(t + s[0], i + 3 * s[1])
        }
        ),
        game.ctx.stroke()
    }
}
class $ {
    constructor(t) {
        Object.assign(this, t),
        this.x = 32 * this.u + 16,
        this.y = 32 * this.v + 16,
        this.et(),
        this.toggleRadius = 19,
        this.cameras = [],
        this.enabled = !1,
        this.U = void 0
    }
    update() {
        this.U && (this.enabled = !this.enabled,
        this.cameras.forEach(t=>t.toggle()),
        game.audio.playBloop()),
        this.U = void 0
    }
    render() {
        game.ctx.save(),
        game.ctx.translate(game.offset.x + this.x, game.offset.y + this.y),
        game.ctx.rotate(g.d2r(this.facing)),
        i.r("terminal", game.ctx, -16, -16),
        game.ctx.fillStyle = this.enabled ? "rgba(36, 204, 36, 0.8)" : "rgba(204, 36, 36, 0.8)",
        game.ctx.fillRect(5, -6, 3, 3),
        game.ctx.restore()
    }
    toggle() {
        this.U = !0
    }
    et() {
        g.T(this.u, this.v - 1) ? this.facing = 0 : g.T(this.u - 1, this.v) ? this.facing = 270 : g.T(this.u, this.v + 1) ? this.facing = 180 : this.facing = 90
    }
}
const g = {
    atan: (t,i)=>g.r2d(Math.atan2(t, i)),
    atanPoints: (t,i)=>g.atan(i.y - t.y, i.x - t.x),
    cos: t=>Math.cos(g.d2r(t)),
    sin: t=>Math.sin(g.d2r(t)),
    r2d: t=>Math.floor(3600 * t / Math.PI / 2) / 10,
    d2r: t=>t * Math.PI * 2 / 360,
    dw: t=>(t + 720) % 360,
    rf: t=>Math.floor(Math.random() * t),
    O(t, i) {
        let s = i.x - t.x
          , h = i.y - t.y;
        return Math.sqrt(s * s + h * h)
    },
    pointNearPoint: (t,i,s)=>g.O(t, i) <= s,
    at(t, i, s, h) {
        let e = (s.y - h.y) * (i.x - h.x) + (h.x - s.x) * (i.y - h.y)
          , a = ((s.y - h.y) * (t.x - h.x) + (h.x - s.x) * (t.y - h.y)) / e
          , o = ((h.y - i.y) * (t.x - h.x) + (i.x - h.x) * (t.y - h.y)) / e
          , r = 1 - a - o;
        return 0 <= a && a <= 1 && 0 <= o && o <= 1 && 0 <= r && r <= 1
    },
    ot(t, i) {
        for (let s = 0; s < game.vision.length; s++)
            if (g.rt({
                x: t,
                y: i
            }, game.vision[s]))
                return !0;
        return !1
    },
    N(t) {
        let i = t.width / 2
          , s = t.height / 2;
        return g.ot(t.x, t.y) || g.ot(t.x - i, t.y - s) || g.ot(t.x + i, t.y + s) || g.ot(t.x - i, t.y + s) || g.ot(t.x + i, t.y - s)
    },
    rt(t, i) {
        let s = !1;
        for (let h = 0, e = i.length - 1; h < i.length; e = h,
        h++)
            i[h].y > t.y != i[e].y > t.y && t.x < i[h].x + (i[e].x - i[h].x) * (t.y - i[h].y) / (i[e].y - i[h].y) && (s = !s);
        return s
    },
    Y(t, i, s) {
        s = s || 0;
        let h = i.p1.x
          , e = i.p2.x
          , a = i.p1.y
          , o = i.p2.y;
        return h > e && ([h,e] = [e, h]),
        a > o && ([a,o] = [o, a]),
        t.x >= h - s && t.x <= e + s && t.y >= a - s && t.y <= o + s
    },
    intersection(t, i) {
        let s = t.p2.y - t.p1.y
          , h = t.p1.x - t.p2.x
          , e = s * t.p1.x + h * t.p1.y
          , a = i.p2.y - i.p1.y
          , o = i.p1.x - i.p2.x
          , r = a * i.p1.x + o * i.p1.y
          , l = s * o - a * h;
        if (0 !== l) {
            let n = {
                x: (o * e - h * r) / l,
                y: (s * r - a * e) / l
            };
            if (g.Y(n, t, 1) && g.Y(n, i, 1))
                return n
        }
    },
    lt(t, i, s, h, e, a) {
        let o = game.losEdges;
        game.doors.forEach(t=>o = o.concat(t.getLosEdges()));
        let r = g.dw(i - s / 2)
          , l = g.dw(i + s / 2);
        l < r && (l += 360),
        h = h || 0,
        e = e || 0,
        t = {
            x: t.x - Math.cos(g.d2r(i)) * e,
            y: t.y - Math.sin(g.d2r(i)) * e
        };
        let n = []
          , $ = r;
        for (; $ < l; ) {
            let i = {
                x: t.x + Math.cos(g.d2r($)) * h,
                y: t.y + Math.sin(g.d2r($)) * h
            }
              , s = {
                x: t.x + 1e3 * Math.cos(g.d2r($)),
                y: t.y + 1e3 * Math.sin(g.d2r($))
            };
            for (let t = 0; t < o.length; t++) {
                let h = this.intersection({
                    p1: i,
                    p2: s
                }, o[t]);
                h && (s = h)
            }
            n.unshift(s),
            n.push(i),
            $ += .8
        }
        return n.opacity = a,
        [n]
    },
    nt(t, i) {
        let s = [{
            x: t.p1.x,
            y: t.p1.y
        }, {
            x: t.p2.x,
            y: t.p1.y
        }, {
            x: t.p2.x,
            y: t.p2.y
        }, {
            x: t.p1.x,
            y: t.p2.y
        }];
        return s.opacity = i,
        s
    },
    $t: (t,i)=>game.level.data[i * game.level.width + t],
    gt: (t,i)=>g.$t(Math.floor(t / 32), Math.floor(i / 32)),
    T: (t,i)=>2 !== g.$t(t, i),
    I: (t,i)=>g.T(Math.floor(t / 32), Math.floor(i / 32)),
    mt(t, i) {
        let s, h = Math.floor(t / 32), e = Math.floor(i / 32);
        for (let t = 0; t < game.doors.length; t++)
            if (game.doors[t].u === h && game.doors[t].v === e || game.doors[t].u === h - 1 && game.doors[t].v === e) {
                s = game.doors[t];
                break
            }
        return !!(s && s.slide < 10 && i % 32 > 3 && i % 32 < 28)
    },
    st(t) {
        function i(i, s, h, e, a) {
            g.I(i, s) ? (t.x += h * a,
            t.y += e * a) : g.mt(i, s) && (t.x += h * (a - 4),
            t.y += e * (a - 4))
        }
        i(t.x - t.width / 2, t.y, 1, 0, 32 - (t.x - t.width / 2) % 32),
        i(t.x + t.width / 2, t.y, -1, 0, (t.x + t.width / 2) % 32),
        i(t.x, t.y - t.height / 2, 0, 1, 32 - (t.y - t.height / 2) % 32),
        i(t.x, t.y + t.height / 2, 0, -1, (t.y + t.height / 2) % 32)
    },
    G(t, i) {
        let s = game.framems % 1e3 < 500 ? 4 : 6;
        game.ctx.fillStyle = "rgba(204, 204, 204, 168)",
        game.ctx.strokeStyle = "rgba(204, 204, 204, 168)",
        game.ctx.beginPath(),
        game.ctx.arc(t, i, s, 0, 2 * Math.PI),
        game.ctx.fill(),
        game.ctx.beginPath(),
        game.ctx.arc(t, i, s + 2, 0, 2 * Math.PI),
        game.ctx.stroke()
    }
};
window.game = new class {
    init() {
        this.canvas = document.getElementById("canvas"),
        this.canvas.width = this.canvas.clientWidth,
        this.canvas.height = this.canvas.clientHeight,
        this.ctx = this.canvas.getContext("2d"),
        this.canvasBounds = this.canvas.getBoundingClientRect(),
        this.ct = document.getElementById("los"),
        this.ct.width = this.canvas.width,
        this.ct.height = this.canvas.height,
        this.dt = this.ct.getContext("2d"),
        this.ut = document.getElementById("tile"),
        this.yt = this.ut.getContext("2d"),
        i.loadAllAssets(),
        this.input = new o({
            up: this.onUp.bind(this),
            down: this.onDown.bind(this),
            left: this.onLeft.bind(this),
            right: this.onRight.bind(this),
            toggle: this.onToggle.bind(this),
            escape: {
                up: this.onEscape.bind(this)
            },
            mousemove: this.onMouseMove.bind(this),
            mouseclick: this.onMouseClick.bind(this)
        }).init(),
        this.audio = new s;
        try {
            localStorage.setItem("lc", 7),
            localStorage.removeItem("lc")
        } catch (t) {
            this.pt = !0
        }
        return this.pt ? this.vt = 0 : this.vt = parseInt(localStorage.getItem("level") || "0", 10),
        this.level = void 0,
        this.intro = void 0,
        this.player = void 0,
        this.levelComplete = void 0,
        this.levelCompleteMs = void 0,
        this.framems = 0,
        this.enemies = [],
        this.crosshair = {
            x: 0,
            y: 0
        },
        this.mouse = {
            x: 0,
            y: 0
        },
        this.tileVisibilityInset = 4,
        this.lockCrosshairToMap = !1,
        this.facing = 0,
        this.fov = 120,
        this.mouselocked = !1,
        this.paused = !0,
        this.xt = !0,
        document.addEventListener("pointerlockchange", this.onMouseLock.bind(this)),
        document.addEventListener("mozpointerlockchange", this.onMouseLock.bind(this)),
        document.addEventListener("webkitpointerlockchange", this.onMouseLock.bind(this)),
        this.ft = new l([{
            text: "START NEW GAME",
            handler: ()=>{
                this.wt = 0,
                this.unpause()
            }
        }],()=>!1),
        this.Mt = new l([{
            text: "CONTINUE GAME",
            handler: ()=>{
                this.wt = this.vt,
                this.unpause()
            }
        }, {
            text: "START NEW GAME",
            handler: ()=>{
                this.wt = 0,
                this.unpause()
            }
        }],()=>!1),
        this.bt = new l([{
            text: "RESUME",
            handler: ()=>{
                this.unpause()
            }
        }, {
            text: "RESTART LEVEL",
            handler: ()=>{
                this.wt = this.levelIndex,
                this.unpause()
            }
        }],()=>this.unpause()),
        this
    }
    update(i) {
        if (void 0 !== this.wt && (this.kt(this.wt),
        this.wt = void 0),
        this.audio.update(i),
        this.menu)
            this.menu.update(i);
        else if (this.intro)
            this.intro.update(i),
            "dead" === this.intro.state && (this.intro = void 0,
            this.level || this.openMenu(this.ft)),
            this.levelms = performance.now();
        else if (this.level) {
            if (this.player.dead && this.deathFrame++,
            this.levelComplete && this.framems - this.levelCompleteMs > 2200) {
                if (this.wt = this.levelIndex + 1,
                this.wt >= t.length)
                    return this.wt = void 0,
                    this.level = void 0,
                    this.intro = new r(t.outro),
                    this.intro.update(i),
                    this.xt = !1,
                    this.vt = 0,
                    void (this.pt || localStorage.setItem("level", 0));
                this.pt || localStorage.setItem("level", this.wt)
            }
            this.player.update(i),
            this.terminals.forEach(t=>t.update(i)),
            this.cameras.forEach(t=>t.update(i)),
            this.doors.forEach(t=>t.update(i)),
            this.offset = {
                x: this.canvas.width / 2 - this.player.x,
                y: this.canvas.height / 2 - this.player.y,
                crosshairX: this.player.x - this.canvas.width / 2,
                crosshairY: this.player.y - this.canvas.height / 2
            };
            let s = 4
              , h = {
                left: this.offset.crosshairX + s,
                right: this.offset.crosshairX + this.canvas.width - s,
                top: this.offset.crosshairY + s,
                bottom: this.offset.crosshairY + this.canvas.height - s
            };
            this.crosshair.x < h.left ? this.crosshair.x = h.left : this.crosshair.x > h.right && (this.crosshair.x = h.right),
            this.crosshair.y < h.top ? this.crosshair.y = h.top : this.crosshair.y > h.bottom && (this.crosshair.y = h.bottom),
            this.facing = g.atanPoints(this.player, this.crosshair),
            this.vision = [];
            let e = !1;
            if (g.Y(this.player, this.level.enter) && (this.vision.push(g.nt(this.level.enter, .69)),
            e = !0),
            g.Y(this.player, this.level.exit) && (this.vision.push(g.nt(this.level.exit, .69)),
            e = !0),
            this.cameras.forEach(t=>{
                t.enabled && (this.vision = this.vision.concat(g.lt(t, t.facing, t.fov, 12, 0, .69)))
            }
            ),
            this.player.dead || (this.vision = this.vision.concat(g.lt(this.player, this.facing, this.fov, 4, 0, 1))),
            this.Dt(),
            this.enemies.forEach(t=>t.update(i)),
            this.enemies.forEach(t=>g.st(t)),
            !this.player.dead) {
                this.enemies.forEach(t=>{
                    g.pointNearPoint(t, this.player, t.killRadius) && this.playerDied()
                }
                );
                let t = void 0;
                this.terminals.forEach(i=>{
                    g.pointNearPoint(i, this.player, i.toggleRadius) && (t = i)
                }
                ),
                this.At = t,
                !this.levelComplete && g.Y(this.player, this.level.exit) && (this.levelComplete = !0,
                this.levelCompleteMs = performance.now(),
                this.audio.playTri())
            }
            this.xt = !0
        }
        this.Et()
    }
    render() {
        if (this.ctx.fillStyle = "black",
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
        this.level && this.xt && !this.intro) {
            if (this.player.dead) {
                let t = Math.min(3, 1 + this.deathFrame / 50);
                this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2),
                this.ctx.rotate(g.d2r(this.deathFrame / 5)),
                this.ctx.scale(t, t),
                this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2)
            }
            if (this.ctx.drawImage(this.ut, this.offset.x, this.offset.y),
            this.terminals.forEach(t=>t.render()),
            this.enemies.forEach(t=>t.render()),
            this.player.render(),
            this.cameras.forEach(t=>t.render()),
            this.doors.forEach(t=>t.render()),
            this.player.dead) {
                this.dt.clearRect(0, 0, this.canvas.width, this.canvas.height);
                let t = Math.max(0, .8 - this.deathFrame / 40);
                this.dt.fillStyle = "rgba(0,0,0," + t + ")",
                this.dt.fillRect(0, 0, this.canvas.width, this.canvas.height)
            }
            if (this.dt.clearRect(0, 0, this.canvas.width, this.canvas.height),
            this.dt.fillStyle = "rgba(0,0,0,0.8)",
            this.dt.fillRect(0, 0, this.canvas.width, this.canvas.height),
            this.vision.forEach(t=>{
                this.dt.fillStyle = "rgba(255,255,255," + t.opacity + ")",
                this.dt.beginPath(),
                this.dt.moveTo(this.offset.x + t[0].x, this.offset.y + t[0].y);
                for (let i = 1; i < t.length; i++)
                    this.dt.lineTo(this.offset.x + t[i].x, this.offset.y + t[i].y);
                this.dt.closePath(),
                this.dt.fill()
            }
            ),
            this.ctx.save(),
            this.ctx.globalCompositeOperation = "darken",
            this.ctx.drawImage(this.ct, 0, 0),
            this.ctx.restore(),
            this.player.dead || (this.player.renderCrosshair(),
            this.At && g.G(this.offset.x + this.player.x - 18, this.offset.y + this.player.y + 18)),
            this.player.render(.8),
            this.enemies.forEach(t=>t.renderPost()),
            this.ctx.setTransform(1, 0, 0, 1, 0, 0),
            a.renderAttackWarning(),
            this.player.dead) {
                let t = Math.min(1, this.deathFrame / 100)
                  , s = t * (this.canvas.height + 100) - 75;
                this.ctx.fillStyle = "rgba(204,0,0,0.8)";
                for (let i = 0; i < this.canvas.width; i++)
                    this.ctx.fillRect(i, 0, 1, s + Math.abs(30 * Math.cos(i / 29) + 40 * Math.sin(.5 + i / 22) * t + 50 * Math.cos(i / 19) * t + 60 * Math.sin(i / 13) * t + 30 * Math.cos(i / 7) * t));
                let h = Math.min(80, 20 + this.deathFrame / 5)
                  , e = Math.min(.5, this.deathFrame / 50);
                this.ctx.font = i.n(h);
                let a = this.canvas.width / 2 - this.ctx.measureText("YOU ARE DEAD").width / 2;
                this.ctx.fillStyle = "rgba(255, 255, 255, " + e + ")",
                this.ctx.fillText("YOU ARE DEAD", a, this.canvas.height / 2)
            }
            if (this.levelComplete) {
                let t = Math.min(1, (game.framems - game.levelCompleteMs) / 2e3);
                this.ctx.fillStyle = "rgba(0, 0, 0, " + t + ")",
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
                this.ctx.font = i.n(40);
                let s = this.canvas.width / 2 - this.ctx.measureText("CLEAR").width / 2;
                this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)",
                this.ctx.fillText("CLEAR", s, this.canvas.height / 2)
            }
            this.menu || this.renderLevelText()
        }
        this.intro && !this.menu && this.intro.render(),
        this.menu && this.menu.render()
    }
    renderLevelText() {
        let t = Math.floor((this.framems - this.levelms) / 19)
          , s = Math.min(this.level.name.length, t)
          , h = Math.max(0, t - s - 3)
          , e = 19 * (this.level.hint.length + 3 + this.level.name.length);
        this.framems - this.levelms < e && this.audio.playClick(),
        this.framems - this.levelms - e < 3e3 && (this.ctx.font = i.n(22),
        this.ctx.fillStyle = "rgba(204, 255, 204, 0.9)",
        this.ctx.fillText(this.level.name.substring(0, s), 18, 36),
        this.level.hint && (this.ctx.font = i.n(18),
        this.ctx.fillStyle = "rgba(204, 204, 204, 0.8)",
        this.ctx.fillText(this.level.hint.substring(0, h), 18, this.canvas.height - 30)))
    }
    frame(t) {
        let i = t - this.framems;
        this.framems = t,
        i > 500 && (i = 500),
        this.update(i / 1e3),
        this.render(),
        window.requestAnimationFrame(this.frame.bind(this))
    }
    start() {
        this.vt > 0 ? this.openMenu(this.Mt) : this.openMenu(this.ft),
        window.requestAnimationFrame(this.frame.bind(this))
    }
    openMenu(t) {
        this.menu = t,
        this.menu.open()
    }
    playerDied() {
        this.player.dead = !0,
        this.deathFrame = 0
    }
    unpause() {
        this.canvas.requestPointerLock()
    }
    onUp() {
        this.menu && this.menu.onUp()
    }
    onDown() {
        this.menu && this.menu.onDown()
    }
    onLeft() {}
    onRight() {}
    onToggle() {
        if (this.menu)
            this.menu.select();
        else if (this.intro)
            this.intro.toggle();
        else if (this.player.dead)
            this.wt = this.levelIndex;
        else {
            let t = this.At;
            t && t.toggle()
        }
    }
    onEscape() {
        this.menu ? this.menu.onEscape() : document.exitPointerLock()
    }
    onMouseLock() {
        document.pointerLockElement === this.canvas ? (this.mouselocked = !0,
        this.paused = !1,
        this.menu = void 0,
        this.framems = performance.now()) : (this.mouselocked = !1,
        this.paused = !0,
        this.openMenu(this.bt))
    }
    onMouseMove(t, i, s, h) {
        this.paused || (this.crosshair.x += t,
        this.crosshair.y += i),
        this.mouse.x = s - this.canvasBounds.left,
        this.mouse.y = h - this.canvasBounds.top,
        this.menu && this.menu.onMouseMove(this.mouse.x, this.mouse.y)
    }
    onMouseClick() {
        this.menu ? this.menu.select() : this.player.dead && (this.wt = this.levelIndex)
    }
    kt(s) {
        this.levelIndex = s,
        this.level = Object.assign({}, t[s]),
        this.level.data = this.Ct(this.level.data),
        this.levelComplete = !1;
        let o = this.level.enter;
        this.player = new n,
        this.player.x = (o.p1.x + o.p2.x) / 2,
        this.player.y = (o.p1.y + o.p2.y) / 2,
        this.crosshair.x = this.player.x + (this.level.chx || 0),
        this.crosshair.y = this.player.y + (this.level.chy || -32),
        this.St(this.level),
        this.enemies = [],
        this.level.e.forEach(t=>{
            let i = new a(t);
            this.enemies.push(i)
        }
        ),
        this.cameras = [],
        this.level.c.forEach(t=>{
            let i = new h(t);
            this.cameras.push(i)
        }
        ),
        this.terminals = [],
        this.level.t.forEach(t=>{
            let i = new $(t);
            i.cameras = this.cameras.filter(t=>t.control === i.control),
            this.terminals.push(i)
        }
        ),
        this.doors = [],
        this.level.d.forEach(t=>{
            let i = new e(t);
            this.doors.push(i)
        }
        ),
        this.ut.width = 32 * this.level.width,
        this.ut.height = 32 * this.level.height,
        this.yt.fillStyle = "black",
        this.yt.fillRect(0, 0, 32 * this.level.width, 32 * this.level.height);
        for (let t = 0; t < this.level.height; t++)
            for (let s = 0; s < this.level.width; s++) {
                let h = g.$t(s, t);
                if (1 === h)
                    i.r("wall", this.yt, 32 * s, 32 * t),
                    this.Ut(1, 32 * s, 32 * t);
                else if (2 === h) {
                    let h = (3 * t + 7 * s) % 4 * 90;
                    this.yt.save(),
                    this.yt.globalAlpha = .81,
                    this.yt.translate(32 * s + 16, 32 * t + 16),
                    this.yt.rotate(g.d2r(h)),
                    i.r("floor", this.yt, -16, -16),
                    this.yt.restore(),
                    this.Ut(2, 32 * s, 32 * t)
                }
            }
        this.level.intro ? this.intro = new r(this.level.intro) : this.levelms = performance.now(),
        this.xt = !1
    }
    Ct(t) {
        let i, s, h, e = [];
        for (let a = 0; a < t.length; a++) {
            (i = t.charCodeAt(a) - 35) >= 58 && i--,
            h = (i - (s = i % 8)) / 8 + 1;
            for (let t = 0; t < h; t++)
                e.push(s)
        }
        return e
    }
    Ut(t, i, s) {
        let h, e, a, o, r;
        for (let t = 1; t < 31; t++)
            for (let l = 1; l < 31; l++)
                g.rf(100) > 40 && (h = e = a = g.rf(256),
                o = g.rf(20) / 100,
                r = 1,
                this.yt.fillStyle = "rgba(" + h + "," + e + "," + a + "," + o + ")",
                this.yt.fillRect(i + l, s + t, 1, 1))
    }
    St(t) {
        let i = {}
          , s = (t,s,h,e,a)=>{
            let o = `${t},${s}${a}`
              , r = `${h},${e}${a}`
              , l = i[o];
            l ? (delete i[o],
            i[r] = [l[0], l[1], h, e]) : i[r] = [t, s, h, e]
        }
        ;
        for (let i = 0; i < t.height; i++)
            for (let h = 0; h < t.width; h++)
                2 === t.data[i * t.width + h] && (2 !== t.data[i * t.width + h - 1] && s(32 * h, 32 * i, 32 * h, 32 * i + 32, "left"),
                2 !== t.data[i * t.width + h + 1] && s(32 * h + 32, 32 * i, 32 * h + 32, 32 * i + 32, "right"),
                2 !== t.data[(i - 1) * t.width + h] && s(32 * h, 32 * i, 32 * h + 32, 32 * i, "top"),
                2 !== t.data[(i + 1) * t.width + h] && s(32 * h, 32 * i + 32, 32 * h + 32, 32 * i + 32, "bottom"));
        this.losEdges = Object.keys(i).map(t=>{
            let s = 0
              , h = 0
              , e = 0
              , a = 0
              , o = !1
              , r = this.tileVisibilityInset;
            t.endsWith("left") ? (s = h = -r,
            e = -r,
            a = r,
            o = !0,
            g.I(i[t][0] + s, i[t][1] + e) || (e = -e),
            g.I(i[t][2] + h, i[t][3] + a) || (a = -a)) : t.endsWith("right") ? (s = h = r,
            e = -r,
            a = r,
            g.I(i[t][0] + s, i[t][1] + e) || (e = -e),
            g.I(i[t][2] + h, i[t][3] + a) || (a = -a)) : t.endsWith("top") ? (e = a = -r,
            s = -r,
            h = r,
            g.I(i[t][0] + s, i[t][1] + e) || (s = -s),
            g.I(i[t][2] + h, i[t][3] + a) || (h = -h)) : t.endsWith("bottom") && (e = a = r,
            s = -r,
            h = r,
            o = !0,
            g.I(i[t][0] + s, i[t][1] + e) || (s = -s),
            g.I(i[t][2] + h, i[t][3] + a) || (h = -h));
            let l = {
                p1: {
                    x: i[t][0] + s,
                    y: i[t][1] + e
                },
                p2: {
                    x: i[t][2] + h,
                    y: i[t][3] + a
                }
            };
            return o && ([l.p1,l.p2] = [l.p2, l.p1]),
            l
        }
        )
    }
    Et() {}
    Dt() {
        let t = game.player.x - 34 * g.cos(game.facing)
          , i = game.player.y - 34 * g.sin(game.facing)
          , s = Math.floor(t / 32)
          , h = Math.floor(i / 32)
          , e = [[s, h, 2]]
          , a = [];
        const o = (t,i,o)=>{
            if (g.T(t, i))
                return void (a[i * this.level.width + t] = 5e4);
            let r = a[i * this.level.width + t];
            t === s && i === h || !g.ot(32 * t + 16, 32 * i + 16) || (o += 1e4),
            (!r || o < r) && (a[i * this.level.width + t] = o,
            e.push([t - 1, i, o + 32]),
            e.push([t + 1, i, o + 32]),
            e.push([t, i - 1, o + 32]),
            e.push([t, i + 1, o + 32]))
        }
        ;
        for (; e.length > 0; ) {
            let t = e.shift();
            o(t[0], t[1], t[2])
        }
        this.attackGrid = a
    }
}
,
game.init().start();
//# sourceMappingURL=app.js.map
