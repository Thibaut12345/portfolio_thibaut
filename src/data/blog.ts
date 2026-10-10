// EDIT BLOG POSTS HERE
export type BlogPost = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  { slug: 'van-idee-naar-testbaar-systeem', date: 'In de maak', category: 'ENGINEERING NOTES', title: 'Van idee naar een testbaar systeem', excerpt: 'Notities over prototyping, meten en leren van wat de hardware terugzegt.', content: ['Een goed idee wordt pas interessant wanneer je het kan bouwen, meten en opnieuw proberen.', 'In mijn projecten probeer ik daarom snel van een abstract plan naar een eerste testbare versie te gaan. Niet omdat die eerste versie perfect moet zijn, maar omdat de echte beperkingen dan zichtbaar worden.', 'De interessantste lessen zitten meestal tussen de eerste meting en de volgende iteratie.'] },
  { slug: 'feedback-meer-dan-een-vinkje', date: 'In de maak', category: 'FIELD NOTES', title: 'Waarom feedback meer is dan een groen vinkje', excerpt: 'Een persoonlijke kijk op duidelijke feedback in technische software.', content: ['Feedback is het gesprek tussen een systeem en de persoon die ermee werkt.', 'Bij engineering software is een correct antwoord maar het begin. De gebruiker moet ook kunnen begrijpen waarom iets klopt, waar het misgaat en wat de volgende stap is.', 'Dat maakt technische software tegelijk een programmeerprobleem en een communicatieprobleem.'] },
  { slug: 'software-die-de-echte-wereld-raakt', date: 'In de maak', category: 'LAB NOTEBOOK', title: 'Software die de echte wereld raakt', excerpt: 'Over de aantrekkingskracht van systemen die niet alleen op een scherm bestaan.', content: ['Ik vind software het interessantst wanneer ze gevolgen heeft buiten het scherm.', 'Een sensor die iets meet, een actuator die beweegt of een visualisatie die een moeilijke formule begrijpelijk maakt: telkens verandert code in gedrag.', 'Die overgang tussen digitaal en fysiek is precies waar ik verder in wil groeien.'] },
];
