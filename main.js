const enableSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      // href="#" 일 경우, 최상단으로 스크롤
      if (targetId === '#') {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
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

    navMenu.setAttribute('data-open', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.classList.add('is-open');
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

  const handlePointerDownOutside = (event) => {
    if (navMenu.getAttribute('data-open') !== 'true') {
      return;
    }

    if (navMenu.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    closeMenu({ returnFocus: false });
  };

  document.addEventListener('pointerdown', handlePointerDownOutside);

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

const setupScrollTopButton = () => {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) {
    return; // 버튼이 없으면 함수 종료
  }

  // 스크롤 위치에 따라 버튼 보이기/숨기기
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // 버튼 클릭 시 최상단으로 부드럽게 이동
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  enableSmoothScroll();
  setupNavMenu();
  setupScrollTopButton(); // ✨ 이 줄을 추가합니다.
});