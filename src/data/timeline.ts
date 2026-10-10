// EDIT TIMELINE HERE
export type TimelineItem = { period: string; title: string; organisation: string; description: string; type: 'work' | 'study' | 'community'; highlight?: boolean };

export type TimelineSection = { type: 'work' | 'study' | 'community'; label: string; items: TimelineItem[] };

export const timeline: TimelineItem[] = [
  // WORK
  { period: '2024 — heden', title: 'Engineering Software Developer', organisation: 'SOWISO', description: 'Ontwikkelen van interactieve engineering-oefeningen en visualisaties rond thermodynamische diagrammen, stromingsleer en automatische feedback. Werken met React, TypeScript en educatieve algoritmes.', type: 'work' },
  { period: 'feb 2025 — heden', title: 'Studiebegeleider & bijlesgever', organisation: 'De Limiet', description: 'Bijles in wiskunde, mechanica, elektronica en fysica voor secundair en hoger onderwijs. Complexe concepten vertalen naar begrijpelijke stappen.', type: 'work' },
  { period: 'jul — sep 2024', title: 'Medewerker productie (studentenjob)', organisation: 'Vandergraesen Potatoes', description: 'Studentenjob in een productieomgeving: efficiënt samenwerken, verantwoordelijkheid nemen en troubleshooting in de praktijk.', type: 'work' },
  // STUDY
  { period: '2025 — heden', title: 'Master Industrieel Ingenieur — Elektronica voor Cyber-fysische Systemen', organisation: 'KU Leuven', description: 'Verdieping in embedded systems, controletheorie, signaalverwerking en cyber-fysische systemen. Focus op het ontwerpen van systemen die de digitale en fysieke wereld verbinden.', type: 'study', highlight: true },
  { period: '2022 — 2025', title: 'Bachelor Industrieel Ingenieur — afgestudeerd met onderscheiding (cum laude)', organisation: 'KU Leuven', description: 'Sterke technische basis in elektronica, programmeren, wiskunde en fysica. Afgestudeerd met onderscheiding dankzij consistente academische prestaties en technische projecten.', type: 'study', highlight: true },
  { period: '2018 — 2022', title: 'Industriële Wetenschappen — secundair onderwijs', organisation: 'Sint-Bernardus, Oudenaarde', description: 'Basis in wiskunde, fysica, elektronica en technische projecten. Eerste kennismaking met circuits, programmeren en systeemdenken.', type: 'study' },
  // COMMUNITY
  { period: '2024 — heden', title: 'Studentenambassadeur & begeleider infomomenten', organisation: 'KU Leuven', description: 'Toekomstige studenten informeren over de opleiding Industrieel Ingenieur, infomomenten begeleiden en vragen beantwoorden.', type: 'community' },
  { period: '2024 — 2025', title: 'Studentenraad — IIW Campus Gent', organisation: 'KU Leuven', description: 'Actief lid van de studentenraad: studenten vertegenwoordigen, beleid meevormen en evenementen medorganiseren.', type: 'community' },
];

export const timelineSections: TimelineSection[] = [
  { type: 'study', label: 'Studies', items: timeline.filter(item => item.type === 'study') },
  { type: 'work', label: 'Werkervaring', items: timeline.filter(item => item.type === 'work') },
  { type: 'community', label: 'Community & Engagement', items: timeline.filter(item => item.type === 'community') },
];
