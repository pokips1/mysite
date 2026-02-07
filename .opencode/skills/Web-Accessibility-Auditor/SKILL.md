# Skill: Web-Accessibility-Auditor (A11y-Generator)

## Descrizione
Questa skill agisce come un architetto del codice inclusivo. Genera componenti e strutture HTML5 semantiche, integrando nativamente gli attributi ARIA (Accessible Rich Internet Applications) e garantendo che ogni elemento prodotto sia navigabile tramite screen reader e tastiera. Corregge e previene errori comuni di contrasto e gerarchia.

## Parametri di Input
- **ComponentType**: Il tipo di elemento da generare (es. "Navbar", "Contact Form", "Modal").
- **Language**: Lingua del componente (per l'attributo lang).
- **InteractiveElements**: Elenco di bottoni o link necessari nel componente.

## Logica di Esecuzione
1. **Semantica HTML5**: Utilizza tag strutturali (`<header>`, `<main>`, `<footer>`, `<nav>`) invece di `<div>` generici.
2. **Implementazione ARIA**: 
   - Aggiunge `aria-label` per elementi non testuali.
   - Gestisce gli stati dinamici (es. `aria-expanded="false/true"` per i menu).
   - Assicura che i ruoli (`role="alert"`, `role="dialog"`) siano corretti.
3. **Controllo Contrasto & Visibilità**: Genera CSS con rapporti di contrasto minimi di 4.5:1.
4. **Focus Management**: Inserisce stili `:focus-visible` per la navigazione da tastiera.

## Output Atteso (Codice HTML/CSS)
Esempio di output per un "Form di Contatto":

```html
<form action="#" method="POST" aria-labelledby="form-title">
  <h2 id="form-title" class="sr-only">Modulo di Contatto</h2>
  
  <div class="field-group">
    <label for="user-name">Nome Completo (Richiesto)</label>
    <input type="text" id="user-name" name="name" required aria-required="true" placeholder="es. Mario Rossi">
  </div>

  <div class="field-group">
    <label for="user-email">Email (Richiesto)</label>
    <input type="email" id="user-email" name="email" required aria-required="true">
  </div>

  <button type="submit" aria-label="Invia il modulo di contatto">Invia</button>
</form>

<style>
  /* Accessibilità Visiva */
  button:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }
  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); border: 0;
  }
</style>