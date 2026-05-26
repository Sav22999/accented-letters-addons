var settings = {
    autoInsert: false,
    additionalSets: [],
    customChars: '',
    fontFamily: 'monospace',
    defaultCase: 'lower',
    showSearch: false,
    hiddenChars: []
};

var default_chars = [
    { char: 'á', desc: 'acute_a' }, { char: 'à', desc: 'grave_a' }, { char: 'ä', desc: 'umlaut_a' }, { char: 'â', desc: 'circumflex_a' }, { char: 'å', desc: 'ring_a' }, { char: 'ã', desc: 'tilde_a' }, { char: 'ā', desc: 'macron_a' }, { char: 'ă', desc: 'breve_a' },
    { char: 'é', desc: 'acute_e' }, { char: 'è', desc: 'grave_e' }, { char: 'ë', desc: 'umlaut_e' }, { char: 'ê', desc: 'circumflex_e' }, { char: 'ė', desc: 'dot_e' }, { char: 'ē', desc: 'macron_e' }, { char: 'ĕ', desc: 'breve_e' }, { char: 'ě', desc: 'caron_e' },
    { char: 'í', desc: 'acute_i' }, { char: 'ì', desc: 'grave_i' }, { char: 'ï', desc: 'umlaut_i' }, { char: 'î', desc: 'circumflex_i' }, { char: 'ĩ', desc: 'tilde_i' }, { char: 'ī', desc: 'macron_i' }, { char: 'ĭ', desc: 'breve_i' },
    { char: 'ó', desc: 'acute_o' }, { char: 'ò', desc: 'grave_o' }, { char: 'ö', desc: 'umlaut_o' }, { char: 'ô', desc: 'circumflex_o' }, { char: 'õ', desc: 'tilde_o' }, { char: 'ō', desc: 'macron_o' }, { char: 'ŏ', desc: 'breve_o' }, { char: 'ő', desc: 'double_acute_o' },
    { char: 'ú', desc: 'acute_u' }, { char: 'ù', desc: 'grave_u' }, { char: 'ü', desc: 'umlaut_u' }, { char: 'û', desc: 'circumflex_u' }, { char: 'ů', desc: 'ring_u' }, { char: 'ũ', desc: 'tilde_u' }, { char: 'ū', desc: 'macron_u' }, { char: 'ŭ', desc: 'breve_u' }, { char: 'ű', desc: 'double_acute_u' },
    { char: 'ć', desc: 'acute_c' }, { char: 'ĉ', desc: 'circumflex_c' }, { char: 'ċ', desc: 'dot_c' }, { char: 'č', desc: 'caron_c' }, { char: 'ý', desc: 'acute_y' }, { char: 'ŷ', desc: 'circumflex_y' }, { char: 'ÿ', desc: 'umlaut_y' },
    { char: 'ń', desc: 'acute_n' }, { char: 'ñ', desc: 'tilde_n' }, { char: 'ň', desc: 'caron_n' }, { char: 'ǵ', desc: 'acute_g' }, { char: 'ĝ', desc: 'circumflex_g' }, { char: 'ġ', desc: 'dot_g' }, { char: 'ğ', desc: 'breve_g' }, { char: 'ģ', desc: 'cedilla_g' },
    { char: 'ď', desc: 'caron_d' }, { char: 'ť', desc: 'caron_t' }, { char: 'ĥ', desc: 'circumflex_h' }, { char: 'ŵ', desc: 'circumflex_w' }, { char: 'ŕ', desc: 'acute_r' }, { char: 'ř', desc: 'caron_r' },
    { char: 'ś', desc: 'acute_s' }, { char: 'ŝ', desc: 'circumflex_s' }, { char: 'ź', desc: 'acute_z' }, { char: 'ż', desc: 'dot_z' }, { char: 'ž', desc: 'caron_z' }
];

