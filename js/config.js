let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "IMX - Metadata basic principles",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",                   // Werkversie
  specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  specType: "HR",
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "dk",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "WaU-Metadata",
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Paul Janssen",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Jesse Bakker",
        company: "Kadaster",
        companyURL: "https://www.kadaster.nl"
      },
	        {
        name: "Paul Janssen",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl"
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/IMX-Metadata/",
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ], 
  localBiblio: 
  {
    "Property-Stereotype-for-Metadata":
      {
        title:      "Property Stereotype for Metadata",
        href:       "https://shapechange.net/wp-content/uploads/2019/12/UGAS19-D100_property_stereotypes.pdf",
        status:     "V1.0",
        publisher:  "Publisher-1",
        company:    "Interactive Instruments",
    },
  }
};
