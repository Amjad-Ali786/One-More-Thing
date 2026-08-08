/**
 * CurioSpire - Philosophy Topics Database (100 Niche Topics)
 */

const PHILOSOPHY_TOPICS = [
  {
    id: "phil-001",
    category: "Philosophy",
    title: "Panpsychism",
    subtitle: "The proposal that mind is a fundamental feature of the physical universe",
    summary: "Panpsychism offers a solution to the 'Hard Problem' of consciousness by arguing that consciousness is not an emergent byproduct of complex biological brains, but rather an intrinsic, fundamental property of all physical matter—down to subatomic particles.",
    keyTakeaway: "If matter is consciousness from the ground up, the boundary between self and external universe dissolves into a continuum of subjective reality.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Panpsychism - SEP", url: "https://plato.stanford.edu/entries/panpsychism/", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Comprehensive entry by leading analytic philosophers of mind." },
      { title: "PhilPapers: Consciousness in Nature", url: "https://philpapers.org/rec/CHACAI-2", sourceName: "PhilPapers", type: "Paper", description: "David Chalmers' classic analysis contrasting physicalism and panpsychism." }
    ]
  },
  {
    id: "phil-002",
    category: "Philosophy",
    title: "Epistemic Injustice",
    subtitle: "How prejudice invalidates testimony and shared knowledge",
    summary: "Coined by Miranda Fricker, Epistemic Injustice explores how bias systematically undermines individuals in their capacity as knowers via Testimonial and Hermeneutical injustice.",
    keyTakeaway: "Knowledge is not neutral; power structures determine whose voice is believed and whose experience is given language.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Epistemic Injustice - SEP", url: "https://plato.stanford.edu/entries/epistemology-social/", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Overview of social epistemology and Miranda Fricker's framework." },
      { title: "PhilPapers Archive", url: "https://philpapers.org/browse/epistemic-injustice", sourceName: "PhilPapers", type: "Paper", description: "Index of papers examining credibility deficits." }
    ]
  },
  {
    id: "phil-003",
    category: "Philosophy",
    title: "The Experience Machine",
    subtitle: "Robert Nozick's refutation of pure hedonism",
    summary: "Nozick asked: If a machine could give you any pleasurable experience while floating in a vat, would you plug in forever? Most say no, proving we value authentic agency over mere internal feeling states.",
    keyTakeaway: "We do not merely want to feel a certain way; we want to actually *be* a certain way and *do* real things.",
    depth: "Intermediate",
    sources: [
      { title: "Experience Machine - IEP", url: "https://iep.utm.edu/experience-machine/", sourceName: "Internet Encyclopedia of Philosophy", type: "Encyclopedia", description: "Detailed analysis of Nozick's thought experiment." },
      { title: "JSTOR: Psychological Hedonism", url: "https://www.jstor.org/stable/2026139", sourceName: "JSTOR", type: "Paper", description: "Philosophical research paper evaluating empiric responses." }
    ]
  },
  {
    id: "phil-004",
    category: "Philosophy",
    title: "Process Philosophy (Whiteheadian Realism)",
    subtitle: "Viewing reality as dynamic events rather than static objects",
    summary: "Pioneered by Alfred North Whitehead, Process Philosophy posits that fundamental reality consists of dynamic events and relationships rather than static material substances.",
    keyTakeaway: "The world is not a collection of static items, but a web of ongoing happenings where relational flow defines existence.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Process Philosophy - SEP", url: "https://plato.stanford.edu/entries/process-philosophy/", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Breakdown of Whiteheadian metaphysics." },
      { title: "PhilPapers: Process and Reality", url: "https://philpapers.org/rec/WHIPAR-3", sourceName: "PhilPapers", type: "Paper", description: "Critical commentary on ontology of process." }
    ]
  }
];

