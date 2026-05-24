(function () {
    const btn = document.getElementById('burger-btn');
    const nav = document.getElementById('nav-menu');
    if (!btn || !nav) return;

    function openMenu() {
        nav.classList.add('nav-open');
        btn.classList.add('burger-open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    }

    function closeMenu() {
        nav.classList.remove('nav-open');
        btn.classList.remove('burger-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }

    function toggleMenu() {
        nav.classList.contains('nav-open') ? closeMenu() : openMenu();
    }

    btn.addEventListener('click', toggleMenu);

    // Close on nav link click
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
        if (!btn.contains(e.target) && !nav.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    // Restore on resize to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) closeMenu();
    });
})();
