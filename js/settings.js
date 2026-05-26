var translations = {};

function loadTranslations(callback) {
    let lang = chrome.i18n.getUILanguage().split('-')[0].toLowerCase();

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
            return fetch(chrome.runtime.getURL('js/translations/en.json')).then(res => res.json());
        })
        .then(data => {
            translations = data;
            if (callback) callback();
        });
}

function applyTranslations() {
    document.getElementById('settings-title').textContent = translations.settings_title;
    document.getElementById('auto-insert-title').textContent = translations.auto_insert_title;
    document.querySelector('label[for="auto-insert"]').textContent = translations.auto_insert_label;
    document.getElementById('auto-insert-note').textContent = translations.auto_insert_note;
    document.getElementById('additional-sets-title').textContent = translations.additional_sets_title;
    document.getElementById('custom-chars-title').textContent = translations.custom_chars_label;
    document.getElementById('custom-chars-note').textContent = translations.custom_chars_note;
    document.getElementById('custom-chars').placeholder = translations.custom_chars_placeholder;
    document.getElementById('save').textContent = translations.save_settings;
    document.getElementById('font-family-title').textContent = translations.font_family_title;
    document.getElementById('font-monospace-label').textContent = translations.font_family_monospace;
    document.getElementById('font-sans-label').textContent = translations.font_family_sans;
    document.getElementById('default-case-title').textContent = translations.default_case_title || "Default Case";
    document.getElementById('case-lower-label').textContent = translations.lowercase;
    document.getElementById('case-upper-label').textContent = translations.uppercase;

    document.getElementById('ui-elements-title').textContent = translations.ui_elements_title || "UI Elements";
    document.getElementById('show-search-label').textContent = translations.show_search_label || "Show search bar in popup";
    document.getElementById('manage-default-chars-title').textContent = translations.manage_default_chars_title || "Default Characters Visibility";
    document.getElementById('manage-default-chars-note').textContent = translations.manage_default_chars_note || "Uncheck the characters you want to hide from the popup.";

    if (translations.backup_title) {
        document.getElementById('backup-title').textContent = translations.backup_title;
        document.getElementById('backup-note').textContent = translations.backup_note;
        document.getElementById('export-btn').textContent = translations.export_btn;
        document.getElementById('import-btn').textContent = translations.import_btn;
    }

    if (translations.set_currency) {
        document.querySelector('label[for="set-currency"]').textContent = translations.set_currency;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTranslations(() => {
        applyTranslations();
        populateDefaultCharsList();
    });
    // Carica le impostazioni salvate
    chrome.storage.local.get({
        autoInsert: false,
        additionalSets: [],
        customChars: '',
        fontFamily: 'monospace',
        defaultCase: 'lower',
        showSearch: false,
        hiddenChars: []
    }, (items) => {
        document.getElementById('auto-insert').checked = items.autoInsert;
        document.getElementById('custom-chars').value = items.customChars;
        document.getElementById('show-search').checked = items.showSearch;

        if (items.fontFamily === 'sans-serif') {
            document.getElementById('font-sans').checked = true;
        } else {
            document.getElementById('font-monospace').checked = true;
        }

        if (items.defaultCase === 'upper') {
            document.getElementById('case-upper').checked = true;
        } else {
            document.getElementById('case-lower').checked = true;
        }

        items.additionalSets.forEach(setId => {
            const checkbox = document.getElementById(setId);
            if (checkbox) checkbox.checked = true;
        });

        // Mark hidden chars as active/inactive
        setTimeout(() => {
            items.hiddenChars.forEach(char => {
                const btn = document.querySelector(`.char-btn[data-char="${char}"]`);
                if (btn) {
                    btn.classList.remove('active');
                    btn.classList.add('inactive');
                }
            });
        }, 100);
    });

    // Salva le impostazioni
    document.getElementById('save').addEventListener('click', () => {
        const autoInsert = document.getElementById('auto-insert').checked;
        const customChars = document.getElementById('custom-chars').value;
        const fontFamily = document.querySelector('input[name="font-family"]:checked').value;
        const defaultCase = document.querySelector('input[name="default-case"]:checked').value;
        const showSearch = document.getElementById('show-search').checked;
        const additionalSets = [];

        document.querySelectorAll('.set-group input[type="checkbox"]').forEach(checkbox => {
            if (checkbox.checked) {
                additionalSets.push(checkbox.id);
            }
        });

        const hiddenChars = [];
        document.querySelectorAll('.char-btn').forEach(btn => {
            if (btn.classList.contains('inactive')) {
                hiddenChars.push(btn.dataset.char);
            }
        });

        if (autoInsert) {
            // Richiedi permessi per auto-insert se abilitato
            chrome.permissions.request({
                origins: ["http://*/*", "https://*/*"]
            }, (granted) => {
                if (granted) {
                    saveToStorage(autoInsert, additionalSets, customChars, fontFamily, defaultCase, showSearch, hiddenChars);
                } else {
                    document.getElementById('auto-insert').checked = false;
                    saveToStorage(false, additionalSets, customChars, fontFamily, defaultCase, showSearch, hiddenChars);
                    showStatus(translations.status_permission_denied);
                }
            });
        } else {
            saveToStorage(autoInsert, additionalSets, customChars, fontFamily, defaultCase, showSearch, hiddenChars);
        }
    });

    // Esporta impostazioni
    document.getElementById('export-btn').addEventListener('click', () => {
        chrome.storage.local.get(null, (items) => {
            const manifest = chrome.runtime.getManifest();
            const exportData = {
                metadata: {
                    id: chrome.runtime.id,
                    version: manifest.version,
                    browser: navigator.userAgent,
                    exportDate: new Date().toISOString()
                },
                settings: items
            };
            const blob = new Blob([JSON.stringify(exportData, null, 2)], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'accented-letters-settings.json';
            a.click();
            URL.revokeObjectURL(url);
        });
    });

    // Importa impostazioni
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('import-file').click();
    });

    document.getElementById('import-file').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedData = JSON.parse(e.target.result);
                    // Gestione sia del nuovo formato (con metadata e settings) che del vecchio (solo settings)
                    const settings = importedData.settings || importedData;

                    chrome.storage.local.set(settings, () => {
                        showStatus(translations.status_imported || "Settings imported!");
                        setTimeout(() => location.reload(), 1000);
                    });
                } catch (err) {
                    showStatus(translations.status_import_error || "Error importing settings.");
                }
            };
            reader.readAsText(file);
        }
    });
});

