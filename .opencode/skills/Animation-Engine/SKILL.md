# Skill: Animation-Engine

## Descrizione
Questa skill genera sistemi di animazione leggeri e performanti. Si focalizza su due aree: micro-interazioni (hover, click) tramite CSS e animazioni di entrata (fade-in, slide-up) attivate dallo scroll dell'utente tramite JavaScript Intersection Observer API.

## Parametri di Input
- **AnimationType**: (es. "FadeIn", "SlideUp", "Scale", "Float").
- **Trigger**: (es. "OnHover", "OnScroll", "OnClick").
- **Duration**: Tempo di esecuzione (es. "0.5s").
- **Delay**: Ritardo per animazioni a cascata (es. "0.2s").

## Logica di Esecuzione
1. **CSS Core**: Genera le `@keyframes` e le classi di stato iniziale (es. `opacity: 0`).
2. **Transition Logic**: Gestisce il timing e il tipo di curva (es. `cubic-bezier`).
3. **Scroll Observer**: Genera uno script JS leggero che aggiunge la classe `.visible` quando l'elemento entra nel viewport.
4. **Performance Check**: Utilizza `will-change` per ottimizzare il rendering della GPU.

## Output Atteso (Esempio: On-Scroll Reveal)

### 1. CSS Styles
```css
/* Stato Iniziale */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  will-change: transform, opacity;
}

/* Stato Finale (Attivato da JS) */
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));