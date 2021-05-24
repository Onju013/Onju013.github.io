//カスタムコントロール的なやつ
//$(document).readyで呼んでいる無理やり構成
//良い方法知らず脳筋でやっているだけなので別ファイルとしてまとめている
//
//memo
//  最終的にhtmlを自動生成するプログラム書くから要らんかも
//

//ステータス
function initializeParamControls() {
    $("input.param").each((i, e) => {
        e.type = "number";
        e.step = 1;
        e.value = 1;
        e.min = 1;
        e.max = 1200;
    });
}

//スキル数
function initializeSkillControls() {
    $("input.skillcount").each((i, e) => {
        e.type = "number";
        e.step = 1;
        e.value = 0;
        e.min = 0;
        e.max = 50;

        let buttonPlus = document.createElement("button");
        buttonPlus.type = "button";
        buttonPlus.innerText = "+";
        buttonPlus.className = "skillcount-plusbutton";
        buttonPlus.dataset.targetId = e.id;
        e.after(buttonPlus);

        let buttonMinus = document.createElement("button");
        buttonMinus.type = "button";
        buttonMinus.innerText = "-";
        buttonMinus.className = "skillcount-minusbutton";
        buttonMinus.dataset.targetId = e.id;
        e.before(buttonMinus);
    });

    $("button.skillcount-plusbutton").on("click", (e) => {
        let target = $("#" + e.target.dataset.targetId);
        target.val(Number(target.val()) + 1).change();
    });

    $("button.skillcount-minusbutton").on("click", (e) => {
        let target = $("#" + e.target.dataset.targetId);
        target.val(Number(target.val()) - 1).change();
    });
}

function initializeControls() {
    initializeParamControls();
    initializeSkillControls();
}
