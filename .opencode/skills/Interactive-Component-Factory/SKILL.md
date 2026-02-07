# Skill: Interactive-Component-Factory

## Descrizione
Questa skill genera componenti dell'interfaccia utente (UI) dinamici e interattivi utilizzando esclusivamente Vanilla JavaScript (ES6+). Ogni componente è incapsulato in una classe, garantendo l'isolamento del codice e la riutilizzabilità. Include stili CSS moderni (Flexbox/Grid) per un rendering immediato e senza dipendenze esterne.

## Parametri di Input
- **ComponentType**: Uno tra "MenuHamburger", "Modal", "Slider".
- **Theme**: Schema colori o stile (es. "Minimal", "Dark", "Glassmorphism").
- **CustomID**: Identificatore univoco per l'istanza del componente.

## Logica di Esecuzione
1. **Strutturazione HTML**: Genera il markup semantico necessario.
2. **Encapsulation**: Crea una classe ES6 che gestisce lo stato (aperto/chiuso, slide corrente) e gli eventi.
3. **Styling**: Produce un blocco CSS dedicato con transizioni fluide (`transition: all 0.3s ease`).
4. **Trigger System**: Implementa l'attivazione tramite data-attributes (es. `data-toggle="modal"`) per una gestione dichiarativa.

## Output Atteso (Esempio: Modal Window)

```html
<button data-modal-open="myModal">Apri Modale</button>

<div id="myModal" class="modal-overlay" aria-hidden="true">
  <div class="modal-content">
    <button class="modal-close" data-modal-close>&times;</button>
    <h2>Titolo Modale</h2>
    <p>Contenuto dinamico generato dalla skill.</p>
  </div>
</div>

<style>
  .modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center;
  }
  .modal-overlay.active { display: flex; }
  .modal-content { background: white; padding: 2rem; border-radius: 8px; position: relative; }
</style>

<script>
class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.closeButtons = this.modal.querySelectorAll('[data-modal-close]');
    this.init();
  }
  init() {
    this.closeButtons.forEach(btn => btn.addEventListener('click', () => this.close()));
    window.addEventListener('click', (e) => { if(e.target === this.modal) this.close(); });
  }
  open() { this.modal.classList.add('active'); this.modal.setAttribute('aria-hidden', 'false'); }
  close() { this.modal.classList.remove('active'); this.modal.setAttribute('aria-hidden', 'true'); }
}

// Inizializzazione automatica
document.querySelectorAll('[data-modal-open]').forEach(trigger => {
  const modalId = trigger.getAttribute('data-modal-open');
  const myModal = new Modal(modalId);
  trigger.addEventListener('click', () => myModal.open());
});
</script>