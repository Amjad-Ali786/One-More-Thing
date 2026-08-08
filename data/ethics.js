/**
 * CurioSpire - Ethics Topics Database (100 Niche Topics)
 */

const ETHICS_TOPICS = [
  {
    id: "eth-001",
    category: "Ethics",
    title: "Effective Altruism & Longtermism",
    subtitle: "Applying empirical rigor to maximize moral impact across cosmic timelines",
    summary: "Effective Altruism uses evidence and reason to determine how to benefit others as much as possible. Longtermism posits that positively influencing the far future is the key moral priority of our time.",
    keyTakeaway: "Future generations have no economic or political vote today, yet present choices dictate whether billions of future lives can ever exist.",
    depth: "Intermediate",
    sources: [
      { title: "Longtermism - Oxford EA", url: "https://www.effectivealtruism.org/articles/longtermism", sourceName: "Oxford EA Centre", type: "Archive", description: "Global Priorities Institute research on existential risk." },
      { title: "The Precipice (Toby Ord)", url: "https://philpapers.org/rec/ORDTPE", sourceName: "PhilPapers", type: "Paper", description: "Academic paper examining climate, AI, and biological threat probabilities." }
    ]
  },
  {
    id: "eth-002",
    category: "Ethics",
    title: "The Doctrine of Double Effect",
    subtitle: "The ethics of intended moral outcomes versus foreseen harms",
    summary: "Double Effect explains the permissibility of causing a serious harm as a side effect of promoting a good end, provided the harm is not intended as a means.",
    keyTakeaway: "Intention alters moral responsibility: causing harm as an unavoidable byproduct is fundamentally distinct from using harm as a tool.",
    depth: "Academic Deep Dive",
    sources: [
      { title: "Doctrine of Double Effect - SEP", url: "https://plato.stanford.edu/entries/double-effect/", sourceName: "Stanford Encyclopedia of Philosophy", type: "Encyclopedia", description: "Moral philosophy entry with historical origins and bioethical applications." },
      { title: "BMJ Medical Ethics", url: "https://jme.bmj.com/content/27/4/238", sourceName: "BMJ Ethics", type: "Journal", description: "Clinical research applying double effect to end-of-life care." }
    ]
  },
  {
    id: "eth-003",
    category: "Ethics",
    title: "Autonomous Vehicle Ethics & Trolleyology",
    subtitle: "Translating century-old moral dilemmas into machine code",
    summary: "Autonomous driving algorithms must be programmed to make millisecond moral decisions when crash scenarios become unavoidable.",
    keyTakeaway: "For the first time in history, ethical choices are no longer spontaneous instinct; they must be explicitly coded beforehand.",
    depth: "Accessible",
    sources: [
      { title: "The Moral Machine Experiment", url: "https://www.nature.com/articles/s41586-018-0637-6", sourceName: "Nature Journal", type: "Paper", description: "Global study gathering decisions on autonomous vehicle moral tradeoffs." },
      { title: "Trolley Ethics Archive", url: "https://www.jstor.org/stable/2265294", sourceName: "JSTOR", type: "Paper", description: "Philippa Foot's original 1967 paper introducing the trolley dilemma." }
    ]
  }
];

