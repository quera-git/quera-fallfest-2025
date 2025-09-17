const LANGUAGE_STORAGE_KEY = 'qicb-preferred-language';

const LANGUAGE_OPTIONS = {
  ko: { code: 'KR', flag: '🇰🇷' },
  en: { code: 'EN', flag: '🇺🇸' }
};

const translations = {
  ko: {
    'brand.name': 'QICB Fall Fest 2025 @ PNU',
    'brand.homeAria': 'QICB 홈으로',
    'nav.about': '소개',
    'nav.schedule': '일정',
    'nav.venue': '장소',
    'nav.faq': 'FAQ',
    'nav.register': '지금 등록하기',
    'nav.toggle': '주요 메뉴 열기',
    'hero.date': '2025.11.21 (금) · 부산대학교',
    'hero.kpi.sessions': '⏱️ 세션 & 실습',
    'hero.kpi.handsOn': '🧪 Qiskit 핸즈온',
    'hero.kpi.challenge': '🏆 미니 챌린지',
    'hero.kpi.networking': '👥 네트워킹',
    'about.title': '행사 소개',
    'about.description':
      '<strong>Qiskit Fall Fest 2025 @ PNU</strong>는 <strong>QICB(Quantum Information Club in Busan)</strong>가 주최하고, <strong>IBM Quantum</strong>의 글로벌 Fall Fest 프로그램의 일환으로 개최되는 행사입니다. 양자 컴퓨팅을 처음 접하는 초보자들을 위한 자리이며, 강연·실습·네트워킹을 통해 양자 컴퓨팅을 배울 수 있는 기회를 제공합니다.',
    'about.audience': '<strong>대상:</strong> 컴공/물리/수학 전공자 및 비전공자 모두',
    'about.requirements': '<strong>준비물:</strong> 노트북, GitHub 계정, 기본 Python 환경',
    'about.level': '<strong>난이도:</strong> 입문~초급 (사전 자료 제공)',
    'schedule.title': '일정(안)',
    'schedule.part1.title': 'Hands-on & Mini Hack',
    'schedule.part1.item1': '10:00 - 10:30 · Fall Fest Opening',
    'schedule.part1.item2': '10:30 - 11:30 · 스피커 초청 연사',
    'schedule.part1.item3': '13:00 - 14:00 · Qiskit Fundamental Lab',
    'schedule.part1.item4': '14:00 - 16:00 · Mini Hack',
    'schedule.part2.title': 'Workshop',
    'schedule.part2.item1': '16:00 - 17:00 · 워크숍 1',
    'schedule.part2.item2': '17:00 - 18:00 · 워크숍 2',
    'schedule.part2.item3': '18:00 - 18:30 · Fall Fest Closing',
    'cta.preregister': '사전 등록하기',
    'cta.moreInfo': '상세 안내(노션)',
    'venue.title': '장소',
    'venue.address':
      '<strong>부산대학교 제6공학관(컴퓨터공학관)</strong><br />부산광역시 금정구 부산대학로63번길 2 (장전동)',
    'venue.note': '세부 호실/입장 동선은 행사 전 참가자 안내 메일로 공지됩니다.',
    'faq.title': 'FAQ',
    'faq.q1': '비전공자도 참여 가능한가요?',
    'faq.a1': '네. 사전 자료를 제공하고, 실습은 튜터가 함께 돕습니다.',
    'faq.q2': '참가비가 있나요?',
    'faq.a2': '무료입니다. 사전 등록만 해주세요.',
    'faq.q3': '무엇을 설치해야 하나요?',
    'faq.a3': 'Python 3.10+과 최신 Qiskit. 자세한 가이드는 노션 페이지에서 안내합니다.',
    'faq.q4': '팀을 미리 구성해야 하나요?',
    'faq.a4': '필수는 아니며, 현장에서도 매칭을 도와드립니다.',
    'footer.copy': '© 2025 QICB · Quantum Information Club in Busan',
    'footer.email': '이메일 문의',
    'footer.github': 'GitHub',
    'scrollTop.aria': '맨 위로 이동',
    'language.button.aria': '언어 변경',
    'language.menu.aria': '언어 선택',
    'language.option.ko': '한국어 (KR)',
    'language.option.en': '영어 (EN)',
    'meta.title': 'QICB Fall Fest 2025 | 부산',
    'meta.description': 'QICB가 주최하는 Qiskit Fall Fest 2025 - 부산. 해커톤·세미나·워크숍을 통해 양자 컴퓨팅을 함께 배웁니다.',
    'meta.ogTitle': 'QICB Fall Fest 2025 | 부산',
    'meta.ogDescription': '양자 컴퓨팅을 함께 배우는 해커톤/세션. 지금 등록하세요!',
    'meta.ogLocale': 'ko_KR'
  },
  en: {
    'brand.name': 'QICB Fall Fest 2025 @ PNU',
    'brand.homeAria': 'Go to QICB home',
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.venue': 'Venue',
    'nav.faq': 'FAQ',
    'nav.register': 'Register Now',
    'nav.toggle': 'Open main menu',
    'hero.date': 'Nov 21, 2025 (Fri) · Pusan National University',
    'hero.kpi.sessions': '⏱️ Sessions & Labs',
    'hero.kpi.handsOn': '🧪 Qiskit Hands-on',
    'hero.kpi.challenge': '🏆 Mini Challenge',
    'hero.kpi.networking': '👥 Networking',
    'about.title': 'About the Event',
    'about.description':
      '<strong>Qiskit Fall Fest 2025 @ PNU</strong> is hosted by <strong>QICB (Quantum Information Club in Busan)</strong> as part of the global Fall Fest program by <strong>IBM Quantum</strong>. It welcomes newcomers to quantum computing and offers talks, hands-on labs, and networking opportunities to learn together.',
    'about.audience': '<strong>Who:</strong> Students and enthusiasts across CS, physics, math, and beyond',
    'about.requirements': '<strong>What to bring:</strong> Laptop, GitHub account, basic Python setup',
    'about.level': '<strong>Level:</strong> Beginner–intro (prep materials provided)',
    'schedule.title': 'Schedule (TBD)',
    'schedule.part1.title': 'Hands-on & Mini Hack',
    'schedule.part1.item1': '10:00 - 10:30 · Fall Fest Opening',
    'schedule.part1.item2': '10:30 - 11:30 · Guest speaker session',
    'schedule.part1.item3': '13:00 - 14:00 · Qiskit Fundamental Lab',
    'schedule.part1.item4': '14:00 - 16:00 · Mini Hack',
    'schedule.part2.title': 'Workshops',
    'schedule.part2.item1': '16:00 - 17:00 · Workshop 1',
    'schedule.part2.item2': '17:00 - 18:00 · Workshop 2',
    'schedule.part2.item3': '18:00 - 18:30 · Fall Fest Closing',
    'cta.preregister': 'Pre-register',
    'cta.moreInfo': 'More info (Notion)',
    'venue.title': 'Venue',
    'venue.address':
      '<strong>Pusan National University, Engineering Building 6 (Computer Engineering)</strong><br />2, Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan',
    'venue.note': 'Room details and entry guidance will be emailed to participants before the event.',
    'faq.title': 'FAQ',
    'faq.q1': 'Can non-majors participate?',
    'faq.a1': 'Yes! Prep materials are shared and tutors will support you during the labs.',
    'faq.q2': 'Is there a participation fee?',
    'faq.a2': 'No, it’s free. Just make sure to register in advance.',
    'faq.q3': 'What should I install beforehand?',
    'faq.a3': 'Install Python 3.10+ and the latest Qiskit. Detailed setup guides are on the Notion page.',
    'faq.q4': 'Do I need a team beforehand?',
    'faq.a4': 'Teams are optional—we can help you form one on-site.',
    'footer.copy': '© 2025 QICB · Quantum Information Club in Busan',
    'footer.email': 'Email us',
    'footer.github': 'GitHub',
    'scrollTop.aria': 'Back to top',
    'language.button.aria': 'Change language',
    'language.menu.aria': 'Select language',
    'language.option.ko': 'Korean (KR)',
    'language.option.en': 'English (EN)',
    'meta.title': 'QICB Fall Fest 2025 | Busan',
    'meta.description': 'Join the Qiskit Fall Fest 2025 in Busan hosted by QICB with hackathons, talks, and workshops to learn quantum computing.',
    'meta.ogTitle': 'QICB Fall Fest 2025 | Busan',
    'meta.ogDescription': 'Learn quantum computing together through sessions, hands-on labs, and networking—register now!',
    'meta.ogLocale': 'en_US'
  }
};