var lang_chars = {
    'set-fr': [
        { char: "à", desc: "grave_a" }, { char: "â", desc: "circumflex_a" }, { char: "æ", desc: "ae_ligature" }, 
        { char: "ç", desc: "cedilla_c" }, { char: "é", desc: "acute_e" }, { char: "è", desc: "grave_e" }, 
        { char: "ê", desc: "circumflex_e" }, { char: "ë", desc: "umlaut_e" }, { char: "î", desc: "circumflex_i" }, 
        { char: "ï", desc: "umlaut_i" }, { char: "ô", desc: "circumflex_o" }, { char: "œ", desc: "oe_ligature" }, 
        { char: "ù", desc: "grave_u" }, { char: "û", desc: "circumflex_u" }, { char: "ü", desc: "umlaut_u" }, 
        { char: "ÿ", desc: "umlaut_y" }
    ],
    'set-de': [
        { char: "ä", desc: "umlaut_a" }, { char: "ö", desc: "umlaut_o" }, { char: "ü", desc: "umlaut_u" }, 
        { char: "ß", desc: "eszett" }
    ],
    'set-es': [
        { char: "á", desc: "acute_a" }, { char: "é", desc: "acute_e" }, { char: "í", desc: "acute_i" }, 
        { char: "ó", desc: "acute_o" }, { char: "ú", desc: "acute_u" }, { char: "ü", desc: "umlaut_u" }, 
        { char: "ñ", desc: "tilde_n" }, { char: "¡", desc: "inverted_exclamation" }, { char: "¿", desc: "inverted_question" }
    ],
    'set-pt': [
        { char: "á", desc: "acute_a" }, { char: "â", desc: "circumflex_a" }, { char: "ã", desc: "tilde_a" }, 
        { char: "à", desc: "grave_a" }, { char: "ç", desc: "cedilla_c" }, { char: "é", desc: "acute_e" }, 
        { char: "ê", desc: "circumflex_e" }, { char: "í", desc: "acute_i" }, { char: "ó", desc: "acute_o" }, 
        { char: "ô", desc: "circumflex_o" }, { char: "õ", desc: "tilde_o" }, { char: "ú", desc: "acute_u" }
    ],
    'set-el': [
        { char: "α", desc: "alpha" }, { char: "β", desc: "beta" }, { char: "γ", desc: "gamma" }, 
        { char: "δ", desc: "delta" }, { char: "ε", desc: "epsilon" }, { char: "ζ", desc: "zeta" }, 
        { char: "η", desc: "eta" }, { char: "θ", desc: "theta" }, { char: "ι", desc: "iota" }, 
        { char: "κ", desc: "kappa" }, { char: "λ", desc: "lambda" }, { char: "μ", desc: "mu" }, 
        { char: "ν", desc: "nu" }, { char: "ξ", desc: "xi" }, { char: "ο", desc: "omicron" }, 
        { char: "π", desc: "pi" }, { char: "ρ", desc: "rho" }, { char: "σ", desc: "sigma" }, 
        { char: "τ", desc: "tau" }, { char: "υ", desc: "upsilon" }, { char: "φ", desc: "phi" }, 
        { char: "χ", desc: "chi" }, { char: "ψ", desc: "psi" }, { char: "ω", desc: "omega" }
    ],
    'set-nordic': [
        { char: "å", desc: "ring_a" }, { char: "æ", desc: "ae_ligature" }, { char: "ø", desc: "o_slash" }, 
        { char: "ð", desc: "eth" }, { char: "þ", desc: "thorn" }, { char: "ý", desc: "acute_y" }
    ],
    'set-pl': [
        { char: "ą", desc: "ogonek_a" }, { char: "ć", desc: "acute_c" }, { char: "ę", desc: "ogonek_e" }, 
        { char: "ł", desc: "l_stroke" }, { char: "ń", desc: "acute_n" }, { char: "ó", desc: "acute_o" }, 
        { char: "ś", desc: "acute_s" }, { char: "ź", desc: "acute_z" }, { char: "ż", desc: "dot_z" }
    ],
    'set-cz': [
        { char: "á", desc: "acute_a" }, { char: "č", desc: "caron_c" }, { char: "ď", desc: "caron_d" }, 
        { char: "é", desc: "acute_e" }, { char: "ě", desc: "caron_e" }, { char: "í", desc: "acute_i" }, 
        { char: "ň", desc: "caron_n" }, { char: "ó", desc: "acute_o" }, { char: "ř", desc: "caron_r" }, 
        { char: "š", desc: "caron_s" }, { char: "ť", desc: "caron_t" }, { char: "ú", desc: "acute_u" }, 
        { char: "ů", desc: "ring_u" }, { char: "ý", desc: "acute_y" }, { char: "ž", desc: "caron_z" }
    ],
    'set-ro': [
        { char: "ă", desc: "breve_a" }, { char: "â", desc: "circumflex_a" }, { char: "î", desc: "circumflex_i" }, 
        { char: "ș", desc: "comma_s" }, { char: "ț", desc: "comma_t" }
    ],
    'set-cyrillic': [
        { char: "а", desc: "cyrillic_a" }, { char: "б", desc: "cyrillic_be" }, { char: "в", desc: "cyrillic_ve" }, 
        { char: "г", desc: "cyrillic_ge" }, { char: "д", desc: "cyrillic_de" }, { char: "е", desc: "cyrillic_ie" }, 
        { char: "ё", desc: "cyrillic_io" }, { char: "ж", desc: "cyrillic_zhe" }, { char: "з", desc: "cyrillic_ze" }, 
        { char: "и", desc: "cyrillic_i" }, { char: "й", desc: "cyrillic_short_i" }, { char: "к", desc: "cyrillic_ka" }, 
        { char: "л", desc: "cyrillic_el" }, { char: "м", desc: "cyrillic_em" }, { char: "н", desc: "cyrillic_en" }, 
        { char: "о", desc: "cyrillic_o" }, { char: "п", desc: "cyrillic_pe" }, { char: "р", desc: "cyrillic_er" }, 
        { char: "с", desc: "cyrillic_es" }, { char: "т", desc: "cyrillic_te" }, { char: "у", desc: "cyrillic_u" }, 
        { char: "ф", desc: "cyrillic_ef" }, { char: "х", desc: "cyrillic_ha" }, { char: "ц", desc: "cyrillic_tse" }, 
        { char: "ч", desc: "cyrillic_che" }, { char: "ш", desc: "cyrillic_sha" }, { char: "щ", desc: "cyrillic_shcha" }, 
        { char: "ъ", desc: "cyrillic_hard_sign" }, { char: "ы", desc: "cyrillic_yeru" }, { char: "ь", desc: "cyrillic_soft_sign" }, 
        { char: "э", desc: "cyrillic_e" }, { char: "ю", desc: "cyrillic_yu" }, { char: "я", desc: "cyrillic_ya" }
    ],
    'set-math': [
        { char: "±", desc: "plus_minus" }, { char: "×", desc: "multiplication" }, { char: "÷", desc: "division" }, 
        { char: "≈", desc: "approximately" }, { char: "≠", desc: "not_equal" }, { char: "≡", desc: "identical" }, 
        { char: "≤", desc: "less_equal" }, { char: "≥", desc: "greater_equal" }, { char: "‰", desc: "per_mille" }, 
        { char: "½", desc: "one_half" }, { char: "⅓", desc: "one_third" }, { char: "¼", desc: "one_fourth" }, 
        { char: "¾", desc: "three_fourths" }, { char: "∑", desc: "sum" }, { char: "∏", desc: "product" }, 
        { char: "∆", desc: "delta" }, { char: "√", desc: "square_root" }, { char: "∞", desc: "infinity" }, 
        { char: "∫", desc: "integral" }
    ],
    'set-arrows': [
        { char: "←", desc: "arrow_left" }, { char: "↑", desc: "arrow_up" }, { char: "→", desc: "arrow_right" }, 
        { char: "↓", desc: "arrow_down" }, { char: "↔", desc: "arrow_left_right" }, { char: "↕", desc: "arrow_up_down" }, 
        { char: "↖", desc: "arrow_nw" }, { char: "↗", desc: "arrow_ne" }, { char: "↘", desc: "arrow_se" }, 
        { char: "↙", desc: "arrow_sw" }
    ],
    'set-currency': [
        { char: "€", desc: "euro" }, { char: "$", desc: "dollar" }, { char: "¢", desc: "cent" }, 
        { char: "£", desc: "pound" }, { char: "¥", desc: "yen" }, { char: "₹", desc: "rupee" }, 
        { char: "₽", desc: "ruble" }, { char: "₪", desc: "shekel" }, { char: "₩", desc: "won" }, 
        { char: "₫", desc: "dong" }, { char: "฿", desc: "baht" }, { char: "₠", desc: "euro_currency" }, 
        { char: "₡", desc: "colon" }, { char: "₢", desc: "cruzeiro" }, { char: "₣", desc: "french_franc" }, 
        { char: "₤", desc: "lira" }, { char: "₥", desc: "mill" }, { char: "₦", desc: "naira" }, 
        { char: "₧", desc: "peseta" }, { char: "₭", desc: "kip" }, { char: "₮", desc: "tugrik" }, 
        { char: "₯", desc: "drachma" }, { char: "₰", desc: "german_penny" }, { char: "₱", desc: "peso" }, 
        { char: "₲", desc: "guarani" }, { char: "₳", desc: "austral" }, { char: "₴", desc: "hryvnia" }, 
        { char: "₵", desc: "cedi" }, { char: "₶", desc: "livre_tournois" }, { char: "₷", desc: "spesmilo" }, 
        { char: "₸", desc: "tenge" }, { char: "₺", desc: "turkish_lira" }, { char: "₼", desc: "manat" }, 
        { char: "₾", desc: "lari" }, { char: "₿", desc: "bitcoin" }, { char: "ƒ", desc: "florin" }, 
        { char: "֏", desc: "dram" }, { char: "؋", desc: "afghani" }, { char: "﷼", desc: "rial" }, 
        { char: "৳", desc: "taka" }, { char: "៛", desc: "riel" }, { char: "¤", desc: "currency_sign" }
    ],
    'set-latin': "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

var copied = "Copied";
var char_copied_n = 0;

const normalizeString = (str) => {
    return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
};

function copyLetter(text) {
    if (settings.autoInsert) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "insertText", text: text}, function(response) {
                    if (chrome.runtime.lastError || (response && !response.success)) {
                        // Fallback to copy if auto-insert fails
                        fallbackCopy(text);
                    } else {
                        showCopied();
                    }
                });
            } else {
                fallbackCopy(text);
            }
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    document.getElementById("text_to_copy").style.display = "block";
    document.getElementById("text_to_copy").value = text;
    var copyText = document.getElementById("text_to_copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text_to_copy").style.display = "none";
    showCopied();
}


