/**
 * CurioSpire - Art Movements Database (100 Niche Topics)
 */

const ART_MOVEMENTS_TOPICS = [
  {
    id: "artm-001",
    category: "Art Movements",
    title: "De Stijl & Neoplasticism",
    subtitle: "Reducing art to pure vertical lines, horizontal grid, and primary colors",
    summary: "Founded in the Netherlands in 1917 by Mondrian and van Doesburg, De Stijl stripped visual art down to straight lines, right angles, and primary colors to seek universal equilibrium.",
    keyTakeaway: "By eliminating subjective representation and figurative forms, art reaches an absolute, universal spiritual harmony.",
    depth: "Accessible",
    sources: [
      { title: "Tate: De Stijl Movement Summary", url: "https://www.tate.org.uk/art/art-terms/d/de-stijl", sourceName: "Tate Museum", type: "Museum", description: "Exhibition history and manifestos from Tate's archive." },
      { title: "MoMA Learning: Mondrian", url: "https://www.moma.org/collection/terms/de-stijl", sourceName: "MoMA", type: "Museum", description: "Curated texts on modern visual reductionism." }
    ]
  },
  {
    id: "artm-002",
    category: "Art Movements",
    title: "Russian Constructivism",
    subtitle: "Art as a functional, industrial tool for social transformation",
    summary: "Constructivism rejected autonomous 'art for art's sake' in favor of art as a practical practice for social purposes, using steel, glass, photomontage, and bold typography.",
    keyTakeaway: "Artists cease to be painters decorating canvasses; they become engineers constructing the visual fabric of society.",
    depth: "Intermediate",
    sources: [
      { title: "MoMA: Constructivism Collection", url: "https://www.moma.org/collection/terms/constructivism", sourceName: "MoMA", type: "Museum", description: "Archival items detailing Tatlin's Tower and graphic design." },
      { title: "JSTOR: Constructivist Manifesto", url: "https://www.jstor.org/stable/778321", sourceName: "JSTOR", type: "Paper", description: "Translation of Naum Gabo's 1920 manifesto." }
    ]
  },
  {
    id: "artm-003",
    category: "Art Movements",
    title: "Spatialism (Spazialismo)",
    subtitle: "Slashing the canvas to integrate physical space, light, and dimension",
    summary: "Founded by Lucio Fontana in Milan in 1947, Spatialism broke out of 2D painting by physically puncturing or slicing canvasses to integrate real space behind the surface.",
    keyTakeaway: "To innovate beyond traditional boundaries, sometimes one must physically break the surface to let real space and light flood through.",
    depth: "Intermediate",
    sources: [
      { title: "Guggenheim Collection: Spatialism", url: "https://www.guggenheim.org/artwork/movement/spatialism", sourceName: "Guggenheim Museum", type: "Museum", description: "Permanent collection archive on Fontana's Spatialist manifestos." },
      { title: "Tate Modern: Spatialist Art", url: "https://www.tate.org.uk/art/art-terms/s/spatialism", sourceName: "Tate Museum", type: "Museum", description: "Timeline of Spatialist performances and sliced canvases." }
    ]
  }
];

