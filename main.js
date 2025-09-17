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

const setupNavMenu = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!navToggle || !navMenu) {
    return;
  }

  const focusableSelectors =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), select, textarea, input';
  let originalBodyOverflow = document.body.style.overflow || '';

  const getFocusableItems = () =>
    Array.from(navMenu.querySelectorAll(focusableSelectors)).filter((element) => {
      return !element.hasAttribute('disabled') && element.getAttribute('aria-hidden') !== 'true';
    });

  const closeMenu = ({ returnFocus = true } = {}) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    navMenu.setAttribute('data-open', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.classList.remove('is-open');
    document.body.style.overflow = originalBodyOverflow;
    document.removeEventListener('keydown', handleKeydown);

    if (returnFocus) {
      navToggle.focus();
    }
  };

  const handleKeydown = (event) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableItems();

    if (!focusable.length) {
      event.preventDefault();
      navMenu.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const isShift = event.shiftKey;
    const activeElement = document.activeElement;

    if (!isShift && activeElement === last) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (isShift && activeElement === first) {
      event.preventDefault();
      last.focus();
    }
  };

  const openMenu = () => {
    if (navMenu.getAttribute('data-open') === 'true') {
      return;
    }

    originalBodyOverflow = document.body.style.overflow || '';
    navMenu.setAttribute('data-open', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeydown);

    const focusable = getFocusableItems();

    if (focusable.length) {
      focusable[0].focus();
    } else {
      navMenu.focus();
    }
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.getAttribute('data-open') === 'true';

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navMenu.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.getAttribute('data-open') === 'true') {
        closeMenu();
      }
    });
  });

  const mediaQuery = window.matchMedia('(min-width: 880px)');

  if (mediaQuery.matches) {
    navMenu.setAttribute('aria-hidden', 'false');
  }

  mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      closeMenu({ returnFocus: false });
      navMenu.setAttribute('aria-hidden', 'false');
    } else {
      navMenu.setAttribute('aria-hidden', navMenu.getAttribute('data-open') === 'true' ? 'false' : 'true');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  enableSmoothScroll();
  setupNavMenu();
});