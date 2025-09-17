const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId.length <= 1) {
      return;
    }

    link.addEventListener('click', (event) => {
      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
};

document.addEventListener('DOMContentLoaded', enableSmoothScroll);