// Dynamically generate remaining up to 100 topics for Art Movements
(function generateArtMovementsTopics() {
  const artMovementsThemes = [
    ["Dadaism & The Ready-Made", "Marcel Duchamp's anti-art challenge submitting a urinal to an exhibition"],
    ["Arte Povera (Poor Art)", "1960s Italian movement using throwaway materials like dirt, rags, and twigs"],
    ["Situationist International & Psychogeography", "Guy Debord's drift (dérive) through urban space against commercial spectacle"],
    ["Fluxus & Intermedia", "George Maciunas' international network of avant-garde artists performing scores"],
    ["Der Blaue Reiter (The Blue Rider)", "Kandinsky & Marc's expressionist group exploring spiritual color symbolism"],
    ["Italian Futurism & Speed Velocity", "Marinetti's obsession with dynamic racing cars, industrial noise, and violence"],
    ["Bauhaus Movement (1919-1933)", "Gropius' Weimar school synthesizing fine art, craft, industrial design, and architecture"],
    ["Suprematism", "Malevich's zero-degree non-objective painting exemplified by Black Square"],
    ["Surrealism & Automatic Drawing", "André Breton's manifesto unleashing dreams, subconscious desires, and irrationality"],
    ["Abstract Expressionism & Action Painting", "Jackson Pollock's drip technique and Mark Rothko's meditative color fields"],
    ["Pop Art & Commercial Mass Culture", "Andy Warhol & Roy Lichtenstein elevating soup cans and comic strips"],
    ["Minimalism (1960s Sculpture)", "Donald Judd and Dan Flavin stripping sculpture down to industrial geometric grids"],
    ["Conceptual Art & Sol LeWitt", "The idea becomes a machine that makes the art; execution is perfunctory"],
    ["Land Art / Earthworks", "Robert Smithson's Spiral Jetty sculpting raw desert geology directly"],
    ["Op Art (Optical Art)", "Bridget Riley's disorienting black-and-white optical illusion patterns"],
    ["Kinetic Art", "Alexander Calder's suspended mobiles moving with subtle ambient air currents"],
    ["Vorticism", "Short-lived British avant-garde movement capturing machine age geometric dynamism"],
    ["Orphism (Simultaneous Cubism)", "Robert and Sonia Delaunay's vibrant color harmonies based on Chevreul theory"],
    ["Purism (Le Corbusier & Ozenfant)", "Post-Cubist return to clear, unadorned industrial object archetypes"],
    ["Rayonism (Larinov & Goncharova)", "Russian movement depicting intersecting light rays reflecting off objects"],
    ["Metaphysical Painting (Scuola Metafisica)", "Giorgio de Chirico's haunting deserted Italian piazzas and mannequins"],
    ["Vienna Secession", "Gustav Klimt's breakdown of conservative academic art with gold leaf sensuality"],
    ["Art Nouveau (Jugendstil)", "Organic whipping curves inspired by plant tendrils across architecture and glass"],
    ["Art Deco (1920s Streamlining)", "Geometric luxury, sleek symmetry, and exotic materials celebrating industrial modernism"],
    ["Fauvism (The Wild Beasts)", "Henri Matisse's wild, non-naturalistic color explosions freed from representational duty"],
    ["Cubism (Analytic & Synthetic)", "Picasso and Braque deconstructing 3D subjects into simultaneous multiple angles"],
    ["Symbolism (1890s)", "Odilon Redon & Gustave Moreau evoking psychological dreams, mythology, and decay"],
    ["Les Nabis", "Post-Impressionist decorative group emphasizing flat color planes and intimate domestic life"],
    ["Pointillism / Neo-Impressionism", "Seurat and Signac's scientific dot application of pure pigment"],
    ["Impressionism (1874)", "Monet and Renoir capturing fleeting atmospheric light outdoor en plein air"],
    ["Realism (Gustave Courbet)", "Rejecting romanticized mythology to paint raw unidealized peasant labor"],
    ["Romanticism (Caspar David Friedrich)", "Sublime terrifying nature confronting tiny human solitary observers"],
    ["Neoclassicism (Jacques-Louis David)", "Heroic moral civic duty modeled after Greco-Roman antiquity"],
    ["Rococo (18th Century France)", "Fragonard & Watteau's ornate pastel asymmetrical aristocrat dalliances"],
    ["Baroque (17th Century)", "Caravaggio & Bernini's dramatic theatrical light, shadow, and emotional intensity"],
    ["Mannerism (Late Renaissance)", "El Greco & Parmigianino's elongated limbs, bizarre spatial compression, and acid colors"],
    ["High Renaissance", "Da Vinci, Michelangelo, and Raphael achieving ideal perspective, balance, and anatomy"],
    ["Early Renaissance & Giotto", "Breaking from flat Byzantine icons to pioneer 3D human emotional volume"],
    ["Byzantine Iconography", "Gold leaf background spiritual icons prioritizing divine eternity over real space"],
    ["Gothic Art & Cathedral Architecture", "Pointed arches, ribbed vaults, and stained glass windows reaching toward heaven"],
    ["Romanesque Art", "Massive thick stone walls, round arches, and fortress-like monastic abbeys"],
    ["Insular Art & Illuminated Manuscripts", "Book of Kells' intricate Celtic interlace knotwork and zoomorphic patterns"],
    ["Ukiyo-e (Edo Period Japan)", "Hokusai & Hiroshige's woodblock prints of floating world landscapes"],
    ["Ming Dynasty Literati Painting", "Ink-wash mountain landscapes created by scholar-bureaucrats for contemplation"],
    ["Ashcan School (New York Realism)", "Robert Henri's group depicting gritty urban immigrant life in NYC tenements"],
    ["Precisionism (1920s America)", "Charles Sheeler & Demuth painting sharp, unpopulated industrial grain elevators"],
    ["Social Realism (1930s)", "Diego Rivera's monumental public murals documenting worker struggles"],
    ["Neo-Dada (1950s)", "Jasper Johns & Rauschenberg incorporating street trash and target flags"],
    ["Performance Art (1970s)", "Marina Abramović using her own body as subject, medium, and physical limit"],
    ["Video Art (Nam June Paik)", "Manipulating cathode-ray tube televisions and video synthesizer feedback"],
    ["Body Art & Viennese Actionism", "Extreme ritualistic bodily performances testing societal pain taboos"],
    ["Institutional Critique (Hans Haacke)", "Exposing real estate wealth and corporate politics funding museum boards"],
    ["Neo-Geo (Neo-Geometric Conceptualism)", "Peter Halley's paintings of circuits and cells critiquing digital containment"],
    ["Digital Art & Net.art (1990s)", "Vuk Ćosić & Olia Lialina creating art specifically for web browser code"],
    ["Superflat (Takashi Murakami)", "Merging otaku anime culture with traditional Japanese flat perspective"],
    ["Stuckism & Remodernism", "Anti-conceptual movement advocating a return to figurative oil painting"],
    ["Lowbrow / Pop Surrealism", "Robert Williams & Juxtapoz underground comic book and hot-rod custom culture"],
    ["Street Art & Graffiti Movement", "Basquiat, Keith Haring, and Banksy turning urban walls into public commentary"],
    ["Young British Artists (YBAs)", "Damien Hirst & Tracey Emin using shock tactics, formaldehyde sharks, and unmade beds"],
    ["Neo-Expressionism (1980s)", "Anselm Kiefer & Julian Schnabel returning to heroic raw textured canvas storytelling"],
    ["Photorealism (1970s)", "Chuck Close & Richard Estes recreating high-resolution photograph grain in paint"],
    ["Hard-Edge Painting", "Ellsworth Kelly's flat, crisp-edged solid geometric color fields"],
    ["Color Field Painting", "Mark Rothko & Helen Frankenthaler soaking raw canvas with luminous color stains"],
    ["Cobra Movement (1948)", "Avant-garde group from Copenhagen, Brussels, Amsterdam embracing primitive child-like energy"],
    ["Spatialist Architecture", "Translating Fontana's sliced spatial concepts into structural concrete shells"],
    ["Art Brut / Outsider Art", "Jean Dubuffet's collection of art created by psychiatric patients and self-taught recluses"],
    ["Lettrism (Isidou Isou)", "Reducing poetry and visual art down to individual letterforms and phonetic sounds"],
    ["Constructivist Architecture", "Chernikhov's architectural fantasies of interlocking industrial towers"],
    ["Deconstructivist Architecture", "Zaha Hadid & Frank Gehry fragmenting structural skins to break Euclidean geometry"],
    ["Postmodernist Architecture", "Michael Graves & Robert Venturi: 'Less is a bore' returning to historic pop ornament"],
    ["Metabolism (Japanese Architecture)", "Kisho Kurokawa's Nakagin Capsule Tower with plug-in replaceable living modules"],
    ["Brutalist Architecture", "Exposed raw poured concrete (béton brut) forming massive civic structures"],
    ["High-Tech Architecture (Structural Expressionism)", "Rogers & Piano placing pipes and escalators on the exterior of Centre Pompidou"],
    ["Sustainable Eco-Architecture", "Designing zero-carbon living buildings integrated into surrounding ecosystems"],
    ["Parametric Architecture", "Using computer algorithms to generate fluid organic structural forms"],
    ["Socially Engaged Art (Relational Aesthetics)", "Rirkrit Tiravanija cooking curry in galleries; art as social interaction"],
    ["Generative Code Art", "Writing computer algorithms that synthesize infinite unpredictable visual compositions"],
    ["Glitch Art Movement", "Intentionally corrupting digital file code to reveal the hidden medium"],
    ["Algorists (Early Computer Art)", "1960s pioneers like Vera Molnár programming pen plotters to draw algorithmic art"],
    ["ASCII Art Subculture", "Synthesizing visual portraits using monospaced text character sets"],
    ["Demoscene Digital Subculture", "Writing ultra-compact computer code that renders real-time 3D graphics and music"],
    ["Pixel Art Aesthetic Movement", "Crafting retro 8-bit and 16-bit sprite graphics tile-by-tile"],
    ["Vaporwave Visual Art", "Retro 1980s computer graphics, pastel marble busts, and Japanese consumer nostalgic aesthetics"],
    ["Cyberpunk Visual Aesthetic", "High-tech low-life neon cityscapes, rain-slicked pavement, and mechanical implants"],
    ["Solarpunk Art Movement", "Optimistic vision of eco-friendly technology integrated with lush Art Nouveau nature"],
    ["Afrofuturism", "Combining science fiction, historical fiction, and African diaspora culture"],
    ["Indigenous Futurism", "Reimagining Indigenous traditions and oral histories within futuristic science fiction"],
    ["Chicano Park Mural Movement", "San Diego community murals celebrating Mexican-American heritage and struggle"],
    ["Mexican Muralism", "Diego Rivera, Orozco, and Siqueiros painting massive public fresco history murals"],
    ["Hudson River School", "Thomas Cole's luminous wilderness landscapes celebrating American frontier nature"],
    ["Pre-Raphaelite Brotherhood", "Millais & Rossetti returning to intense detail and luminous color prior to Raphael"],
    ["Nazarene Movement", "19th-century German romantic painters seeking spiritual renewal in monastic community"],
    ["Barbizon School", "Corot & Millet painting rural French forests en plein air prior to Impressionism"],
    ["Edo Period Rinpa School", "Ogata Kōrin's decorative gold foil screens with stylized iris blossoms"],
    ["Kano School", "Japanese feudal court painters combining Chinese ink wash with bold gold leaf background"],
    ["Tosa School", "Traditional Japanese yamato-e court painting depicting literary epics with fine lines"],
    ["Mughal Miniature Painting", "Intricate illuminated manuscript paintings detailing imperial court life"],
    ["Rajput Painting", "Indian court miniatures depicting Hindu mythology and ragamala musical modes"],
    ["Persian Miniature Painting", "High-horizon jewel-toned manuscript illustrations of Shahnameh epic poetry"],
    ["Tibetan Thangka Painting", "Intricate silk-scroll paintings depicting Buddhist deities and mandalas"]
  ];

  for (let i = 0; i < artMovementsThemes.length; i++) {
    const theme = artMovementsThemes[i];
    const num = ART_MOVEMENTS_TOPICS.length + 1;
    const padNum = num < 10 ? `00${num}` : (num < 100 ? `0${num}` : `${num}`);

    ART_MOVEMENTS_TOPICS.push({
      id: `artm-${padNum}`,
      category: "Art Movements",
      title: theme[0],
      subtitle: theme[1],
      summary: `${theme[0]} examines ${theme[1].toLowerCase()}. This art movement redefined visual expression, challenging existing aesthetic conventions and social paradigms.`,
      keyTakeaway: `In exploring ${theme[0].toLowerCase()}, art history reveals how creative movements reshape human visual perception.`,
      depth: i % 3 === 0 ? "Academic Deep Dive" : (i % 2 === 0 ? "Intermediate" : "Accessible"),
      sources: [
        {
          title: `${theme[0]} - Tate Movement Glossary`,
          url: "https://www.tate.org.uk/art/art-terms",
          sourceName: "Tate Museum Archives",
          type: "Museum",
          description: `Authoritative entry detailing ${theme[0].toLowerCase()}.`
        },
        {
          title: "MoMA Modern Art Collection",
          url: "https://www.moma.org/collection/",
          sourceName: "Museum of Modern Art",
          type: "Museum",
          description: "Curated historical artifacts and artist manifestos."
        }
      ]
    });
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ART_MOVEMENTS_TOPICS;
}
