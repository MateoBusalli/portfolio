// Internationalization System
const translations = {
    en: {
        // Navigation
        home: 'Home',
        profile: 'Profile',
        contact: 'Contact',
        
        // Home Page
        welcome: 'Welcome to My Portfolio',
        profileCard: 'Candidate Profile',
        profileDesc: 'Discover my education, skills, experiences, and projects',
        contactCard: 'Contact',
        contactDesc: 'Get in touch for job opportunities',
        
        // Profile Page
        profileTitle: 'Profile',
        name: 'Name',
        age: 'Age',
        nationality: 'Nationality',
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
        
        certificationsTitle: 'Certifications',
        cert1: 'CEFR: English (B1+)',
        cert2: 'ANSSI SecNum Academy',
        cert3: 'PIX',
        
        // Contact Page
        contactTitle: 'Job Opportunity Form',
        contactSubtitle: 'Please fill out this form to propose a job opportunity',
        recruiterName: 'Recruiter Name',
        recruiterEmail: 'Recruiter Email',
        companyName: 'Company Name',
        jobTitle: 'Job Title',
        jobDescription: 'Job Description',
        mainTasks: 'Main Tasks',
        startDate: 'Start Date',
        endDate: 'End Date',
        salaryRange: 'Salary Range',
        location: 'Location',
        additionalMessage: 'Additional Message',
        submit: 'Send Opportunity',
        required: 'Required',
        
        // Footer
        email: 'Email',
        address: 'Address',
        footerText: '06130 Grasse, France',
        contactmePrefix: 'Use',
        contactmeSuffix: 'form to contact me'
    },
    fr: {
        // Navigation
        home: 'Accueil',
        profile: 'Profil',
        contact: 'Contact',
        
        // Home Page
        welcome: 'Bienvenue sur Mon Portfolio',
        profileCard: 'Profil du Candidat',
        profileDesc: 'Découvrez ma formation, mes compétences, mes expériences et mes projets',
        contactCard: 'Contact',
        contactDesc: 'Contactez-moi pour des opportunités professionnelles',
        
        // Profile Page
        profileTitle: 'Profil',
        name: 'Nom & Prénoms',
        age: 'Âge',
        nationality: 'Nationalité',
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
        
        certificationsTitle: 'Certifications',
        cert1: 'CEFR: Anglais (B1+)',
        cert2: 'ANSSI SecNum Academy',
        cert3: 'PIX',
        
        // Contact Page
        contactTitle: 'Formulaire d\'Opportunité Professionnelle',
        contactSubtitle: 'Veuillez remplir ce formulaire pour proposer une opportunité professionnelle',
        recruiterName: 'Nom du Recruteur',
        recruiterEmail: 'Email du Recruteur',
        companyName: 'Nom de l\'Entreprise',
        jobTitle: 'Titre du Poste',
        jobDescription: 'Description du Poste',
        mainTasks: 'Tâches Principales',
        startDate: 'Date de Début',
        endDate: 'Date de Fin',
        salaryRange: 'Fourchette de Salaire',
        location: 'Localisation',
        additionalMessage: 'Message Additionnel',
        submit: 'Envoyer l\'Opportunité',
        required: 'Requis',
        
        // Footer
        contactmePrefix: 'Utilisez le formulaire de',
        contactmeSuffix: 'pour me contacter.',
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    i18n.updatePage();
});
