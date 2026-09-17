// Add verified public URLs here. Empty entries show honest status text.
const projectLinks = {
  clinic: 'https://sites.google.com/view/vamsee-dentalcare-tirupati/home',
  meal: 'https://family-table-planner.sireesha-n-1.chatgpt.site/',
  youtube: 'https://www.youtube.com/channel/UCgRG2UON1a0xQA0h27qjoWg',
  github: 'https://github.com/sireesha123git?tab=repositories'
};
const projectLabels = {clinic:'Visit clinic website ↗',meal:'Explore the meal planner ↗',youtube:'Watch on YouTube ↗',github:'Explore my GitHub ↗'};
Object.entries(projectLinks).forEach(([key, url]) => {
  if (!url) return;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:') return;
    const placeholder = document.querySelector(`[data-project="${key}"]`);
    if (!placeholder) return;
    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = parsed.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = projectLabels[key];
    placeholder.replaceWith(link);
  } catch { /* Keep status text if a URL is incomplete. */ }
});


const portraitStories = {
  roots: 'Engineering gives me a foundation. Family and reflection keep me grounded.',
  people: 'The connected canopy represents the people I mentor, the teams I grow, and the trust we build together.',
  possibility: 'The open sky represents my next chapter: learning AI, making useful things, and staying curious about what comes next.'
};
document.querySelectorAll('[data-story]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-story]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('portrait-story').textContent = portraitStories[button.dataset.story];
  });
});