const getInitialLanguage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    // Storage access may be blocked; ignore and fall back to document language.
  }

  const documentLanguage = document.documentElement.getAttribute('lang');
  if (documentLanguage && translations[documentLanguage]) {
    return documentLanguage;
  }

  const shortLang = documentLanguage?.slice(0, 2);
  if (shortLang && translations[shortLang]) {
    return shortLang;
  }

  return 'ko';
};

let currentLanguage = 'ko';

const updateLanguageUI = (lang) => {
  const dropdown = document.querySelector('.language-dropdown');
  if (!dropdown) {
    return;
  }

  const button = dropdown.querySelector('.language-button');
  const flagElement = button?.querySelector('.language-flag');
  const codeElement = button?.querySelector('.language-code');
  const config = LANGUAGE_OPTIONS[lang];

  if (button && config) {
    button.dataset.lang = lang;
    if (flagElement) {
      flagElement.textContent = config.flag;
    }
    if (codeElement) {
      codeElement.textContent = config.code;
    }
  }

  dropdown.querySelectorAll('.language-option').forEach((option) => {
    const optionLang = option.dataset.lang;
    const isActive = optionLang === lang;
    option.setAttribute('aria-checked', String(isActive));
    if (isActive) {
      option.setAttribute('aria-current', 'true');
    } else {
      option.removeAttribute('aria-current');
    }
  });
};

