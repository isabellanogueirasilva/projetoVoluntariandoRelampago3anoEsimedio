const defaultConfig = {
  background_color: '#FFFFFF',
  primary_color: '#7A4C9A',
  secondary_color: '#4C9CF9',
  text_color: '#333333',
  cta_color: '#F39C4A',
  font_family: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  font_size: 16
};

function adjustBrightness(hex, percent) {
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, (num >> 8 & 255) + amt));
  const B = Math.min(255, Math.max(0, (num & 255) + amt));
  return "#" + (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

function onConfigChange(config) {
  const bg = config.background_color || defaultConfig.background_color;
  const primary = config.primary_color || defaultConfig.primary_color;
  const text = config.text_color || defaultConfig.text_color;
  const cta = config.cta_color || defaultConfig.cta_color;

  document.body.style.fontFamily = config.font_family || defaultConfig.font_family;
  document.querySelector('.page-wrapper').style.background = bg;

  document.querySelector('header').style.background = primary;

  document.querySelector('.hero-section').style.background =
    `linear-gradient(135deg, ${primary}, ${adjustBrightness(primary, -20)})`;

  document.querySelectorAll('.section-title').forEach(t => t.style.color = primary);

  document.querySelectorAll('.urgent-card').forEach(card => {
    card.style.borderColor = '#F7D96F';
  });

  document.querySelectorAll('.card-description').forEach(d => {
    d.style.color = text;
  });

  document.body.style.fontSize = (config.font_size || defaultConfig.font_size) + "px";
}

function initializeThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const wrapper = document.querySelector('.page-wrapper');
  let dark = false;
}

document.addEventListener('DOMContentLoaded', () => {
  initializeThemeToggle();
  onConfigChange(defaultConfig);
});