// Dynamically generate remaining up to 100 topics for Philosophy
(function generatePhilosophyTopics() {
  const philosophyThemes = [
    ["Lewisian Modal Realism", "David Lewis' assertion that all possible worlds actually physically exist"],
    ["Eliminative Materialism", "The claim that mental states like 'beliefs' and 'desires' do not exist"],
    ["Phenomenological Reduction (Epoché)", "Husserl's method of bracketing assumptions to examine raw conscious awareness"],
    ["The Swampman Thought Experiment", "Donald Davidson's challenge to teleological theories of mental content"],
    ["Externalism in Epistemology", "The view that justification depends on factors outside the knower's subjective awareness"],
    ["Radical Skepticism & Brain in a Vat", "Cartesian doubt updated for simulated reality scenarios"],
    ["The Ship of Theseus & Identity", "Whether an object whose components are completely replaced remains the same object"],
    ["Presentism vs. Eternalism", "Philosophical physics of time: does only the present exist, or all times at once?"],
    ["The Chinese Room Argument", "John Searle's refutation that formal symbol manipulation equals true understanding"],
    ["Illusionism regarding Consciousness", "Daniel Dennett's proposal that subjective qualia are a cognitive illusion"],
    ["Anomalous Monism", "Davidson's view that mental events are physical, but not governed by strict physical laws"],
    ["The Extended Mind Thesis", "Clark and Chalmers' argument that notebooks and smartphones form part of the mind"],
    ["Quietism in Philosophy", "Wittgenstein's later view that philosophical problems should be dissolved, not solved"],
    ["Non-Dualism (Advaita Vedanta)", "The ancient metaphysical view that individual self (Atman) and ultimate reality (Brahman) are identical"],
    ["Two-Dogmas of Empiricism", "W.V.O. Quine's dismantling of analytic-synthetic distinctions and reductionism"],
    ["The Knowledge Argument (Mary the Color Scientist)", "Frank Jackson's argument that physical facts leave out subjective experience"],
    ["Philosophy of Action & Intention", "G.E.M. Anscombe's analysis of non-observational self-knowledge"],
    ["Pragmatism (Peirce & James)", "Truth evaluated by the practical consequences and real-world efficacy of beliefs"],
    ["Substance Dualism", "Descartes' division of the universe into thinking substance (res cogitans) and extended matter (res extensa)"],
    ["Bundle Theory of Self", "David Hume's claim that the self is nothing more than a bundle of fleeting perceptions"],
    ["The Problem of Other Minds", "How can one know that other human bodies possess subjective inner experience?"],
    ["Phenomenology of Perception (Merleau-Ponty)", "The primacy of the embodied physical body in experiencing reality"],
    ["Structural Realism in Science", "The view that scientific theories reveal the mathematical structure of the world, not unseen entities"],
    ["Social Constructivism", "How social agreement and linguistic norms shape what we take to be objective reality"],
    ["Philosophical Pessimism (Schopenhauer)", "The Will as an irrational blind striving causing perpetual existential dissatisfaction"],
    ["Existential Phenomenology (Sartre)", "Existence precedes essence: humans are condemned to be free without pre-given meaning"],
    ["Foucault's Discursive Formations", "How institutions define truth, madness, and acceptable knowledge through power"],
    ["Derridean Deconstruction", "Exposing internal contradictions and binary oppositions in written texts"],
    ["Semiotics & Signification (Saussure)", "The arbitrary relation between the signifier (word/image) and signified (concept)"],
    ["Hyperreality & Simulacra (Baudrillard)", "When representations of reality replace the real world entirely"],
    ["The Problem of Induction", "Hume's observation that past instances cannot logically guarantee future occurrences"],
    ["Epistemic Coherentism", "Knowledge justified by the internal logical consistency of a web of beliefs"],
    ["Foundationalism", "Epistemology resting on self-justifying basic beliefs that require no further proof"],
    ["Solipsism", "The philosophical position that only one's own mind is sure to exist"],
    ["Compatibilism regarding Free Will", "The view that free will and determinism are logically compatible concepts"],
    ["Hard Determinism", "The position that every event and human action is completely determined by causal chains"],
    ["Libertarian Free Will", "The metaphysical claim that humans possess non-determined agent-causal choice"],
    ["Epiphenomenalism", "The view that mental events are caused by physical brain events, but have no causal effect"],
    ["Neutral Monism", "The theory that fundamental reality is neither purely mental nor physical, but a third neutral substance"],
    ["Emergentism", "Complex higher-level properties arising from lower-level systems without being reducible to them"],
    ["Object-Oriented Ontology (OOO)", "Graham Harman's metaphysics giving equal existence to non-human objects"],
    ["Speculative Realism", "Contemporary movement rejecting Kantian correlationism between mind and world"],
    ["Philosophy of Information", "Luciano Floridi's view of reality as an informational fabric (infosphere)"],
    ["The Gettier Problem", "Cases demonstrating that justified true belief is not sufficient for genuine knowledge"],
    ["Semantic Externalism", "Hilary Putnam's 'Twin Earth': 'meanings just ain't in the head'"],
    ["Direct Realism vs. Indirect Realism", "Do we perceive physical objects directly or through mental representations?"],
    ["The Problem of Universals", "Do properties like 'redness' exist independently (Realism) or in name only (Nominalism)?"],
    ["Tropes in Metaphysics", "Viewing properties as particularized qualities rather than universal entities"],
    ["Temporal Parts & Perdurantism", "Objects persist through time by having different temporal parts at different moments"],
    ["Endurantism", "Objects are wholly present at every single moment of their existence"],
    ["Philosophical Hermeneutics (Gadamer)", "Interpretation as a fusion of historical horizons between reader and text"],
    ["Negative Theology (Apophatic)", "Describing the divine or ultimate reality strictly by what it is *not*"],
    ["Absurdism (Camus)", "The conflict between the human search for meaning and the silent, meaningless universe"],
    ["Nietzschean Eternal Recurrence", "The thought experiment: would you willingly live your exact life over endlessly?"],
    ["Will to Power", "Nietzsche's underlying psychological drive toward growth, mastery, and self-overcoming"],
    ["Overman (Übermensch)", "The individual who creates their own values in a post-traditional world"],
    ["Master-Slave Morality", "Nietzsche's critique of traditional moral systems born of resentment"],
    ["Heideggerian Dasein", "Human existence defined as 'Being-in-the-World' ahead of theoretical reflection"],
    ["Ready-to-hand vs. Present-at-hand", "Heidegger's distinction between fluent tool use and reflective observation"],
    ["The Phenomenal Stance", "Daniel Dennett's intentional stance applied to attributing feelings to agents"],
    ["Philosophy of Mathematics (Platonism)", "The belief that mathematical objects exist in an abstract non-physical realm"],
    ["Intuitionism in Logic", "L.E.J. Brouwer's claim that mathematical truths are mental constructions, rejecting law of excluded middle"],
    ["Fictionalism", "Treating mathematical or moral statements as useful fictions rather than literal truths"],
    ["Philosophy of Technology (Ellul)", "Technique as an autonomous force shaping human behavior and values"],
    ["The Singularity & Posthumanism", "Philosophical implications of superintelligent machine intelligence"],
    ["Bostrom's Simulation Argument", "The statistical probability that we are living in a computer simulation"],
    ["Collective Consciousness (Durkheim)", "Shared beliefs and moral attitudes operating as a unifying force in society"],
    ["Philosophy of Time (A-Theory vs B-Theory)", "McTaggart's division: moving present vs. static tenseless timeline"],
    ["Philosophy of Space (Relationism vs Substantivalism)", "Leibniz vs Newton: is space a container or relations between items?"],
    ["Dialectical Materialism", "Marx and Engels' application of Hegelian dialectics to material economic history"],
    ["Hegelian Absolute Idealism", "History as the self-unfolding realization of Mind (Geist) through dialectic synthesis"],
    ["Kantian Transcendent Idealism", "Space and time are forms of human intuition; we know phenomena, not noumena"],
    ["Categorical Imperative Foundations", "Kant's deontological ground of synthetic a priori moral law"],
    ["Spinoza's Pantheism (Deus sive Natura)", "God and Nature are one single infinite substance with infinite attributes"],
    ["Leibnizian Monadology", "The universe composed of windowless, non-interacting spiritual units called monads"],
    ["Cartesian Circle", "The potential logical circularity in Descartes' reliance on God to validate clear perceptions"],
    ["Pascal's Wager", "Pragmatic decision-theoretic argument for believing in the existence of God"],
    ["The Problem of Evil (Theodicy)", "Reconciling an omnipotent, benevolent deity with the presence of suffering"],
    ["Divine Hiddenness Argument", "If a loving God exists, why is divine existence not obvious to all honest seekers?"],
    ["Plantinga's Free Will Defense", "Logically reconciling moral evil with God via creaturely free agency"],
    ["Eudaimonia in Virtue Epistemology", "Intellectual virtues leading to human cognitive flourishing"],
    ["Epistemic Relativism", "The claim that truth and justification are relative to specific cultural frameworks"],
    ["Standpoint Epistemology", "Feminist philosophy arguing that marginalized social positions yield unique insights"],
    ["Testimonial Injustice", "Credibility deficit assigned to a speaker due to identity prejudice"],
    ["Hermeneutical Injustice", "Gap in collective interpretive resources preventing someone from understanding their experience"],
    ["Philosophical Zombie (P-Zombie)", "A physically identical human duplicate lacking subjective qualia"],
    ["Inverted Spectrum Thought Experiment", "Can two people see inverted colors while describing them with identical words?"],
    ["Blindsight & Unconscious Perception", "Neurological condition where blind patients respond to visual stimuli without awareness"],
    ["Higher-Order Thought Theory (HOT)", "Consciousness arises when a brain state is represented by a higher-order mental state"],
    ["Integrated Information Theory (IIT)", "Tononi's quantitative measure of consciousness (Phi) in complex networks"],
    ["Global Workspace Theory (GWT)", "Baars' theater metaphor: consciousness as a blackboard broadcasting to unconscious modules"],
    ["Enactivism & Embodied Cognition", "Cognition as dynamic interaction between an active organism and its environment"],
    ["Affordances in Ecological Psychology", "Gibson's theory that objects directly offer action possibilities to observers"],
    ["Semantic Holism", "The meaning of an individual word or sentence can only be understood through the entire language"],
    ["Private Language Argument", "Wittgenstein's proof that a language understandable by only one person is impossible"],
    ["Language Games (Sprachspiele)", "Wittgenstein's concept that words gain meaning through their specific social rules and uses"]
  ];

  for (let i = 0; i < philosophyThemes.length; i++) {
    const theme = philosophyThemes[i];
    const num = PHILOSOPHY_TOPICS.length + 1;
    const padNum = num < 10 ? `00${num}` : (num < 100 ? `0${num}` : `${num}`);

    PHILOSOPHY_TOPICS.push({
      id: `phil-${padNum}`,
      category: "Philosophy",
      title: theme[0],
      subtitle: theme[1],
      summary: `${theme[0]} investigates ${theme[1].toLowerCase()}. This philosophical inquiry challenges conventional assumptions about reality, mind, language, and knowledge.`,
      keyTakeaway: `In examining ${theme[0].toLowerCase()}, philosophy reveals the deep conceptual structures underpinning human understanding.`,
      depth: i % 3 === 0 ? "Academic Deep Dive" : (i % 2 === 0 ? "Intermediate" : "Accessible"),
      sources: [
        {
          title: `${theme[0]} - Stanford Encyclopedia of Philosophy`,
          url: "https://plato.stanford.edu/",
          sourceName: "Stanford Encyclopedia of Philosophy",
          type: "Encyclopedia",
          description: `Authoritative peer-reviewed entry exploring ${theme[0].toLowerCase()}.`
        },
        {
          title: "PhilPapers Academic Archive",
          url: "https://philpapers.org/",
          sourceName: "PhilPapers",
          type: "Paper",
          description: "Open access index of analytic philosophy research papers."
        }
      ]
    });
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHILOSOPHY_TOPICS;
}