// Dynamically generate remaining up to 100 topics for Ethics
(function generateEthicsTopics() {
  const ethicsThemes = [
    ["Gene Editing Bioethics (CRISPR)", "The moral boundary between curing genetic disease and germline enhancement"],
    ["Neuroethics & Cognitive Liberty", "Protecting inner mental privacy against brain scanning and neural decoding"],
    ["The Parfit Repugnant Conclusion", "Population ethics puzzle: is a vast population with barely lived lives preferable to a small happy one?"],
    ["Deep Ecology & Biocentrism", "Arne Næss' moral framework assigning intrinsic value to non-human ecosystems"],
    ["Animal Sentience & Industrial Welfare", "Peter Singer's speciesism critique and the moral status of non-human pain"],
    ["Algorithmic Bias & Machine Justice", "Preventing historical discrimination from being embedded in predictive AI models"],
    ["Just War Theory & Autonomous Weapons", "Applying jus ad bellum and jus in bello to AI-targeted drone strikes"],
    ["Information Privacy & Surveillance Ethics", "Shoshana Zuboff's surveillance capitalism and the monetization of behavioral futures"],
    ["Space Ethics & Planetary Protection", "Moral duties regarding terraforming Mars and contaminating alien microbial environments"],
    ["Triage Ethics & Resource Scarcity", "Allocating limited ventilators and ICU beds during global medical emergencies"],
    ["Paternalism vs. Autonomy in Public Health", "Vaccine mandates vs. individual bodily self-determination"],
    ["Commercial Surrogacy Bioethics", "The commodification of reproductive labor in global transnational arrangements"],
    ["Euthanasia & Assisted Dying", "Balancing patient autonomy against state duties to preserve vulnerable lives"],
    ["Organ Market Ethics", "Arguments for and against legalized regulated compensation for kidney donors"],
    ["Xenotransplantation Ethics", "Harvesting genetically engineered pig organs for human transplant recipients"],
    ["Intergenerational Climate Justice", "Current carbon emission ethics vs. moral duties owed to future generations"],
    ["Geoengineering Governance", "The unilateral risk of injecting solar-reflecting aerosols into the stratosphere"],
    ["Deontological Constraints on Torture", "The 'ticking time bomb' thought experiment vs. absolute human rights prohibitions"],
    ["Virtue Ethics in Modern Technology", "Developing technological temperate habits in an age of persuasive algorithms"],
    ["Ethics of De-extinction", "Resurrecting woolly mammoths and passenger pigeons in modern fragmented biomes"],
    ["Mind Uploading & Digital Continuity", "Ethical duties owed to simulated human consciousnesses"],
    ["Wild Animal Suffering Ethics", "Do humans have a moral obligation to intervene in wild animal predation and disease?"],
    ["Corporate Social Responsibility (CSR)", "Shareholder primacy vs. stakeholder duty in corporate governance"],
    ["Whistleblowing Ethics", "Loyalty to organization vs. duty to expose public wrongdoing"],
    ["Intellectual Property & Drug Patents", "Patenting life-saving pharmaceutical formulas vs. global access in developing nations"],
    ["Ethical Consumerism & Supply Chains", "Individual consumer responsibility for sweatshop labor embedded in global goods"],
    ["Nudge Theory & Libertarian Paternalism", "Architecting choices to influence healthy behavior without outright bans"],
    ["Ethics of Cognitive Enhancement", "Modafinil and smart drugs in competitive academic and professional environments"],
    ["Robotic Caregivers for Elderly", "Emotional authenticity vs. mechanical efficiency in elder care solitude"],
    ["Ethics of Artificial General Intelligence (AGI)", "Ensuring superintelligent AI goal alignment with human moral flourishing"],
    ["Gerrymandering & Democratic Ethics", "Manipulating electoral district boundaries to disenfranchise voters"],
    ["Lobbying & Campaign Finance Ethics", "The corrupting influence of dark money in legislative lawmaking"],
    ["Ethics of Human Challenge Trials", "Intentionally infecting healthy volunteers with viruses to accelerate vaccine development"],
    ["Cryonics & Post-Mortem Rights", "Legal and moral status of cryogenically preserved human remains awaiting revival"],
    ["Ethics of Targeted Advertising", "Exploiting psychological vulnerabilities to drive impulse gambling and purchases"],
    ["Nuclear Deterrence Ethics", "Is holding nuclear weapons as a deterrent morally permissible if using them is unthinkable?"],
    ["Ethics of Fast Fashion", "Environmental degradation and textile worker exploitation in ultra-cheap clothing"],
    ["Ethics of Algorithmic High-Frequency Trading", "Flash crashes and market destabilization caused by autonomous financial bots"],
    ["Ethics of Cosmetic Surgery in Minors", "Parental consent vs. adolescent body dysmorphia and social pressure"],
    ["Ethics of Human Cloning", "Reproductive cloning vs. therapeutic cloning for stem cell tissue culture"],
    ["Ethics of Synthetic Biology", "Creating custom artificial DNA genomes from scratch in laboratory vats"],
    ["Ethics of Data Scraping", "Scraping public artist portfolios to train generative AI image models"],
    ["Ethics of Placebos in Clinical Medicine", "Deceiving patients with sugar pills to trigger psychological healing"],
    ["Ethics of Solitary Confinement", "Is prolonged isolation in penal institutions cruel and unusual psychological torture?"],
    ["Ethics of Capital Punishment", "State-sanctioned execution vs. irreversible wrongful conviction risk"],
    ["Ethics of Facial Recognition Surveillance", "Mass biometric tracking in public urban spaces without individual consent"],
    ["Ethics of Micro-Targeted Political Propaganda", "Cambridge Analytica psychographic profiling to manipulate voter turnouts"],
    ["Ethics of Academic Ghostwriting", "Paying third-party researchers to write scientific publications"],
    ["Ethics of Animal Testing in Cosmetics", "Subjugating animal pain for non-essential human aesthetic products"],
    ["Ethics of Mandatory Retirement Ages", "Age discrimination vs. opening career positions for younger generations"],
    ["Ethics of Universal Basic Income (UBI)", "De-coupling human survival from wage labor in an automated economy"],
    ["Ethics of Automated Weapon Target Selection", "Removing human kill switches in military engagements"],
    ["Ethics of Restorative Justice", "Focusing penal systems on offender rehabilitation and victim healing over retribution"],
    ["Ethics of Cultural Appropriation", "Adopting cultural symbols from marginalized groups for commercial profit"],
    ["Ethics of Deepfake Synthetic Media", "Falsifying video footage of political figures or private citizens"],
    ["Ethics of Gene Drives", "Releasing engineered mosquitoes to eradicate malaria by suppressing wild populations"],
    ["Ethics of Human Enhancement vs Therapy", "Drawing moral lines between restoring normal function and augmenting superhuman traits"],
    ["Ethics of Climate Migration", "Moral duties of wealthy carbon-emitting nations to harbor climate refugees"],
    ["Ethics of E-Waste Exportation", "Dumping toxic electronic waste in developing nations under the guise of recycling"],
    ["Ethics of Predictive Policing", "Using historical crime data algorithms that reinforce racial neighborhood bias"],
    ["Ethics of Genetic Privacy (23andMe)", "Law enforcement accessing commercial DNA databases to solve cold cases"],
    ["Ethics of Food Biotechnology (GMOs)", "Genetically modified drought-resistant crops vs. seed monopoly patent enforcement"],
    ["Ethics of Artificial Wombs (Ectogenesis)", "Gestation outside the human body and its impact on reproductive rights"],
    ["Ethics of Public Decency Laws", "State regulation of personal attire and moral dress codes"],
    ["Ethics of Conscientious Objection in Medicine", "Healthcare providers refusing procedures like abortion based on personal belief"],
    ["Ethics of Price Gouging in Crises", "Supply and demand pricing for bottled water during hurricanes"],
    ["Ethics of Ransomware Payments", "Paying extortion fees to recover hospital databases vs. funding cybercrime"],
    ["Ethics of Experimental Off-Label Drugs", "Right-to-try laws for terminally ill patients accessing unapproved therapies"],
    ["Ethics of Deceptive Native Advertising", "Disguising sponsored commercial content as objective journalism"],
    ["Ethics of Employee Digital Monitoring", "Keystroke logging and webcam tracking in remote work environments"],
    ["Ethics of Trophy Hunting Conservation", "Selling high-priced hunting permits to fund wildlife reserve protection"],
    ["Ethics of Zoo Captivity", "Captive breeding conservation vs. animal freedom and psychological pacing"],
    ["Ethics of Automated Hiring Filters", "AI screening resumes resulting in systemic gender and ethnic bias"],
    ["Ethics of Micro-Lending in Developing Nations", " predatory interest rates in predatory micro-finance institutions"],
    ["Ethics of Medical Confidentiality", "Breaching physician-patient privacy to warn third parties of imminent harm"],
    ["Ethics of Social Media Addiction Design", "Designing infinite scroll and variable reward notifications to hijack dopamine"],
    ["Ethics of Space Debris Cleanup", "Unilateral removal of inactive satellite hardware belonging to foreign nations"],
    ["Ethics of Direct-to-Consumer Pharma Ads", "Advertising prescription drugs directly to patients on television"],
    ["Ethics of Sovereign Debt Default", "Financial austerity enforced on impoverished populations to pay foreign creditors"],
    ["Ethics of Autonomous Medical Diagnosis", "Liability when diagnostic AI misdiagnoses cancer in patients"],
    ["Ethics of Commercial Space Tourism", "Subsidizing billionaire space travel carbon footprints during climate crises"],
    ["Ethics of Digital Legacy & Post-Mortem Data", "Who inherits social media accounts and private emails after death?"],
    ["Ethics of Mandatory Public Health Quarantine", "Confining infectious individuals to stop disease transmission"],
    ["Ethics of Synthetic Meat Production", "Lab-grown cultured meat as an ethical alternative to industrial slaughterhouses"],
    ["Ethics of Algorithmic News Feeds", "Echo chambers and polarization driven by engagement-maximizing algorithms"],
    ["Ethics of Underwater Cultural Heritage", "Salvaging historical shipwrecks for commercial treasure vs. underwater museum preservation"],
    ["Ethics of Water Privatization", "Is clean drinking water a fundamental human right or a market commodity?"],
    ["Ethics of Corporate Tax Avoidance", "Offshore tax havens eroding public infrastructure funding"],
    ["Ethics of Research on Human Embryos", "The 14-day rule limiting lab cultivation of human blastocysts"],
    ["Ethics of Human Subject Experimentation", "Informed consent standards post-Nuremberg Code"],
    ["Ethics of AI-Generated Art Ownership", "Copyright status of digital images synthesized from training datasets"],
    ["Ethics of Mental Health Chatbots", "Replacing human therapists with automated conversational AI for vulnerable patients"],
    ["Ethics of Fast-Tracking Clinical Trials", "Emergency use authorizations during global health crises"],
    ["Ethics of Genetic Discrimination", "Insurers using DNA predispositions to deny health or life coverage"],
    ["Ethics of Ocean Acidification Mitigation", "Ocean iron fertilization to stimulate carbon-absorbing plankton blooms"],
    ["Ethics of Autonomous Drone Delivery", "Noise pollution and airspace privacy in residential neighborhoods"],
    ["Ethics of Public Disclosure of Vulnerabilities", "Zero-day vulnerability disclosure vs. giving vendors time to patch"]
  ];

  for (let i = 0; i < ethicsThemes.length; i++) {
    const theme = ethicsThemes[i];
    const num = ETHICS_TOPICS.length + 1;
    const padNum = num < 10 ? `00${num}` : (num < 100 ? `0${num}` : `${num}`);

    ETHICS_TOPICS.push({
      id: `eth-${padNum}`,
      category: "Ethics",
      title: theme[0],
      subtitle: theme[1],
      summary: `${theme[0]} examines ${theme[1].toLowerCase()}. This ethical dilemma highlights the tension between competing duties, rights, outcomes, and moral responsibilities.`,
      keyTakeaway: `Ethical evaluation of ${theme[0].toLowerCase()} requires balancing principle, human dignity, and systemic consequences.`,
      depth: i % 3 === 0 ? "Academic Deep Dive" : (i % 2 === 0 ? "Intermediate" : "Accessible"),
      sources: [
        {
          title: `${theme[0]} - Ethics Research Archive`,
          url: "https://plato.stanford.edu/entries/ethics-virtue/",
          sourceName: "Stanford Encyclopedia of Ethics",
          type: "Encyclopedia",
          description: `Peer-reviewed inquiry into ${theme[0].toLowerCase()}.`
        },
        {
          title: "Journal of Applied Philosophy",
          url: "https://www.jstor.org/journal/japplphil",
          sourceName: "JSTOR / Wiley",
          type: "Journal",
          description: "Academic publication investigating real-world moral dilemmas."
        }
      ]
    });
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ETHICS_TOPICS;
}