const applyTranslations = (lang) => {
  const dictionary = translations[lang];
  if (!dictionary) {
    return;
  }

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key];

    if (value === undefined) {
      return;
    }

    const type = element.dataset.i18nType || 'text';
    if (type === 'html') {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const value = dictionary[key];

    if (value === undefined) {
      return;
    }

    element.setAttribute('aria-label', value);
  });

  const pageTitle = dictionary['meta.title'];
  if (pageTitle) {
    document.title = pageTitle;
  }

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dictionary['meta.description']) {
    metaDescription.setAttribute('content', dictionary['meta.description']);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && dictionary['meta.ogTitle']) {
    ogTitle.setAttribute('content', dictionary['meta.ogTitle']);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && dictionary['meta.ogDescription']) {
    ogDescription.setAttribute('content', dictionary['meta.ogDescription']);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale && dictionary['meta.ogLocale']) {
    ogLocale.setAttribute('content', dictionary['meta.ogLocale']);
  }
};

const setLanguage = (lang, { persist = true } = {}) => {
  if (!translations[lang]) {
    return;
  }

  currentLanguage = lang;

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (error) {
      // Ignore storage errors (e.g., in private mode).
    }
  }

  applyTranslations(lang);
  updateLanguageUI(lang);
};

const setupLanguageDropdown = () => {
  const dropdown = document.querySelector('.language-dropdown');
  const button = dropdown?.querySelector('.language-button');
  const menu = dropdown?.querySelector('.language-menu');

  if (!dropdown || !button || !menu) {
    return;
  }

  const options = Array.from(menu.querySelectorAll('.language-option'));

  const handleDocumentClick = (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  };

  const handleDocumentKeydown = (event) => {
    if (event.key === 'Escape') {
      closeDropdown({ returnFocus: true });
    }
  };

  const closeDropdown = ({ returnFocus = false } = {}) => {
    if (dropdown.getAttribute('data-open') !== 'true') {
      return;
    }

    dropdown.setAttribute('data-open', 'false');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.removeEventListener('click', handleDocumentClick);
    document.removeEventListener('keydown', handleDocumentKeydown);

    if (returnFocus) {
      button.focus();
    }
  };

  const openDropdown = () => {
    if (dropdown.getAttribute('data-open') === 'true') {
      return;
    }

    dropdown.setAttribute('data-open', 'true');
    button.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleDocumentKeydown);

    const activeOption = menu.querySelector('.language-option[aria-checked="true"]') || options[0];
    activeOption?.focus();
  };

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const isOpen = dropdown.getAttribute('data-open') === 'true';
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDropdown();
    }
  });

  menu.addEventListener('click', (event) => {
    const option = event.target.closest('.language-option');
    if (!option) {
      return;
    }

    const lang = option.dataset.lang;
    if (lang) {
      setLanguage(lang);
    }

    closeDropdown({ returnFocus: true });
  });

  menu.addEventListener('keydown', (event) => {
    const focusable = options;
    const currentIndex = focusable.indexOf(document.activeElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % focusable.length;
      focusable[nextIndex]?.focus();
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + focusable.length) % focusable.length;
      focusable[prevIndex]?.focus();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      focusable[0]?.focus();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      focusable[focusable.length - 1]?.focus();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const activeLang = document.activeElement?.dataset?.lang;
      if (activeLang) {
        setLanguage(activeLang);
      }
      closeDropdown({ returnFocus: true });
      return;
    }

    if (event.key === 'Escape') {
      closeDropdown({ returnFocus: true });
    }
  });

  dropdown.setAttribute('data-open', 'false');
  button.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');

  updateLanguageUI(currentLanguage);
};

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
  const initialLanguage = getInitialLanguage();
  setLanguage(initialLanguage, { persist: false });
  setupLanguageDropdown();
  enableSmoothScroll();
  setupNavMenu();
  setupScrollTopButton();
});