var translations = {};

function loadTranslations(callback) {
    let lang = chrome.i18n.getUILanguage().split('-')[0].toLowerCase(); // Prendi la parte principale (es. 'it' da 'it-IT')
    
    // Lista di lingue supportate che hanno un file JSON dedicato
    const supportedLangs = ['it', 'en', 'pl', 'pt', 'fr', 'de', 'ru', 'uk', 'ja', 'es', 'ar', 'ia', 'sv', 'nl'];
    if (!supportedLangs.includes(lang)) {
        lang = 'en';
    }

    let url = chrome.runtime.getURL('js/translations/' + lang + '.json');

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Translation not found');
            return response.json();
        })
        .catch(() => {
            // Fallback su inglese se la lingua non è disponibile
            return fetch(chrome.runtime.getURL('js/translations/en.json')).then(res => res.json());
        })
        .then(data => {
            translations = data;
            if (callback) callback();
        });
}

function setUILanguage() {
    document.getElementById("uppercase").value = translations.uppercase;
    document.getElementById("lowercase").value = translations.lowercase;
    document.getElementById("search-bar").placeholder = translations.search_placeholder || "Search character...";
    copied = translations.copied;
    loadSettingsAndChars();
}

function loadSettingsAndChars() {
    chrome.storage.local.get({
        autoInsert: false,
        additionalSets: [],
        customChars: '',
        fontFamily: 'monospace',
        defaultCase: 'lower',
        showSearch: false,
        hiddenChars: []
    }, function(items) {
        settings = items;
        applyFontFamily();
        
        if (settings.showSearch) {
            document.getElementById("search-container").style.display = "block";
            document.getElementById("letters_container").style.top = "74px";
            document.getElementById("letters_container").style.height = "calc(100% - 74px)";
        } else {
            document.getElementById("search-container").style.display = "none";
            document.getElementById("letters_container").style.top = "38px";
            document.getElementById("letters_container").style.height = "calc(100% - 38px)";
        }

        // Imposta lo stato maiuscolo/minuscolo iniziale in base alle impostazioni
        if (settings.defaultCase === 'upper') {
            document.getElementById("uppercase").classList.add("selection_title_sel");
            document.getElementById("lowercase").classList.remove("selection_title_sel");
        } else {
            document.getElementById("lowercase").classList.add("selection_title_sel");
            document.getElementById("uppercase").classList.remove("selection_title_sel");
        }

        renderLetters();
    });
}

