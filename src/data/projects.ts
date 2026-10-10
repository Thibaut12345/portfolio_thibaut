// EDIT PROJECTS HERE
export type ProjectBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'panel'; label: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'specs'; items: { label: string; value: string }[] }
  | { type: 'twocol'; left: { label: string; text: string }; right: { label: string; text: string } };

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  intro: string;
  blocks: ProjectBlock[];
};

export const projects: Project[] = [
  {
    slug: 'fiets', number: '01', shortTitle: 'Self-driving bicycle', title: 'Autonomous / Self-Driving Bicycle', category: 'Cyber-physical systems',
    description: 'An exploration into making a bicycle perceive its surroundings and respond as a physical system.',
    tags: ['Control', 'Electronics', 'Embedded'], featured: true,
    image: 'https://images.pexels.com/photos/13122870/pexels-photo-13122870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Een zelfrijdende fiets is niet zomaar een robot op wielen — het is een systeem dat moet balanceren, waarnemen en beslissen in real-time, in een wereld die niet wacht. Dit project onderzoekt hoe je die drie lagen — sensing, computation en actuation — samenbrengt in één coherent geheel.',
    blocks: [
      { type: 'paragraph', text: 'De uitdaging begint bij de fysica: een fiets is van nature instabiel. Zodra hij stopt of te langzaam gaat, valt hij om. Dat betekent dat het controlesysteem niet alleen "goed genoeg" moet zijn — het moet continu werken, met latencies die in milliseconden gemeten worden, niet in seconden.' },
      { type: 'twocol', left: { label: 'Sensing', text: 'IMU voor houding, camera voor omgevingswaarneming, encoders voor snelheid. De ruwe data moet gefuseerd worden tot een betrouwbaar beeld van de wereld.' }, right: { label: 'Control', text: 'Een PID- of LQR-regelaar houdt de fiets rechtop. De stuurhoek is de belangrijkste actuator — kleine aanpassingen hebben grote gevolven.' } },
      { type: 'quote', text: 'De fysieke wereld is de finale reviewer: elke aanname die je maakt, wordt zichtbaar op het moment dat de fiets begint te rijden.' },
      { type: 'panel', label: 'Architecture', text: 'Sensors → Processing → Control → Actuators → Physical World. Elke stap heeft zijn eigen timing, zijn eigen foutenmodus en zijn eigen eisen aan betrouwbaarheid.' },
      { type: 'paragraph', text: 'Het project is nog volop in ontwikkeling. De focus ligt nu op het betrouwbaar maken van de sensorfusion en het tunen van de regelaar in simulatie voordat we naar de fysieke fiets overstappen. Elke test levert nieuwe vragen op — en dat is precies wat een goed project doet.' },
      { type: 'specs', items: [
        { label: 'Platform', value: 'Embedded (STM32 / Raspberry Pi)' },
        { label: 'Sensors', value: 'IMU, camera, encoders' },
        { label: 'Control', value: 'PID / LQR balancing' },
        { label: 'Status', value: 'In ontwikkeling' },
      ] },
    ],
  },
  {
    slug: 'rubiks-cube', number: '02', shortTitle: 'Rubik\'s Cube solver', title: 'Automatic Rubik\'s Cube Solver', category: 'Mechatronics',
    description: 'A compact automation project that turns a familiar puzzle into a structured engineering problem.',
    tags: ['Mechanics', 'Automation', 'Algorithms'], featured: true,
    image: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Een Rubik\'s Cube oplossen is voor een mens een uitdaging — voor een machine is het een compleet ander probleem. De machine moet niet alleen de oplossing berekenen, maar ook elke draai fysiek uitvoeren, controleren en corrigeren. Dit project brengt die twee werelden samen.',
    blocks: [
      { type: 'paragraph', text: 'Het interessante aan een automatische kubus-oplosser is dat het probleem op drie niveaus speelt: de algoritmische oplossing (welke draaien?), de mechanische uitvoering (hoe draai je een laag?) en de terugkoppeling (weet je zeker dat de kubus in de verwachte staat is?).' },
      { type: 'twocol', left: { label: 'Algoritme', text: 'De kubus wordt voorgesteld als een staat-vector. Een oplossingsalgoritme (zoals Kociemba of CFOP) berekent de minimale sequentie van draaien.' }, right: { label: 'Mechaniek', text: 'Servo\'s of stappenmotoren draaien de lagen. Elke beweging moet precies genoeg zijn — een halve graad te veel en de kubus blokkeert.' } },
      { type: 'quote', text: 'Goede automatisering begint met het zichtbaar maken van staat. Als je niet weet waar de kubus is, kun je hem ook niet oplossen.' },
      { type: 'panel', label: 'Testing', text: 'Elke stap moet gecontroleerd worden tegen de verwachte fysieke staat voordat de volgende draai begint. Een fout in de ene laag plant zich voort in alle volgende stappen.' },
      { type: 'paragraph', text: 'Het project is een tastbaar voorbeeld van hoe software-logica een mechanisch resultaat wordt. De kubus liegt niet: als je algoritme een fout maakt, of je mechaniek niet precies genoeg is, zie je het onmiddellijk.' },
      { type: 'specs', items: [
        { label: 'Algoritme', value: 'Kociemba / CFOP' },
        { label: 'Actuators', value: 'Servo\'s / stappenmotoren' },
        { label: 'Feedback', value: 'Visuele controle per stap' },
        { label: 'Status', value: 'In ontwikkeling' },
      ] },
    ],
  },
  {
    slug: 'race-game', number: '03', shortTitle: 'Race Game', title: 'Race Game', category: 'Software & interaction',
    description: 'A playful software project built around responsive interaction, feedback and a clear system loop.',
    tags: ['Programming', 'Interaction', 'Logic'],
    image: 'https://images.pexels.com/photos/3945653/pexels-photo-3945653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Een racegame lijkt simpel: je stuurt, je remt, je gaat sneller. Maar achter die eenvoud zit een strak systeem van regels, timing en feedback dat bepaalt of het spel "goed voelt" of niet. Dit project verkent die relatie.',
    blocks: [
      { type: 'paragraph', text: 'Het doel was niet om de mooiste of meest realistische racegame te bouwen, maar om te begrijpen hoe een spel werkt als systeem. Hoe beïnvloedt een kleine verandering in de physics de hele ervaring? Wat gebeurt er als feedback een fractie te laat komt?' },
      { type: 'twocol', left: { label: 'Game loop', text: 'Input → physics → rendering → feedback. Elke stap moet binnen een frame (16ms) klaar zijn, anders voelt het spel haperend.' }, right: { label: 'Feedback', text: 'Visuele, audio en haptische feedback moeten synchroon lopen. Een motor die klinkt vóór de visuele versnelling voelt fout, zelfs als de logica klopt.' } },
      { type: 'quote', text: 'Kleine timing-details hebben een groot effect op hoe een systeem aanvoelt. Een spel dat 2ms te laat reageert voelt anders dan een dat op tijd reageert.' },
      { type: 'panel', label: 'Architecture', text: 'Het systeem is georganiseerd rond input, game logic, feedback en progression. Elke laag heeft zijn eigen verantwoordelijkheid en zijn eigen timing-eisen.' },
      { type: 'paragraph', text: 'Het project leerde me dat software-ontwerp niet alleen over structuur gaat, maar ook over gevoel. Een systeem dat technisch klopt maar traag aanvoelt, is niet goed genoeg.' },
      { type: 'specs', items: [
        { label: 'Taal', value: 'Python / JavaScript' },
        { label: 'Focus', value: 'Game loop & feedback' },
        { label: 'Physics', value: 'Vereenvoudigd 2D-model' },
        { label: 'Status', value: 'Afgerond' },
      ] },
    ],
  },
  {
    slug: 'carpool-app', number: '04', shortTitle: 'Carpool App', title: 'Carpool App', category: 'Web application',
    description: 'A practical web application concept designed around coordinating people, routes and shared movement.',
    tags: ['Web', 'Product thinking', 'UX'],
    image: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Carpoolen klinkt eenvoudig: mensen delen een rit. Maar in de praktijk botst het op verschillende schema\'s, routes, vertrouwen en gewoontes. Dit project onderzoekt hoe een digitale tool die frictie kan wegnemen.',
    blocks: [
      { type: 'paragraph', text: 'De kernvraag was niet "kunnen we een app bouwen?" maar "wat moet de app doen zodat mensen daadwerkelijk samen rijden?" Dat is een productvraag, geen technische vraag. De techniek volgt uit het antwoord.' },
      { type: 'twocol', left: { label: 'Matching', text: 'De logica moet nuttige matches presenteren zonder onnodige complexiteit. Te veel opties verlammen de gebruiker; te weinig en de app is nutteloos.' }, right: { label: 'Vertrouwen', text: 'Mensen stappen liever niet zomaar bij een onbekende in de auto. Profielen, ratings en verificatie zijn geen extra\'s maar kernfuncties.' } },
      { type: 'quote', text: 'Nuttige systemen respecteren de tijd van de gebruiker evenveel als de implementatie. Een app die te veel stappen vraagt, wordt niet gebruikt.' },
      { type: 'panel', label: 'Product flow', text: 'De flow verbindt mensen, ritten en beslissingen door een klein aantal duidelijke schermen: zoek een rit, bekijk matches, bevestig, en rijd.' },
      { type: 'paragraph', text: 'De belangrijkste test was niet of de app werkte, maar of een nieuwe gebruiker begreep wat hij moest doen zonder uitleg. Dat is de echte maatstaf voor een product.' },
      { type: 'specs', items: [
        { label: 'Type', value: 'Web application concept' },
        { label: 'Focus', value: 'UX & product thinking' },
        { label: 'Flow', value: 'Zoeken → matchen → bevestigen' },
        { label: 'Status', value: 'Concept afgerond' },
      ] },
    ],
  },
  {
    slug: 'sowiso', number: '05', shortTitle: 'SOWISO', title: 'SOWISO Engineering Software', category: 'Engineering software',
    description: 'Building interactive engineering exercises and visualisations for technical concepts.',
    tags: ['React', 'TypeScript', 'Education'], featured: true,
    image: 'https://images.pexels.com/photos/132700/pexels-photo-132700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    intro: 'Bij SOWISO bouw ik interactieve engineering-oefeningen en visualisaties die complexe technische concepten begrijpelijk maken. Het werk zit op het snijpunt van pedagogie, software en engineering.',
    blocks: [
      { type: 'paragraph', text: 'De uitdaging is niet om een concept te visualiseren — dat kan iedereen met een tekenpakket. De uitdaging is om een visualisatie te maken die klopt, die feedback geeft op wat de student doet, en die helpt begrijpen in plaats van alleen tonen.' },
      { type: 'twocol', left: { label: 'Thermodynamica', text: 'Interactieve diagrammen waarin studenten toestanden kunnen verkennen en direct zien hoe parameters elkaar beïnvloeden.' }, right: { label: 'Stromingsleer', text: 'Visualisaties van stromingspatronen waarbij de student parameters aanpast en het effect op de stroom direct zichtbaar wordt.' } },
      { type: 'quote', text: 'Een goede visualisatie is geen decoratie; het is deel van de uitleg. Als de visualisatie wegvalt, moet de uitleg ook armer voelen.' },
      { type: 'panel', label: 'Feedback loops', text: 'Elke interactieve oefening verbindt een gebruikersactie aan een visueel model en een onmiddellijke uitleg. Technische correctheid en duidelijke feedback moeten samen gecontroleerd worden.' },
      { type: 'paragraph', text: 'Wat ik hier leer is dat onderwijssoftware een eigen discipline is. Het is niet gewoon een app met formules erin — het is een ontwerp van hoe iemand iets leert, met software als medium.' },
      { type: 'specs', items: [
        { label: 'Stack', value: 'React, TypeScript' },
        { label: 'Domein', value: 'Thermodynamica, stromingsleer' },
        { label: 'Rol', value: 'Engineering Software Developer' },
        { label: 'Status', value: 'Lopend' },
      ] },
    ],
  },
];
