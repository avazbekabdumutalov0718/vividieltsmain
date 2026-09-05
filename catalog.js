/* ============================================================
   AVAZBEK READER BOOSTER — master catalog
   order[] defines the exact unlock sequence.
   ============================================================ */
const ARB_ORDER = [
  { id: 'p01', mock: false, title: 'The Growth of Agriculture', file: 'p01.html', blurb: 'How farming shaped the ancient world' },
  { id: 'p02', mock: false, title: 'Science and Filmmaking', file: 'p02.html', blurb: 'CGI, Oscars, and the science of realistic skin' },
  { id: 'p03', mock: false, title: 'Redesigning the Cleveland Museum of Art', file: 'p03.html', blurb: 'Architecture meets curation' },
  { id: 'p04', mock: false, title: "Australia's Airborne Dentists", file: 'p04.html', blurb: 'Dental care across the outback' },
  { id: 'p05', mock: false, title: "When People Are 'Deaf' to Music", file: 'p05.html', blurb: 'Amusia and the brain' },
  { id: 'm1', mock: true, title: 'Full Mock Test 1', file: 'm1.html', blurb: 'The Seed Hunters · Bees and Pollination · The Strange World of Sight' },

  { id: 'p06', mock: false, title: 'How to Be Happy', file: 'p06.html', blurb: 'The psychology of happiness' },
  { id: 'p07', mock: false, title: 'Intelligent Behavior in Birds', file: 'p07.html', blurb: 'Tool use and cognition in birds' },
  { id: 'p08', mock: false, title: 'Mind Music', file: 'p08.html', blurb: 'Music, memory and the brain' },
  { id: 'p09', mock: false, title: 'The Early History of Olive Oil', file: 'p09.html', blurb: 'A staple of the ancient Mediterranean' },
  { id: 'p10', mock: false, title: 'Optimism and Health', file: 'p10.html', blurb: 'Does positive thinking affect wellbeing?' },
  { id: 'm2', mock: true, title: 'Full Mock Test 2', file: 'm2.html', blurb: 'The Culture of Chimpanzees · Numeracy in Animals · Company Innovation' },

  { id: 'p11', mock: false, title: 'The Origin of Language', file: 'p11.html', blurb: 'How human speech began' },
  { id: 'p12', mock: false, title: 'Reef Fish Study', file: 'p12.html', blurb: 'Behaviour beneath the waves' },
  { id: 'p13', mock: false, title: 'Liquorice', file: 'p13.html', blurb: 'The history of a curious root' },
  { id: 'p14', mock: false, title: 'Decision Fatigue', file: 'p14.html', blurb: 'Why willpower runs out' },
  { id: 'p15', mock: false, title: 'Will Eating Less Make You Live Longer?', file: 'p15.html', blurb: 'Calorie restriction and longevity' },
  { id: 'm3', mock: true, title: 'Full Mock Test 3', file: 'm3.html', blurb: 'Insects and Robots · Extinction of Aussie Animals · Amateur Naturalists' },

  { id: 'p16', mock: false, title: 'The Importance of Icebergs to Ocean Life', file: 'p16.html', blurb: 'Icebergs as floating ecosystems' },
  { id: 'p17', mock: false, title: 'Memory in Plants', file: 'p17.html', blurb: "Monica Gagliano's controversial research" },
  { id: 'p18', mock: false, title: 'How Do Plants Talk to Each Other?', file: 'p18.html', blurb: 'Chemical signalling between plants' },
  { id: 'p19', mock: false, title: 'Practical Learning in the Classroom', file: 'p19.html', blurb: 'Hands-on versus theoretical teaching' },
  { id: 'p20', mock: false, title: 'The History of the Pencil', file: 'p20.html', blurb: 'A humble tool with a long past' },
  { id: 'm4', mock: true, title: 'Full Mock Test 4', file: 'm4.html', blurb: "Effect and Cause · Australia's Camouflaged Creatures · The Pirahã People" },

  { id: 'p21', mock: false, title: 'The Importance of Law', file: 'p21.html', blurb: 'Why societies need rules' },
  { id: 'p22', mock: false, title: 'The Role of Mother Tongue in Education', file: 'p22.html', blurb: 'Language and learning outcomes' },
  { id: 'p23', mock: false, title: 'The Voynich Manuscript', file: 'p23.html', blurb: "History's most mysterious book" },
  { id: 'p24', mock: false, title: 'The Whale Goes to Court', file: 'p24.html', blurb: 'A remarkable legal drama in the U.S.A.' },
  { id: 'p25', mock: false, title: "Why Don't We Sleep?", file: 'p25.html', blurb: 'The evolutionary puzzle of sleep' },
  { id: 'm5', mock: true, title: 'Full Mock Test 5', file: 'm5.html', blurb: 'The Origin of Paper · The Myth of the Eight-hour Sleep · The Art of Deception' },

  { id: 'p26', mock: false, title: 'William Gilbert and Magnetism', file: 'p26.html', blurb: 'The father of magnetic science' },
  { id: 'p27', mock: false, title: 'Seeing the Colour of Sounds, Hearing the Colour of Numbers', file: 'p27.html', blurb: 'Synaesthesia explained' },
  { id: 'p28', mock: false, title: 'The Benefits of Learning an Instrument', file: 'p28.html', blurb: 'Music training and the developing brain' },
  { id: 'p29', mock: false, title: 'The Cycle of Cranberry Production', file: 'p29.html', blurb: 'From bog to table' },
  { id: 'p30', mock: false, title: "Dark Chocolate's Health-giving Benefits", file: 'p30.html', blurb: 'Cocoa and cardiovascular health' },
  { id: 'm6', mock: true, title: 'Full Mock Test 6', file: 'm6.html', blurb: 'James Hargreaves & the Spinning Jenny · The Power of Placebos · Practical Learning' },

  { id: 'm7', mock: true, title: 'Bonus Mock Test', file: 'm7.html', blurb: 'Extra practice · All in the Family, and more' }
];
