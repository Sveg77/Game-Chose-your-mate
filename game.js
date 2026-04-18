(function () {
  "use strict";

  /** Лак, краска, UV, расчёска, фен, ножницы, зеркало, кисть — стилизованные «логотипы», не буквальные предметы */
  /** @type {{ id: number; svg: string }[]} */
  const PAIRS = [
    {
      id: 1,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M22 40c2-14 10-22 20-20 6 1 10 8 9 16"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M20 42c4 4 10 5 16 2"/>' +
        '<circle cx="19" cy="43" r="2.2" fill="currentColor" stroke="none"/>' +
        "</svg>",
    },
    {
      id: 2,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<circle cx="27" cy="32" r="9.5" stroke="currentColor" stroke-width="1.65" fill="none"/>' +
        '<circle cx="37" cy="32" r="9.5" stroke="currentColor" stroke-width="1.65" fill="none"/>' +
        '<path stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.42" d="M23 42c5 3 13 3 18 0"/>' +
        "</svg>",
    },
    {
      id: 3,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M18 42a14 14 0 0 1 28 0"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.45" d="M22 34v6M28 30v10M32 28v12M36 30v10M42 34v6"/>' +
        '<circle cx="22" cy="26" r="1.35" fill="currentColor"/><circle cx="28" cy="22" r="1.35" fill="currentColor"/>' +
        '<circle cx="32" cy="20" r="1.35" fill="currentColor"/><circle cx="36" cy="22" r="1.35" fill="currentColor"/>' +
        '<circle cx="42" cy="26" r="1.35" fill="currentColor"/>' +
        "</svg>",
    },
    {
      id: 4,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M21 24h22"/>' +
        '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M23 24v17M27 24v17M31 24v17M35 24v17M39 24v17"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.38" d="M20 41h24"/>' +
        "</svg>",
    },
    {
      id: 5,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<circle cx="26" cy="32" r="11" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M40 24c9 3 9 13 0 16"/>' +
        '<path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5" d="M42 28l10-3M42 32h12M42 36l10 3"/>' +
        "</svg>",
    },
    {
      id: 6,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M26 20L38 44M38 20L26 44"/>' +
        '<circle cx="32" cy="32" r="3.5" stroke="currentColor" stroke-width="1.5"/>' +
        "</svg>",
    },
    {
      id: 7,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<ellipse cx="32" cy="32" rx="15" ry="19" stroke="currentColor" stroke-width="1.5"/>' +
        '<ellipse cx="32" cy="32" rx="10" ry="13" stroke="currentColor" stroke-width="1.35" opacity="0.5"/>' +
        '<path stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.35" d="M28 30h8M30 34h4"/>' +
        "</svg>",
    },
    {
      id: 8,
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M32 46L22 28"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M32 46L42 28"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M32 46L32 26"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M26 22h12"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.45" d="M24 32h16"/>' +
        "</svg>",
    },
  ];

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
      deck.push({ pairId: p.id, svg: p.svg });
      deck.push({ pairId: p.id, svg: p.svg });
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
      btn.setAttribute("aria-label", "Закрытая карточка");
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
    btn.setAttribute("aria-label", "Открытая карточка");
    flipped.push({ index: index, el: btn, pairId: cards[index].pairId });

    if (flipped.length < 2) return;

    lock = true;
    moves += 1;
    updateMoves();

    const a = flipped[0];
    const b = flipped[1];

    if (a.pairId === b.pairId) {
      window.setTimeout(function () {
        a.el.classList.add("is-matched");
        b.el.classList.add("is-matched");
        a.el.setAttribute("aria-label", "Найденная пара");
        b.el.setAttribute("aria-label", "Найденная пара");
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
        a.el.setAttribute("aria-label", "Закрытая карточка");
        b.el.setAttribute("aria-label", "Закрытая карточка");
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
