// Internationalization System
const translations = {
    en: {
        // Navigation
        home: 'Home',
        profile: 'Profile',
        mainprofile: '[PROFILE]',
        maincontact: '[CONTACT]',
        contact: 'Contact',

        // Home Page
        welcome: 'Welcome to My Portfolio',
        profileCard: 'Candidate Profile',
        discoverMy: 'Discover my',
        profileDesc: 'Discover my education, skills, experiences, and projects',
        contactCard: 'Contact',
        contactDesc: 'Get in touch for job opportunities',

        // Home - About Section
        aboutLabel: '// About Me',
        aboutText: 'Cybersecurity student at EPITECH Nice, passionate about offensive security, network analysis, and building tools that make systems safer. Currently pursuing a BAC+5 Master of Science with a specialization in cybersecurity. Always looking for new challenges and opportunities to grow.',

        // Home - Stats
        statProjects: 'Projects',
        statCerts: 'Certifications',
        statLanguages: 'Languages',
        statExperiences: 'Experiences',

        // Home - Tech Stack
        techLabel: '// Tech Stack',

        // Profile Page
        profileTitle: 'Profile',
        name: 'Name',
        age: 'Age',
        nationality: 'Nationality',
        nationalityText: 'French',
        birthPlace: 'Place of birth',
        objective: 'Objective',
        objectiveText: 'Specialize in cybersecurity through BAC+5 (Master of Science) program at EPITECH',
        residence: 'Residence location',
        sports: 'Sports',
        sportsText: 'Archery (7 years), Table Tennis (1 year), Tennis (4 years), Climbing (2 years)',

        educationTitle: 'Educational Background',
        college: 'College',
        highSchool: 'High school',
        specialization: 'Specialization',
        higherEd: 'Higher studies',

        skillsTitle: 'Skills',
        codingLang: 'Coding Language',
        spokenLang: 'Spoken Language',

        experiencesTitle: 'Experiences',
        exp1Title: 'IT Technician',
        exp1Type: 'Type: Fixed term contract',
        exp1Company: 'Company',
        exp1Tasks: 'Main tasks: Maintenance, Migrations & Interventions',
        exp2Title: 'Construction Technical Inspector Assistant',
        exp2Type: 'Type: Internship',
        exp2Tasks: 'Main tasks: Assisting in controlling respectability of standards on construction sites',

        projectsTitle: 'Personal Projects',
        proj1Title: 'SQL Database for high school',
        proj1Desc: 'Database collecting all statistics (~36k elements) from the French Parcoursup platform and sorting them according to different criterias on a dedicated website.',
        proj1Tech: 'Data are gathered from .xlsx files and converted to .csv to populate the DB.',
        proj2Title: 'Bruteforce tool',
        proj2Desc: 'Tool coded in Python that scans for subdomains and usernames using provided wordlist.',
        proj2Tech: 'A full cli interface is included.',
        proj3Title: 'Functional Website',
        proj3Desc: 'Website using JS, HTML and CSS for a fake travel agency with multiple pages.',
        proj4Title: 'Hackathon ActInSpace',
        proj4Desc: 'Participation to the ActInSpace hackathon 2026 edition.',
        proj4Tech: 'We finished at the 4th position.',
        proj5Title: 'Hack & Juice (JuiceShop hacking competition)',
        proj5Desc: 'Participation to Epitech\'s Hack & Juice event.',
        proj5Tech: 'I finished 1st on my campus and 15th overall.',
        proj6Title: 'Todo List app',
        proj6Desc: 'A simple Todo List application built with JavaScript, HTML, and CSS.',
        proj6Tech: 'Features include adding, editing, and deleting tasks, as well as marking tasks as complete.',
        proj7Title: 'Railway analysis and prediction tool',
        proj7Desc: 'Tool for analyzing train delays and predicting future delays using historical data.',
        proj7Tech: 'Features include data visualization, statistical analysis, and machine learning-based predictions.',

        filterAll: 'All',
        noProjectsMsg: 'No projects match this filter.',

        certificationsTitle: 'Certifications',
        cert1: 'CEFR: English (B1+)',
        cert2: 'ANSSI SecNum Academy',
        cert3: 'PIX',

        // Contact Page
        contactTitle: 'Job Opportunity Form',
        contactSubtitle: 'Please fill out this form to propose a job opportunity',
        recruiterEmail: 'Recruiter Email',
        companyName: 'Company Name',
        message: 'Message',
        submit: 'Send Opportunity',
        required: 'Required',

        // Footer
        footerStatus: 'STATUS',
        footerStatusVal: 'IN INTERNSHIP',
        footerLocation: 'LOCATION',
        footerYear: 'YEAR'
    },
    fr: {
        // Navigation
        home: 'Accueil',
        mainprofile: '[PROFIL]',
        profile: 'Profil',
        maincontact: '[CONTACT]',
        contact: 'Contact',

        // Home Page
        welcome: 'Bienvenue sur Mon Portfolio',
        profileCard: 'Profil du Candidat',
        discoverMy: 'Découvrez mes',
        profileDesc: 'Découvrez ma formation, mes compétences, mes expériences et mes projets',
        contactCard: 'Contact',
        contactDesc: 'Contactez-moi pour des opportunités professionnelles',

        // Home - About Section
        aboutLabel: '// À Propos',
        aboutText: 'Étudiant en cybersécurité à EPITECH Nice, passionné par la sécurité offensive, l\'analyse réseau et le développement d\'outils qui rendent les systèmes plus sûrs. Actuellement en cursus BAC+5 Master of Science avec spécialisation en cybersécurité. Toujours à la recherche de nouveaux défis et opportunités de développement.',

        // Home - Stats
        statProjects: 'Projets',
        statCerts: 'Certifications',
        statLanguages: 'Langages',
        statExperiences: 'Expériences',

        // Home - Tech Stack
        techLabel: '// Stack Technique',

        // Profile Page
        profileTitle: 'Profil',
        name: 'Nom & Prénoms',
        age: 'Âge',
        nationality: 'Nationalité',
        nationalityText: 'Française',
        birthPlace: 'Lieu de naissance',
        objective: 'Objectif',
        objectiveText: 'Spécialisation en cybersécurité par le programme BAC+5 (Master of Science) d\'EPITECH',
        residence: 'Lieu de résidence',
        sports: 'Sports',
        sportsText: 'Tir à l\'arc (7 ans), Tennis de Table (1 an), Tennis (4 ans), Escalade (2 ans)',

        educationTitle: 'Parcours Éducatif',
        college: 'Collège',
        highSchool: 'Lycée',
        specialization: 'Spécialité',
        higherEd: 'Études supérieures',

        skillsTitle: 'Compétences',
        codingLang: 'Langages codés',
        spokenLang: 'Langages parlés',

        experiencesTitle: 'Expériences',
        exp1Title: 'Technicien Informatique',
        exp1Type: 'Type: CDD',
        exp1Company: 'Société',
        exp1Tasks: 'Tâches principales: Maintenance, Migrations & Interventions',
        exp2Title: 'Assistant Contrôleur Technique en BTP',
        exp2Type: 'Type: Stage',
        exp2Tasks: 'Tâches principales: Contrôle de la respectabilité des normes sur les chantiers',

        projectsTitle: 'Projets Personnels',
        proj1Title: 'Base de données SQL pour mon lycée',
        proj1Desc: 'Base de données collectant des statistiques (~36k éléments) de la plateforme française Parcoursup et triant ces données en fonction de différents critères sur un site dédié.',
        proj1Tech: 'Les données sont récupérées depuis des fichiers .xlsx et converties au format .csv pour peupler la BDD.',
        proj2Title: 'Outil de Bruteforce',
        proj2Desc: 'Outil codé en Python qui scan les sous-domaines et noms d\'utilisateurs à partir d\'une wordlist.',
        proj2Tech: 'Une interface cli complète est incluse.',
        proj3Title: 'Site web fonctionnel',
        proj3Desc: 'Site web utilisant du JS, HTML et du CSS pour une fausse agence de voyage, comprend plusieurs pages.',
        proj4Title: 'Hackathon ActInSpace',
        proj4Desc: 'Participation à l\'édition 2026 du hackathon ActInSpace.',
        proj4Tech: 'Nous avons terminé à la 4ème position.',
        proj5Title: 'Hack & Juice (Compétition de hacking  JuiceShop)',
        proj5Desc: 'Participation à l\'événement Hack & Juice d\'Epitech.',
        proj5Tech: 'J\'ai terminé à la 1ère position de mon campus et 15ème au global.',
        proj6Title: 'Application de liste de tâches',
        proj6Desc: 'Une simple application de liste de tâches construite avec JavaScript, HTML et CSS.',
        proj6Tech: 'Les fonctionnalités incluent l\'ajout, la modification et la suppression de tâches, ainsi que la possibilité de marquer les tâches comme terminées.',
        proj7Title: 'Outil d\'analyse et de prédiction ferroviaire',
        proj7Desc: 'Outil d\'analyse des retards de trains et de prédiction des retards futurs en utilisant des données historiques.',
        proj7Tech: 'Les fonctionnalités incluent la visualisation des données, l\'analyse statistique et les prédictions basées sur l\'apprentissage automatique.',

        filterAll: 'Tous',
        noProjectsMsg: 'Aucun projet ne correspond à ce filtre.',

        certificationsTitle: 'Certifications',
        cert1: 'CEFR: Anglais (B1+)',
        cert2: 'ANSSI SecNum Academy',
        cert3: 'PIX',

        // Contact Page
        contactTitle: 'Formulaire d\'Opportunité Professionnelle',
        contactSubtitle: 'Veuillez remplir ce formulaire pour proposer une opportunité professionnelle',
        recruiterEmail: 'Email du Recruteur',
        companyName: 'Nom de l\'Entreprise',
        message: 'Message',
        submit: 'Envoyer l\'Opportunité',
        required: 'Requis',

        // Footer
        footerStatus: 'STATUT',
        footerStatusVal: 'EN STAGE',
        footerLocation: 'LOCALISATION',
        footerYear: 'ANNÉE',
    }
};

// Language Manager
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updatePage();
    }

    toggleLanguage() {
        this.setLanguage(this.currentLang === 'en' ? 'fr' : 'en');
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    updatePage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update language button
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'en' ? 'FR' : 'EN';
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getCurrentLang() {
        return this.currentLang;
    }
}

// Initialize i18n
const i18n = new I18n();

// Theme Manager
class Theme {
    constructor() {
        this.current = localStorage.getItem('theme') || 'dark';
    }

    apply() {
        if (this.current === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.textContent = this.current === 'dark' ? '[LIGHT]' : '[DARK]';
        }
    }

    toggle() {
        this.current = this.current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.current);
        this.apply();
    }
}

const theme = new Theme();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    i18n.updatePage();
    theme.apply();
});
