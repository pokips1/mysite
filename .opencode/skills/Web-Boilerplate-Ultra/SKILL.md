\# Skill: Web-Boilerplate-Ultra (Bulma, Tailwind, FontAwesome)



\## Descrizione

Questa skill genera una struttura completa per un progetto web statico avanzato. Integra via CDN i framework CSS Bulma e Tailwind (per un approccio ibrido o scelta rapida) e la libreria di icone Font Awesome. Produce comandi Bash per creare file pronti all'uso con componenti di esempio già renderizzati.



\## Parametri di Input

\- \*\*ProjectName\*\*: Nome della cartella radice.

\- \*\*LibraryPreference\*\*: Configurazione predefinita dei componenti (Bulma/Tailwind).



\## Logica di Esecuzione

1\. \*\*Scaffolding\*\*: Creazione directory `assets/css`, `assets/js`, `assets/img`.

2\. \*\*Setup HTML5\*\*: Inserimento dei link CDN nell'head (Bulma, Tailwind Play CDN, Font Awesome).

3\. \*\*Componenti di Test\*\*: Inserimento di una Navbar (Bulma) e di una Card (Tailwind) per verificare il funzionamento istantaneo dei framework.

4\. \*\*JS \& CSS Custom\*\*: Creazione di file locali per sovrascritture personalizzate.



\## Output Atteso (Codice Bash)

```bash

mkdir -p {ProjectName}/assets/{css,js,img}

cd {ProjectName}



\# Creazione Index con integrazioni CDN

cat <<EOF > index.html

<!DOCTYPE html>

<html lang="it">

<head>

&nbsp;   <meta charset="UTF-8">

&nbsp;   <meta name="viewport" content="width=device-width, initial-scale=1.0">

&nbsp;   <title>{ProjectName} | Ultra Setup</title>

&nbsp;   

&nbsp;   <script src="\[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>

&nbsp;   

&nbsp;   <link rel="stylesheet" href="\[https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css](https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css)">

&nbsp;   

&nbsp;   <link rel="stylesheet" href="\[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css)">

&nbsp;   

&nbsp;   <link rel="stylesheet" href="assets/css/style.css">

</head>

<body>

&nbsp;   <nav class="navbar is-dark" role="navigation" aria-label="main navigation">

&nbsp;     <div class="navbar-brand">

&nbsp;       <a class="navbar-item" href="#"><strong>{ProjectName}</strong></a>

&nbsp;     </div>

&nbsp;   </nav>



&nbsp;   <section class="section">

&nbsp;       <div class="container">

&nbsp;           <h1 class="title">Benvenuti <i class="fas fa-rocket"></i></h1>

&nbsp;           

&nbsp;           <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 mt-5">

&nbsp;               <div class="font-bold text-xl mb-2 text-blue-600">Tailwind \& Bulma Attivi</div>

&nbsp;               <p class="text-gray-700 text-base">

&nbsp;                   Questa struttura è pronta. Font Awesome è attivo: <i class="fas fa-check-circle text-green-500"></i>

&nbsp;               </p>

&nbsp;           </div>

&nbsp;       </div>

&nbsp;   </section>



&nbsp;   <script src="assets/js/script.js"></script>

</body>

</html>

EOF



\# Creazione file locali vuoti/base

touch assets/css/style.css

echo "console.log('Frameworks caricati: Bulma, Tailwind, FontAwesome');" > assets/js/script.js



\# README

echo "# {ProjectName} \\nGenerato con Skill Web-Boilerplate-Ultra.\\nFrameworks: Bulma, Tailwind CSS, Font Awesome." > README.md