function saveToStorage(autoInsert, additionalSets, customChars, fontFamily, defaultCase, showSearch, hiddenChars) {
    chrome.storage.local.set({
        autoInsert: autoInsert,
        additionalSets: additionalSets,
        customChars: customChars,
        fontFamily: fontFamily,
        defaultCase: defaultCase,
        showSearch: showSearch,
        hiddenChars: hiddenChars
    }, () => {
        showStatus(translations.status_saved);
    });
}

function populateDefaultCharsList() {
    const list = document.getElementById('default-chars-list');
    const default_chars = [
        'á', 'à', 'ä', 'â', 'å', 'ã', 'ā', 'ă',
        'é', 'è', 'ë', 'ê', 'ė', 'ē', 'ĕ', 'ě',
        'í', 'ì', 'ï', 'î', 'ĩ', 'ī', 'ĭ',
        'ó', 'ò', 'ö', 'ô', 'õ', 'ō', 'ŏ', 'ő',
        'ú', 'ù', 'ü', 'û', 'ů', 'ũ', 'ū', 'ŭ', 'ű',
        'ć', 'ĉ', 'ċ', 'č', 'ý', 'ŷ', 'ÿ',
        'ń', 'ñ', 'ň', 'ǵ', 'ĝ', 'ġ', 'ğ', 'ģ',
        'ď', 'ť', 'ĥ', 'ŵ', 'ŕ', 'ř',
        'ś', 'ŝ', 'ź', 'ż', 'ž'
    ];

    list.innerHTML = '';
    default_chars.forEach(char => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'char-btn active';
        btn.textContent = char;
        btn.dataset.char = char;

        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                btn.classList.add('inactive');
            } else {
                btn.classList.remove('inactive');
                btn.classList.add('active');
            }
        });

        list.appendChild(btn);
    });
}

function showStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message;
    setTimeout(() => {
        status.textContent = '';
    }, 2000);
}
