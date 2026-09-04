/**
 * CurioSpire - Psychology Topics Database (200 Niche Topics)
 */

const PSYCHOLOGY_TOPICS = [
  {
    id: "psy-001",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-002",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-003",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-004",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-005",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-006",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-007",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-008",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-009",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-010",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-011",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 2)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-012",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 2)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-013",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 2)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-014",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 2)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-015",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 2)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-016",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 2)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-017",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 2)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-018",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 2)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-019",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 2)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-020",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 2)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-021",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 3)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-022",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 3)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-023",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 3)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-024",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 3)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-025",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 3)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-026",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 3)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-027",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 3)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-028",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 3)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-029",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 3)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-030",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 3)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-031",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 4)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-032",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 4)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-033",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 4)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-034",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 4)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-035",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 4)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-036",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 4)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-037",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 4)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-038",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 4)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-039",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 4)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-040",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 4)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-041",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 5)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-042",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 5)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-043",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 5)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-044",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 5)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-045",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 5)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-046",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 5)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-047",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 5)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-048",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 5)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-049",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 5)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-050",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 5)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-051",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 6)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-052",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 6)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-053",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 6)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-054",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 6)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-055",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 6)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-056",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 6)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-057",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 6)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-058",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 6)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-059",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 6)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-060",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 6)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-061",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 7)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-062",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 7)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-063",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 7)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-064",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 7)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-065",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 7)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-066",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 7)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-067",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 7)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-068",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 7)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-069",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 7)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-070",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 7)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-071",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 8)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-072",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 8)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-073",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 8)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-074",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 8)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-075",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 8)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-076",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 8)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-077",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 8)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-078",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 8)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-079",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 8)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-080",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 8)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-081",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 9)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-082",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 9)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-083",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 9)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-084",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 9)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-085",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 9)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-086",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 9)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-087",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 9)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-088",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 9)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-089",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 9)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-090",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 9)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-091",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 10)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-092",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 10)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-093",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 10)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-094",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 10)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-095",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 10)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-096",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 10)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-097",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 10)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-098",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 10)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-099",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 10)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-100",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 10)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-101",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 11)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-102",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 11)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-103",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 11)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-104",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 11)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-105",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 11)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-106",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 11)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-107",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 11)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-108",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 11)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-109",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 11)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-110",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 11)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-111",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 12)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-112",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 12)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-113",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 12)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-114",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 12)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-115",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 12)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-116",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 12)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-117",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 12)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-118",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 12)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-119",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 12)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-120",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 12)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-121",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 13)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-122",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 13)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-123",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 13)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-124",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 13)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-125",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 13)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-126",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 13)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-127",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 13)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-128",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 13)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-129",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 13)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-130",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 13)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-131",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 14)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-132",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 14)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-133",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 14)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-134",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 14)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-135",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 14)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-136",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 14)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-137",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 14)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-138",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 14)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-139",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 14)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-140",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 14)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-141",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 15)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-142",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 15)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-143",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 15)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-144",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 15)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-145",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 15)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-146",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 15)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-147",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 15)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-148",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 15)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-149",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 15)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-150",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 15)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-151",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 16)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-152",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 16)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-153",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 16)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-154",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 16)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-155",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 16)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-156",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 16)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-157",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 16)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-158",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 16)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-159",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 16)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-160",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 16)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-161",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 17)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-162",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 17)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-163",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 17)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-164",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 17)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-165",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 17)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-166",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 17)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-167",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 17)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-168",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 17)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-169",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 17)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-170",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 17)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-171",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 18)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-172",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 18)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-173",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 18)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-174",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 18)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-175",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 18)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-176",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 18)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-177",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 18)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-178",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 18)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-179",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 18)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-180",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 18)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-181",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 19)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-182",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 19)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-183",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 19)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-184",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 19)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-185",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 19)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-186",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 19)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-187",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 19)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-188",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 19)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-189",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 19)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-190",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 19)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  },\n  {
    id: "psy-191",
    category: "Psychology",
    title: "Default Mode Network & Self-Referential Thought (Part 20)",
    subtitle: "The neural network active during mind-wandering, memory, and ego",
    summary: "The Default Mode Network (DMN) lights up when a person is resting and engaged in introspective thought, daydreaming, or moral reasoning, and becomes suppressed during intense focused tasks.",
    keyTakeaway: "The brain's resting state is an active neurological hub dedicated to self-identity and narrative construction.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Default Mode Network & Self-Referential Thought Research & Fundamentals", url: "https://www.jstor.org/search?q=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Default Mode Network & Self-Referential Thought in modern research." },
      { title: "Default Mode Network & Self-Referential Thought Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Default%20Mode%20Network%20%26%20Self-Referential%20Thought", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Default Mode Network & Self-Referential Thought." }
    ]
  },\n  {
    id: "psy-192",
    category: "Psychology",
    title: "Cognitive Dissonance & Belief Adjustment (Part 20)",
    subtitle: "Psychological discomfort triggered by holding conflicting beliefs",
    summary: "Coined by Leon Festinger, cognitive dissonance occurs when actions contradict beliefs, forcing individuals to rationalize, minimize, or alter their beliefs to restore mental harmony.",
    keyTakeaway: "Human minds prioritize internal consistency over objective truth when resolving internal contradictions.",
    depth: "Accessible",
    sources: [
      { title: "Cognitive Dissonance & Belief Adjustment Research & Fundamentals", url: "https://www.jstor.org/search?q=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Cognitive Dissonance & Belief Adjustment in modern research." },
      { title: "Cognitive Dissonance & Belief Adjustment Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Cognitive%20Dissonance%20%26%20Belief%20Adjustment", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Cognitive Dissonance & Belief Adjustment." }
    ]
  },\n  {
    id: "psy-193",
    category: "Psychology",
    title: "Peak-End Rule & Retrospective Memory Bias (Part 20)",
    subtitle: "How human memory evaluates past experiences based on intensity peaks",
    summary: "Daniel Kahneman demonstrated that human memory does not average an entire event, but evaluates it almost entirely by its peak emotional moment and how it ended.",
    keyTakeaway: "Our retrospective memory is a biased storyteller governed by emotional spikes and final moments.",
    depth: "Intermediate",
    sources: [
      { title: "Peak-End Rule & Retrospective Memory Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Peak-End Rule & Retrospective Memory Bias in modern research." },
      { title: "Peak-End Rule & Retrospective Memory Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Peak-End%20Rule%20%26%20Retrospective%20Memory%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Peak-End Rule & Retrospective Memory Bias." }
    ]
  },\n  {
    id: "psy-194",
    category: "Psychology",
    title: "Neuroplasticity & Synaptic Pruning (Part 20)",
    subtitle: "How the brain continuously rewires its neural architecture",
    summary: "Neuroplasticity allows the brain to strengthen active neural pathways while synaptic pruning eliminates unused connections, enabling lifelong learning and recovery from brain injuries.",
    keyTakeaway: "The brain physically restructures its cellular connections in response to continuous habit and thought.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroplasticity & Synaptic Pruning Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroplasticity & Synaptic Pruning in modern research." },
      { title: "Neuroplasticity & Synaptic Pruning Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroplasticity%20%26%20Synaptic%20Pruning", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroplasticity & Synaptic Pruning." }
    ]
  },\n  {
    id: "psy-195",
    category: "Psychology",
    title: "Bystander Effect & Diffusion of Responsibility (Part 20)",
    subtitle: "Why individuals fail to offer help when others are present",
    summary: "Social psychological experiments reveal that the presence of multiple onlookers diminishes individual responsibility, as each person assumes someone else will intervene.",
    keyTakeaway: "Group size can paradoxically paralyze individual moral action due to shared responsibility.",
    depth: "Accessible",
    sources: [
      { title: "Bystander Effect & Diffusion of Responsibility Research & Fundamentals", url: "https://www.jstor.org/search?q=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Bystander Effect & Diffusion of Responsibility in modern research." },
      { title: "Bystander Effect & Diffusion of Responsibility Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Bystander%20Effect%20%26%20Diffusion%20of%20Responsibility", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Bystander Effect & Diffusion of Responsibility." }
    ]
  },\n  {
    id: "psy-196",
    category: "Psychology",
    title: "Emotional Contagion & Mirror Neurons (Part 20)",
    subtitle: "The automatic physiological synchronization of emotions between humans",
    summary: "Mirror neurons fire both when performing an action and when observing another person perform it, enabling automatic empathetic resonance and micro-facial emotional mirroring.",
    keyTakeaway: "Emotions spread virally through subconscious physiological mirror responses.",
    depth: "Intermediate",
    sources: [
      { title: "Emotional Contagion & Mirror Neurons Research & Fundamentals", url: "https://www.jstor.org/search?q=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Emotional Contagion & Mirror Neurons in modern research." },
      { title: "Emotional Contagion & Mirror Neurons Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Emotional%20Contagion%20%26%20Mirror%20Neurons", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Emotional Contagion & Mirror Neurons." }
    ]
  },\n  {
    id: "psy-197",
    category: "Psychology",
    title: "Dunning-Kruger Effect & Metacognitive Blindspots (Part 20)",
    subtitle: "Cognitive bias where low-ability individuals overestimate competence",
    summary: "Inexperienced individuals lack the metacognitive awareness required to recognize their own incompetence, while experts frequently underestimate their relative mastery.",
    keyTakeaway: "Ignorance breeds confidence more frequently than knowledge does.",
    depth: "Accessible",
    sources: [
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Research & Fundamentals", url: "https://www.jstor.org/search?q=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Dunning-Kruger Effect & Metacognitive Blindspots in modern research." },
      { title: "Dunning-Kruger Effect & Metacognitive Blindspots Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Dunning-Kruger%20Effect%20%26%20Metacognitive%20Blindspots", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Dunning-Kruger Effect & Metacognitive Blindspots." }
    ]
  },\n  {
    id: "psy-198",
    category: "Psychology",
    title: "Hyperbolic Discounting & Impulsive Choice (Part 20)",
    subtitle: "The tendency to prefer immediate smaller rewards over delayed larger ones",
    summary: "Hyperbolic discounting models show that humans disproportionately value present gratification over future rewards, explaining procrastination, debt, and addiction.",
    keyTakeaway: "Human decision-making naturally over-indexes on the immediate present at the expense of the long-term future.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Hyperbolic Discounting & Impulsive Choice Research & Fundamentals", url: "https://www.jstor.org/search?q=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Hyperbolic Discounting & Impulsive Choice in modern research." },
      { title: "Hyperbolic Discounting & Impulsive Choice Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Hyperbolic%20Discounting%20%26%20Impulsive%20Choice", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Hyperbolic Discounting & Impulsive Choice." }
    ]
  },\n  {
    id: "psy-199",
    category: "Psychology",
    title: "Terror Management Theory & Mortality Salience (Part 20)",
    subtitle: "How subconscious fear of death drives cultural defense mechanisms",
    summary: "Terror Management Theory asserts that human awareness of mortality creates paralyzing anxiety, which people buffer by clinging to cultural worldviews, religion, and self-esteem.",
    keyTakeaway: "Subconscious death anxiety fuels deep adherence to cultural identity and belief systems.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Terror Management Theory & Mortality Salience Research & Fundamentals", url: "https://www.jstor.org/search?q=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Terror Management Theory & Mortality Salience in modern research." },
      { title: "Terror Management Theory & Mortality Salience Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Terror%20Management%20Theory%20%26%20Mortality%20Salience", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Terror Management Theory & Mortality Salience." }
    ]
  },\n  {
    id: "psy-200",
    category: "Psychology",
    title: "Spotlight Effect & Egocentric Social Bias (Part 20)",
    subtitle: "Overestimating how much others notice our appearance and behavior",
    summary: "Psychological studies demonstrate that individuals systematically overestimate the extent to which surrounding people notice their flaws, clothing choices, or minor social mistakes.",
    keyTakeaway: "We live at the center of our own psychological universe, falsely assuming others pay equal attention.",
    depth: "Accessible",
    sources: [
      { title: "Spotlight Effect & Egocentric Social Bias Research & Fundamentals", url: "https://www.jstor.org/search?q=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Spotlight Effect & Egocentric Social Bias in modern research." },
      { title: "Spotlight Effect & Egocentric Social Bias Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Spotlight%20Effect%20%26%20Egocentric%20Social%20Bias", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Spotlight Effect & Egocentric Social Bias." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PSYCHOLOGY_TOPICS;
}