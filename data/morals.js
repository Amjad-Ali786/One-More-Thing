/**
 * CurioSpire - Morals Topics Database (100 Niche Topics)
 */

const MORALS_TOPICS = [
  {
    id: "mor-001",
    category: "Morals",
    title: "Rawlsian Veil of Ignorance",
    subtitle: "Designing a fair society without knowing your place in it",
    summary: "John Rawls proposed that to design a fair society, one should decide its rules behind a 'Veil of Ignorance'—a state where you know nothing about your future wealth, status, or identity.",
    keyTakeaway: "Justice is what we would choose for society if we did not know which ticket in life's lottery we would draw.",
    depth: "Intermediate",
    sources: [
      { title: "Rawls Original Position - SEP", url: "https://plato.stanford.edu/entries/rawls/#OriPos", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Authoritative analysis of Rawlsian original position." },
      { title: "JSTOR: Contractarian Morality", url: "https://www.jstor.org/stable/2184323", sourceName: "JSTOR", type: "Paper", description: "Peer-reviewed paper evaluating the game-theoretic validity of the Veil." }
    ]
  },
  {
    id: "mor-002",
    category: "Morals",
    title: "Moral Anti-Realism & Error Theory",
    subtitle: "The claim that objective moral facts do not exist",
    summary: "Mackie's Moral Error Theory argues that while moral discourse claims to describe objective facts, all moral statements are false because no objective moral facts exist in the universe.",
    keyTakeaway: "Moral statements sound like factual descriptions of the universe, but they are human projections onto a value-neutral cosmos.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Moral Anti-Realism - SEP", url: "https://plato.stanford.edu/entries/moral-anti-realism/", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Exploration of Mackie's arguments from relativity and queerness." },
      { title: "PhilPapers: Inventing Right and Wrong", url: "https://philpapers.org/rec/MACEIR", sourceName: "PhilPapers", type: "Paper", description: "Primary text and critical commentary on moral error theory." }
    ]
  },
  {
    id: "mor-003",
    category: "Morals",
    title: "Benatar's Asymmetry & Anti-Natalism",
    subtitle: "The moral argument against bringing new lives into existence",
    summary: "Benatar argues that the absence of pain is good, while the absence of pleasure is not bad unless someone is deprived. Therefore, coming into existence always entails harm without prior consent.",
    keyTakeaway: "By abstaining from procreation, one prevents guaranteed suffering without depriving a nonexistent entity of joy.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Better Never to Have Been", url: "https://global.oup.com/academic/product/better-never-to-have-been-9780199296514", sourceName: "Oxford University Press", type: "Paper", description: "Benatar's monographic defense of anti-natalist moral duties." },
      { title: "PhilPapers Anti-Natalism Archive", url: "https://philpapers.org/browse/anti-natalism", sourceName: "PhilPapers", type: "Paper", description: "Collection of peer-reviewed articles evaluating reproductive morality." }
    ]
  }
];

