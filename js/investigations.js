// DFIR Lab — Immersive Investigation JS

(function () {
    'use strict';

    // ── Boot Sequence ──────────────────────────────
    const bootLines = [
        { text: 'BIOS POST... OK', cls: 'boot-ok' },
        { text: 'Initializing DFIR Workstation v3.2.1', cls: '' },
        { text: 'Loading kernel modules...', cls: '' },
        { text: '[OK] crypto_engine', cls: 'boot-ok' },
        { text: '[OK] forensic_toolkit', cls: 'boot-ok' },
        { text: '[OK] network_analyzer', cls: 'boot-ok' },
        { text: '[WARN] osint_framework — academic mode only', cls: 'boot-warn' },
        { text: 'Mounting encrypted volumes... OK', cls: 'boot-ok' },
        { text: 'Connecting to intelligence database...', cls: '' },
        { text: '[OK] Case files loaded: 1', cls: 'boot-ok' },
        { text: 'Verifying operator credentials...', cls: '' },
        { text: '[OK] CLEARANCE: ACADEMIC RESEARCH', cls: 'boot-ok' },
        { text: '[OK] LEGAL FRAMEWORK: ACTIVE', cls: 'boot-ok' },
        { text: '═══════════════════════════════════════', cls: '' },
        { text: 'WORKSTATION READY — Welcome, Investigator.', cls: 'boot-ok' },
    ];

    function runBootSequence() {
        const overlay = document.getElementById('boot-overlay');
        const container = document.getElementById('boot-lines');
        if (!overlay || !container) return;

        // Skip if already visited this session
        if (sessionStorage.getItem('dfir-booted')) {
            overlay.classList.add('hidden');
            initPage();
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            if (i >= bootLines.length) {
                clearInterval(interval);
                sessionStorage.setItem('dfir-booted', '1');
                setTimeout(() => {
                    overlay.classList.add('fade-out');
                    setTimeout(() => {
                        overlay.classList.add('hidden');
                    }, 800);
                    initPage();
                }, 600);
                return;
            }

            const line = document.createElement('div');
            line.className = 'boot-line';
            const content = bootLines[i];
            if (content.cls) {
                line.innerHTML = '<span class="' + content.cls + '">' + escapeHtml(content.text) + '</span>';
            } else {
                line.textContent = content.text;
            }
            line.style.animationDelay = '0s';
            container.appendChild(line);
            container.scrollTop = container.scrollHeight;
            i++;
        }, 140);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ── Page Init ──────────────────────────────────
    function initPage() {
        initGridCanvas();
        initDfirTypewriter();
        initTypedCommands();
        initScrollAnimations();
    }

    // ── Title Typewriter ───────────────────────
    function initDfirTypewriter() {
        const el = document.getElementById('dfir-typewriter');
        if (!el) return;
        const lang = (typeof i18n !== 'undefined') ? i18n.getCurrentLang() : 'en';
        const text = lang === 'fr' ? 'ENQUÊTES' : 'INVESTIGATIONS';
        let idx = 0;
        function type() {
            if (idx < text.length) {
                el.textContent += text.charAt(idx);
                idx++;
                setTimeout(type, 150);
            } else {
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                cursor.innerHTML = '&nbsp;';
                el.appendChild(cursor);
            }
        }
        setTimeout(type, 300);
    }

    // ── Grid Canvas Background ─────────────────────
    function initGridCanvas() {
        const canvas = document.getElementById('grid-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const particles = [];
        const numParticles = 50;

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            ctx.strokeStyle = 'rgba(255, 0, 0, 0.06)';
            ctx.lineWidth = 1;
            const gridSize = 40;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw particles and connections
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                ctx.fill();

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = 'rgba(255, 0, 0, ' + (1 - dist / 120) * 0.3 + ')';
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        }
        draw();
    }

    // ── Typed Command Animation ────────────────────
    function initTypedCommands() {
        const commands = document.querySelectorAll('.typed-cmd[data-type]');
        commands.forEach((el) => {
            const text = el.getAttribute('data-type');
            el.textContent = '';
            el.style.maxWidth = '0';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        typeCommand(el, text);
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(el);
        });
    }

    function typeCommand(el, text) {
        let idx = 0;
        el.style.maxWidth = text.length + 2 + 'ch';
        const timer = setInterval(() => {
            if (idx >= text.length) {
                clearInterval(timer);
                return;
            }
            el.textContent += text.charAt(idx);
            idx++;
        }, 50);
    }

    // ── Scroll Animations ──────────────────────────
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate flow nodes
                    if (entry.target.classList.contains('attack-flow')) {
                        const nodes = entry.target.querySelectorAll('.flow-node');
                        nodes.forEach((node, i) => {
                            setTimeout(() => {
                                node.classList.add('visible');
                            }, i * 300);
                        });
                    }

                    // Animate terminal lines
                    if (entry.target.classList.contains('term-output')) {
                        const lines = entry.target.querySelectorAll('.term-line');
                        lines.forEach((line) => {
                            line.classList.add('visible');
                        });
                    }

                    entry.target.classList.add('scroll-visible');
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.attack-flow, .term-output, .analysis-section, .method-card').forEach((el) => {
            observer.observe(el);
        });
    }

    // ── Case Folder Toggle ─────────────────────────
    window.toggleCase = function (id) {
        const folder = document.getElementById(id);
        if (!folder) return;

        const isOpen = folder.classList.contains('open');
        // Close all first
        document.querySelectorAll('.case-folder.open').forEach((f) => {
            f.classList.remove('open');
        });

        if (!isOpen) {
            folder.classList.add('open');
            // Trigger terminal line animations
            setTimeout(() => {
                const termOutput = folder.querySelector('.term-output');
                if (termOutput) {
                    termOutput.querySelectorAll('.term-line').forEach((line) => {
                        line.classList.add('visible');
                    });
                }
                // Trigger flow node animations
                const flowNodes = folder.querySelectorAll('.flow-node');
                flowNodes.forEach((node, i) => {
                    setTimeout(() => node.classList.add('visible'), i * 300);
                });
            }, 300);
        }
    };

    // ── Start ──────────────────────────────────────
    window.addEventListener('load', () => {
        runBootSequence();
    });
})();
