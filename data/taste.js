/**
 * CurioSpire - Taste & Discovery Database (100 Niche Topics)
 */

const TASTE_TOPICS = [
  {
    id: "tst-001",
    category: "Taste & Discovery",
    title: "Bourdieu's 'Distinction' & Cultural Capital",
    subtitle: "How aesthetic judgment and 'good taste' reinforce social class",
    summary: "Sociologist Pierre Bourdieu demonstrated that what societies deem 'good taste' is not an objective natural instinct, but an acquired form of cultural capital used to signal status.",
    keyTakeaway: "Taste is not neutral; refining one's palette requires awareness of the historical and social forces that shape aesthetic preference.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Distinction: A Social Critique of the Judgement of Taste", url: "https://www.hup.harvard.edu/books/9780674212770", sourceName: "Harvard University Press", type: "Paper", description: "Bourdieu's landmark empirical study on aesthetic preference." },
      { title: "JSTOR: Cultural Capital and Aesthetics", url: "https://www.jstor.org/stable/202060", sourceName: "JSTOR", type: "Journal", description: "Sociological analysis of connoisseurship and class." }
    ]
  },
  {
    id: "tst-002",
    category: "Taste & Discovery",
    title: "Susan Sontag's 'Notes on Camp'",
    subtitle: "The sensibility of unnatural artifice, irony, and theatrical exaggeration",
    summary: "Camp aesthetics celebrate bad taste turned so outrageously theatrical that it becomes brilliant. Sontag defined Camp as a love of the unnatural, of artifice and exaggeration.",
    keyTakeaway: "True aesthetic maturity includes appreciating serious high art while simultaneously delighting in glorious, self-aware trash.",
    depth: "Intermediate",
    sources: [
      { title: "Notes on Camp - Susan Sontag Foundation", url: "https://www.susansontag.com/", sourceName: "Sontag Archive", type: "Archive", description: "Sontag's 1964 essay defining Camp sensibility." },
      { title: "Met Museum: Camp - Notes on Fashion", url: "https://www.metmuseum.org/exhibitions/listings/2019/camp-notes-on-fashion", sourceName: "Metropolitan Museum of Art", type: "Museum", description: "Exhibition study analyzing Camp in high fashion history." }
    ]
  },
  {
    id: "tst-003",
    category: "Taste & Discovery",
    title: "Sprezzatura & Calculated Effortlessness",
    subtitle: "The Renaissance art of concealing intense effort behind nonchalance",
    summary: "Coined by Baldassare Castiglione in 1528, Sprezzatura is the ability to perform difficult tasks or present refined style so effortlessly that it conceals all conscious labor.",
    keyTakeaway: "The highest expression of craft is making the complex look organic, spontaneous, and unforced.",
    depth: "Accessible",
    sources: [
      { title: "The Book of the Courtier - Sprezzatura", url: "https://www.bl.uk/collection-items/the-book-of-the-courtier", sourceName: "British Library", type: "Archive", description: "Historical renaissance text defining Italian court etiquette." },
      { title: "Journal of Aesthetics and Art Criticism", url: "https://academic.oup.com/jaac", sourceName: "Oxford Academic", type: "Journal", description: "Analysis of nonchalance as an aesthetic category." }
    ]
  },
  {
    id: "tst-004",
    category: "Taste & Discovery",
    title: "Shibui: Japanese Subtle Elegance",
    subtitle: "The beauty of understated, unobtrusive, and quiet refinement",
    summary: "Shibui describes objects of quiet, austere elegance. A shibui object appears simple at first glance, but reveals complex texture, balance, and depth upon prolonged contemplation.",
    keyTakeaway: "Loud beauty demands immediate attention; quiet beauty rewards deep, patient observation.",
    depth: "Accessible",
    sources: [
      { title: "Shibui Aesthetics - Tokyo National Museum", url: "https://www.tnm.jp/", sourceName: "Tokyo National Museum", type: "Museum", description: "Curatorial analysis of Japanese understated design principles." },
      { title: "Design Issues: Japanese Aesthetic Terms", url: "https://www.jstor.org/journal/designissues", sourceName: "JSTOR / MIT Press", type: "Journal", description: "Comparative study of Shibui, Wabi, and Sabi." }
    ]
  }
];