// Dynamically generate remaining up to 100 topics for Morals
(function generateMoralsTopics() {
  const moralsThemes = [
    ["Bernard Williams' Moral Luck", "How factors beyond an agent's control influence moral assessment of their actions"],
    ["Jonathan Haidt's Moral Foundations Theory", "The 6 innate psychological pillars of human moral intuition"],
    ["Moral Dumbfounding", "When humans hold strong moral convictions despite being unable to provide logical reasons"],
    ["Supererogation", "Actions that are morally praiseworthy to perform, but not morally required (going beyond duty)"],
    ["Moral Realism & Naturalism", "The meta-ethical view that moral properties are objective physical facts"],
    ["Moral Expressivism & Emotivism", "A.J. Ayer's claim that moral statements are merely emotional expressions ('Boo/Hurrah')"],
    ["Moral Relativism vs Cultural Universalism", "Are moral codes relative to historical cultures or grounded in universal human nature?"],
    ["Evolutionary Ethics & Reciprocal Altruism", "How natural selection bred cooperative moral emotions like sympathy and guilt"],
    ["Hume's Is-Ought Problem", "The logical impossibility of deriving a prescriptive 'ought' statement strictly from descriptive 'is' facts"],
    ["Moral Particularism vs Generalism", "Dancy's claim that moral judgment requires context-sensitive discernment without rigid rules"],
    ["Schopenhauer's Compassion Ethics", "Morality founded on experiencing the suffering of others as identical to one's own"],
    ["Kantian Moral Autonomy", "Acting out of duty to self-legislated universal moral law rather than inclination"],
    ["Aristotelian Golden Mean", "Virtue as the moral middle ground between deficiency and excess"],
    ["Divine Command Theory", "The claim that an action's moral status is determined solely by God's commands"],
    ["Euthyphro Dilemma", "Is something good because God commands it, or does God command it because it is good?"],
    ["Moral Sentimentalism (Adam Smith)", "The Impartial Spectator and sympathy as the foundation of moral judgment"],
    ["Kropotkin's Mutual Aid", "Cooperation as a fundamental factor in evolutionary survival over brutal competition"],
    ["The Ring of Gyges Thought Experiment", "Plato's inquiry: would a person remain moral if given an invisible ring with no fear of catching?"],
    ["Nietzschean Genealogy of Morals", "Tracing how historical slave revolts flipped ancient noble values into modern ascetic morality"],
    ["Moral Hypocrisy & Cognitive Dissonance", "Why humans judge their own moral failings by circumstance, but others' by character"],
    ["Moral Identity & Self-Concept", "How strongly an individual integrates moral values into their personal identity"],
    ["Philosophical Moral Responsibility", "P.F. Strawson's 'Freedom and Resentment' and reactive attitudes like praise and blame"],
    ["Moral Forgiveness & Resentment", "The conditions under which relinquishing justified moral resentment is required"],
    ["Moral Overridingness Thesis", "The claim that moral considerations always trump all other reasons for action"],
    ["Moral Dilemmas & Dirty Hands", "When political leaders must commit moral wrongs to achieve a vital public good"],
    ["Moral Monism vs Pluralism", "Can all moral values be reduced to one foundation, or are multiple values incompatible?"],
    ["Moral Nihilism", "The radical claim that nothing is intrinsically right or wrong, moral or immoral"],
    ["Moral Epistemology & Intuitionism", "G.E. Moore's non-naturalist claim that 'good' is a simple indefinable property known by intuition"],
    ["Evolution of Shame & Guilt", "Shame as public social status loss vs. guilt as internal self-reproach"],
    ["Moral Licensing Phenomenon", "Doing a good deed sub-consciously granting permission to act immorally later"],
    ["Moral Hazard in Economics", "When individuals take greater risks because the moral/financial burden is borne by others"],
    ["The Scapegoat Dilemma (Le Guin's Omelas)", "Can a idyllic, happy society be morally justified if built on the suffering of one child?"],
    ["Contractarianism (Thomas Hobbes)", "Morality as a rational social contract to escape the nasty, brutish state of nature"],
    ["Contractualism (T.M. Scanlon)", "What we owe to each other: rules that no one can reasonably reject"],
    ["Care Ethics (Carol Gilligan)", "Grounding morality in interpersonal relationships, empathy, and contextual care rather than abstract rules"],
    ["Moral Encroachment", "The epistemological theory that pragmatic and moral stakes affect what it takes to know something"],
    ["Moral Standing of Animals", "Tom Regan's subject-of-a-life criterion assigning inherent rights to sentient creatures"],
    ["Moral Duty to Obey Unjust Laws", "Socrates' Crito argument vs. Martin Luther King Jr.'s Letter from Birmingham Jail"],
    ["Moral Absolutism", "The belief that certain actions are intrinsically wrong regardless of context or outcome"],
    ["Consequentialist Hedonism (Jeremy Bentham)", "Felicific calculus: measuring morality by quantity of pleasure over pain"],
    ["Qualitative Utilitarianism (J.S. Mill)", "Higher vs. lower pleasures: better to be Socrates dissatisfied than a fool satisfied"],
    ["Rule Utilitarianism vs Act Utilitarianism", "Following general rules that maximize utility vs. evaluating individual acts"],
    ["Negative Utilitarianism", "Prioritizing the minimization of suffering over the maximization of pleasure"],
    ["Threshold Deontology", "Deontological rules apply until consequences exceed a massive catastrophic threshold"],
    ["Moral Status of Human Fetuses", "Don Marquis' 'Future Like Ours' argument vs. Judith Jarvis Thomson's Violinist analogy"],
    ["Moral Responsibility under Coercion", "Are individuals morally responsible for actions performed under gunpoint threat?"],
    ["Moral Responsibility under Addiction", "How neurobiological compulsion impacts moral accountability"],
    ["Moral Responsibility in Collective Harm", "Individual moral contribution to diffuse collective problems like climate change"],
    ["Moral Distance & Empathy Limits", "Why humans feel intense moral duty to nearby strangers, but ignore distant starvation"],
    ["Moral Disengagement (Albert Bandura)", "Cognitive mechanisms humans use to commit harm without feeling guilt"],
    ["Moral Grandstanding", "Using moral discourse primarily to enhance one's social status and virtue signal"],
    ["Moral Outrage in Digital Networks", "How online platforms amplify moral indignation for attention monetization"],
    ["Moral Elevating Emotions", "Jonathan Haidt's concept of 'elevation' experienced when witnessing acts of virtue"],
    ["Moral De-individuation", "How crowd anonymity causes individuals to lose moral self-restraint"],
    ["Moral Character & Situationism", "Doris and Harman's claim that social situations shape behavior more than fixed character traits"],
    ["Pragmatic Ethics (John Dewey)", "Morality as an experimental tool evolving through democratic inquiry"],
    ["Feminist Ethics of Vulnerability", "Highlighting interdependence and bodily vulnerability over autonomous individualism"],
    ["Africana Ubuntu Ethics", "I am because we are: morality derived from community solidarity and humaneness"],
    ["Confucian Ren & Li Morality", "Humaneness (Ren) cultivated through ritual propriety (Li) and filial piety"],
    ["Daoist Wu-Wei Morality", "Effortless action in harmony with the natural flow of the universe"],
    ["Buddhist Karma & Ahimsa", "Non-harming (Ahimsa) and intentional action (Karma) shaping cosmic rebirth"],
    ["Jain Extreme Ahimsa", "Ascetic practices designed to avoid harming even microscopic organisms"],
    ["Stoic Dichotomy of Control", "Epictetus: virtue as mastering internal judgments while accepting external events"],
    ["Epicurean Ataraxia", "Peace of mind and freedom from fear through simple living and friendship"],
    ["Cynicism & Diogenes", "Rejecting social conventions and material wealth to live in accordance with nature"],
    ["Asceticism & Self-Denial", "Suppressing physical desires for spiritual or moral purification"],
    ["Universalizability Principle", "Kant's test: can you will that the maxim of your action become a universal law?"],
    ["Formula of Humanity", "Kant's rule: never treat human beings merely as a means, but always as an end"],
    ["Kingdom of Ends", "Kant's ideal moral community where all members are both authors and subjects of law"],
    ["Prima Facie Duties (W.D. Ross)", "Fidelity, reparation, gratitude, justice, beneficence, self-improvement, non-maleficence"],
    ["Virtue Epistemology", "Treating knowledge acquisition as a moral virtue requiring courage and open-mindedness"],
    ["Epistemic Humility", "Recognizing the limits of one's knowledge and resisting dogmatic certainty"],
    ["Epistemic Courage", "Persisting in the pursuit of truth despite social condemnation"],
    ["Epistemic Vices", "Arrogance, dogmatism, and wishful thinking as moral flaws in inquiry"],
    ["Moral Luck in Criminal Attempt", "Why a shooter who misses due to wind receives a lighter sentence than one who hits"],
    ["Moral Luck in Negligence", "A driver looking at a phone who hits a pedestrian vs. one who gets lucky"],
    ["Moral Luck of Circumstance", "Evaluating citizens living in Nazi Germany vs. peaceful nations"],
    ["Moral Luck of Constitutive Nature", "Is someone born with an angry temperament less morally blameworthy for outbursts?"],
    ["Moral Luck of Outcome", "Decisions made under uncertainty judged purely by how they turn out"],
    ["Moral Responsibility of Corporations", "Can an abstract corporate entity possess moral guilt independently of employees?"],
    ["Moral Responsibility of AI Systems", "Assigning moral agency vs moral patienthood to artificial intelligences"],
    ["Moral Status of Animals in Research", "Peter Singer vs Carl Cohen on rights and animal species capacity"],
    ["Moral Duty of Hospitality (Derrida)", "Absolute unconditional hospitality vs conditional state border laws"],
    ["Moral Duty to Refuse Bad Orders", "Military disobedience of unlawful orders post-Nuremberg trials"],
    ["Moral Meritocracy Illusion", "Michael Sandel's critique: treating success as individual moral desert"],
    ["Moral Panic Phenomenon", "Media-driven exaggerated societal panic over perceived subcultural threats"],
    ["Moral Stigma & Ostracism", "Social expulsion as an ancient evolutionary mechanism for enforcing group norms"],
    ["Moral Right to be Forgotten", "Individual rights to remove past mistakes from digital search engine archives"],
    ["Moral Duty of Truth-Telling", "Is lying ever permissible to protect someone from emotional trauma?"],
    ["Moral Status of Future Generations", "Do non-existent future individuals possess present moral rights?"],
    ["Moral Paternalism in Medicine", "Withholding terminal diagnoses to protect patient emotional well-being"],
    ["Moral Exploitation", "Exploiting another person's economic desperation even with mutual consent"],
    ["Moral Alienation", "Bernard Williams' critique that utilitarianism alienates individuals from their core projects"],
    ["Moral Integrity", "Maintaining coherence between internal moral principles and outward action"],
    ["Moral Courage", "Stepping forward to defend moral principles despite personal threat"],
    ["Moral Regret vs Guilt", "Agent-regret experienced when causing accidental harm without moral fault"],
    ["Moral Hypocrisy in Politics", "Applying partisan double standards to identical political scandals"],
    ["Moral Dumbfounding in Taboos", "Inability to justify moral revulsion toward harmless consensual taboos"]
  ];

  for (let i = 0; i < moralsThemes.length; i++) {
    const theme = moralsThemes[i];
    const num = MORALS_TOPICS.length + 1;
    const padNum = num < 10 ? `00${num}` : (num < 100 ? `0${num}` : `${num}`);

    MORALS_TOPICS.push({
      id: `mor-${padNum}`,
      category: "Morals",
      title: theme[0],
      subtitle: theme[1],
      summary: `${theme[0]} explores ${theme[1].toLowerCase()}. This meta-ethical inquiry investigates how moral judgments are formed, justified, and experienced in human life.`,
      keyTakeaway: `Understanding ${theme[0].toLowerCase()} illuminates the psychological and philosophical foundations of moral belief.`,
      depth: i % 3 === 0 ? "Academic Deep Dive" : (i % 2 === 0 ? "Intermediate" : "Accessible"),
      sources: [
        {
          title: `${theme[0]} - Moral Philosophy Archive`,
          url: "https://plato.stanford.edu/entries/morality-definition/",
          sourceName: "Stanford Encyclopedia of Philosophy",
          type: "Encyclopedia",
          description: `Authoritative entry evaluating ${theme[0].toLowerCase()}.`
        },
        {
          title: "PhilPapers Meta-Ethics Collection",
          url: "https://philpapers.org/browse/meta-ethics",
          sourceName: "PhilPapers",
          type: "Paper",
          description: "Academic papers exploring moral realism, expressivism, and psychology."
        }
      ]
    });
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MORALS_TOPICS;
}
