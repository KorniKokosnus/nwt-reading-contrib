// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 3.3.0. Any missing item will fall back to english
//
export default {
    // Pages
    pages: {
        schedule: 'Raspored',
        settings: 'Postavke',
        help: 'Pomoć',
        storedData: 'Sačuvani podaci',
        privacyPolicy: 'Pravila privatnosti'
    },

    // Schedule page
    //
    plans_header: 'Izaberi plan čitanja',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Po redoslijedu u Bibliji',
        // In the order the Bible books were written
        written: 'Po vremenu pisanja',
        // In the order the events happened
        chronological: 'Kronološki'
    },
    durations_header: 'Trajanje',
    setRead: {
        label: 'Postavi kao pročitano',
        question: 'Želite li sve prethodne odlomke postaviti kao pročitane a sljedeće nepročitane?'
    },

    // Settings page
    //
    english: 'engleski',
    display: 'Prikaz',
    language: {
        label: 'jezik',
        placeholder: 'jezik',
        title: 'Izaberi jezik',
        contribute: 'Doprinesi prevodu'
    },
    startOver: {
        label: 'Počni ponovo',
        title: 'Počni ponovo',
        description: 'Izbriši status čitanja.',
        question: 'Želite li izbrisati status čitanja?'
    },
    resetEndDate: {
        label: 'Ponovo postavite krajnji datum',
        description: 'Ponovo postavite krajnji datum kako bi vaše čitanje bilo na vrijeme.',
        question: 'Želite li ponovo postaviti krajnji datum kako bi vaše čitanje bilo na vrijeme?',
    },
    withEndDate: {
        label: 'S krajnjim datumom',
        description: 'Prati dnevno čitanje s krajnjim datumom.',
    },
    showEvents: {
        label: 'Prikaži događaje (eksperimentalno)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1101990130#h=252',
        text: 'Događaji se temelje na',
        title: '“Svo je pismo nadahnuto od Boga i korisno”',
        chapter: '3. dodataka — Vremenski raspored događaja',
        caption: 'Kronološki raspored važnih događaja iz Biblije',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'b.',
        'c.': 'c.',
        'n.e.': 'naše ere',
        'p.n.e.': 'prije naše ere'
    },
    showLocations: {
        label: 'Prikaži lokacije (eksperimentalno)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Prikaži lokaciju referenci za brošuru',
        title: '“Dobra zemlja”',
        legend: 'Za legendu pogledaj',
        caption: 'Indeks karti',
    },
    legal: 'Pravno',
    version: 'Verzija',
    help: 'Pomoć',


    // Help page
    //
    helpPage: [
        'O aplikaciji',
        'NWT Reading vam pomaže pratiti svoj raspored čitanja prevoda Biblije Novi Svijet koji su izdali Jehovini svjedoci.',

        'Kako to funkcionira',
        'Izaberite plan čitanja i trajanje na vrhu stranice.',
        'Označite odlomak koji ste pročitali.',
        'Nakon što pročitate cijelu Bibliju izaberite "Počni ponovo" na stranici "Postavke".',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'Ovo je odlagalište svih podataka pohranjenih u aplikaciji. \
            To vam može koristiti u slučaju nekih problema ili provjere privatnosti.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'Mobilna aplikacija NWT Reading (u daljem tekstu “PROIZVOD”) ne sakuplja \
        bilo koje lične informacije. Svi podaci se pohranjuju lokalno.',

        'Searchwork.org, ne dozvoljava oglašivačima sakupljanje podataka kroz \
        naš PROIZVOD u svrhu ciljanja oglasa. \
        Podatke koje je sačuvao ovaj PROIZVOD ne dijelimo s drugim organizacijama  \
        u bilo koje svrhe.',

        'Ova pravila o privatnosti su ažurirana 05/04/2019. \
        Naša se Pravila o privatnosti mogu promijeniti s vremena na vrijeme. \
        Savjetujemo vam da s vremena na vrijeme pogledate ima li promjena u pravilima. \
        Promjene u ovim pravilima o privatnosti stupaju na snagu onog momenta kad se objave na ovoj stranici.'
    ]
};
