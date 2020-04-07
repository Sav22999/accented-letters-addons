n_letters = 26;
var copied = "Copied"
var char_copied_n = 0;

function copyLetter(text) {
    document.getElementById("text_to_copy").style.display = "block";
    document.getElementById("text_to_copy").value = text;
    var copyText = document.getElementById("text_to_copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text_to_copy").style.display = "none";
    showCopied();
}

function setLowerUpperCase(type) {
    for (var i = 0; i < n_letters; i++) {
        type == "upper" ? document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toUpperCase() : document.getElementsByClassName("letter")[i].value = (document.getElementsByClassName("letter")[i].value).toLowerCase();

        //document.getElementsByClassName("letter")[i].onclick = function(e){copyLetter(i);};
    }
    if (type == "upper") {
        document.getElementById("lowercase").style.borderTopColor = "transparent";
        document.getElementById("lowercase").style.color = "black";
        document.getElementById("uppercase").style.borderTopColor = "rgb(10, 132, 255)";
        document.getElementById("uppercase").style.color = "rgb(10, 132, 255)";
    } else if (type == "lower") {
        document.getElementById("lowercase").style.borderTopColor = "rgb(10, 132, 255)";
        document.getElementById("lowercase").style.color = "rgb(10, 132, 255)";
        document.getElementById("uppercase").style.borderTopColor = "transparent";
        document.getElementById("uppercase").style.color = "black";
    }
}

function setUILanguage() {
    var lang = browser.i18n.getUILanguage().toString();
    var uppercase_title = "", lowercase_title = "";
    switch (lang) {
        case "ar":
            //Arabic
            uppercase_title = "الأحرف الكبيرة";
            lowercase_title = "أحرف صغيرة";
            copied = "نسخ";
            break;

        case "de":
            //German
            uppercase_title = "Großbuchstaben";
            lowercase_title = "Kleinbuchstaben";
            copied = "Kopiert";
            break;

        case "es-ES":
        case "es-AR":
        case "es-CL":
        case "es-MX":
            //Spanish (Spain-ES), but also Spanish (Argentina-AR), Spanish (Chile-CL) and Spanish (Mexico-MX)
            uppercase_title = "Mayúscula";
            lowercase_title = "Minúscula";
            copied = "Copiado";
            break;

        case "fr":
            //French
            uppercase_title = "Majuscule";
            lowercase_title = "Minuscule";
            copied = "Copié";
            break;

        case "it":
            //Italian
            uppercase_title = "Maiuscolo";
            lowercase_title = "Minuscolo";
            copied = "Copiato";
            break;

        case "ja":
            //Japanese
            uppercase_title = "大文字";
            lowercase_title = "小文字";
            copied = "コピーしました";
            break;

        case "nl":
            //Dutch
            uppercase_title = "Hoofdletters";
            lowercase_title = "Kleine letters";
            copied = "Gekopieerd";
            break;

        case "pl":
            //Polish
            uppercase_title = "Duże litery";
            lowercase_title = "Małe litery";
            copied = "Skopiowano";
            break;

        case "pt-PT":
        case "pt-BR":
            //Portuguese (Portugal-PT), but also Portuguese (Brazilian-BR)
            uppercase_title = "Maiúsculas";
            lowercase_title = "Minúsculas";
            copied = "Copiado";
            break;

        case "zh-CN":
        case "zh-TW":
            //Chinese (Simplified-CN), but also Chinese (Traditional-TW)
            uppercase_title = "大写";
            lowercase_title = "小写字母";
            copied = "复制的";
            break;

        default:
            //other languages, and also en-GB (British-GB), en-US (American-US), en-CA (Canadian-CA)
            uppercase_title = "Uppercase";
            lowercase_title = "Lowercase";
            copied = "Copied";
    }
    document.getElementById("uppercase").value = uppercase_title;
    document.getElementById("lowercase").value = lowercase_title;
}

setLowerUpperCase("lower");
setUILanguage();

// button click events
document.getElementById("lowercase").onclick = function (e) {
    setLowerUpperCase("lower");
};
document.getElementById("uppercase").onclick = function (e) {
    setLowerUpperCase("upper");
};

for (var i = 0; i < n_letters; i++) {

    document.getElementsByClassName("letter")[i].onclick = function (e) {
        copyLetter(this.value);
    };
}

function showCopied() {
    let index_to_use = char_copied_n;
    char_copied_n++;
    let new_b_element = document.createElement("b");
    new_b_element.className = "character-copied";
    new_b_element.id = "character-copied-" + index_to_use;
    new_b_element.innerHTML = copied + " ✔";
    document.getElementById("popup-content").append(new_b_element);
    setTimeout(function () {
        hideCopied(index_to_use);
    }, 1500);
}

function hideCopied(index_to_use) {
    document.getElementById("character-copied-" + index_to_use).style.display = "none";
}