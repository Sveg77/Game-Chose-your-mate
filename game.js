(function () {
  "use strict";

  /** Узнаваемые силуэты в стиле логотипа + подписи для скринридеров */
  /** @type {{ id: number; a11yName: string; svg: string }[]} */
  const PAIRS = [
    {
      id: 1,
      a11yName: "лак для ногтей",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<rect x="23" y="15" width="18" height="11" rx="3.5" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" d="M27 26v5h10v-5"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linejoin="round" d="M24 31h16v8a8 8 0 0 1-16 0v-8z"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.45" d="M28 36h8"/>' +
        "</svg>",
    },
    {
      id: 2,
      a11yName: "краска для волос, тюбик",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M20 26v12M22 24v16M24 22v20"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linejoin="round" d="M26 22l20 4 4 14-22 6-12-10 10-14z"/>' +
        '<path stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.5" d="M34 28l10 2"/>' +
        "</svg>",
    },
    {
      id: 3,
      a11yName: "UV-лампа",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linejoin="round" d="M16 46h32v6H16z"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M16 46Q32 14 48 46"/>' +
        '<circle cx="24" cy="38" r="1.8" fill="currentColor"/><circle cx="30" cy="32" r="1.8" fill="currentColor"/>' +
        '<circle cx="32" cy="28" r="1.8" fill="currentColor"/><circle cx="34" cy="32" r="1.8" fill="currentColor"/>' +
        '<circle cx="40" cy="38" r="1.8" fill="currentColor"/>' +
        "</svg>",
    },
    {
      id: 4,
      a11yName: "расчёска",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<rect x="18" y="22" width="10" height="20" rx="2" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M28 24h18M28 29h20M28 34h20M28 39h20M28 44h18"/>' +
        "</svg>",
    },
    {
      id: 5,
      a11yName: "фен",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<circle cx="27" cy="31" r="10.5" stroke="currentColor" stroke-width="1.65"/>' +
        '<rect x="37.5" y="25" width="14.5" height="12" rx="2.5" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M24 40Q20 48 22 52"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.45" d="M46 30h6M46 33h8M46 36h6"/>' +
        "</svg>",
    },
    {
      id: 6,
      a11yName: "парикмахерские ножницы",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<circle cx="23" cy="44" r="5.5" stroke="currentColor" stroke-width="1.65"/>' +
        '<circle cx="41" cy="44" r="5.5" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M23 40L33 22M41 40L31 22"/>' +
        '<circle cx="32" cy="21" r="2.8" stroke="currentColor" stroke-width="1.5"/>' +
        "</svg>",
    },
    {
      id: 7,
      a11yName: "ручное зеркало",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<ellipse cx="32" cy="26" rx="13" ry="17" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M32 43v14"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M27 57h10"/>' +
        '<ellipse cx="32" cy="26" rx="9" ry="12" stroke="currentColor" stroke-width="1.35" opacity="0.45"/>' +
        "</svg>",
    },
    {
      id: 8,
      a11yName: "кисть для макияжа",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linejoin="round" d="M24 20h16l-8 14-8-14z"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M26 18h12"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M32 34v22"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M27 56h10"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.4" d="M28 24l4 8 4-8"/>' +
        "</svg>",
    },
  ];

  function labelClosed() {
    return "Закрытая карточка";
  }

  function labelOpen(name) {
    return 'Открыта: знак «' + name + '». Найдите такую же карточку.';
  }

  function labelMatched(name) {
    return 'Пара собрана: «' + name + '».';
  }

  const monogramMark = `<svg class="card__monogram" viewBox="0 0 64 64" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M32 18v28M22 26l10 6 10-6M22 38l10-6 10 6"/></svg>`;

  const board = document.getElementById("board");
  const timerEl = document.getElementById("timer");
  const movesEl = document.getElementById("moves");
  const hintEl = document.getElementById("hint");
  const btnRestart = document.getElementById("btn-restart");
  const winModal = document.getElementById("win-modal");
  const winTime = document.getElementById("win-time");
  const winMoves = document.getElementById("win-moves");
  const btnPlayAgain = document.getElementById("btn-play-again");

  let cards = [];
  let flipped = [];
  let lock = false;
  let moves = 0;
  let matched = 0;
  let seconds = 0;
  let timerId = null;
  let started = false;

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function stopTimer() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startTimer() {
    if (started) return;
    started = true;
    timerId = window.setInterval(function () {
      seconds += 1;
      timerEl.textContent = formatTime(seconds);
    }, 1000);
  }

  function updateMoves() {
    movesEl.textContent = String(moves);
  }

  function openWinModal() {
    stopTimer();
    winTime.textContent = formatTime(seconds);
    winMoves.textContent = String(moves);
    winModal.hidden = false;
    winModal.setAttribute("aria-hidden", "false");
    btnPlayAgain.focus();
  }

  function closeWinModal() {
    winModal.hidden = true;
    winModal.setAttribute("aria-hidden", "true");
  }

  function buildDeck() {
    const deck = [];
    PAIRS.forEach(function (p) {
      const card = { pairId: p.id, svg: p.svg, a11yName: p.a11yName };
      deck.push(card);
      deck.push({ pairId: card.pairId, svg: card.svg, a11yName: card.a11yName });
    });
    return shuffle(deck);
  }

  function renderBoard() {
    board.innerHTML = "";
    cards.forEach(function (item, index) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "card";
      btn.dataset.index = String(index);
      btn.setAttribute("aria-label", labelClosed());
      btn.innerHTML =
        '<span class="card__inner">' +
        '<span class="card__face card__face--back">' +
        monogramMark +
        "</span>" +
        '<span class="card__face card__face--front">' +
        item.svg +
        "</span>" +
        "</span>";
      btn.addEventListener("click", onCardClick);
      board.appendChild(btn);
    });
  }

  function onCardClick(ev) {
    const btn = ev.currentTarget;
    const index = Number(btn.dataset.index);
    if (lock || btn.classList.contains("is-flipped") || btn.classList.contains("is-matched")) {
      return;
    }
    startTimer();
    btn.classList.add("is-flipped");
    btn.setAttribute("aria-label", labelOpen(cards[index].a11yName));
    flipped.push({ index: index, el: btn, pairId: cards[index].pairId, a11yName: cards[index].a11yName });

    if (flipped.length < 2) return;

    lock = true;
    moves += 1;
    updateMoves();

    const a = flipped[0];
    const b = flipped[1];

    if (a.pairId === b.pairId) {
      const matchedName = a.a11yName;
      window.setTimeout(function () {
        a.el.classList.add("is-matched");
        b.el.classList.add("is-matched");
        a.el.setAttribute("aria-label", labelMatched(matchedName));
        b.el.setAttribute("aria-label", labelMatched(matchedName));
        flipped = [];
        lock = false;
        matched += 1;
        if (matched === PAIRS.length) {
          hintEl.textContent = "Идеально. До встречи в салоне.";
          openWinModal();
        }
      }, 380);
    } else {
      window.setTimeout(function () {
        a.el.classList.remove("is-flipped");
        b.el.classList.remove("is-flipped");
        a.el.setAttribute("aria-label", labelClosed());
        b.el.setAttribute("aria-label", labelClosed());
        flipped = [];
        lock = false;
      }, 700);
    }
  }

  function resetGame() {
    stopTimer();
    seconds = 0;
    moves = 0;
    matched = 0;
    started = false;
    flipped = [];
    lock = false;
    timerEl.textContent = "0:00";
    updateMoves();
    hintEl.textContent = "Переворачивайте карточки и соберите все пары.";
    closeWinModal();
    cards = buildDeck();
    renderBoard();
  }

  btnRestart.addEventListener("click", resetGame);
  btnPlayAgain.addEventListener("click", resetGame);

  winModal.addEventListener("click", function (ev) {
    if (ev.target && ev.target.getAttribute("data-close") !== null) {
      closeWinModal();
    }
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !winModal.hidden) {
      closeWinModal();
    }
  });

  cards = buildDeck();
  renderBoard();
})();
