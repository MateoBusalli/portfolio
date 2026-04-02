// Chat Widget — CLI Terminal Style
(function () {
    const FORMSPREE_URL = 'https://formspree.io/f/mkgqyobr';

    const script = {
        en: {
            init: [
                { text: 'contact --new-session', type: 'cmd' },
                { text: 'Initializing secure channel...', type: 'system' },
                { text: "Hello. Welcome to my portfolio.", type: 'system' },
                { text: 'What is your email address?', type: 'system' },
            ],
            askCompany:  { text: 'What is your company name?', type: 'system' },
            askMessage:  { text: 'What is your message?', type: 'system' },
            sending:     { text: 'Transmitting...', type: 'system' },
            success:     { text: "Message received. I'll get back to you soon.", type: 'ok' },
            error:       { text: 'Transmission failed. Try the contact page.', type: 'err' },
            invalidEmail:  { text: 'Invalid email format. Try again.', type: 'warn' },
            emptyCompany:  { text: 'Company name cannot be empty.', type: 'warn' },
            emptyMsg:      { text: 'Message cannot be empty.', type: 'warn' },
            toggle: '[CONTACT]',
        },
        fr: {
            init: [
                { text: 'contact --nouvelle-session', type: 'cmd' },
                { text: 'Initialisation du canal sécurisé...', type: 'system' },
                { text: 'Bonjour. Bienvenue sur mon portfolio.', type: 'system' },
                { text: 'Quelle est votre adresse email ?', type: 'system' },
            ],
            askCompany:  { text: 'Quel est le nom de votre entreprise ?', type: 'system' },
            askMessage:  { text: 'Quel est votre message ?', type: 'system' },
            sending:     { text: 'Transmission en cours...', type: 'system' },
            success:     { text: 'Message reçu. Je reviendrai vers vous bientôt.', type: 'ok' },
            error:       { text: 'Transmission échouée. Essayez la page contact.', type: 'err' },
            invalidEmail:  { text: 'Format email invalide. Réessayez.', type: 'warn' },
            emptyCompany:  { text: "Le nom de l'entreprise ne peut pas être vide.", type: 'warn' },
            emptyMsg:      { text: 'Le message ne peut pas être vide.', type: 'warn' },
            toggle: '[CONTACT]',
        }
    };

    function getLang() {
        return localStorage.getItem('language') || 'en';
    }

    function t(key) {
        return (script[getLang()] || script.en)[key];
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    let outputEl, inputEl, state, emailValue, companyValue;

    function addLine(entry, delay) {
        delay = delay || 0;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var line = document.createElement('span');
                line.className = 'chat-line ' + (entry.type || 'system');
                line.textContent = entry.text;
                outputEl.appendChild(line);
                outputEl.scrollTop = outputEl.scrollHeight;
                resolve();
            }, delay);
        });
    }

    async function printLines(lines) {
        for (var i = 0; i < lines.length; i++) {
            await addLine(lines[i], i * 380);
        }
    }

    async function init() {
        outputEl.innerHTML = '';
        state = 'email';
        emailValue = '';
        companyValue = '';
        inputEl.value = '';
        inputEl.disabled = true;

        var lines = t('init');
        await printLines(lines);

        setTimeout(function () {
            inputEl.disabled = false;
            inputEl.focus();
        }, lines.length * 380 + 80);
    }

    function buildWidget() {
        var widget = document.createElement('div');
        widget.id = 'chat-widget';
        widget.innerHTML =
            '<button id="chat-toggle" data-tooltip="' + t('toggle') + '">' +
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
                    '<rect x="2" y="4" width="20" height="16" rx="2" stroke="white" stroke-width="1.8" fill="none"/>' +
                    '<polyline points="2,4 12,13 22,4" stroke="white" stroke-width="1.8" fill="none" stroke-linejoin="round"/>' +
                '</svg>' +
            '</button>' +
            '<div id="chat-popup" hidden>' +
                '<div id="chat-header">' +
                    '<div class="chat-dots">' +
                        '<span class="chat-dot red" id="chat-close" role="button" aria-label="Close" tabindex="0"></span>' +
                        '<span class="chat-dot"></span>' +
                        '<span class="chat-dot"></span>' +
                    '</div>' +
                    '<span id="chat-title">mateo@portfolio:~$</span>' +
                    '<span style="width:42px"></span>' +
                '</div>' +
                '<div id="chat-output"></div>' +
                '<div id="chat-input-line">' +
                    '<span class="chat-prompt-symbol">&gt;</span>' +
                    '<input type="text" id="chat-input" autocomplete="off" spellcheck="false" placeholder="type here...">' +
                '</div>' +
            '</div>';

        document.body.appendChild(widget);

        outputEl = document.getElementById('chat-output');
        inputEl  = document.getElementById('chat-input');
        var popup     = document.getElementById('chat-popup');
        var header    = document.getElementById('chat-header');
        var toggleBtn = document.getElementById('chat-toggle');
        var closeBtn  = document.getElementById('chat-close');

        toggleBtn.addEventListener('click', function () {
            var isOpening = popup.hidden;
            popup.hidden = !isOpening;
            if (isOpening) init();
        });

        closeBtn.addEventListener('click', function () {
            popup.hidden = true;
        });

        closeBtn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); popup.hidden = true; }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !popup.hidden) popup.hidden = true;
        });

        inputEl.addEventListener('keydown', async function (e) {
            if (e.key !== 'Enter') return;
            var val = inputEl.value.trim();
            if (!val) return;

            addLine({ text: val, type: 'cmd' });
            inputEl.value = '';
            inputEl.disabled = true;

            if (state === 'email') {
                if (!isValidEmail(val)) {
                    await addLine(t('invalidEmail'), 200);
                    inputEl.disabled = false;
                    inputEl.focus();
                    return;
                }
                emailValue = val;
                state = 'company';
                await addLine(t('askCompany'), 300);
                inputEl.disabled = false;
                inputEl.focus();

            } else if (state === 'company') {
                if (!val) {
                    await addLine(t('emptyCompany'), 200);
                    inputEl.disabled = false;
                    inputEl.focus();
                    return;
                }
                companyValue = val;
                state = 'message';
                await addLine(t('askMessage'), 300);
                inputEl.disabled = false;
                inputEl.focus();

            } else if (state === 'message') {
                if (!val) {
                    await addLine(t('emptyMsg'), 200);
                    inputEl.disabled = false;
                    inputEl.focus();
                    return;
                }
                state = 'submitting';
                await addLine(t('sending'), 200);

                try {
                    var res = await fetch(FORMSPREE_URL, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: emailValue, company_name: companyValue, message: val })
                    });

                    if (res.ok) {
                        await addLine(t('success'), 400);
                        state = 'done';
                    } else {
                        throw new Error();
                    }
                } catch (err) {
                    await addLine(t('error'), 400);
                    state = 'email';
                    emailValue = '';
                    companyValue = '';
                    inputEl.disabled = false;
                    inputEl.focus();
                }
            }
        });

        if (window.i18n) {
            var origSet = window.i18n.setLanguage.bind(window.i18n);
            window.i18n.setLanguage = function (lang) {
                origSet(lang);
                document.getElementById('chat-toggle').setAttribute('data-tooltip', t('toggle'));
                document.getElementById('chat-close').textContent  = t('close');
            };
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildWidget);
    } else {
        buildWidget();
    }
})();
