(function () {
  "use strict";

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
    {
      id: 9,
      a11yName: "пилка для ногтей",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M22 42L42 22"/>' +
        '<path stroke="currentColor" stroke-width="1.35" stroke-linecap="round" opacity="0.5" d="M24 40l4-4M30 34l4-4M36 28l4-4"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M40 20h6v6"/>' +
        "</svg>",
    },
    {
      id: 10,
      a11yName: "спрей / дозатор",
      svg:
        '<svg class="card__icon card__icon--line" viewBox="0 0 64 64" fill="none" aria-hidden="true">' +
        '<rect x="24" y="22" width="16" height="22" rx="4" stroke="currentColor" stroke-width="1.65"/>' +
        '<path stroke="currentColor" stroke-width="1.65" stroke-linecap="round" d="M28 22v-6h8v6"/>' +
        '<circle cx="32" cy="34" r="4" stroke="currentColor" stroke-width="1.4"/>' +
        '<path stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.45" d="M27 40h10"/>' +
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

  const monogramMark =
    '<svg class="card__monogram" viewBox="0 0 64 64" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.2" d="M32 18v28M22 26l10 6 10-6M22 38l10-6 10 6"/></svg>';

  function pairsForLevel(level) {
    if (level <= 1) return 2;
    if (level === 2) return 4;
    if (level === 3) return 6;
    if (level === 4) return 8;
    return 10;
  }

  function timeLimitForLevel(level) {
    if (level < 6) return null;
    return Math.max(30, 90 - (level - 6) * 8);
  }

  function flipBackMs(level) {
    const base = 700;
    if (level < 6) return base;
    return Math.max(420, base - (level - 5) * 38);
  }

  function scoreMultiplier(level) {
    if (level < 6) return 0;
    return 1 + (level - 6) * 0.12;
  }

  function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function randInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  const board = document.getElementById("board");
  const boardWrap = document.getElementById("board-wrap");
  const boardScale = document.getElementById("board-scale");
  const timerEl = document.getElementById("timer");
  const movesEl = document.getElementById("moves");
  const hintEl = document.getElementById("hint");
  const levelNumEl = document.getElementById("level-num");
  const scoreTotalEl = document.getElementById("score-total");
  const statScoreWrap = document.getElementById("stat-score-wrap");
  const timeBar = document.getElementById("time-bar");
  const countdownDisplay = document.getElementById("countdown-display");
  const timeBarFill = document.getElementById("time-bar-fill");
  const timeBarProgress = document.getElementById("time-bar-progress");
  const btnRestart = document.getElementById("btn-restart");
  const btnRestartLevel = document.getElementById("btn-restart-level");
  const footerLevelNum = document.getElementById("footer-level-num");
  const winModal = document.getElementById("win-modal");
  const winTitle = document.getElementById("win-title");
  const winEyebrow = document.getElementById("win-eyebrow");
  const winLead = document.getElementById("win-lead");
  const winTime = document.getElementById("win-time");
  const winMoves = document.getElementById("win-moves");
  const winScoreRow = document.getElementById("win-stat-score-row");
  const winScore = document.getElementById("win-score");
  const btnNextLevel = document.getElementById("btn-next-level");
  const btnPlayAgain = document.getElementById("btn-play-again");
  const timeoutModal = document.getElementById("timeout-modal");
  const btnRetryLevel = document.getElementById("btn-retry-level");
  const btnTimeoutHome = document.getElementById("btn-timeout-home");
  const modeSolo = document.getElementById("mode-solo");
  const modeBot = document.getElementById("mode-bot");
  const botHud = document.getElementById("bot-hud");
  const scoreHumanPairsEl = document.getElementById("score-human-pairs");
  const scoreBotPairsEl = document.getElementById("score-bot-pairs");
  const turnHintEl = document.getElementById("turn-hint");
  const difficultyDetails = document.getElementById("difficulty-details");

  let level = 1;
  let gameMode = "solo";
  let cards = [];
  let flipped = [];
  let lock = false;
  let moves = 0;
  let matched = 0;
  let seconds = 0;
  let timerId = null;
  let started = false;
  let timeLeft = 0;
  let timeMax = 0;
  let countdownId = null;
  let totalScore = 0;
  let levelRoundScore = 0;
  let currentPlayer = "human";
  let humanPairs = 0;
  let botPairs = 0;
  /** @type {Map<number, Set<number>>} */
  let botMemory = new Map();
  let botBusy = false;
  let gameOver = false;
  let boardFitTimer = null;

  function scheduleAdjustBoardFit() {
    if (boardFitTimer !== null) {
      clearTimeout(boardFitTimer);
    }
    boardFitTimer = window.setTimeout(function () {
      boardFitTimer = null;
      adjustBoardFit();
    }, 50);
  }

  function adjustBoardFit() {
    if (!boardWrap || !boardScale || !board) {
      return;
    }
    boardScale.style.transform = "";
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        if (!boardWrap || !boardScale || !board) {
          return;
        }
        var mw = boardWrap.clientWidth;
        var mh = boardWrap.clientHeight;
        if (mh < 40 || mw < 40) {
          return;
        }
        var w = board.offsetWidth || 1;
        var h = board.offsetHeight || 1;
        var s = Math.min(1, (mw * 0.97) / w, (mh * 0.97) / h);
        if (s < 0.24) {
          s = 0.24;
        }
        boardScale.style.transformOrigin = "top center";
        boardScale.style.transform = "scale(" + s + ")";
      });
    });
  }

  function stopTimer() {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function stopCountdown() {
    if (countdownId !== null) {
      clearInterval(countdownId);
      countdownId = null;
    }
  }

  function startElapsedTimer() {
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

  function updateLevelUi() {
    if (levelNumEl) levelNumEl.textContent = String(level);
    if (footerLevelNum) footerLevelNum.textContent = String(level);
    const lim = timeLimitForLevel(level);
    if (lim !== null) {
      if (timeBar) timeBar.hidden = false;
      if (statScoreWrap) statScoreWrap.hidden = false;
      if (difficultyDetails) difficultyDetails.hidden = false;
    } else {
      if (timeBar) timeBar.hidden = true;
      if (statScoreWrap) statScoreWrap.hidden = true;
      if (difficultyDetails) difficultyDetails.hidden = true;
    }
    if (scoreTotalEl) scoreTotalEl.textContent = String(totalScore);
  }

  function setProgressBar() {
    if (timeMax <= 0 || !timeBarFill || !countdownDisplay) return;
    const pct = Math.max(0, Math.min(100, (timeLeft / timeMax) * 100));
    timeBarFill.style.width = pct + "%";
    countdownDisplay.textContent = formatTime(timeLeft);
    if (timeBarProgress) {
      timeBarProgress.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
  }

  function startCountdown() {
    stopCountdown();
    const lim = timeLimitForLevel(level);
    if (lim === null) return;
    timeMax = lim;
    timeLeft = lim;
    setProgressBar();
    countdownId = window.setInterval(function () {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        timeLeft = 0;
        setProgressBar();
        stopCountdown();
        onTimeUp();
        return;
      }
      setProgressBar();
    }, 1000);
  }

  function closeWinModal() {
    if (!winModal) return;
    winModal.hidden = true;
    winModal.setAttribute("aria-hidden", "true");
  }

  function closeTimeoutModal() {
    if (!timeoutModal) return;
    timeoutModal.hidden = true;
    timeoutModal.setAttribute("aria-hidden", "true");
  }

  function openTimeoutModal() {
    stopTimer();
    stopCountdown();
    gameOver = true;
    lock = true;
    if (!board) {
      if (timeoutModal) {
        timeoutModal.hidden = false;
        timeoutModal.setAttribute("aria-hidden", "false");
      }
      if (btnRetryLevel) btnRetryLevel.focus();
      return;
    }
    board.querySelectorAll(".card.is-flipped:not(.is-matched)").forEach(function (el) {
      el.classList.remove("is-flipped");
      el.setAttribute("aria-label", labelClosed());
    });
    flipped = [];
    if (timeoutModal) {
      timeoutModal.hidden = false;
      timeoutModal.setAttribute("aria-hidden", "false");
    }
    if (btnRetryLevel) btnRetryLevel.focus();
  }

  function buildDeck(pairCount) {
    const deck = [];
    const slice = PAIRS.slice(0, pairCount);
    slice.forEach(function (p) {
      const c = { pairId: p.id, svg: p.svg, a11yName: p.a11yName };
      deck.push(c);
      deck.push({ pairId: c.pairId, svg: c.svg, a11yName: c.a11yName });
    });
    return shuffle(deck);
  }

  function gridColsForCount(n) {
    if (n <= 4) return 2;
    if (n <= 12) return 4;
    if (n === 16) return 4;
    return 5;
  }

  function getCardEl(i) {
    if (!board) return null;
    return board.querySelector('[data-index="' + i + '"]');
  }

  function clearBoardActive() {
    board.classList.remove("board--bot-turn", "board--blocked");
  }

  function setTurnUi() {
    if (gameMode !== "bot") {
      turnHintEl.textContent = "";
      clearBoardActive();
      return;
    }
    botHud.hidden = false;
    scoreHumanPairsEl.textContent = String(humanPairs);
    scoreBotPairsEl.textContent = String(botPairs);
    if (currentPlayer === "human") {
      turnHintEl.textContent = "Ваш ход — откройте две карты.";
      board.classList.remove("board--bot-turn");
      board.classList.remove("board--blocked");
    } else {
      turnHintEl.textContent = "Ход партнера…";
      board.classList.add("board--bot-turn", "board--blocked");
    }
  }

  function maybeBotRemember(idx, pairId) {
    if (gameMode !== "bot") return;
    if (Math.random() > 0.38) return;
    if (!botMemory.has(pairId)) botMemory.set(pairId, new Set());
    botMemory.get(pairId).add(idx);
  }

  function onMatchedPairClearMemory(aIdx, bIdx, pairId) {
    const s = botMemory.get(pairId);
    if (s) {
      s.delete(aIdx);
      s.delete(bIdx);
    }
  }

  function availableIndices() {
    const out = [];
    for (let i = 0; i < cards.length; i++) {
      const el = getCardEl(i);
      if (!el) continue;
      if (el.classList.contains("is-matched")) continue;
      if (el.classList.contains("is-flipped")) continue;
      out.push(i);
    }
    return out;
  }

  function botPickFirstIndex() {
    const avail = availableIndices();
    if (avail.length === 0) return -1;
    if (Math.random() < 0.14) {
      for (let pi = 0; pi < PAIRS.length; pi++) {
        const pid = PAIRS[pi].id;
        const set = botMemory.get(pid);
        if (!set || set.size < 2) continue;
        const arr = Array.from(set).filter(function (i) {
          return avail.indexOf(i) !== -1;
        });
        if (arr.length >= 2 && Math.random() < 0.55) {
          return arr[randInt(0, arr.length - 1)];
        }
      }
    }
    return avail[randInt(0, avail.length - 1)];
  }

  function botPickSecondIndex(firstIdx, firstPairId) {
    const avail = availableIndices().filter(function (i) {
      return i !== firstIdx;
    });
    if (avail.length === 0) return -1;
    if (Math.random() < 0.33) {
      const set = botMemory.get(firstPairId);
      if (set) {
        const candidates = Array.from(set).filter(function (i) {
          return i !== firstIdx && avail.indexOf(i) !== -1;
        });
        if (candidates.length > 0) {
          return candidates[randInt(0, candidates.length - 1)];
        }
      }
    }
    return avail[randInt(0, avail.length - 1)];
  }

  function renderBoard() {
    if (!board) {
      return;
    }
    board.innerHTML = "";
    const n = cards.length;
    board.dataset.cols = String(gridColsForCount(n));
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
    scheduleAdjustBoardFit();
  }

  function applyScoreForMatch() {
    if (level < 6) return;
    if (gameMode === "bot" && currentPlayer === "bot") return;
    const mul = scoreMultiplier(level);
    const add = Math.round(55 * mul);
    levelRoundScore += add;
    totalScore += add;
    if (scoreTotalEl) scoreTotalEl.textContent = String(totalScore);
  }

  function applyScoreForMiss() {
    if (level < 6) return;
    if (gameMode === "bot" && currentPlayer === "bot") return;
    const pen = Math.round(6 + (level - 6) * 1.2);
    levelRoundScore -= pen;
    totalScore = Math.max(0, totalScore - pen);
    if (scoreTotalEl) scoreTotalEl.textContent = String(totalScore);
  }

  function applyTimeBonus() {
    if (level < 6) return;
    const lim = timeLimitForLevel(level);
    if (lim === null || timeMax <= 0) return;
    let bonus = Math.round(timeLeft * (2.2 + level * 0.08));
    if (gameMode === "bot") {
      if (humanPairs < botPairs) {
        bonus = Math.round(bonus * 0.28);
      } else if (humanPairs === botPairs) {
        bonus = Math.round(bonus * 0.62);
      }
    }
    levelRoundScore += bonus;
    totalScore += bonus;
    if (scoreTotalEl) scoreTotalEl.textContent = String(totalScore);
  }

  function endLevelSuccess() {
    if (!winModal) return;
    stopTimer();
    stopCountdown();
    gameOver = true;
    lock = true;
    applyTimeBonus();
    const solo = gameMode === "solo";
    winEyebrow.textContent = solo ? "Уровень пройден" : "Раунд окончен";
    if (solo) {
      winTitle.textContent = "Уровень " + level + " завершён";
      winLead.textContent =
        "Каждая найденная пара — маленькая победа над хаосом: вы шли спокойно, внимательно и довели всё до сияющего финала. Пусть это чувство ясности и уверенности останется с вами.";
    } else {
      let msg = "";
      if (humanPairs > botPairs) {
        msg = "У вас больше пар — отличная игра.";
      } else if (botPairs > humanPairs) {
        msg = "В этот раз партнер набрал больше пар. Следующий уровень даст новый шанс.";
      } else {
        msg = "Ничья по парам — редкий и достойный исход.";
      }
      winTitle.textContent = "Уровень " + level + ": " + (humanPairs > botPairs ? "ваша победа" : botPairs > humanPairs ? "победа партнера" : "ничья");
      winLead.textContent = msg;
    }
    winTime.textContent = formatTime(seconds);
    winMoves.textContent = String(moves);
    if (winScoreRow) {
      if (level >= 6) {
        winScoreRow.hidden = false;
        if (winScore) winScore.textContent = String(totalScore);
      } else {
        winScoreRow.hidden = true;
      }
    }
    winModal.hidden = false;
    winModal.setAttribute("aria-hidden", "false");
    if (btnNextLevel) btnNextLevel.focus();
  }

  function onTimeUp() {
    hintEl.textContent = "Время уровня вышло.";
    openTimeoutModal();
  }

  function checkBoardComplete() {
    const pairsN = pairsForLevel(level);
    if (matched >= pairsN) {
      hintEl.textContent = gameMode === "solo" ? "Отлично! Уровень пройден." : "Все пары найдены.";
      endLevelSuccess();
    }
  }

  function switchPlayerAfterMiss() {
    if (gameMode !== "bot") return;
    currentPlayer = currentPlayer === "human" ? "bot" : "human";
    setTurnUi();
    if (currentPlayer === "bot") {
      window.setTimeout(function () {
        runBotTurn();
      }, randInt(450, 950));
    }
  }

  function grantPairToCurrentPlayer() {
    if (gameMode !== "bot") return;
    if (currentPlayer === "human") {
      humanPairs += 1;
    } else {
      botPairs += 1;
    }
    setTurnUi();
  }

  function resolveTwoCards() {
    const a = flipped[0];
    const b = flipped[1];
    const flipMs = flipBackMs(level);

    if (a.pairId === b.pairId) {
      const matchedName = a.a11yName;
      window.setTimeout(function () {
        a.el.classList.add("is-matched");
        b.el.classList.add("is-matched");
        a.el.setAttribute("aria-label", labelMatched(matchedName));
        b.el.setAttribute("aria-label", labelMatched(matchedName));
        onMatchedPairClearMemory(a.index, b.index, a.pairId);
        flipped = [];
        lock = false;
        matched += 1;
        applyScoreForMatch();
        grantPairToCurrentPlayer();
        checkBoardComplete();
      }, 380);
    } else {
      applyScoreForMiss();
      maybeBotRemember(a.index, a.pairId);
      maybeBotRemember(b.index, b.pairId);
      window.setTimeout(function () {
        a.el.classList.remove("is-flipped");
        b.el.classList.remove("is-flipped");
        a.el.setAttribute("aria-label", labelClosed());
        b.el.setAttribute("aria-label", labelClosed());
        flipped = [];
        lock = false;
        switchPlayerAfterMiss();
      }, flipMs);
    }
  }

  function tryRevealCard(index, actor) {
    if (gameOver) return false;
    if (lock) return false;
    if (gameMode === "bot" && actor === "human" && currentPlayer !== "human") return false;
    const btn = getCardEl(index);
    if (!btn) return false;
    if (btn.classList.contains("is-flipped") || btn.classList.contains("is-matched")) return false;

    startElapsedTimer();
    btn.classList.add("is-flipped");
    if (actor === "bot") btn.classList.add("is-bot-pick");
    window.setTimeout(function () {
      btn.classList.remove("is-bot-pick");
    }, 420);
    btn.setAttribute("aria-label", labelOpen(cards[index].a11yName));
    flipped.push({
      index: index,
      el: btn,
      pairId: cards[index].pairId,
      a11yName: cards[index].a11yName,
    });

    if (flipped.length < 2) return true;

    lock = true;
    moves += 1;
    updateMoves();
    resolveTwoCards();
    return true;
  }

  function runBotTurn() {
    if (gameOver || gameMode !== "bot" || currentPlayer !== "bot" || botBusy) {
      return;
    }
    botBusy = true;

    function finishBot() {
      botBusy = false;
    }

    function waitUnlock(done, safety) {
      var n = safety || 0;
      if (n > 200) {
        finishBot();
        return;
      }
      if (gameOver) {
        finishBot();
        return;
      }
      if (!lock) {
        done();
        return;
      }
      window.setTimeout(function () {
        waitUnlock(done, n + 1);
      }, 100);
    }

    function botPlayOneTry() {
      if (gameOver || currentPlayer !== "bot") {
        finishBot();
        return;
      }
      var avail = availableIndices();
      if (avail.length < 2) {
        finishBot();
        return;
      }
      window.setTimeout(function () {
        if (gameOver || currentPlayer !== "bot") {
          finishBot();
          return;
        }
        var i1 = botPickFirstIndex();
        if (i1 < 0) {
          finishBot();
          return;
        }
        tryRevealCard(i1, "bot");
        window.setTimeout(function () {
          if (gameOver || currentPlayer !== "bot") {
            finishBot();
            return;
          }
          var i2 = botPickSecondIndex(i1, cards[i1].pairId);
          if (i2 < 0) {
            finishBot();
            return;
          }
          tryRevealCard(i2, "bot");
          waitUnlock(function () {
            if (gameOver) {
              finishBot();
              return;
            }
            if (currentPlayer === "bot") {
              window.setTimeout(botPlayOneTry, randInt(400, 1050));
            } else {
              finishBot();
            }
          });
        }, randInt(280, 620));
      }, randInt(380, 820));
    }

    botPlayOneTry();
  }

  function onCardClick(ev) {
    if (gameOver) return;
    if (gameMode === "bot" && currentPlayer !== "human") return;
    const btn = ev.currentTarget;
    const index = Number(btn.dataset.index);
    tryRevealCard(index, "human");
  }

  function initLevel(keepScore) {
    if (!board || !timerEl || !movesEl || !levelNumEl || !hintEl) {
      return;
    }
    stopTimer();
    stopCountdown();
    gameOver = false;
    lock = false;
    flipped = [];
    moves = 0;
    matched = 0;
    seconds = 0;
    started = false;
    timerEl.textContent = "0:00";
    updateMoves();
    levelRoundScore = 0;
    if (!keepScore) {
      totalScore = 0;
    }
    humanPairs = 0;
    botPairs = 0;
    currentPlayer = "human";
    botMemory = new Map();
    botBusy = false;
    const pCount = pairsForLevel(level);
    cards = buildDeck(pCount);
    closeWinModal();
    closeTimeoutModal();
    updateLevelUi();
    renderBoard();
    setTurnUi();
    hintEl.textContent =
      gameMode === "bot"
        ? "Режим в паре: кто соберёт больше пар на этом уровне. Ходите по очереди после промаха."
        : "Переворачивайте карточки и соберите все пары.";
    const lim = timeLimitForLevel(level);
    if (lim !== null) {
      startCountdown();
    }
    scheduleAdjustBoardFit();
  }

  function restartCurrentLevelOnly() {
    closeWinModal();
    closeTimeoutModal();
    initLevel(true);
  }

  function goNextLevel() {
    closeWinModal();
    level += 1;
    initLevel(true);
  }

  function resetToLevelOne() {
    level = 1;
    initLevel(false);
  }

  function retryCurrentLevel() {
    closeTimeoutModal();
    initLevel(true);
  }

  if (btnRestart) btnRestart.addEventListener("click", resetToLevelOne);
  if (btnRestartLevel) btnRestartLevel.addEventListener("click", restartCurrentLevelOnly);
  if (btnPlayAgain) btnPlayAgain.addEventListener("click", resetToLevelOne);
  if (btnNextLevel) btnNextLevel.addEventListener("click", goNextLevel);

  if (btnRetryLevel) btnRetryLevel.addEventListener("click", retryCurrentLevel);
  if (btnTimeoutHome)
    btnTimeoutHome.addEventListener("click", function () {
      closeTimeoutModal();
      resetToLevelOne();
    });

  window.addEventListener("resize", scheduleAdjustBoardFit);
  window.addEventListener("orientationchange", scheduleAdjustBoardFit);
  if (typeof ResizeObserver !== "undefined" && boardWrap) {
    var boardFitObserver = new ResizeObserver(scheduleAdjustBoardFit);
    boardFitObserver.observe(boardWrap);
  }
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", scheduleAdjustBoardFit);
  }

  if (winModal)
    winModal.addEventListener("click", function (ev) {
      if (ev.target && ev.target.getAttribute("data-close") !== null) {
        closeWinModal();
      }
    });

  if (timeoutModal)
    timeoutModal.addEventListener("click", function (ev) {
      if (ev.target && ev.target.getAttribute("data-timeout-close") !== null) {
        closeTimeoutModal();
      }
    });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") {
      if (winModal && !winModal.hidden) closeWinModal();
      if (timeoutModal && !timeoutModal.hidden) closeTimeoutModal();
    }
  });

  function setMode(mode) {
    gameMode = mode;
    modeSolo.classList.toggle("is-active", mode === "solo");
    modeSolo.setAttribute("aria-pressed", mode === "solo" ? "true" : "false");
    modeBot.classList.toggle("is-active", mode === "bot");
    modeBot.setAttribute("aria-pressed", mode === "bot" ? "true" : "false");
    botHud.hidden = mode !== "bot";
    resetToLevelOne();
  }

  modeSolo.addEventListener("click", function () {
    setMode("solo");
  });
  modeBot.addEventListener("click", function () {
    setMode("bot");
  });

  if (difficultyDetails) {
    difficultyDetails.addEventListener("toggle", scheduleAdjustBoardFit);
  }

  initLevel(false);
})();
