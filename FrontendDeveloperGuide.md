# Front-end Developer Guide
## Being


gem install csscss

#### Libvips (Sharp + gulp-responsive)
brew tap homebrew/science
brew install vips





# Front-end Developer Guide
## Sogeti (Helsingborg) för Suez
### Global Kostym (2016-2017)

## Installation
- Öppna en CLI, ex. Terminal, iTerm, Windows Command Prompt eller Powershell
- node -v
- Om Node inte finns installerat
	- Installera Node.js från https://nodejs.org/en/
- Var mycket noga med att uppdatera till samma version i alla dina miljöer på din maskin, om du även kör virtualisering via Parallells och dylikt. Aktuell version 2017-02-24 är 7.5.0.

I din CLI:
- git clone "repo-path"

Eller i TFS:
- Hämta projektets arbetsfiler till din dator

I din CLI (inuti projektmappen):
- npm install -D
- Optional: bower install (för att plocka ner dependencies för Bower - används dock inte aktivt nu)
- Optional: sudo gem install hologram (om du behöver producera material genom Hologram)

### Uppdatera npm (Mac)
I din CLI:
- sudo npm cache clean -f
- sudo npm install -g n
- sudo n stable

### Felsökning: Oklara installations-/exekveringsfel via npm (ENOENT, no such file, cannot find...)
Det finns en rad olika fel som man brukar kunna åtgärda enkelt genom en tvåstegssekvens.
- npm update
- npm install
- Om Sass är inblandat: npm rebuild node-sass

### Felsökning: Problem med behörigheter (Windows)
I din CLI:
- Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
- npm install -g npm-windows-upgrade
- npm-windows-upgrade

### Felsökning: node-sass/libsass felmeddelande om bindings
I din CLI:
- npm rebuild node-sass

Får du inte detta att fungera har du troligen inte en bindings-fil för ditt system. Skaffa den på:
- https://github.com/sass/node-sass/releases/tag/v4.2.0 (eller vilken version som är korrekt/mest aktuell)

Denna placerar du i mappen node_modules/node-sass/vendor/ och i en mapp för ditt system och det aktuella versionsnumret. Aktuella exempel 2017-02-15 är:
- Windows: win32-x64-51
- Mac: darwin-x64-51

### Felsökning: mismatch i modulversioner
- ^-tecknet i package.json garanterar samtliga uppdateringar utom byte till helversion (ex. version 1 till version 2)
- Kontrollera nuvarande version med: npm view [modulnamn] version
- Ett manuellt, enkelt sätt att fixa detta är att uppdatera teamet på ändringen och manuellt radera den modul som skall uppdateras
- Utför uppdateringen: npm install [modulnamn]
- Säkerställ att modulen finns i package.json
- Säkerställ nya versionen med npm view [modulnamn] version
- Se till att hela teamet utför samma ändring

### Felsökning: Webpack
- VendorChunkPlugin har initialt (20170303) gjort att byggen lyckats, men att webbläsaren ger felet "Cannot read property 'call' of undefined" - stäng av denna om felet uppstår

### Stöd för Internet Explorer 9 (IE9)
Projektet har som mål att stödja IE9 på funktionell nivå, med mer eller mindre välbehållet utseende. Framförallt är bibehållen funktionalitet viktig så att en användare både kan nå och läsa informationen som hen söker, samt kunna genomföra beställningar i webbshoppen.

Först och främst använder vi webbtjänsten Polyfill.io för automatiska polyfills.

I _mockups/ie9-emergency-header.html finns en conditional load (klistras in i header) för följande polyfills:
- ES5 Shim
- ES5 Sham
- HTML5 Shiv
Notera att dessa alltså inte används i produktionskoden men finns tillgängliga om behov skulle uppstå.

#### JS: Stöd behöver finnas åtminstone för detta
- Fetch
- Promise
- QuerySelector
- forEach
- classList

