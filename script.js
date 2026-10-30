const moods = {
  stress: {
    emoji: "🫂", kicker: "LET'S TAKE A MOMENT", title: "You can put it down for a minute, baby.",
    intro: "You don't have to solve everything all at once. Just be here, right now.",
    messages: [
      "Hey my love. Take a breath for me, yeah? Unclench your jaw, drop your shoulders and give yourself permission to pause.\n\nWhatever is on your mind can wait for one minute. You are allowed to rest. You don't have to be strong every second, and you don't have to carry everything perfectly.\n\nI'm proud of you — not just for what you do, but for who you are. I love you. One thing at a time, sweetheart.",
      "Come here, gorgeous. Imagine I'm giving you the biggest hug and not letting go until your shoulders relax.\n\nYou have handled difficult days before, but that doesn't mean you have to pretend this one is easy. Take the next small step, then the next. That's enough for now.\n\nI'm in your corner. Always."
    ],
    extra: '<p class="tip">A tiny reset: take a slow breath in, let it out for a little longer, then relax your shoulders. You can repeat that as many times as you need.</p>'
  },
  anxious: {
    emoji: "🌷", kicker: "A GENTLE REMINDER", title: "You're here. You're okay. I've got you.",
    intro: "Let's bring you back to this moment, one little step at a time.",
    messages: [
      "Baby, I know your mind can get loud sometimes. But a thought isn't a fact, and a feeling — even a really big one — will move through you.\n\nLook around and name five things you can see. Feel your feet on the floor. Take your time. You don't need to figure out every possible outcome tonight.\n\nYou are loved. You matter so much to me. I'm not asking you to be anything other than yourself.",
      "Hey sweetheart. You don't need to apologise for having a hard moment. You aren't a burden, and you don't need to hide how you're feeling from me.\n\nLet's just focus on what's in front of you. One breath, one moment, one thing at a time. I'm sending you the warmest hug and all my love."
    ],
    extra: '<div class="breathing"><div class="breath-circle">breathe</div><span class="breath-label">Slow in… and gently out… follow the circle.</span></div><p class="tip">If grounding isn't helping, try calling someone you trust or moving somewhere you feel comfortable and safe.</p>'
  },
  miss: {
    emoji: "💌", kicker: "A LITTLE PIECE OF ME", title: "If I could, I'd be right next to you.",
    intro: "Until I can give you a real hug, here's a reminder from me.",
    messages: [
      "I wish I could teleport to you right now, pull you into my arms and give you one of those hugs where neither of us wants to let go.\n\nI hope you know how special you are to me. Even when we're doing our own things, you're still my favourite thought. Distance doesn't change how much I love you or how excited I am for all the little ordinary moments we get to share.\n\nI miss you, pretty girl. Come collect your kisses soon. ❤️",
      "Imagine me stealing your hand, kissing your forehead and asking about every little detail of your day. That's where I'd rather be.\n\nYou're my favourite person to do life with. I can't wait for the next cuddle, the next laugh, and the next time I get to look at you and think, 'that's my girl.' I love you."
    ],
    extra: '<p class="tip">P.S. This is a good time to open our photos, replay a voice note, or send me a message. I love hearing from you.</p>'
  },
  cheer: {
    emoji: "✨", kicker: "YOUR MOMENT, BEAUTIFUL", title: "Go out there and be brilliant.",
    intro: "A little pre-cheer reminder from your biggest supporter.",
    messages: [
      "BABYYYY. THIS IS YOUR MOMENT. 💗\n\nTake a breath, lift your head and remember how much work you've put in. You don't need to be perfect — just trust yourself, enjoy it and give it your best.\n\nWalk in with confidence because you belong there. Let yourself have fun, smile big and show them what you can do. I'll be proud of you whatever happens, but I already know you're going to make me smile.\n\nNow go be amazing, gorgeous. I'M YOUR BIGGEST FAN.",
      "Look at you, getting ready to do your thing. I hope you know how proud I am of you.\n\nTrust your training. Trust your teammates. If something doesn't go exactly how you pictured, reset and keep going. Your energy, effort and heart are what make you special.\n\nGo shine, baby. I'll be cheering you on from wherever I am. ❤️"
    ],
    extra: '<p class="tip">Quick checklist: water ✔ breathe ✔ shoulders relaxed ✔ big smile ✔ remember to enjoy it.</p>'
  },
  flirty: {
    emoji: "😏", kicker: "OH, SO THAT'S THE MOOD?", title: "Well hello, pretty girl.",
    intro: "I see somebody is feeling a little cheeky today…",
    messages: [
      "First of all, you are ridiculously pretty. Second of all, I hope you know exactly what that smile does to me.\n\nIf I were there, I'd be finding every excuse to sit close, steal kisses and make you laugh when you're trying to act innocent. You're trouble, you know that? My favourite kind. 😘",
      "Is somebody trying to distract me? Because it's working.\n\nConsider this your official reminder that I fancy you an unreasonable amount. I want your cuddles, your kisses, your attention and probably five more minutes with you every time we say goodbye.\n\nCome here, gorgeous. ❤️",
      "I hope you're prepared for an excessive amount of affection, forehead kisses and me telling you how fit you are. Because that's the plan. You have been warned. 😌"
    ],
    extra: '<p class="tip">For a more personal version, swap these messages for your own inside jokes and cheeky lines.</p>'
  }
};

const homeScreen = document.getElementById("homeScreen");
const detailScreen = document.getElementById("detailScreen");
const detailEmoji = document.getElementById("detailEmoji");
const detailKicker = document.getElementById("detailKicker");
const detailTitle = document.getElementById("detailTitle");
const detailIntro = document.getElementById("detailIntro");
const mainMessage = document.getElementById("mainMessage");
const extraContent = document.getElementById("extraContent");
let currentMood = null;
let messageIndex = 0;

function showMood(key) {
  currentMood = key;
  messageIndex = Math.floor(Math.random() * moods[key].messages.length);
  renderMood();
  homeScreen.classList.add("hidden");
  detailScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMood() {
  const mood = moods[currentMood];
  detailEmoji.textContent = mood.emoji;
  detailKicker.textContent = mood.kicker;
  detailTitle.textContent = mood.title;
  detailIntro.textContent = mood.intro;
  mainMessage.textContent = mood.messages[messageIndex];
  extraContent.innerHTML = mood.extra;
}

document.querySelectorAll("[data-mood]").forEach(button => {
  button.addEventListener("click", () => showMood(button.dataset.mood));
});

document.getElementById("backButton").addEventListener("click", () => {
  detailScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  currentMood = null;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("homeBrand").addEventListener("click", event => {
  event.preventDefault();
  detailScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("anotherButton").addEventListener("click", () => {
  const total = moods[currentMood].messages.length;
  if (total > 1) {
    let next = messageIndex;
    while (next === messageIndex) next = Math.floor(Math.random() * total);
    messageIndex = next;
  }
  renderMood();
});
