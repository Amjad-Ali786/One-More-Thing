/**
 * CurioSpire - Master Topic Database Integrator (900 Niche Topics)
 * Combines 100 topics for each of the 9 fields:
 * Design, Philosophy, Ethics, Morals, Cars, Psychology, Art Movements, Art Styles, Taste & Discovery
 */

const TOPICS_DATA = [
  ...(typeof DESIGN_TOPICS !== 'undefined' ? DESIGN_TOPICS : []),
  ...(typeof PHILOSOPHY_TOPICS !== 'undefined' ? PHILOSOPHY_TOPICS : []),
  ...(typeof ETHICS_TOPICS !== 'undefined' ? ETHICS_TOPICS : []),
  ...(typeof MORALS_TOPICS !== 'undefined' ? MORALS_TOPICS : []),
  ...(typeof CARS_TOPICS !== 'undefined' ? CARS_TOPICS : []),
  ...(typeof PSYCHOLOGY_TOPICS !== 'undefined' ? PSYCHOLOGY_TOPICS : []),
  ...(typeof ART_MOVEMENTS_TOPICS !== 'undefined' ? ART_MOVEMENTS_TOPICS : []),
  ...(typeof ART_STYLES_TOPICS !== 'undefined' ? ART_STYLES_TOPICS : []),
  ...(typeof TASTE_TOPICS !== 'undefined' ? TASTE_TOPICS : [])
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOPICS_DATA;
}
