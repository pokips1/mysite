# Skill: SEO-Semantic-Master

## Descrizione
Questa skill genera un blocco di codice iniettabile completo per l'ottimizzazione SEO e Social di una pagina web. Include metadati standard, protocolli Open Graph (Facebook, LinkedIn), Twitter Cards e Dati Strutturati in formato JSON-LD per migliorare il posizionamento semantico e i rich snippet nei risultati di ricerca.

## Parametri di Input
- **SiteLanguage**: (es. "it", "en") per l'attributo lang e hreflang.
- **PageTitle**: Titolo della pagina (ottimizzato per 50-60 caratteri).
- **MetaDescription**: Descrizione (ottimizzata per 150-160 caratteri).
- **FeaturedImageURL**: URL dell'immagine per la condivisione social.
- **CanonicalURL**: URL assoluto della pagina corrente.
- **OrganizationName**: Nome dell'azienda o del brand per JSON-LD.

## Logica di Esecuzione
1. **Validazione**: Controllo della lunghezza dei testi per evitare il troncamento nei SERP.
2. **Standard HTML**: Generazione di Meta charset, viewport e canonical.
3. **Integrazione Social**: Generazione di tag Open Graph e Twitter Card utilizzando l'immagine e i titoli forniti.
4. **SEO Semantica**: Generazione di uno script JSON-LD (Schema.org) di tipo "Organization" o "WebPage" per comunicare dati strutturati ai crawler.

## Output Atteso (Codice HTML/JSON-LD)
Il risultato è un blocco pronto per essere inserito nel tag `<head>`:

```html
<meta name="description" content="{MetaDescription}">
<link rel="canonical" href="{CanonicalURL}">
<meta name="robots" content="index, follow">

<meta property="og:type" content="website">
<meta property="og:url" content="{CanonicalURL}">
<meta property="og:title" content="{PageTitle}">
<meta property="og:description" content="{MetaDescription}">
<meta property="og:image" content="{FeaturedImageURL}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="{CanonicalURL}">
<meta name="twitter:title" content="{PageTitle}">
<meta name="twitter:description" content="{MetaDescription}">
<meta name="twitter:image" content="{FeaturedImageURL}">

<script type="application/ld+json">
{
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "WebPage",
  "name": "{PageTitle}",
  "description": "{MetaDescription}",
  "publisher": {
    "@type": "Organization",
    "name": "{OrganizationName}"
  },
  "url": "{CanonicalURL}"
}
</script>