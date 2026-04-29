// Internationalization System
const translations = {
    en: {
        // Navigation
        home: 'Home',
        profile: 'Profile',
        mainprofile: '[PROFILE]',
        maincontact: '[CONTACT]',
        maininvestigations: '[INVESTIGATIONS]',
        investigations: 'Investigations',
        investigationsCard: 'Investigations',
        investigationsDesc: 'Digital Forensics & Incident Response case files',
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

        // Investigations Page
        investigations: 'Investigations',
        dfirSubtitle: 'Digital Forensics & Incident Response  Workstation',
        dfirStatus: 'OPERATOR: MATÉO BUSALLI',
        dfirClearance: 'CLEARANCE: ACADEMIC RESEARCH',
        dfirFramework: 'FRAMEWORK: LEGAL & ETHICAL OSINT',
        legalDisclaimer: 'All investigations are conducted within the strict legal framework of French law and ethical OSINT practices. No unauthorized access or exploitation techniques are used. This work is performed for academic research and defensive security purposes only.',
        caseStatusClosed: 'ANALYSIS COMPLETE',
        caseCardEpitechDesc: 'Azure AD B2B directory extraction via Microsoft Graph API abuse. 1422 student records exposed.',
        openCase: 'open case →',
        caseLoading: 'Loading case file...',
        caseLoaded: 'Case loaded successfully',
        caseName: 'CASE:',
        caseNameVal: 'Epitech Data Leak  January 2026',
        caseDate: 'DATE:',
        casePlatform: 'PLATFORM:',
        caseActor: 'THREAT ACTOR:',
        caseVolume: 'DATA VOLUME:',
        caseExposure: 'EXPOSURE:',
        caseRecurrence: 'RECURRENCE:',
        caseRecurrenceVal: '31 similar incidents from same actor',
        caseCompromised: 'Compromised data: Name, Surname, Phone, Email',
        attackVector: 'Attack Vector Analysis',
        flowTarget: 'Target',
        flowMethod: 'Method',
        flowAbuse: 'API Abuse / Token Theft',
        flowExtraction: 'Extraction',
        flowAutoExport: 'Automated JSON Export',
        flowExfil: 'Exfiltration',
        techAnalysis: 'Technical Analysis',
        evidenceTag: 'EVIDENCE',
        indApiScopes: 'Suspected API Scopes',
        indTools: 'Possible Tooling',
        indCustomScript: 'Custom REST API Script',
        indForensic: 'Forensic Indicators',
        indJson: 'Homogeneous JSON format',
        indExt: '#EXT# pattern (Azure AD guests)',
        indNoErrors: 'No parsing errors (automated)',
        indSophist: 'Sophistication Level',
        indMedium: 'MEDIUM  Clean automated extraction, not brute scraping',
        hypotheses: 'Attack Hypotheses',
        h1Title: 'Malicious OAuth Application',
        h1Desc: 'Rogue app with admin/user consent granting excessive directory read permissions',
        h2Title: 'Compromised Graph API Token',
        h2Desc: 'Stolen access token with Directory.Read.All and User.Read.All scopes',
        h3Title: 'Automated Export Pipeline',
        h3Desc: 'PowerShell/REST script chaining Graph API calls for mass directory extraction',
        confHigh: 'HIGH',
        confHigh2: 'HIGH',
        confMedium: 'MEDIUM',
        actionPlan: 'Post-Incident Action Plan',
        immediate: '0-24H  IMMEDIATE',
        containment: 'Containment',
        act1: 'Block suspected access in logs',
        act2: 'Disable vulnerable public endpoints',
        act3: 'Implement strict API rate limiting',
        act4: 'Activate WAF anti-scraping rules',
        notification: 'Notification',
        act5: 'Notify CNIL within 72h (GDPR)',
        act6: 'Prepare user communications',
        act7: 'Inform legal team & DPO',
        act8: 'Alert internal teams',
        forensicInv: 'Investigation',
        act9: 'Extract web server logs',
        act10: 'Identify exact attack vector',
        act11: 'Establish complete timeline',
        act12: 'Verify system integrity',
        shortTerm: '1-7 DAYS  SHORT TERM',
        antiScraping: 'Anti-Scraping',
        act13: 'Deploy CAPTCHA on sensitive pages',
        act14: 'Implement honeypots for bots',
        act15: 'Require authentication for profile access',
        act16: 'Obfuscate public PII',
        monitoring: 'Monitoring',
        act17: 'Alert on anomalous request patterns',
        act18: 'Advanced bot fingerprinting',
        act19: 'Dark web forum monitoring',
        act20: 'Force MFA on privileged accounts',
        userProtection: 'User Protection',
        act21: 'Individual notification to affected users',
        act22: 'Recommend password changes',
        act23: 'Phishing awareness alerts',
        act24: 'Identity theft protection resources',
        mediumTerm: '1-4 WEEKS  MEDIUM TERM',
        secAudit: 'Security Audit',
        act25: 'External pentest engagement',
        act26: 'Full vulnerability scan',
        act27: 'Security architecture review',
        act28: 'GDPR compliance verification',
        governance: 'Governance',
        act29: 'Security incident registry',
        act30: 'Updated risk matrix',
        act31: 'Incident response procedures',
        act32: 'DevOps security training',
        longTransform: 'Transformation',
        act33: 'Zero Trust Architecture',
        act34: 'Least Privilege Principle',
        act35: 'End-to-end encryption',
        act36: 'Privacy by Design',
        actorProfile: 'Threat Actor Profile',
        actorLeaks: 'Known Leaks',
        actorRep: 'Reputation Score',
        actorJoined: 'Account Created',
        actorQuote: '"Protect your data." Has the CNIL actually done anything today? NO',
        actorContext: ' Accompanied by CNIL logo, indicating anti-regulatory stance',
        legalFramework: 'Legal Framework',
        legalText: 'All OSINT research follows French law, GDPR regulations, and the Budapest Convention on Cybercrime. No unauthorized system access or data exploitation is performed.',
        academicExcellence: 'Academic Excellence',
        academicText: 'EPITECH MSc Cybersecurity program with "Félicitations" honors. Full-stack development mastery enables building forensic analysis tools and secure investigation platforms.',
        ethicalOsint: 'Ethical OSINT',
        ethicalText: 'Intelligence gathering strictly limited to publicly accessible sources. Data handling follows need-to-know principles. All findings are reported through proper channels (OFAC, PJ coordination ready).',

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
        maininvestigations: '[ENQUÊTES]',
        investigationsCard: 'Enquêtes',
        investigationsDesc: 'Forensique numérique & réponse aux incidents  dossiers d\'enquête',
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

        // Investigations Page
        investigations: 'Enquêtes',
        dfirSubtitle: 'Forensique Numérique & Réponse aux Incidents  Poste de travail',
        dfirStatus: 'OPÉRATEUR : MATÉO BUSALLI',
        dfirClearance: 'HABILITATION : RECHERCHE ACADÉMIQUE',
        dfirFramework: 'CADRE : OSINT LÉGAL & ÉTHIQUE',
        legalDisclaimer: 'Toutes les investigations sont menées dans le strict cadre légal du droit français et des pratiques éthiques de l\'OSINT. Aucun accès non autorisé ni technique d\'exploitation n\'est utilisé. Ce travail est réalisé à des fins de recherche académique et de sécurité défensive uniquement.',
        caseStatusClosed: 'ANALYSE TERMINÉE',
        caseCardEpitechDesc: 'Extraction du répertoire Azure AD B2B via abus de l\'API Microsoft Graph. 1422 dossiers étudiants exposés.',
        openCase: 'ouvrir le dossier →',
        caseLoading: 'Chargement du dossier...',
        caseLoaded: 'Dossier chargé avec succès',
        caseName: 'AFFAIRE :',
        caseNameVal: 'Fuite de données Epitech  Janvier 2026',
        caseDate: 'DATE :',
        casePlatform: 'PLATEFORME :',
        caseActor: 'ACTEUR MALVEILLANT :',
        caseVolume: 'VOLUME DE DONNÉES :',
        caseExposure: 'EXPOSITION :',
        caseRecurrence: 'RÉCURRENCE :',
        caseRecurrenceVal: '31 incidents similaires du même acteur',
        caseCompromised: 'Données compromises : Nom, Prénom, Téléphone, Email',
        attackVector: 'Analyse du Vecteur d\'Attaque',
        flowTarget: 'Cible',
        flowMethod: 'Méthode',
        flowAbuse: 'Abus d\'API / Vol de Token',
        flowExtraction: 'Extraction',
        flowAutoExport: 'Export JSON Automatisé',
        flowExfil: 'Exfiltration',
        techAnalysis: 'Analyse Technique',
        evidenceTag: 'PREUVE',
        indApiScopes: 'Scopes API Suspectés',
        indTools: 'Outillage Possible',
        indCustomScript: 'Script API REST Personnalisé',
        indForensic: 'Indicateurs Forensiques',
        indJson: 'Format JSON homogène',
        indExt: 'Pattern #EXT# (invités Azure AD)',
        indNoErrors: 'Aucune erreur de parsing (automatisé)',
        indSophist: 'Niveau de Sophistication',
        indMedium: 'MOYEN  Extraction automatisée propre, pas de scraping brut',
        hypotheses: 'Hypothèses d\'Attaque',
        h1Title: 'Application OAuth Malveillante',
        h1Desc: 'Application frauduleuse avec consentement admin/utilisateur accordant des permissions excessives de lecture d\'annuaire',
        h2Title: 'Token Graph API Compromis',
        h2Desc: 'Token d\'accès volé avec les scopes Directory.Read.All et User.Read.All',
        h3Title: 'Pipeline d\'Export Automatisé',
        h3Desc: 'Script PowerShell/REST chaînant les appels Graph API pour extraction massive d\'annuaire',
        confHigh: 'ÉLEVÉ',
        confHigh2: 'ÉLEVÉ',
        confMedium: 'MOYEN',
        actionPlan: 'Plan d\'Action Post-Incident',
        immediate: '0-24H  IMMÉDIAT',
        containment: 'Confinement',
        act1: 'Bloquer les accès suspects dans les logs',
        act2: 'Désactiver les endpoints publics vulnérables',
        act3: 'Implémenter un rate limiting strict sur les APIs',
        act4: 'Activer les règles WAF anti-scraping',
        notification: 'Notification',
        act5: 'Notifier la CNIL sous 72h (RGPD)',
        act6: 'Préparer les communications utilisateurs',
        act7: 'Informer l\'équipe juridique et le DPO',
        act8: 'Alerter les équipes internes',
        forensicInv: 'Investigation',
        act9: 'Extraire les logs des serveurs web',
        act10: 'Identifier le vecteur d\'attaque exact',
        act11: 'Établir la timeline complète',
        act12: 'Vérifier l\'intégrité des systèmes',
        shortTerm: '1-7 JOURS  COURT TERME',
        antiScraping: 'Anti-Scraping',
        act13: 'Déployer des CAPTCHA sur les pages sensibles',
        act14: 'Mettre en place des honeypots pour les bots',
        act15: 'Exiger l\'authentification pour l\'accès aux profils',
        act16: 'Obfusquer les données personnelles publiques',
        monitoring: 'Surveillance',
        act17: 'Alerter sur les patterns de requêtes anormaux',
        act18: 'Fingerprinting avancé des bots',
        act19: 'Surveillance des forums du dark web',
        act20: 'Forcer le MFA sur les comptes à privilèges',
        userProtection: 'Protection des Utilisateurs',
        act21: 'Notification individuelle aux utilisateurs affectés',
        act22: 'Recommander le changement de mots de passe',
        act23: 'Alertes de sensibilisation au phishing',
        act24: 'Ressources de protection contre le vol d\'identité',
        mediumTerm: '1-4 SEMAINES  MOYEN TERME',
        secAudit: 'Audit de Sécurité',
        act25: 'Engagement de pentest externe',
        act26: 'Scan de vulnérabilités complet',
        act27: 'Revue de l\'architecture de sécurité',
        act28: 'Vérification de conformité RGPD',
        governance: 'Gouvernance',
        act29: 'Registre des incidents de sécurité',
        act30: 'Matrice de risques mise à jour',
        act31: 'Procédures de réponse aux incidents',
        act32: 'Formation sécurité DevOps',
        longTransform: 'Transformation',
        act33: 'Architecture Zero Trust',
        act34: 'Principe du Moindre Privilège',
        act35: 'Chiffrement de bout en bout',
        act36: 'Privacy by Design',
        actorProfile: 'Profil de l\'Acteur Malveillant',
        actorLeaks: 'Fuites Connues',
        actorRep: 'Score de Réputation',
        actorJoined: 'Compte Créé',
        actorQuote: '"Protégez vos données." La CNIL a-t-elle fait quoi que ce soit aujourd\'hui ? NON',
        actorContext: ' Accompagné du logo de la CNIL, indiquant une posture anti-réglementaire',
        legalFramework: 'Cadre Légal',
        legalText: 'Toute recherche OSINT respecte le droit français, le RGPD et la Convention de Budapest sur la cybercriminalité. Aucun accès non autorisé aux systèmes ni exploitation de données n\'est effectuée.',
        academicExcellence: 'Excellence Académique',
        academicText: 'Programme MSc Cybersécurité EPITECH avec mention "Félicitations". La maîtrise du développement full-stack permet de construire des outils d\'analyse forensique et des plateformes d\'investigation sécurisées.',
        ethicalOsint: 'OSINT Éthique',
        ethicalText: 'La collecte de renseignements se limite strictement aux sources publiquement accessibles. Le traitement des données suit le principe du besoin d\'en connaître. Tous les résultats sont transmis via les canaux appropriés (coordination OFAC, PJ possible).',

        // Contact Page
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
