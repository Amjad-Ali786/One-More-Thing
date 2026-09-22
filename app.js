/**
 * One More Thing - Niche Knowledge Explorer & Application Engine
 * Focused Single Card Research Explorer with REST API Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Category Color Mapping ---
  const CATEGORY_COLORS = {
    'Design': '#f59e0b',
    'Philosophy': '#8b5cf6',
    'Ethics': '#10b981',
    'Morals': '#06b6d4',
    'Cars': '#ef4444',
    'Psychology': '#ec4899',
    'Art Movements': '#3b82f6',
    'Art Styles': '#d946ef',
    'Taste & Discovery': '#e11d48'
  };

  // --- State Variables ---
  let TOPICS_DATA = [];
  let isLoadingAPI = false;
  let currentCategory = 'All';
  let currentTopic = null;
  let bookmarks = JSON.parse(localStorage.getItem('onemorething_bookmarks') || localStorage.getItem('curiospire_bookmarks') || '[]');
  let synth = window.speechSynthesis || null;
  let currentUtterance = null;
  let isSpeaking = false;
  let audioCtx = null;
  let wheelTimeout = null;

  // --- DOM Elements ---
  const topicCard = document.getElementById('topicCard');
  const badgeCategory = document.getElementById('badgeCategory');
  const badgeDepth = document.getElementById('badgeDepth');
  const topicIdTag = document.getElementById('topicIdTag');
  const topicTitle = document.getElementById('topicTitle');
  const topicSubtitle = document.getElementById('topicSubtitle');
  const topicQuote = document.getElementById('topicQuote');
  const topicSummary = document.getElementById('topicSummary');
  const sourcesList = document.getElementById('sourcesList');

  const btnPillScrollLeft = document.getElementById('btnPillScrollLeft');
  const btnPillScrollRight = document.getElementById('btnPillScrollRight');

  const btnRandomize = document.getElementById('btnRandomize');
  const btnListen = document.getElementById('btnListen');
  const listenBtnText = document.getElementById('listenBtnText');
  const btnBookmark = document.getElementById('btnBookmark');
  const bookmarkBtnText = document.getElementById('bookmarkBtnText');
  const btnCopyCitation = document.getElementById('btnCopyCitation');

  const pillsContainer = document.getElementById('pillsContainer');
  const brandIcon = document.getElementById('brandIcon');
  const brandLogoLink = document.getElementById('brandLogoLink');

  const btnDirectoryDrawer = document.getElementById('btnDirectoryDrawer');
  const btnCloseDirectory = document.getElementById('btnCloseDirectory');
  const directoryModal = document.getElementById('directoryModal');
  const directorySearchInput = document.getElementById('directorySearchInput');
  const directoryList = document.getElementById('directoryList');
  const btnScrollTop = document.getElementById('btnScrollTop');
  const btnScrollBottom = document.getElementById('btnScrollBottom');

  const btnFirstTopic = document.getElementById('btnFirstTopic');
  const btnPrevTopic = document.getElementById('btnPrevTopic');
  const btnNextTopic = document.getElementById('btnNextTopic');
  const btnLastTopic = document.getElementById('btnLastTopic');

  const btnBookmarksDrawer = document.getElementById('btnBookmarksDrawer');
  const btnCloseBookmarks = document.getElementById('btnCloseBookmarks');
  const bookmarksModal = document.getElementById('bookmarksModal');
  const bookmarksList = document.getElementById('bookmarksList');
  const bookmarkCount = document.getElementById('bookmarkCount');

  const btnThemeToggle = document.getElementById('btnThemeToggle');
  const themeIconSun = document.getElementById('themeIconSun');
  const themeIconMoon = document.getElementById('themeIconMoon');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // --- Web Audio Synthesizer for UI Feedback ---
  function playUiSound(type = 'click') {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'randomize') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(640, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
      } else if (type === 'bookmark') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  // --- Toast Notification Helper ---
  function showToast(message) {
    toastMessage.textContent = message;
    toastNotification.classList.add('active');
    setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 2800);
  }

  // --- Current Active Category Pool ---
  function getActivePool() {
    if (currentCategory === 'All') return TOPICS_DATA;
    return TOPICS_DATA.filter(t => t.category === currentCategory);
  }

  // --- Display Topic in Card View ---
  function displayTopic(topic) {
    if (!topic) return;
    currentTopic = topic;

    // Stop speaking if active
    stopAudio();

    // Add shuffle transition class
    topicCard.classList.add('shuffling');

    setTimeout(() => {
      // Update theme accent colors based on category
      const themeColor = CATEGORY_COLORS[topic.category] || '#8b5cf6';
      document.documentElement.style.setProperty('--current-cat-color', themeColor);

      // Populate text contents
      badgeCategory.textContent = topic.category;
      badgeDepth.textContent = topic.depth || 'Academic Deep Dive';
      topicIdTag.textContent = `#${topic.id}`;
      topicTitle.textContent = topic.title;
      topicSubtitle.textContent = topic.subtitle;
      topicQuote.textContent = `“${topic.keyTakeaway}”`;
      topicSummary.textContent = topic.summary;

      // Render Verified Sources
      sourcesList.innerHTML = '';
      if (topic.sources && topic.sources.length > 0) {
        topic.sources.forEach(src => {
          const li = document.createElement('li');
          li.className = 'source-item-wrap';
          li.innerHTML = `
            <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-item">
              <div class="source-info">
                <span class="source-title">
                  ${src.title}
                  <span class="source-badge">${src.type || 'Source'}</span>
                </span>
                <span class="source-desc">${src.sourceName} — ${src.description}</span>
              </div>
              <svg class="source-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          `;
          sourcesList.appendChild(li);
        });
      }

      // Update Bookmark button UI
      updateBookmarkBtnState();

      // Fade card back in
      topicCard.classList.remove('shuffling');
    }, 200);
  }

  // --- Category Scroll Arrows ---
  if (btnPillScrollLeft && pillsContainer) {
    btnPillScrollLeft.addEventListener('click', () => {
      pillsContainer.scrollBy({ left: -240, behavior: 'smooth' });
    });
  }

  if (btnPillScrollRight && pillsContainer) {
    btnPillScrollRight.addEventListener('click', () => {
      pillsContainer.scrollBy({ left: 240, behavior: 'smooth' });
    });
  }

  // --- Sequential Navigation Handlers ---
  function navigateSequential(action) {
    const activePool = getActivePool();
    if (activePool.length === 0) return;

    let currentIndex = activePool.findIndex(t => t.id === currentTopic?.id);
    if (currentIndex === -1) currentIndex = 0;

    let targetIndex = currentIndex;
    if (action === 'first') {
      targetIndex = 0;
    } else if (action === 'last') {
      targetIndex = activePool.length - 1;
    } else if (action === 'next') {
      targetIndex = (currentIndex + 1) % activePool.length;
    } else if (action === 'prev') {
      targetIndex = (currentIndex - 1 + activePool.length) % activePool.length;
    }

    playUiSound('click');
    displayTopic(activePool[targetIndex]);
  }

  if (btnFirstTopic) btnFirstTopic.addEventListener('click', () => navigateSequential('first'));
  if (btnPrevTopic) btnPrevTopic.addEventListener('click', () => navigateSequential('prev'));
  if (btnNextTopic) btnNextTopic.addEventListener('click', () => navigateSequential('next'));
  if (btnLastTopic) btnLastTopic.addEventListener('click', () => navigateSequential('last'));

  // --- Mouse Wheel Topic Navigation ---
  if (topicCard) {
    topicCard.addEventListener('wheel', (e) => {
      if (wheelTimeout) return;
      if (Math.abs(e.deltaY) > 25) {
        wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 350);
        if (e.deltaY > 0) {
          navigateSequential('next');
        } else {
          navigateSequential('prev');
        }
      }
    }, { passive: true });
  }

  // --- Drawer Scroll to Top / Bottom ---
  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', () => {
      playUiSound('click');
      const drawer = directoryModal.querySelector('.modal-drawer');
      if (drawer) drawer.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnScrollBottom) {
    btnScrollBottom.addEventListener('click', () => {
      playUiSound('click');
      const drawer = directoryModal.querySelector('.modal-drawer');
      if (drawer) drawer.scrollTo({ top: drawer.scrollHeight, behavior: 'smooth' });
    });
  }

  // --- Randomize Topic Engine ---
  function randomizeTopic() {
    playUiSound('randomize');
    
    let filtered = getActivePool();
    if (filtered.length === 0) return;

    let nextTopic = filtered[Math.floor(Math.random() * filtered.length)];
    if (filtered.length > 1 && currentTopic && nextTopic.id === currentTopic.id) {
      const candidates = filtered.filter(t => t.id !== currentTopic.id);
      nextTopic = candidates[Math.floor(Math.random() * candidates.length)];
    }

    displayTopic(nextTopic);
  }

  // --- Category Filter Pills Event Handler ---
  pillsContainer.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill-btn');
    if (!pill) return;

    playUiSound('click');

    document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    currentCategory = pill.getAttribute('data-category');
    randomizeTopic();
  });

  // --- Text to Speech (TTS) ---
  function toggleAudio() {
    if (!synth) {
      showToast('Text-to-speech not supported on your browser');
      return;
    }

    if (isSpeaking) {
      stopAudio();
    } else {
      if (!currentTopic) return;
      playAudio();
    }
  }

  function playAudio() {
    synth.cancel();
    const textToRead = `${currentTopic.title}. ${currentTopic.subtitle}. ${currentTopic.summary}. Key insight: ${currentTopic.keyTakeaway}`;
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.rate = 0.95;
    currentUtterance.pitch = 1.0;

    currentUtterance.onend = () => {
      stopAudio();
    };

    currentUtterance.onerror = () => {
      stopAudio();
    };

    synth.speak(currentUtterance);
    isSpeaking = true;
    btnListen.classList.add('active-audio');
    listenBtnText.textContent = 'Stop';
  }

  function stopAudio() {
    if (synth) {
      synth.cancel();
    }
    isSpeaking = false;
    btnListen.classList.remove('active-audio');
    listenBtnText.textContent = 'Listen';
  }

  btnListen.addEventListener('click', toggleAudio);

  // --- Bookmarking Logic ---
  function updateBookmarkBtnState() {
    if (!currentTopic) return;
    const isBookmarked = bookmarks.includes(currentTopic.id);
    if (isBookmarked) {
      btnBookmark.classList.add('active-bookmark');
      bookmarkBtnText.textContent = 'Saved';
    } else {
      btnBookmark.classList.remove('active-bookmark');
      bookmarkBtnText.textContent = 'Save';
    }
    bookmarkCount.textContent = bookmarks.length;
  }

  function toggleBookmarkById(id, btnElem) {
    const index = bookmarks.indexOf(id);
    if (index > -1) {
      bookmarks.splice(index, 1);
      showToast('Removed from bookmarks');
    } else {
      bookmarks.push(id);
      playUiSound('bookmark');
      showToast('Saved to bookmarks!');
    }
    localStorage.setItem('onemorething_bookmarks', JSON.stringify(bookmarks));
    bookmarkCount.textContent = bookmarks.length;

    if (btnElem) {
      const isBookmarked = bookmarks.includes(id);
      btnElem.classList.toggle('active-bookmark', isBookmarked);
      const span = btnElem.querySelector('span');
      if (span) span.textContent = isBookmarked ? 'Saved' : 'Save';
    }

    if (currentTopic && currentTopic.id === id) {
      updateBookmarkBtnState();
    }
    renderBookmarksList();
  }

  function toggleBookmark() {
    if (!currentTopic) return;
    toggleBookmarkById(currentTopic.id, btnBookmark);
  }

  btnBookmark.addEventListener('click', toggleBookmark);

  // --- Copy Citation / Share Helper ---
  function copyCitationForTopic(topic) {
    if (!topic) return;
    playUiSound('click');

    const citationText = `One More Thing Research Topic: "${topic.title}" (${topic.category})\nSummary: ${topic.summary}\nPrimary Source: ${topic.sources && topic.sources[0] ? topic.sources[0].url : ''}`;
    
    navigator.clipboard.writeText(citationText).then(() => {
      showToast('Citation copied to clipboard!');
    }).catch(() => {
      showToast('Copied summary to clipboard');
    });
  }

  btnCopyCitation.addEventListener('click', () => {
    if (currentTopic) copyCitationForTopic(currentTopic);
  });

  // --- Directory Modal Drawer ---
  function renderDirectoryList(filterQuery = '') {
    directoryList.innerHTML = '';
    const query = filterQuery.toLowerCase().trim();

    const filtered = TOPICS_DATA.filter(t => {
      return t.title.toLowerCase().includes(query) ||
             t.category.toLowerCase().includes(query) ||
             t.subtitle.toLowerCase().includes(query) ||
             t.summary.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
      directoryList.innerHTML = '<li class="drawer-item" style="color:var(--text-muted);">No matching topics found.</li>';
      return;
    }

    if (btnScrollBottom) {
      btnScrollBottom.textContent = '⬇️ Last Topic';
    }

    filtered.forEach(topic => {
      const li = document.createElement('li');
      li.className = 'drawer-item';
      const catColor = CATEGORY_COLORS[topic.category] || '#8b5cf6';
      li.innerHTML = `
        <div class="drawer-item-cat" style="color:${catColor};">${topic.category} • ${topic.depth}</div>
        <div class="drawer-item-title">${topic.title}</div>
        <div class="drawer-item-sub">${topic.subtitle}</div>
      `;
      li.addEventListener('click', () => {
        playUiSound('click');
        displayTopic(topic);
        closeModals();
      });
      directoryList.appendChild(li);
    });
  }

  btnDirectoryDrawer.addEventListener('click', () => {
    playUiSound('click');
    renderDirectoryList();
    directoryModal.classList.add('active');
  });

  btnCloseDirectory.addEventListener('click', closeModals);

  directorySearchInput.addEventListener('input', (e) => {
    renderDirectoryList(e.target.value);
  });

  // --- Bookmarks Modal Drawer ---
  function renderBookmarksList() {
    bookmarksList.innerHTML = '';
    if (bookmarks.length === 0) {
      bookmarksList.innerHTML = '<li class="drawer-item" style="color:var(--text-muted); text-align:center;">No saved bookmarks yet. Click "Save" on any topic!</li>';
      return;
    }

    const savedTopics = TOPICS_DATA.filter(t => bookmarks.includes(t.id));
    savedTopics.forEach(topic => {
      const li = document.createElement('li');
      li.className = 'drawer-item';
      const catColor = CATEGORY_COLORS[topic.category] || '#8b5cf6';
      li.innerHTML = `
        <div class="drawer-item-cat" style="color:${catColor};">${topic.category}</div>
        <div class="drawer-item-title">${topic.title}</div>
        <div class="drawer-item-sub">${topic.subtitle}</div>
      `;
      li.addEventListener('click', () => {
        playUiSound('click');
        displayTopic(topic);
        closeModals();
      });
      bookmarksList.appendChild(li);
    });
  }

  btnBookmarksDrawer.addEventListener('click', () => {
    playUiSound('click');
    renderBookmarksList();
    bookmarksModal.classList.add('active');
  });

  btnCloseBookmarks.addEventListener('click', closeModals);

  function closeModals() {
    directoryModal.classList.remove('active');
    bookmarksModal.classList.remove('active');
  }

  [directoryModal, bookmarksModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModals();
      }
    });
  });

  // --- Theme Toggle (Dark/Light) ---
  function toggleTheme() {
    playUiSound('click');
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIconSun.style.display = isLight ? 'block' : 'none';
    themeIconMoon.style.display = isLight ? 'none' : 'block';
    localStorage.setItem('onemorething_theme', isLight ? 'light' : 'dark');
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
    const savedTheme = localStorage.getItem('onemorething_theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      themeIconSun.style.display = 'block';
      themeIconMoon.style.display = 'none';
    }
  }

  // --- Dynamic API Topics Engine ---
  async function loadTopicsFromAPI() {
    if (isLoadingAPI) return;
    isLoadingAPI = true;

    if (topicTitle) topicTitle.textContent = 'Loading Topics...';
    if (topicSubtitle) topicSubtitle.textContent = 'Fetching niche research topics via API';

    try {
      const response = await fetch('api/topics.json');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const rawData = await response.json();
      TOPICS_DATA = Array.isArray(rawData) ? rawData : (rawData.value || []);
      isLoadingAPI = false;
      
      // Render initial topic once API payload is loaded
      randomizeTopic();
    } catch (err) {
      console.error('Failed to load topics API:', err);
      isLoadingAPI = false;
      showToast('Retrying API topic loader...');
      setTimeout(loadTopicsFromAPI, 1500);
    }
  }

  // --- Keyboard Shortcuts ---
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space' || e.code === 'KeyR') {
      e.preventDefault();
      randomizeTopic();
    } else if (e.code === 'KeyB') {
      e.preventDefault();
      toggleBookmark();
    } else if (e.code === 'KeyS') {
      e.preventDefault();
      toggleAudio();
    } else if (e.code === 'Escape') {
      closeModals();
    }
  });

  // --- Initialize Application ---
  btnRandomize.addEventListener('click', randomizeTopic);
  
  // Asynchronously fetch topics via REST JSON API on load
  loadTopicsFromAPI();
});
