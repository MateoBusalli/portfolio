const hrConfig = {
    // Current work status
    status:       { en: 'In internship',              fr: 'En stage' },

    // When you become available
    availability: { en: 'To be determined',                fr: 'À déterminer' },

    // Desired contract duration
    duration:     { en: 'To be determined',                   fr: 'À déterminer' },

    // Type of contract sought
    contractType: { en: 'Internship / Apprenticeship', fr: 'Stage / Alternance' },

    // Target start date
    startDate:    { en: 'To be determined',                fr: 'À déterminer' },

    // Geographic mobility
    mobility:     { en: 'Nice area', fr: 'Région niçoise' },

    // Target security domains
    domains:      { en: 'Offensive Security, DFIR, SOC, Pentesting',
                    fr: 'Sécurité offensive, DFIR, SOC, Pentest' },
};

(function () {
    const map = {
        hrStatusVal:       hrConfig.status,
        hrAvailabilityVal: hrConfig.availability,
        hrDurationVal:     hrConfig.duration,
        hrContractTypeVal: hrConfig.contractType,
        hrStartDateVal:    hrConfig.startDate,
        hrMobilityVal:     hrConfig.mobility,
        hrDomainsVal:      hrConfig.domains,
    };
    ['en', 'fr'].forEach(function (lang) {
        Object.entries(map).forEach(function (_ref) {
            translations[lang][_ref[0]] = _ref[1][lang];
        });
    });
})();
