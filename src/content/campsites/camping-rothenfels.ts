import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-rothenfels";

const campingRothenfels: CampsiteConfig = {
  name: "Campingplatz Rothenfels",
  shortName: "Rothenfels",
  slug: "camping-rothenfels",
  ort: "Oberwölz",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Oberwölz · Wölzer Tauern · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping unter der Burg, hoch über dem Wölzertal",
  claimEmphasis: "unter der Burg",
  emailDetail: "die Lage des Platzes unter der Burg Rothenfels",
  intro:
    "Terrassenförmige Stellplätze über dem Wölzertal, der Blick hinauf zur Burg Rothenfels und einer der dunkelsten Sternenhimmel Mitteleuropas — schrankenlos, hundefreundlich und mitten in der Natur.",

  logo: { src: `${IMG}/logo-7c0e3e8090.png`, alt: "Logo Camping Rothenfels" },

  statement: {
    text: "Hier suchst du dir deinen Platz selbst aus — schrankenlos, unter freiem Himmel, mit der Burg im Rücken.",
    emphasis: "schrankenlos",
  },

  pillars: [
    {
      title: "Camping unter der Burg",
      text: "Der Platz gehört zur geschichtsträchtigen Burg Rothenfels und liegt auf sonnigen Terrassen darunter — Burgblick inklusive.",
      image: { src: `${IMG}/gallery-e50d1f88b3.webp`, alt: "Stellplatz mit Blick auf die Burg Rothenfels" },
    },
    {
      title: "Mitten in den Wölzer Tauern",
      text: "Wald, Wiesen und Gipfel bis 2.500 m liegen direkt vor dem Vorzelt — Natur-Pur-Feeling, nur 1,5 km von Oberwölz.",
      image: { src: `${IMG}/gallery-04da1a21af.webp`, alt: "Panorama der Wölzer Tauern über Oberwölz" },
    },
    {
      title: "Dunkelster Himmel Mitteleuropas",
      text: "Oberwölz zählt laut Light-Pollution-Map zu den dunkelsten Gebieten Mitteleuropas — die Sterne stehen hier zum Greifen nah.",
      image: { src: `${IMG}/gallery-671fae0cd6.webp`, alt: "Milchstraße über den Wölzer Tauern — dunkler Sternenhimmel bei Oberwölz" },
    },
  ],

  usps: [
    "Hunde campen gratis",
    "Schrankenlos & frei",
    "Dunkler Sternenhimmel",
    "Eigenes Bergquellwasser",
    "Lagerfeuer erlaubt",
    "1,5 km nach Oberwölz",
  ],

  trust: {
    heading: "Sterne, Stille und eine Burg über dir",
    headingEmphasis: "Sterne, Stille",
    intro:
      "Der Campingplatz gehört zur Burg Rothenfels und liegt nur 1,5 km von Oberwölz, der kleinsten historischen Stadt der Steiermark — Natur-Pur-Feeling mit Lagerfeuer, Wald und Ruhe.",
  },

  awards: [
    { label: "Top Camping Platz — Beyond Camping 2024", image: { src: `${IMG}/award-a22e6748ba.png`, alt: "Auszeichnung Beyond Camping 2024" } },
    { label: "Europäisches Wandergütesiegel", image: { src: `${IMG}/logo-ac9cfb07ef.png`, alt: "Europäisches Wandergütesiegel" } },
  ],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-a75be43f17.webp`, alt: "Luftaufnahme: Campingplatz Rothenfels mit der Burg über dem Wölzertal" },
  },

  breather: {
    image: { src: `${IMG}/gallery-5d94a8cd6b.webp`, alt: "Klarer Gebirgsbach in den Wölzer Tauern" },
    line: "Frisches Bergquellwasser sprudelt hier aus eigenen Quellen.",
  },

  camping: {
    heading: "Camping am Fuße der Burg Rothenfels",
    intro:
      "Großzügige Terrassen für Wohnmobil, Wohnwagen und Zelt — unkompliziert, naturnah und mit allem, was einen entspannten Campingtag ausmacht.",
    features: [
      {
        title: "Schrankenlos & frei",
        text: "Camping ist hier unkompliziert und schrankenlos — du suchst dir deinen Stellplatz auf den Terrassen einfach selbst aus, ganz wie es dir gefällt.",
        image: { src: `${IMG}/gallery-9deddd16e9.webp`, alt: "Zelte auf der grünen Campingterrasse in Rothenfels" },
      },
      {
        title: "Terrassen mit Aussicht",
        text: "Großzügige, terrassenförmig angelegte Stellflächen für Wohnmobil, Wohnwagen und Zelt — mit herrlicher Aussicht über das Wölzertal.",
        image: { src: `${IMG}/gallery-38df7c696b.webp`, alt: "Wohnwagen auf der Terrasse mit der Burg Rothenfels im Hintergrund" },
      },
      {
        title: "Hunde campen gratis",
        text: "Wir sind dog-friendly: Dein Hund übernachtet kostenlos mit und genießt Wald und Wiesen rund um den Platz genauso wie du.",
        image: { src: `${IMG}/gallery-97a0f6f56b.webp`, alt: "Hund auf der Wiese am Campingplatz Rothenfels" },
      },
      {
        title: "Café im Garten",
        text: "Das „Café im Garten“ im ehemaligen Obstgarten der Burg verwöhnt dich mit hausgemachten Mehlspeisen und Blick ins Wölzertal.",
        image: { src: `${IMG}/gallery-95106a8705.webp`, alt: "Sonnenterrasse des Café im Garten mit Bergblick" },
      },
      {
        title: "Freiraum für Familien",
        text: "Toben in der Natur, Wandern und abends gemeinsam am Lagerfeuer kochen — gerade für Familien mit Kindern ist die Freiheit am Platz grandios.",
        image: { src: `${IMG}/gallery-1fb3a78485.webp`, alt: "Familie beim Camping mit Wohnwagen und Vorzelt in Rothenfels" },
      },
      {
        title: "Lagerfeuer-Abende",
        text: "Romantische Abende am Lagerfeuer gehören dazu — Geschichten erzählen und gemeinsam zusehen, wie über dem Tal die Sterne aufgehen.",
        image: { src: `${IMG}/gallery-55f32df9f0.webp`, alt: "Lagerfeuer mit Blick über das Wölzertal bei Sonnenuntergang" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus in die Wölzer Tauern",
    intro:
      "Wandern und Fischen — rund um den Platz beginnt das Abenteuer direkt vor dem Vorzelt.",
    items: [
      {
        title: "Wandern in den Wölzer Tauern",
        text: "Sanfte, gut beschilderte Wege führen direkt vom Platz in die Berge — vom leichten Spaziergang bis zur Tour auf 2.500 m Seehöhe.",
        image: { src: `${IMG}/gallery-bd5e040203.webp`, alt: "Wanderweg zwischen alten Bäumen nahe Oberwölz" },
      },
      {
        title: "Fischen am Fischsee",
        text: "Auf 1.800 m Seehöhe liegt der rund 3,5 ha große Fischsee — Fischkarten für ein einzigartiges Angelerlebnis gibt es auf Anfrage.",
        image: { src: `${IMG}/gallery-6a2934399a.webp`, alt: "Bergsee in den Wölzer Tauern" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Oberwölz",
    modes: [
      { title: "Mit dem Auto", text: "Über die S36 Murtal Schnellstraße bis Scheifling, weiter über Niederwölz nach Oberwölz — der Platz liegt rund 1,5 km außerhalb." },
      { title: "Mit der Bahn", text: "Nächste Bahnhöfe sind Murau und Scheifling; von dort weiter mit Bus oder Taxi ins gut 20 Minuten entfernte Oberwölz." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Graz liegt rund zwei Autostunden entfernt, Salzburg und Klagenfurt sind ähnlich gut erreichbar." },
    ],
  },

  galerie: {
    heading: "Vom Tag bis unter die Sterne",
    headingEmphasis: "unter die Sterne",
    intro: "Wald, Burg und stimmungsvolle Abende am Lagerfeuer — ein paar Eindrücke vom Campingplatz Rothenfels.",
    tag: "Oberwölz · Steiermark",
    images: [
      { src: `${IMG}/gallery-02720a4725.webp`, alt: "Milchstraße über der Burg Rothenfels — Sternenhimmel bei Oberwölz" },
      { src: `${IMG}/gallery-4df4677c43.webp`, alt: "Sonnenterrasse mit Blick auf die Burg Rothenfels" },
      { src: `${IMG}/gallery-4b14f26965.webp`, alt: "Geselliger Abend am Lagerfeuer" },
      { src: `${IMG}/gallery-df03ff5c0e.webp`, alt: "Luftaufnahme des Campingplatzes Rothenfels mit Burg Rothenfels und dem weiten Wölzertal" },
    ],
  },

  booking: {
    heading: "Such dir deinen Platz unter der Burg",
    headingEmphasis: "unter der Burg",
    intro:
      "Wähle Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit am Campingplatz Rothenfels.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz-Pauschale inkl. Strom & 2 Erwachsene · Nebensaison € 38, Hauptsaison € 43 · zzgl. Nächtigungs- & Umweltabgabe (€ 2 p. P. ab 15 J./Nacht) · Hunde gratis",
    highlight: { title: "Hunde campen gratis", text: "Dein Vierbeiner übernachtet kostenlos mit — ohne Aufpreis." },
    categories: [
      { id: "stellplatz-neben", label: "Stellplatz · Nebensaison", perNight: 38, perExtraGuest: 9 },
      { id: "stellplatz-sommer", label: "Stellplatz · Hauptsaison", perNight: 43, perExtraGuest: 9 },
      { id: "acsi", label: "ACSI / Rabattkarte", perNight: 27 },
      { id: "biker", label: "Motorrad- & Radfahrer", perNight: 19 },
    ],
  },

  kontakt: {
    coords: { lat: 47.199958, lng: 14.293727 },
    tel: "+43 676 5552003",
    telHref: "tel:+436765552003",
    mail: "office@rothenfels.at",
    facebook: "https://www.facebook.com/campingrothenfels/",
    adresse: "Bromach 1 · 8832 Oberwölz · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Café im Garten", href: "#camping" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingRothenfels;
