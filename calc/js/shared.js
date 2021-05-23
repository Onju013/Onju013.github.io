var paramnames = ["speed", "stamina", "power", "guts", "smart"];

//シリアライズ用にname設定
$(document).ready(() => {
    for (let i = 0; i < $("*").length; i++) {
        const element = $("*")[i];
        let id = element.getAttribute("id");

        if (element.getAttribute("id") != null) {
            element.setAttribute("name", id);
        }
    }
    refresh();
});

$("input").on("change", () => {
    refresh();
});

$("input").on("keyup", () => {
    refresh();
});

$("select").on("change", () => {
    refresh();
});

$("#save").on("click", () => {
    let s = $("form").serializeArray();
    let json = JSON.stringify(s);
    $("#savestr").val(json);
});

$("#load").on("click", () => {
    let json = JSON.parse($("#savestr").val());

    json.forEach((pair) => {
        //name と id は一致させている
        $("#" + pair.name).val(pair["value"]);
    });

    refresh();
});

function refresh() {
    var totalscore = 0;

    //ステータス計算
    paramnames.forEach((p) => {
        let score = calcScore($("#" + p).val());
        $("#" + p + "score").html(score);
        totalscore += score;
    });

    //固有スキル計算
    let koyuscore = $("#sainou").val() * $("#skillkoyulevel").val();
    $("#skillkoyuscore").html(koyuscore);
    totalscore += koyuscore;

    //スキル計算
    skillnames.forEach((s) => {
        let score = $("#" + s + "perscore").val() * $("#" + s + "count").val();
        $("#" + s + "score").html(score);
        totalscore += score;
    });

    //ランク
    let rank = "";

    if (totalscore <= 8199) rank = "余り " + (8199 - totalscore);
    else rank = '<font color="red">超過</font> ' + (totalscore - 8199);

    $("#result").html(totalscore + "（" + rank + "）");
}

function calcScore(param) {
    let x = [0.5, 0.26];

    //G
    if (param < 50) {
        return Math.round(param * 0.5 + 0.26);
    }
    //G+
    if (param < 100) {
        return Math.round(param * 0.8 - 14.7);
    }
    //F
    if (param < 150) {
        return param - 34;
    }
    //F+
    if (param < 200) {
        return Math.round(param * 1.3 - 79.2);
    }
    //E
    if (param < 250) {
        return Math.round(param * 1.6 - 138.9);
    }
    //E+
    if (param < 300) {
        return Math.round(param * 1.8 - 188.7);
    }
    //D
    if (param < 350) {
        return Math.round(param * 2.1 - 278.4);
    }
    //D+
    if (param < 400) {
        return Math.round(param * 2.4 - 383);
    }
    //C1
    if (param < 450) {
        return Math.round(param * 2.6 - 462.9);
    }
    //C2
    if (param < 500) {
        return Math.round(param * 2.8 - 552.6);
    }
    //C+1
    if (param < 550) {
        return Math.round(param * 2.9 - 602.55);
    }
    //C+2
    if (param < 600) {
        return Math.round(param * 3 - 657);
    }
    //B1
    if (param < 650) {
        return Math.round(param * 3.1 - 717.4);
    }
    //B2
    if (param < 700) {
        return Math.round(param * 3.3 - 847.15);
    }
    //B+1
    if (param < 750) {
        return Math.round(param * 3.4 - 917);
    }
    //B+2
    if (param < 800) {
        return Math.round(param * 3.5 - 992);
    }
    //A1
    if (param < 850) {
        return Math.round(param * 3.9 - 1311.6);
    }
    //A2
    if (param < 900) {
        return Math.round(param * 4.1 - 1481.35);
    }
    //A+1
    if (param < 950) {
        return Math.round(param * 4.2 - 1571.2);
    }
    //A+2
    if (param < 1000) {
        return Math.round(param * 4.3 - 1666.2);
    }
    //S
    if (param < 1050) {
        return Math.round(param * 5.2 - 2565.2);
    }
    //S+
    if (param < 1100) {
        return Math.round(param * 5.5 - 2879.8);
    }
    //SS
    if (param < 1150) {
        return Math.round(param * 6.6 - 4088.8);
    }
    //SS+
    if (param <= 1200) {
        return Math.round(param * 6.8 - 4318.6);
    }
}