function renderLetters(filter = '') {
    const defaultContainer = document.getElementById("default_letters");
    const extraContainer = document.getElementById("extra_letters");
    defaultContainer.innerHTML = '';
    extraContainer.innerHTML = '';

    const lowercase = document.getElementById("lowercase").classList.contains("selection_title_sel");
    const normFilter = normalizeString(filter);
    
    // Render default letters
    default_chars.forEach(item => {
        if (settings.hiddenChars.includes(item.char)) return;
        
        const charToUse = lowercase ? item.char.toLowerCase() : item.char.toUpperCase();
        const translatedDesc = translations[item.desc] || item.desc;
        
        if (filter && !normalizeString(item.char).includes(normFilter) && !normalizeString(translatedDesc).includes(normFilter)) {
            return;
        }

        const btn = createLetterButton(charToUse, translatedDesc);
        defaultContainer.appendChild(btn);
    });

    // Render extra chars and custom chars
    renderExtraChars(extraContainer, filter);
}

function createLetterButton(char, title) {
    const btn = document.createElement("input");
    btn.type = "button";
    btn.className = "letter";
    btn.value = char;
    btn.title = title;
    btn.onclick = function() { copyLetter(this.value); };
    return btn;
}

function renderExtraChars(container, filter = '') {
    const lowercase = document.getElementById("lowercase").classList.contains("selection_title_sel");
    const normFilter = normalizeString(filter);

    // Mostra i set aggiuntivi con titoli
    settings.additionalSets.forEach(setId => {
        if (lang_chars[setId]) {
            let setHtml = [];
            let items = [];
            
            // Gestione sia di array di oggetti che di stringhe (set-latin)
            if (Array.isArray(lang_chars[setId])) {
                items = lang_chars[setId];
            } else {
                items = lang_chars[setId].split('').map(c => ({ char: c, desc: '' }));
            }
            
            const setTitle = translations[setId.replace('-', '_')] || setId;
            const titleMatches = normFilter && normalizeString(setTitle).includes(normFilter);

            items.forEach((item) => {
                const charLower = item.char.toLowerCase();
                const charUpper = item.char.toUpperCase();
                const charToUse = lowercase ? charLower : charUpper;
                const translatedDesc = item.desc ? (translations[item.desc] || item.desc) : '';
                
                // Se c'è un filtro, controlla se il carattere, la descrizione o il titolo del set corrisponde
                if (!filter || titleMatches || normalizeString(item.char).includes(normFilter) || (translatedDesc && normalizeString(translatedDesc).includes(normFilter))) {
                    setHtml.push({ char: charToUse, desc: translatedDesc });
                }
            });

            if (setHtml.length > 0) {
                const title = document.createElement("div");
                title.className = "extra-set-title";
                title.innerText = setTitle;
                container.appendChild(title);

                const setCharsContainer = document.createElement("div");
                setCharsContainer.className = "chars_container";
                container.appendChild(setCharsContainer);

                // Rimuovi duplicati risultanti dal cambio di case
                const uniqueChars = [];
                const seen = new Set();
                setHtml.forEach(item => {
                    if (!seen.has(item.char)) {
                        uniqueChars.push(item);
                        seen.add(item.char);
                    }
                });

                uniqueChars.forEach(item => {
                    setCharsContainer.appendChild(createLetterButton(item.char, item.desc));
                });
            }
        }
    });

    // Mostra i caratteri personalizzati con titolo
    if (settings.customChars && settings.customChars.trim().length > 0) {
        let customHtml = [];
        const customChars = settings.customChars.split('');
        const customTitle = translations.custom_chars_title || "Custom characters";
        const titleMatches = normFilter && normalizeString(customTitle).includes(normFilter);

        customChars.forEach((char) => {
            if (char.trim() === '') return;
            const charLower = char.toLowerCase();
            const charUpper = char.toUpperCase();
            const charToUse = lowercase ? charLower : charUpper;
            
            if (!filter || titleMatches || normalizeString(char).includes(normFilter)) {
                customHtml.push(charToUse);
            }
        });

        if (customHtml.length > 0) {
            const title = document.createElement("div");
            title.className = "extra-set-title";
            title.innerText = customTitle;
            container.appendChild(title);

            const customCharsContainer = document.createElement("div");
            customCharsContainer.className = "chars_container";
            container.appendChild(customCharsContainer);

            const uniqueCustomHtml = [...new Set(customHtml)];

            uniqueCustomHtml.forEach(char => {
                customCharsContainer.appendChild(createLetterButton(char, ''));
            });
        }
    }
}

function applyFontFamily() {
    const container = document.getElementById("popup-content");
    if (settings.fontFamily === 'sans-serif') {
        container.classList.remove('font-monospace');
        container.classList.add('font-sans-serif');
    } else {
        container.classList.remove('font-sans-serif');
        container.classList.add('font-monospace');
    }
}

function init() {
    loadTranslations(setUILanguage);
    
    // button click events
    document.getElementById("lowercase").onclick = function (e) {
        document.getElementById("lowercase").classList.add("selection_title_sel");
        document.getElementById("uppercase").classList.remove("selection_title_sel");
        renderLetters(document.getElementById("search-bar").value);
    };
    document.getElementById("uppercase").onclick = function (e) {
        document.getElementById("uppercase").classList.add("selection_title_sel");
        document.getElementById("lowercase").classList.remove("selection_title_sel");
        renderLetters(document.getElementById("search-bar").value);
    };
    document.getElementById("search-bar").oninput = function (e) {
        renderLetters(this.value);
    };
    document.getElementById("settings_btn").onclick = function (e) {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('settings.html'));
        }
    };
}

init();

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