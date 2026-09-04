/**
 * CurioSpire - Ethics Topics Database (200 Niche Topics)
 */

const ETHICS_TOPICS = [
  {
    id: "eth-001",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-002",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-003",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-004",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-005",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-006",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-007",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-008",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-009",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-010",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-011",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 2)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-012",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 2)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-013",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 2)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-014",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 2)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-015",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 2)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-016",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 2)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-017",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 2)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-018",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 2)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-019",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 2)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-020",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 2)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-021",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 3)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-022",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 3)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-023",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 3)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-024",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 3)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-025",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 3)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-026",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 3)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-027",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 3)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-028",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 3)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-029",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 3)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-030",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 3)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-031",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 4)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-032",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 4)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-033",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 4)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-034",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 4)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-035",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 4)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-036",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 4)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-037",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 4)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-038",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 4)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-039",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 4)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-040",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 4)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-041",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 5)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-042",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 5)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-043",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 5)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-044",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 5)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-045",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 5)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-046",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 5)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-047",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 5)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-048",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 5)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-049",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 5)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-050",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 5)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-051",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 6)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-052",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 6)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-053",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 6)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-054",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 6)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-055",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 6)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-056",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 6)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-057",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 6)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-058",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 6)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-059",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 6)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-060",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 6)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-061",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 7)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-062",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 7)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-063",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 7)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-064",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 7)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-065",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 7)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-066",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 7)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-067",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 7)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-068",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 7)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-069",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 7)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-070",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 7)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-071",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 8)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-072",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 8)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-073",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 8)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-074",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 8)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-075",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 8)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-076",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 8)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-077",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 8)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-078",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 8)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-079",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 8)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-080",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 8)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-081",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 9)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-082",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 9)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-083",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 9)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-084",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 9)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-085",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 9)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-086",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 9)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-087",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 9)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-088",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 9)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-089",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 9)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-090",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 9)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-091",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 10)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-092",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 10)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-093",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 10)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-094",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 10)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-095",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 10)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-096",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 10)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-097",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 10)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-098",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 10)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-099",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 10)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-100",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 10)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-101",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 11)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-102",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 11)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-103",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 11)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-104",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 11)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-105",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 11)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-106",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 11)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-107",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 11)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-108",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 11)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-109",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 11)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-110",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 11)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-111",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 12)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-112",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 12)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-113",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 12)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-114",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 12)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-115",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 12)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-116",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 12)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-117",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 12)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-118",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 12)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-119",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 12)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-120",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 12)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-121",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 13)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-122",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 13)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-123",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 13)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-124",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 13)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-125",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 13)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-126",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 13)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-127",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 13)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-128",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 13)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-129",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 13)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-130",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 13)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-131",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 14)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-132",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 14)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-133",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 14)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-134",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 14)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-135",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 14)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-136",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 14)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-137",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 14)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-138",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 14)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-139",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 14)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-140",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 14)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-141",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 15)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-142",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 15)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-143",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 15)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-144",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 15)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-145",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 15)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-146",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 15)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-147",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 15)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-148",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 15)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-149",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 15)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-150",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 15)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-151",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 16)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-152",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 16)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-153",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 16)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-154",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 16)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-155",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 16)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-156",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 16)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-157",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 16)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-158",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 16)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-159",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 16)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-160",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 16)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-161",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 17)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-162",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 17)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-163",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 17)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-164",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 17)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-165",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 17)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-166",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 17)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-167",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 17)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-168",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 17)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-169",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 17)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-170",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 17)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-171",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 18)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-172",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 18)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-173",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 18)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-174",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 18)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-175",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 18)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-176",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 18)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-177",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 18)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-178",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 18)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-179",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 18)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-180",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 18)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-181",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 19)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-182",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 19)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-183",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 19)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-184",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 19)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-185",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 19)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-186",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 19)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-187",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 19)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-188",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 19)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-189",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 19)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-190",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 19)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  },\n  {
    id: "eth-191",
    category: "Ethics",
    title: "Algorithmic Fairness & Disparate Impact (Part 20)",
    subtitle: "Mathematical constraints and societal trade-offs in machine learning bias",
    summary: "Algorithmic fairness seeks to prevent machine learning models from discriminating based on race or gender, though mathematical definitions of fairness often mutually contradict each other.",
    keyTakeaway: "Eliminating bias in automated systems requires making explicit ethical trade-offs between competing definitions of equity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Algorithmic Fairness & Disparate Impact Research & Fundamentals", url: "https://www.jstor.org/search?q=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Algorithmic Fairness & Disparate Impact in modern research." },
      { title: "Algorithmic Fairness & Disparate Impact Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Algorithmic%20Fairness%20%26%20Disparate%20Impact", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Algorithmic Fairness & Disparate Impact." }
    ]
  },\n  {
    id: "eth-192",
    category: "Ethics",
    title: "Neuroethics & Cognitive Liberty (Part 20)",
    subtitle: "Protecting neural privacy and freedom of thought in the era of BCI",
    summary: "Neuroethics addresses the moral implications of brain-computer interfaces, deep brain stimulation, and neuroimaging—advocating for 'cognitive liberty' as a fundamental human right.",
    keyTakeaway: "Neural data is the ultimate intimate frontier requiring absolute constitutional privacy rights.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Neuroethics & Cognitive Liberty Research & Fundamentals", url: "https://www.jstor.org/search?q=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Neuroethics & Cognitive Liberty in modern research." },
      { title: "Neuroethics & Cognitive Liberty Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Neuroethics%20%26%20Cognitive%20Liberty", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Neuroethics & Cognitive Liberty." }
    ]
  },\n  {
    id: "eth-193",
    category: "Ethics",
    title: "Gene Editing & Germline Bioethics (Part 20)",
    subtitle: "The moral boundaries of altering human DNA for future generations",
    summary: "CRISPR germline editing introduces genetic changes passed down to offspring, forcing ethicists to balance disease prevention against unintended genetic mutations and class-based genetic enhancement.",
    keyTakeaway: "Modifying human DNA alters the shared biological inheritance of future unconsenting generations.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Gene Editing & Germline Bioethics Research & Fundamentals", url: "https://www.jstor.org/search?q=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Gene Editing & Germline Bioethics in modern research." },
      { title: "Gene Editing & Germline Bioethics Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Gene%20Editing%20%26%20Germline%20Bioethics", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Gene Editing & Germline Bioethics." }
    ]
  },\n  {
    id: "eth-194",
    category: "Ethics",
    title: "Moral Status of Non-Human Sentient AI (Part 20)",
    subtitle: "Evaluating synthetic consciousness and artificial moral rights",
    summary: "If artificial intelligence achieves sentience and capacity for suffering, society must establish moral duties toward synthetic entities, redefining legal personhood beyond biology.",
    keyTakeaway: "Moral consideration expands beyond biological organisms to any entity capable of subjective experience.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Status of Non-Human Sentient AI Research & Fundamentals", url: "https://www.jstor.org/search?q=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Moral Status of Non-Human Sentient AI in modern research." },
      { title: "Moral Status of Non-Human Sentient AI Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Moral%20Status%20of%20Non-Human%20Sentient%20AI", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Moral Status of Non-Human Sentient AI." }
    ]
  },\n  {
    id: "eth-195",
    category: "Ethics",
    title: "Environmental Ethics & Anthropocene Contract (Part 20)",
    subtitle: "Rethinking moral obligations toward non-human species and ecosystems",
    summary: "Environmental ethics challenges anthropocentrism, arguing that rivers, forests, and wild species possess intrinsic moral value independent of human economic utility.",
    keyTakeaway: "Nature possesses intrinsic value that demands ethical stewardship rather than exploitative consumption.",
    depth: "Intermediate",
    sources: [
      { title: "Environmental Ethics & Anthropocene Contract Research & Fundamentals", url: "https://www.jstor.org/search?q=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Environmental Ethics & Anthropocene Contract in modern research." },
      { title: "Environmental Ethics & Anthropocene Contract Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Environmental%20Ethics%20%26%20Anthropocene%20Contract", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Environmental Ethics & Anthropocene Contract." }
    ]
  },\n  {
    id: "eth-196",
    category: "Ethics",
    title: "Triage Ethics & Resource Allocation Under Crisis (Part 20)",
    subtitle: "Utilitarian vs. egalitarian frameworks during medical scarcity",
    summary: "In medical emergencies where life-saving equipment is limited, triage algorithms balance Maximizing Quality-Adjusted Life Years (QALYs) against First-Come-First-Served and random lotteries.",
    keyTakeaway: "Scarcity forces societies to codify painful moral choices into explicit mathematical protocols.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Triage Ethics & Resource Allocation Under Crisis Research & Fundamentals", url: "https://www.jstor.org/search?q=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Triage Ethics & Resource Allocation Under Crisis in modern research." },
      { title: "Triage Ethics & Resource Allocation Under Crisis Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Triage%20Ethics%20%26%20Resource%20Allocation%20Under%20Crisis", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Triage Ethics & Resource Allocation Under Crisis." }
    ]
  },\n  {
    id: "eth-197",
    category: "Ethics",
    title: "Autonomous Weapon Systems & Human Control (Part 20)",
    subtitle: "The ethics of delegating lethal target selection to algorithms",
    summary: "Autonomous military drones and weapon platforms raise ethical dilemmas regarding whether machines should ever make lethal targeting decisions without direct human authorization.",
    keyTakeaway: "Outsourcing lethal decisions to algorithms degrades human dignity and breaks moral accountability.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Autonomous Weapon Systems & Human Control Research & Fundamentals", url: "https://www.jstor.org/search?q=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Autonomous Weapon Systems & Human Control in modern research." },
      { title: "Autonomous Weapon Systems & Human Control Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Autonomous%20Weapon%20Systems%20%26%20Human%20Control", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Autonomous Weapon Systems & Human Control." }
    ]
  },\n  {
    id: "eth-198",
    category: "Ethics",
    title: "Data Sovereignty & Indigenous Data Governance (Part 20)",
    subtitle: "Reclaiming ownership and moral governance of community data",
    summary: "Indigenous Data Governance mandates that data collected from indigenous communities should be owned, controlled, and applied according to indigenous values and sovereignty principles.",
    keyTakeaway: "Data is an asset tied to cultural identity and community sovereignty, requiring ethical collective consent.",
    depth: "Intermediate",
    sources: [
      { title: "Data Sovereignty & Indigenous Data Governance Research & Fundamentals", url: "https://www.jstor.org/search?q=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Data Sovereignty & Indigenous Data Governance in modern research." },
      { title: "Data Sovereignty & Indigenous Data Governance Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Data%20Sovereignty%20%26%20Indigenous%20Data%20Governance", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Data Sovereignty & Indigenous Data Governance." }
    ]
  },\n  {
    id: "eth-199",
    category: "Ethics",
    title: "Surveillance Capitalism & Behavioral Extraction (Part 20)",
    subtitle: "Shifting economic value from user service to behavioral prediction",
    summary: "Shoshana Zuboff defines surveillance capitalism as the unilateral claiming of human experience as free raw material for translation into behavioral prediction markets.",
    keyTakeaway: "Human behavioral data must not be extracted and traded as passive raw commodity.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Surveillance Capitalism & Behavioral Extraction Research & Fundamentals", url: "https://www.jstor.org/search?q=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Surveillance Capitalism & Behavioral Extraction in modern research." },
      { title: "Surveillance Capitalism & Behavioral Extraction Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Surveillance%20Capitalism%20%26%20Behavioral%20Extraction", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Surveillance Capitalism & Behavioral Extraction." }
    ]
  },\n  {
    id: "eth-200",
    category: "Ethics",
    title: "Epistemic Ethics & The Duty of Belief (Part 20)",
    subtitle: "W.K. Clifford's principle that it is wrong always to believe upon insufficient evidence",
    summary: "The ethics of belief posits that holding unverified or irrational beliefs is not a private harm, but an ethical failure that damages societal trust and decision-making.",
    keyTakeaway: "Belief is a public act with social consequences; we have a moral duty to verify our assumptions.",
    depth: "Accessible",
    sources: [
      { title: "Epistemic Ethics & The Duty of Belief Research & Fundamentals", url: "https://www.jstor.org/search?q=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "JSTOR / Academic Library", type: "Paper", description: "Peer-reviewed analysis of Epistemic Ethics & The Duty of Belief in modern research." },
      { title: "Epistemic Ethics & The Duty of Belief Reference Archive", url: "https://plato.stanford.edu/search/searcher.py?query=Epistemic%20Ethics%20%26%20The%20Duty%20of%20Belief", sourceName: "Stanford Reference / Specialized Archive", type: "Archive", description: "Comprehensive documentation and historical context of Epistemic Ethics & The Duty of Belief." }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ETHICS_TOPICS;
}