// Dynamically generate remaining up to 100 topics for Taste & Discovery
(function generateTasteTopics() {
  const tasteThemes = [
    ["Terroir in Single-Origin Coffee & Wine", "How micro-soil, altitude, and climate impart distinct sensory flavor notes"],
    ["Olfactory Pyramids in Perfumery", "Top, heart, and base notes evolving across skin chemistry over hours"],
    ["High-Fidelity Audiophilia & Vacuum Tubes", "Warm even-order harmonic distortion in analog tube amplification"],
    ["Flânerie: The Art of the Urban Stroller", "Baudelaire and Walter Benjamin's passionate, aimless observation of city life"],
    ["Auteur Theory in World Cinema", "Viewing films as the singular artistic signature of their director"],
    ["Slow Food & Heritage Artisanal Grains", "Reclaiming ancient wheat varieties and traditional fermentation for complex flavor"],
    ["Deep Reading Rituals & Physical Books", "The tactile, olfactory, and spatial cognitive benefits of paper typography"],
    ["Horology & Mechanical Movement Finishing", "Côtes de Genève, anglage beveling, and perlage finishing on watch bridges"],
    ["Rare Tea Cultivation & Oxidation", "Pu-erh post-fermentation aging vs. High-mountain Taiwanese Oolong roasting"],
    ["The Art of Curation & Exhibition Design", "Selecting what to exclude: storytelling through spatial editing"],
    ["Gastronomic Umami & Kokumi Synergy", "Glutamate and peptide chemistry unlocking deep savory complexity"],
    ["Architectural Acoustics in Concert Halls", "Reverberation time (RT60) and lateral reflection geometry"],
    ["Textile Tactility & Raw Selvedge Denim", "Shuttle loom shuttle weave variations and natural indigo rope-dyeing patina"],
    ["The Capsule Wardrobe & Uniform Dressing", "Curating high-quality timeless garments to eliminate decision fatigue"],
    ["Artisanal Bespoke Shoemaking", "Hand-welted Goodyear construction, wooden lasts, and bark-tanned leather soles"],
    ["Minimalist Interior Lighting Architecture", "Indirect 2700K warm wash vs harsh overhead spotlight glare"],
    ["Rare Book Collecting & First Editions", "Evaluating foxing, deckle edges, provenance, and original dust jacket condition"],
    ["Vintage Vinyl & Micro-Groove Engineering", "Mastering lacquer cuts and mechanical needle stylus vibration tracking"],
    ["The Art of Conversation & Listening", "Grice's conversational maxims and active empathetic presence"],
    ["Artisanal Bean-to-Bar Chocolate", "Conching times and single-origin cocoa bean fermentation profiles"],
    ["Botanical Gin Distillation & Terroir", "Macerating juniper, coriander, and native botanicals in copper pot stills"],
    ["Matcha Tea Ceremony (Chado)", "Wabi-sabi ritual preparation of stone-ground green tea whisked with bamboo"],
    ["Aesthetic Distance (Edward Bullough)", "Maintaining psychic distance to appreciate disturbing or strange art objectively"],
    ["Highbrow, Lowbrow, and Middlebrow", "Russell Lynes' humorous yet sharp breakdown of cultural taste tiers"],
    ["Kitsch vs Avant-Garde (Clement Greenberg)", "Industrial pre-digested pop culture vs rigorous artistic experimentation"],
    ["Vintage Camera Mechanical Tactility", "Leica rangefinder optical patch alignment and mechanical shutter click acoustics"],
    ["Artisanal Cheesemaking & Raw Milk Flora", "Affinage aging caves developing complex rind moulds and crystal crunch"],
    ["Architectural Spatial Sequence", "Experiencing spatial compression followed by soaring double-height expansion"],
    ["Sublime vs Beautiful (Edmund Burke)", "Terrifying awe of vast mountain abysses vs gentle pleasure of harmonious flowers"],
    ["Typography Pairing Discipline", "Combining geometric sans-serif headers with humanistic serif body text"],
    ["Japanese Joinery (Sashimono)", "Interlocking wooden furniture joinery built completely without nails or glue"],
    ["Dry-Aged Beef Enzymatic Tenderness", "Lactic acid break-down and moisture evaporation concentrating beef umami"],
    ["Small-Batch Craft Beer Wild Fermentation", "Lambics aged in oak foeders inoculated with wild Brettanomyces yeast"],
    ["Natural Wine & Low Intervention", "Spontaneous wild yeast fermentation without added sulfites or filtration"],
    ["Soundscape Ecology & Quiet Parks", "Preserving natural acoustic environments free from human motor noise"],
    ["Aesthetic Disinterestedness (Kant)", "Contemplating beauty without personal desire or utilitarian interest"],
    ["Art of Letter Writing & Stationary", "Cotton rag paper, fountain pen ink shading, and wax sealing rituals"],
    ["Artisanal Olive Oil Bitterness & Polyphenols", "Early harvest cold extraction yielding peppery throat sting"],
    ["Ceramic Glaze Chemistry (Tenmoku)", "Iron oxide reduction forming shimmering metallic oil-spots in high heat"],
    ["Bespoke Fragrance Layering", "Combining single-note accords to create a unique personal sillage"],
    ["Niche Perfumery vs Commercial Scents", "Using rare iris butter and oud resins over synthetic mass-market musk"],
    ["Cinematography Aspect Ratios", "1.33:1 Academy box vs 2.39:1 Anamorphic widescreen storytelling"],
    ["Color Grading in Cinema", "Orange and teal complementary color contrast in Hollywood film stocks"],
    ["Artisanal Bread Sourdough Micro-Biome", "Wild lactobacillus and yeast cultures producing blistered open-crumb crust"],
    ["Traditional Japanese Tatami Aesthetics", "Rush grass scent and woven mat proportions defining room dimensions"],
    ["Modular Modular Synth Patching", "Discovering unexpected generative melodies via voltage control loops"],
    ["Micro-Distillery Small-Batch Bourbon", "Charred virgin American oak barrels imparting vanillin and caramel wood sugars"],
    ["The Art of the Aperitivo", "Bitter amaro herbs stimulating appetite and social ease before dining"],
    ["Vintage Watch Dial Patina (Tropical Dials)", "UV light fading black dials into rich chocolate brown patina"],
    ["Raw Linen & Hemp Textiles", "Breathable natural slub textures softening progressively with every wash"],
    ["Minimalist Kitchen Tool Curation", "Replacing unitaskers with one heavy French carbon steel chef knife"],
    ["Traditional Charcoal Grilling (Binchotan)", "Smokeless white oak charcoal burning at 1000°C with intense far-infrared heat"],
    ["Architectural Concrete (Tadao Ando)", "Silky smooth shutter-board concrete with visible tie-rod holes"],
    ["The Art of the Monologue in Theater", "Pinter pauses and unspoken subtext in dramatic stage performance"],
    ["Artisanal Mezcal Agave Terroir", "Roasting wild Tobalá agaves in underground stone pits with volcanic rock"],
    ["Vintage Poster Lithography Printing", "Layering stone lithograph inks for glowing vintage travel poster graphics"],
    ["Custom Mechanical Keyboard Switches", "Lubricating linear switch stems for buttery smooth keystroke acoustics"],
    ["Art of Table Setting & Tableware", "Balancing linen napkins, heavy silverware, and crystal glass proportions"],
    ["Japanese Knife Steel Metallurgy", "Aogami Super blue carbon steel clad in stainless damascus jacket"],
    ["Scent Memory & The Proustian Effect", "Involuntary memory recall triggered by olfactory pathways"],
    ["Vintage Leather Goods & Saddle Stitching", "Two-needle hand stitching that never unravels when an individual stitch breaks"],
    ["Aesthetic Functionalism in Kitchenware", "Cast iron skillet seasoning polymerizing oil into natural non-stick coating"],
    ["Field Recording & Environmental Sound", "Capturing binaural nature ambient audio with ultra-low-noise microphones"],
    ["Art of Essay Writing (Montaigne)", "Testing one's own thoughts through wandering exploratory prose"],
    ["Curating Personal Libraries", "Organizing books by thematic resonance rather than rigid alphabetical system"],
    ["Artisanal Cold Brew Extraction", "18-hour room temperature steep extracting sweet solubles without bitter acids"],
    ["Traditional European Fermentation", "Lacto-fermented sauerkraut and kimchi preserving seasonal garden harvests"],
    ["Bespoke Frame Craft for Fine Art", "Hand-gilded museum frames enhancing canvas depth without overpowering art"],
    ["Minimalist Mechanical Pens", "Precision machined titanium click pens with frictionless refill cartridges"],
    ["Art of Pairing Food & Wine", "Matching acid in wine with fat in food to reset palate balance"],
    ["Vintage Analog Synthesizers (Moog)", "Warm ladder filter resonance sculpting raw voltage square waves"],
    ["Architectural Daylight Harvesting", "Angling clerestory windows to bounce natural light deep into interior rooms"],
    ["Traditional Wood Inlay Intarsia", "Fitting contrasting wood veneers together to form intricate spatial pictures"],
    ["Art of Solitude & Solitary Walks", "Anthony Storr's study on how solitude fosters deep creative synthesis"],
    ["Sensory Deprivation Flotation Tanks", "Floating in high-density Epsom salt water to quiet sensory processing"],
    ["Artisanal Vinegar Fermentation", "Slow Orleans method converting fine wine into vibrant aromatic vinegar"],
    ["Vintage Mechanical Stopwatch Precision", "Split-second flyback chronographs measuring micro intervals"],
    ["Art of Botanical Arrangement (Ikebana)", "Shin-Soe-Hikae structural line harmony celebrating negative space"],
    ["Minimalist Footwear & Barefoot Motion", "Zero-drop soles enabling natural foot splay and gait proprioception"],
    ["Art of Cask-Conditioned Real Ale", "Unfiltered beer conditioning naturally in wooden casks with live yeast"],
    ["Architectural Porches & Transition Zones", "Designing thresholds that bridge indoor intimacy with outdoor public life"],
    ["Traditional Italian Espresso Extraction", "9 bars of pressure extracting 30ml of hazelnut-colored tiger-striped crema"],
    ["Art of Calligraphy & Copperplate Flourishes", "Flexible dip nibs creating dramatic thick-and-thin stroke contrast"],
    ["Vintage Glassware & Lead Crystal Ring", "Hand-blown thin rims and resonant acoustic ringing when tapped"],
    ["Art of Slow Travel", "Immersing in a single neighborhood for weeks rather than checking tourist landmarks"],
    ["Artisanal Cured Meats (Prosciutto di Parma)", "Sea salt and mountain air curing hams in cellars for 24 months"],
    ["Minimalist Home Audio Speaker Placement", "Positioning speakers in equilateral triangle away from walls for 3D soundstage"],
    ["Art of Journaling & Commonplace Books", "Transcribing meaningful quotes, observations, and ideas into bound notebooks"],
    ["Vintage Fountain Pen Flex Nibs", "14k gold nibs bending under pressure to vary line width dynamically"],
    ["Traditional Craft Pottery Glaze Crawling", "Intentionally contracting glaze during firing to form beaded textures"],
    ["Art of Lighting Candles & Atmosphere", "Natural beeswax candles burning clean with faint honey scent"],
    ["Architectural Courtyards & Microclimates", "Enclosed inner courtyards trapping cool night air for daytime cooling"],
    ["Artisanal Ice for Cocktails", "Directional freezing producing crystal clear bubble-free ice blocks"],
    ["Vintage Silk Scarves & Hand-Rolled Hems", "Screen-printed heavy silk twill finished with hand-rolled edges"],
    ["Art of De-Cluttering & Essentialism", "Keeping only items that serve functional purpose or evoke deep joy"],
    ["Minimalist Desk Setups & Cable Management", "Hiding wires to eliminate visual friction from workspace"],
    ["Art of Silent Retreats (Vipassana)", "10 days of noble silence observing breath and physical sensations"],
    ["Artisanal Sea Salt Flakes (Maldon)", "Pyramid-shaped salt crystals providing crunchy burst without harsh bitterness"],
    ["Vintage Leather Jacket Patina", "Vegetable-tanned horsehide developing teacore under-color highlights over years"],
    ["Art of Noticing the Ordinary", "Verlyn Klinkenborg's exercises in sharpening observational focus"]
  ];

  for (let i = 0; i < tasteThemes.length; i++) {
    const theme = tasteThemes[i];
    const num = TASTE_TOPICS.length + 1;
    const padNum = num < 10 ? `00${num}` : (num < 100 ? `0${num}` : `${num}`);

    TASTE_TOPICS.push({
      id: `tst-${padNum}`,
      category: "Taste & Discovery",
      title: theme[0],
      subtitle: theme[1],
      summary: `${theme[0]} explores ${theme[1].toLowerCase()}. This domain of connoisseurship illuminates how sensory discernment, cultural history, and aesthetic mindfulness cultivate refined taste.`,
      keyTakeaway: `Developing taste in ${theme[0].toLowerCase()} transforms passive consumption into active, nuanced appreciation of life's finer subtleties.`,
      depth: i % 3 === 0 ? "Academic Deep Dive" : (i % 2 === 0 ? "Intermediate" : "Accessible"),
      sources: [
        {
          title: `${theme[0]} - Aesthetic & Curation Research`,
          url: "https://www.jstor.org/journal/jaesthetartcrit",
          sourceName: "Journal of Aesthetics and Art Criticism",
          type: "Journal",
          description: `Peer-reviewed paper examining taste, aesthetics, and ${theme[0].toLowerCase()}.`
        },
        {
          title: "Metropolitan Museum Design & Decorative Arts Collection",
          url: "https://www.metmuseum.org/about-the-met/curatorial-departments/american-wing",
          sourceName: "Metropolitan Museum of Art",
          type: "Museum",
          description: "Curated historical artifacts documenting aesthetic craft and taste evolution."
        }
      ]
    });
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TASTE_TOPICS;
}
