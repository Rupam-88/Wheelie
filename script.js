const febHolidays = [
    "597 days passed by & it's",
    "20.06.24 today",
    "I still love you more than ever",
    "Remember those 6 years?",
    "All the waiting, the longing?",
    "Totally worth it",
    "because",
    "I found an",
    "amazing short-tempered qt.",
    "U're my everything",
    "U might be tiny",
    "but ur spirit fills every room.",
    "U're fierce, U're strong,",
    "and ur temper?",
    "makes u even more adorable.",
    "But beneath that fire",
    "is a heart of gold, my Yan.",
    "U're so sensitive and caring,",
    "with all the makings",
    "of a fantastic wife already.",
    "U're the smartest,",
    "hardest-working woman I know,",
    "Am blessed to call U mine.",
    "Everything good in the world",
    "reminds me of U",
    "Ur smile, Ur laugh,",
    "Ur determination.",
    "U inspire me 2B a better man.",
    "That's why, Yan,",
    "there's something I need to say.",
    "Marrying & building",
    "a family with U,",
    "isn't a question,",
    "it's a plan.",
    "A non-negotiable,",
    "dream-come-true plan.",
    "So, Podu pandu,",
    "will U, make me",
    "the happiest man alive and",
    "be my wife?",
    "Because",
    "forever with U, ",
    "sounds like",
    "THE PERFECT ADVENTURE.",
    "Love you Yan",
    "This is your Rup",
    "signing off !!",
    "Kichu bolar nei ar",
    "50 te round korar jonno likhlam",
    "bassssssss",
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  