## Allmänt om vendor-Javascript (mappen Static/scripts/vendors)
Mappen innehåller filer som inte generellt skall styckanvändas. Vendor-filerna skall samlas i en större fil och minifieras (manuellt eller via en Gulp-process) till ett paket med ett tydligt syfte. Nuvarande paket är:
1. vendors.min.js - Laddas för alla och är tänkt att innehålla merfunktionalitet, så som LoadCSS och FontFaceObserver
2. ie-polyfills.min.js - Laddas för IE10 och äldre, och syftar till att polyfilla viss funktionalitet så som Promise (nödlösning ovan Polyfill.io-laddning)

Undantagsvis, om man kan targetta en plattform eller webbläsare, kan vi ladda in enskilda script för att lösa ett viktigt behov.

## Gulp
Det finns en rad tasks skapade för utveckling. Öppna en CLI, ex. Terminal, iTerm, Windows Command Prompt eller Powershell för att köra dessa. Kommandon måste köras i samma mapp som projektet (repositoryn) ligger i.

Standardkommandot startar en rad processer för att kompilera och transpilera kod, skapar en Parker-rapport, lintar all JS och Sass samt startar en Browsersync-server med live reloading. Denna funkar som en watch-task och uppdaterar därför automatiskt webbläsaren vid filändringar. Dessutom kompileras/transpileras filer som kräver detta automatiskt vid sparning.
- gulp

## Visual Studio och Gulp
Gulp finns tillgängligt att köra genom Visual Studio 2015 och uppåt. Varje build kommer köra vår default task som bland annat minifierar produktionsfiler samt kompilerar och transpilerar JS-filer.

Du behöver ha Node installerat på systemet. Dessutom behöver du ange laddordning för Node inuti Visual Studio då den annars använder en egen, äldre version.
- Gå till menyn Tools/Options/Projects and Solutions/External Web Tools
- Ställ in C:\Program Files\nodejs (eller motsvarande installationsmapp) som det första valet

Om det inte skulle funka är det troligt att Gulp och Webpack (build:production-tasken använder Webpack) inte finns globalt installerade.
- npm install gulp -g
- npm install gulp-cli -g
- npm install webpack -g

När du gör en build i VS kommer den att starta Gulp-tasken build:production. I sitt standardutförande så kör den även Webpack med watch-läge: tasken måste alltså manuellt stängas av även inuti VS om du gör en build.

### Enskilda tasks (urval)
- gulp webpack
- gulp sass
- gulp babel
- gulp eslint
- gulp parker
- gulp louis
- gulp optimize:images

## Sass
Projektets CSS är kodad enligt Sass och denna kompileras av modulen sass-node via Gulp (kommando: gulp sass). Vid körning av standard-tasken kompileras all Sass automatiskt vid sparning.

### Struktur
Vi använder partials och en mappstruktur som framförallt särskiljer globala element ifrån komponenter. Vi använder strikta ägandeförhållanden vilket betyder att vi i största möjliga mån specificerar hur huvudkomponenter transformerar delkomponenter. Det allra främsta verktyget för att upprätthålla detta är att **aldrig** skapa inter-komponentrelationer mellan flera partials. Däremot kan en global komponent - exempelvis layout eller article - äga viss påverkan på en egenhändigt skapad komponent som tabbedbox och hur denna ligger inuti den.

### Linting (Stylelint)
Konfigurationen för Stylelint finns i Gulp/config.js, under stylelint/"rules".

## ES6/ES2015 och Babel
Projektets Javascript är kodad enligt ES6/ES2015 och denna transpileras av Babel via Gulp (kommando: gulp babel). Vid körning av standard-tasken transpileras all JS automatiskt vid sparning.

### Linting (ESLint)
Konfigurationen för ESLint finns i filen .eslintrc.js i roten av projektmappen. Denna följer huvudsakligen regelpaketen "eslint:recommended" och "plugin:react/recommended".

## Webpack
Webpack används i projektet huvudsakligen för att bundla Javascript och för att kompilera JSX-filer som React använder. Konfigurationsfilen heter webpack.config.js och ligger i projektroten. Nuvarande inställningar försätter all bundling i produktionsläge vilket ger förminskad filstorlek.
