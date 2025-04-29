// Dit bestand is gepubliceerd als https://tools.geostandaarden.nl/respec/config/geonovum-config.js, voor hergebruik in Geonovum ReSpec documenten.
//copy of nl version
var organisationConfig = {
    de_organisationName: "Geonovum",
    // werkt nog niet 
    // nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/gn-algemeen/style/",
    // bv styles url voor ander GN publicatiedomein met eigen stijlen zoals DSO of BRO:
    // nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/dso/style/",
    // nl_organisationStylesURL: "https://tools.geostandaarden.nl/respec/bro/style/",
    de_organisationPublishURL: "https://docs.gdi-de.org/",
    logos: [{
        src: "https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg",
        alt: "GDI-DE",
        id: "GDI-DE",
        height: 67,
        width: 132,
        url: "https://www.gdi-de.org",
      }],
	
	postProcess: [window.respecMermaid.createFigures],

  
	latestVersion: ["de_organisationPublishURL", "pubDomain", "/", "shortName", "/"],
    thisVersion: ["de_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
    prevVersion: ["de_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],
    useLogo: true,
    useLabel: true,

    license: "cc-by",
    addSectionLinks: true,

    localizationStrings: {
        en: {
            wv: "Editor's draft",
            cv: "Candidate recommendation",
            vv: "Proposed recommendation",
            def: "Recommendation",
            ld: "Living document",
            basis: "Document",
            //eo: "Outdated version",
            //tg: "Rescinded version",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Practical guideline",
            hr: "Guide",
            wa: "Work process agreement",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        de: {
          wv: "Editor's draft",
          cv: "Candidate recommendation",
          vv: "Proposed recommendation",
          def: "Empfehlung",
          ld: "Living document",
          basis: "Dokument",
          //eo: "Outdated version",
          //tg: "Rescinded version",
          no: "Norm",
          st: "Standard",
          im: "Informationsmodell",
          pr: "Praktischer Leitfaden",
          hr: "Anleitung",
          wa: "Work process agreement",
          al: "General",
          bd: "Governance documentation",
          bp: "Best practice",          
        },
        nl: {
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            ld: "Levend document",
            basis: "Document",
            //eo: "Verouderde versie",
            //tg: "Teruggetrokken versie",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen stabiel document.`,
            cv: `Dit is een consultatieversie.`,
            vv: `Dit is de definitieve conceptversie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiÃ«le status.",
            ld: "Dit is een levend document dat regelmatig gewijzigd wordt."
        },
        de: {
          sotd: "Status des vorliegenden Dokumentes",
          def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
          wv: `This is a working draft that can be changed, removed or replaced by other documents at any time. It is not a stable document.`,
          cv: `Es handelt sich um einen stabilen Entwurf, der für einen öffentlichen Review publiziert ist.`,
          vv: `This is the final draft of this document. Edits resulting from consultations have been applied.`,
          basis: "This document has no official standing.",
          ld: "This is a living document, which is updated regularly."
      },
        en: {
            sotd: "Status of this document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a working draft that can be changed, removed or replaced by other documents at any time. It is not a stable document.`,
            cv: `This is a stable draft, published for public comment.`,
            vv: `This is the final draft of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
            ld: "This is a living document, which is updated regularly."
        },
    },

    labelColor: {
        def: "#045D9F",
        wv: "#FF0000",
        cv: "#045D9F",
        vv: "#045D9F",
        basis: "#80CC28",
        ld: "#80CC28"
    },
    
    licenses: {
        "cc0": {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://tools.geostandaarden.nl/respec/style/logos/CC-Licentie.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://tools.geostandaarden.nl/respec/style/logos/cc-by-nd.svg",
        },
    },

    localBiblio: {
        "INSPIRE Directive":{
            "href":"https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32007L0002",
            "title":"EU INSPIRE-Directive",
            "publisher":"European Commission",
            "date":"2007"
        },
        "CiteDCAT-AP": {
            "href": "https://ec-jrc.github.io/datacite-to-dcat-ap/",
            "title": "DataCite to DCAT-AP Mapping",
            "authors": ["Andrea Perego","Timothy Austin"],
            "status": "Working Draft",
            "publisher":"European Commission, Joint Research Centre (JRC)",
            "date": "2019"
        },
        "GDI-DE HE INS Downloaddienste": {
            "href": "https://www.gdi-de.org/download/AK_Geodienste_Handlungsempfehlungen_INSPIRE_Downloadservices.pdf",
            "title": "GDI-DE Handlungsempfehlungen zur Umsetzung von INSPIRE Downloaddiensten",
            "authors": ["AK Geodienste"],
            "status": "Working Draft",
            "publisher":"AK Geodienste",
            "date": "2016"
        },
        "INS Richtlinie": {
            "href": "http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2007:108:0001:0014:DE:PDF",
            "title": "Richtlinie 2007/2/EG des Europäischen Parlaments und des Rates vom 14. März 2007 zur Schaffung einer Geodateninfrastruktur in der Europäischen Gemeinschaft (INSPIRE)",
            "authors": ["EU KOM"],
            "status": "In Force",
            "publisher":"EU",
            "date": "2007"
        },
        "INS VO Netzdienste": {
            "href": "http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:274:0009:0018:DE:PDF",
            "title": "Verordnung (EG) Nr. 976/2009 der Kommission vom 19. Oktober 2009 zur Durchführung der Richtlinie 2007/2/EG des Europäischen Parlaments und des Rates hinsichtlich der Netzdienste (es existiert noch ein Amendment)",
            "authors": ["EU KOM"],
            "status": "In Force",
            "publisher":"EU",
            "date": "2009"
        },
        "INS VO MD": {
            "href": "http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:326:0012:0030:DE:PDF",
            "title": "Verordnung (EG) Nr. 1205/2008 der Kommission vom 3. Dezember 2008 zur Durchführung der Richtlinie 2007/2/EG des Europäischen Parlaments und des Rates hinsichtlich Metadaten Text von Bedeutung für den EWR",
            "authors": ["EU KOM"],
            "status": "In Force",
            "publisher":"EU",
            "date": "2008"
        },
        "INS VO IO": {
            "href": "http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2010:323:0011:0102:DE:PDF",
            "title": "Verordnung (EG) Nr. 1089/2010 der Kommission vom 23. November 2010 zur Durchführung der Richtlinie 2007/2/EG des Europäischen Parlaments und des Rates hinsichtlich der Interoperabilität von Geodatensätzen und -diensten (es existiert noch ein Amendment)",
            "authors": ["EU KOM"],
            "status": "In Force",
            "publisher":"EU",
            "date": "2010"
        },
        "ISO 19139:2007": {
            "href": "https://www.iso.org/iso/catalogue_detail.htm?csnumber=32557",
            "title": "ISO19139 - Geographic information - Metadata - XML schema implementation",
            "authors": ["ISO"],
            "status": "In Force",
            "publisher":"ISO",
            "date": "2007"
        },
        "ISO 19119:2005": {
            "href": "https://www.iso.org/iso/catalogue_detail.htm?csnumber=39890",
            "title": "ISO19119 - Geographic information - Services",
            "authors": ["ISO"],
            "status": "In Force",
            "publisher":"ISO",
            "date": "2005"
        },
        "ISO 19115:2003": {
            "href": "https://www.iso.org/iso/catalogue_detail.htm?csnumber=26020",
            "title": "ISO19115 - Geographic information - Metadata",
            "authors": ["ISO"],
            "status": "Withdrawn",
            "publisher":"ISO",
            "date": "2003"
        },
        "ISO 19115-3:2016": {
            "href": "https://www.iso.org/iso/catalogue_detail.htm?csnumber=26020",
            "title": "ISO19115-3 - Geographic information - Metadata - Part 3: XML schema implementation for fundamental concepts",
            "authors": ["ISO"],
            "status": "In Force",
            "publisher":"ISO",
            "date": "2016"
        },
        "ISO 19142:2010": {
            "href": "https://www.iso.org/standard/42136.html",
            "title": "ISO 19142 - Geographic information – Web Feature Service",
            "authors": ["ISO"],
            "status": "In Force",
            "publisher":"ISO",
            "date": "2016"
        },
        "ISO 19168:1:2020": {
            "href": "https://www.iso.org/standard/32586.html",
            "title": "ISO19168 - Geographic information – Geospatial API for features – Part 1: Core",
            "authors": ["ISO"],
            "status": "In Force",
            "publisher":"ISO",
            "date": "2016"
        },
        "OGC CAT 2.0.2": {
            "href": "",
            "title": "OpenGIS Catalogue Services Specification - 07-006r1",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2007"
        },
        "OGC WFS 1.1.0": {
            "href": "https://portal.ogc.org/files/?artifact_id=8339",
            "title": "OpenGIS Web Feature Service (WFS) Implementation Specification - 04-094",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2005"
        },
        "OGC WFS 2.0.0": {
            "href": "https://portal.ogc.org/files/?artifact_id=39967",
            "title": "OpenGIS Web Feature Service 2.0 Interface Standard (also ISO 19142) - 09-025r1",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2010"
        },
        "OGC API-Features-Part 1": {
            "href": "https://docs.opengeospatial.org/is/17-069r3/17-069r3.html",
            "title": "OGC API - Features - Part 1: Core",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2019"
        },
        "OGC API-Features-Part 2": {
            "href": "https://docs.opengeospatial.org/is/18-058/18-058.html",
            "title": "OGC API - Features - Part 2: Coordinate Reference Systems by Reference",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2020"
        },
        "OGC API-Features-Part 3": {
            "href": "https://docs.ogc.org/DRAFTS/19-079r1.html",
            "title": "OGC API - Features - Part 3: Filtering",
            "authors": ["OGC"],
            "status": "Draft",
            "publisher":"OGC",
            "date": "2019"
        },
        "OGC API-Features-Part 4": {
            "href": "https://docs.ogc.org/DRAFTS/20-002.html",
            "title": "OGC API - Features - Part 4: Create, Replace, Update and Delete",
            "authors": ["OGC"],
            "status": "Draft",
            "publisher":"OGC",
            "date": "2020"
        },
        "OGC WCS 2.0.1": {
            "href": "https://portal.ogc.org/files/09-110r4",
            "title": "OGC WCS 2.0 Interface Standard- Core: Corrigendum",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2012"
        },
        "OGC WCS 2.1": {
            "href": "https://docs.ogc.org/is/17-089r1/17-089r1.html",
            "title": "OGC Web Coverage Service (WCS) 2.1 Interface Standard - Core",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2017"
        },
        "OGC SOS 2.0": {
            "href": "https://portal.ogc.org/files/?artifact_id=47599",
            "title": "OGC Sensor Observation Service Interface Standard",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2012"
        },
        "OGC SensorThings API Part 1": {
            "href": "https://docs.ogc.org/is/18-088/18-088.html",
            "title": "OGC SensorThings API Part 1: Sensing Version 1.1",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2021"
        },
        "OGC GeoPackage": {
          "href": "http://www.geopackage.org/spec/",
          "title": "OGC® GeoPackage Encoding Standard",
          "authors": ["OGC"],
          "status": "IS",
          "publisher": "OGC",
          "date": "2024"
        },
        "STAC": {
          "href": "https://stacspec.org/en/about/stac-spec/",
          "title": "SpatioTemporal Asset Catalogs",
          "authors": ["STAC Community"],
          "status": "Draft",
          "publisher": "STAC Community",
          "date": "2024"
        },
        "OGC API Records - Part 1: Core": {
          "href": "https://docs.ogc.org/DRAFTS/20-004.html",
          "title": "OGC API - Records - Part 1: Core",
          "authors": ["OGC"],
          "status": "Draft IS",
          "publisher": "OGC",
          "date": "2024"
        },
        "OGC OWS Common": {
            "href": "https://www.ogc.org/publications/standard/common/",
            "title": "OWS Common Specs",
            "authors": ["OGC"],
            "status": "IS",
            "publisher":"OGC",
            "date": "2011"
        },
        "OGC E-Learning": {
            "href": "http://opengeospatial.github.io/e-learning/index.html",
            "title": "OGC E-Learning platform",
            "authors": ["OGC"],
            "status": "Published",
            "publisher":"OGC",
            "date": "2024"
        },
        "RFC7946": {
            "href": "https://www.rfc-editor.org/rfc/rfc7946",
            "title": "The GeoJSON Format - rfc7946",
            "authors": ["OGC"],
            "status": "RFC - Proposed Standard",
            "publisher":"OGC",
            "date": "2016"
        },
        "RFC4180": {
            "href": "https://datatracker.ietf.org/doc/html/rfc4180",
            "title": "Common Format and MIME Type for Comma-Separated Values (CSV) Files",
            "authors": ["Network Working Group"],
            "status": "RFC - Informational",
            "publisher":"Network Working Group",
            "date": "2005"
        },
        "RFC4287": {
            "href": "https://datatracker.ietf.org/doc/html/rfc4287",
            "title": "The Atom Syndication Format - rfc4287",
            "authors": ["Network Working Group"],
            "status": "Proposed Standard",
            "publisher":"Network Working Group",
            "date": "2005"
        },
        "INS TG Metadata 1.3": {
            "href": "",
            "title": "INSPIRE Metadata Implementing Rules: Technical Guidlines based on EN ISO 19115 and EN ISO 19119 (Version 1.3 - 29.10.2013)",
            "authors": ["INSPIRE MIG-T"],
            "status": "Withdrawn",
            "publisher":"EU",
            "date": "2013"
        },
        "INS TG Metadata 2.0.1": {
            "href": "",
            "title": "INSPIRE Metadata Implementing Rules: Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007 (Version 2.0.1 - 02.03.2017)",
            "authors": ["INSPIRE MIG-T"],
            "status": "Withdrawn",
            "publisher":"EU",
            "date": "2017"
        },
        "INS TG Metadata 2.2.0": {
            "href": "https://github.com/INSPIRE-MIF/technical-guidelines/tree/main/metadata/metadata-iso19139",
            "title": "INSPIRE Metadata Implementing Rules: Guidance for the implementation of INSPIRE dataset and service metadata based on ISO/TS 19139:2007 (Version 2.0.1 - 02.03.2017)",
            "authors": ["INSPIRE MIG-T"],
            "status": "Published",
            "publisher":"EU",
            "date": "2024"
        },
        "INS TG Download Services": {
            "href": "https://github.com/INSPIRE-MIF/technical-guidelines/tree/main/services/download-atom-wfs",
            "title": "Technical Guidance for the implementation of INSPIRE Download Services",
            "authors": ["INSPIRE MIG-T"],
            "status": "Withdrawn",
            "publisher":"EU",
            "date": "2013"
        },
        "INS TG Web Coverage Services": {
            "href": "https://knowledge-base.inspire.ec.europa.eu/publications/technical-guidance-implementation-inspire-download-services-using-web-coverage-services-wcs_en",
            "title": "Technical Guidance for the implementation of INSPIRE Download Services using Web Coverage Services (WCS)",
            "authors": ["Temporary MIG subgroup for action MIWP-7b"],
            "status": "Version 1.0",
            "publisher":"INSPIRE Maintenance and Implementation Group (MIG)",
            "date": "2016"
        },
        "INS TG View Services": {
            "href": "https://github.com/INSPIRE-MIF/technical-guidelines/tree/2022.2/services/view-wms",
            "title": "Technical Guidance for the implementation of INSPIRE View Services - 3.2.0",
            "authors": ["INSPIRE MIG-T"],
            "status": "Published",
            "publisher":"EU",
            "date": "2022"
        },
        "INS GP OGC API - Features": {
            "href": "https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md",
            "title": "Setting up an INSPIRE Download service based on the OGC API-Features standard (Version 1.0 - 05.02.2021)",
            "authors": ["INSPIRE MIG-T"],
            "status": "Best Practice",
            "publisher":"EU",
            "date": "2021"
        },
        "GDI-DE Architekturdokument / Technik 3.3.0": {
            "href": "",
            "title": "Architektur der GDI-DE – Technik V. 3.3.0 (08/2016)",
            "authors": ["AK Architektur GDI-DE"],
            "status": "Beschlossen",
            "publisher":"LG GDI-DE",
            "date": "2016"
        },
        "GDI-DE HE INS Darstellungsdienste": {
            "href": "https://www.gdi-de.org/download/AK_Geodienste_Handlungsempfehlungen_INSPIRE_Darstellungsdienste.pdf",
            "title": "Handlungsempfehlungen für die Bereitstellung von INSPIRE-konformen Darstellungsdiensten (INSPIRE View Services) - Version 1.0 (12/2011)",
            "authors": ["AK Geodienste GDI-DE"],
            "status": "Publiziert",
            "publisher":"GDI-DE",
            "date": "2011"
        },
        "GDI-DE HE INS Downloaddienste": {
            "href": "",
            "title": "Handlungsempfehlungen für die Bereitstellung von INSPIRE-konformen Downloadiensten (INSPIRE Download Services) - Version 1.3.0 (03/2016)",
            "authors": ["AK Geodienste GDI-DE"],
            "status": "Publiziert",
            "publisher":"GDI-DE",
            "date": "2016"
        },
        "GDI-DE Vorgaben Darstellungsdienste": {
            "href": "https://www.gdi-de.org/download/AK_Geodienste_Architektur_GDI-DE_Bereitstellung_Darstellungsdienste.pdf",
            "title": "Architektur der Geodateninfrastruktur Deutschland - Vorgaben der GDI-DE zur Bereitstellung von Darstellungsdiensten",
            "authors": ["AK Geodienste GDI-DE"],
            "status": "Beschlossen",
            "publisher":"LG GDI-DE",
            "date": "2019"
        },
        "GDI-DE Konventionen MD": {
            "href": "https://www.gdi-de.org/download/AK_Metadaten_Konventionen_zu_Metadaten.pdf",
            "title": "Architektur der GDI-DE - Konventionen zu Metadaten - Version 2.2.1 (12/2023)",
            "authors": ["AK Metadaten GDI-DE"],
            "status": "Beschlossen",
            "publisher":"LG GDI-DE",
            "date": "2023"
        },
        "OGC Web API Guidelines": {
            "href": "https://github.com/opengeospatial/OGC-Web-API-Guidelines",
            "title": "OGC Web API Guidelines (2021)",
            "publisher":"Matheus A., Terpstra F. and Masó J.",
            "date": "2021"
        },
    }
}
