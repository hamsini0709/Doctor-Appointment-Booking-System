./* src/App.css */
/* src/App.css */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --mint:      #d2f5ec;
  --mint-mid:  #5dcaa5;
  --mint-deep: #0f6e56;
  --blush:     #fbeaf0;
  --blush-mid: #ed93b1;
  --blush-deep:#72243e;
  --cream:     #fdf9f4;
  --ink:       #1c1c1c;
  --ink-soft:  #4a4a4a;
  --ink-mute:  #888780;
  --white:     #ffffff;
  --radius:    18px;
  --radius-sm: 10px;
  --pill:      999px;
  --shadow:    0 4px 30px rgba(0,0,0,.07);
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream); }
::-webkit-scrollbar-thumb { background: var(--mint-mid); border-radius: 10px; }

/* Modal overlay */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  animation: fadeIn .2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}