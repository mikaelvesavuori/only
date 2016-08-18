# Only Framework (Web Development Boilerplate @ Being)

## Current version
Version: 2.2 (20160817)

## Author
[Mikael Vesavuori](http://www.mikaelvesavuori.se) for [Being](http://www.being.se), 2015-2016

## What is Only Framework?
Only Framework is a framework that provides:

1. a responsive, modular, high-performance, secure boilerplate and scaffold together with

2. a [styleguide](http://www.being.se/only-demo/styleguide.html) that supports development from a foundational ground towards clear visual deliveries and

3. a simple Component Designer that encourages object-based composition of elements for total separation of design and development.

The mantra behind Only Framework has been to make it super easy for designers, developers and stakeholders/clients alike to always have access to the current state of development—through fast, fun, no-bullshit design and development.

Beginning with version 2.1, Only has a Gulp-based workflow that will help you with:
- optimizing assets (HTML, JS, CSS, images)
- building a distribution site to a separate location
- adding [Sass](https://www.npmjs.com/package/gulp-sass) and [PostCSS](https://github.com/postcss/gulp-postcss) to your tools
- adding [Babel](https://github.com/babel/babel) for modern Javascript
- linting your Sass/CSS (via [Stylelint](https://github.com/stylelint/stylelint))
- linting your JS (via [ESLint](https://github.com/eslint/eslint) and [babel-eslint](https://github.com/babel/babel-eslint))
- live previewing your site (via [Browsersync](https://github.com/BrowserSync/browser-sync))
- doing critical CSS optimization and inlining (via [Critical](https://github.com/addyosmani/critical))
- giving you the lowdown on style statistics (via [Parker](https://github.com/katiefenn/parker))
- rewriting file references and doing other magic (via [Useref](https://www.npmjs.com/package/gulp-useref))
- uploading your site to the interwebz (via [Rsync](https://github.com/jerrysu/gulp-rsync/issues))

[Being](http://www.being.se) is a design collaboration between [Mikael Vesavuori](http://www.mikaelvesavuori.se) and [Niklas Persson](http://www.niklaspersson.com), based in Göteborg, Sweden. Only is not supported by Being, but is frequently updated. Feel free to join in the discussion here at Github or email us at contact@being.se if you have any ideas, thoughts or questions!

## Features
- Design-centric with most standard elements exposed and ready to tweak in the Sass/CSS code
- Styleguide ready for element inspection/styling, typography, and grids
- Modularized CSS (layout, typography, media, etc) – just build your own components on top in their own files
- Minimal code interference, cascading problems and CSS bloat
- Makes as few assumptions as possible without sacrificing performance and stable code/scaffold
- High-performance: loads CSS, scripts and fonts asyncronously, and lazy-loads images responsively
- Responsive and print: should be good to go for both, but we always make very specific changes inhouse for these kinds of matters depending on the web project

## Assumptions and intended user
- It is assumed that you will want to custom code as much as possible for stuff such as interactivity, interfaces, and layout. Only gives you access right away to all the standard HTML elements for quick designing, and uses the industry-standard Normalize reset and sets fonts to system defaults. I did not want to make another totalizing framework like Bootstrap which makes it really hard to negate built-in design decisions.
- It is assumed that your custom components will be developed independently of other page-wide layout. Only provides a simple "Component Designer" for this, which uses Fragment.js to load HTML (you are then encouraged to place your prefixed component SCSS in the components folder for ultimate separation of concerns) so you can replicate a more robust component-based environment like Angular or React even if you don't intend to run those on your site.
- It is assumed that you will want quick and direct access to all of the standard layout CSS elements. Only has a styleguide (with separate SCSS file) that aims to give users a designer-centric workflow based around actually seeing all the stuff that's going on, from typography to link styling and beyond.
- It is assumed that you prefer tweaking most of the raw web development things like .htaccess, content security policies, responsive image loading patterns, font scaling etc. rather than always writing that stuff from scratch. Users get a robust boilerplate adapted from the popular HTML5 Boilerplate, expanded with additional error pages, more .htaccess options (like rewriting path names) and a few patterns for recurring concerns like responsive, lazy image loading.
- It is assumed that high customizability and high performance is important to you and your potential clients. Only uses best-practices both the developer-side with clear separation of styling and variable-driven CSS. For performance, best-practices concerning CSS and script loading is used and Only encourages (via comments) where and how to do things like critical CSS separation.

## Install instructions
All of these instructions are for commands in the Terminal (Mac) or similar command-line interface on your system of choice.

### 1. Clone Only to your computer
```git clone https://github.com/beingstudio/only.git```

### 2. Install Bower and NPM if you haven't already done so
```npm install bower -g```

```npm install npm -g```

### 3. Install NPM dependencies
```npm install```

### 4. Install Bower dependencies
```bower install```

### 5. Ready to go!
Only 2.1 and later versions have a Gulp workflow in mind, but it works just as well with Codekit—or if you feel like it—you could always be really old-school and go about your business without any additional tooling at all. Styles are written in Sass (SCSS) and Only also inserts PostCSS in the dependencies. Note that assets are minified and may be hard to work with, using a plain vanilla approach!

## Usage
`gulp` — Default task is `watch`.

`gulp watch` — Builds the site into `/app`, runs the `sass` function, starts Browsersync, and watches for changes to files (reloading the page when needed).

`gulp sass` — Runs Sass/PostCSS and a range of tasks to create a minified CSS file.

`gulp eslint` — Runs Babel (outputs concatenated JS file), then ESLint on the `scripts/all` folder which is Babel's output path.

`gulp browsersync` — Start Browsersync from the `/app` folder.

`gulp browsersync:production` — Start Browsersync from the `/dist` folder.

`gulp build` — Runs Critical and Parker to build out additional assets.

`gulp build:production` — Runs a range of tasks to build out a production version into the `/dist` folder.

`gulp deploy` — Uses Rsync to upload your site.

`gulp zip` — Archives the `dist` folder into a ZIP file named `archive_` and suffixed with the current time and date.

## Roadmap to Only 3.0
The main goal of Only 3.0 is to provide a framework that is just as well suited to static web design and development as it is to small-scale and mid-scale web application development. I feel like Only 2.0 is good at the more static or classic side, but want to make sure it scales to modern and more complex development just as well.

Most of the heavy features are expected to be incrementally added throughout version 2, with focus post 2.5 (or so) being stabilization and more frequent daily use of the framework to provide leads on what should be fixed, removed, improved and otherwise changed before the final Only 3.0 release (expected winter 2016/2017).

### Some kind of backlog of stuff to add or do
- Add React
- Add Webpack
- Add Jekyll, Handlebars, or some sort of templating possibilities (static site generation?)
- Optimize Gulp workflows
- Further modularization of Gulp configurations
- Make Only upgradeable and transportable in an easy, safe manner for projects using older versions of Only

## Version history
### 2.2 (20160817)
- Added ESLint
- Added Babel
- Added [gulp-zip](https://github.com/sindresorhus/gulp-zip) for backing up the `dist` folder to a ZIP archive.
- Added [gulp-connect-php](https://github.com/micahblu/gulp-connect-php) so you can use PHP files. This gets connected through the browsersync task.
- Fixed semantic versioning error: is now 2.1.0, was 2.1.
- Minification now handled exclusively by [gulp-cssnano](https://github.com/ben-eb/gulp-cssnano): removed `cssnano` because it was an unnecessary oversight from me to have two modules doing the same things. 

### 2.1 (20160814)
- Gulp has replaced Codekit as the primary intended workflow/task runner (added gulp folder and `gulpfile.js`).
- Dependencies for Bower and NPM added.
- New modern folder structure, especially well suited for web applications.

### 2.0.3 (20160810)
- Updated .htaccess file with the Content Security Policy rules that did not work inlined in the `<meta>` tag previously. **If you are experiencing trouble loading external fonts or other resources, make sure to check the settings (specifically the CSP ones) in `.htaccess`!**

### 2.0.2 (20160716)
- Fixed menu font size that was weirdly spaced at larger desktop sizes.

### 2.0.1 (20160716)
- Adjusted the styleguide menu for better resizing on mobile and tablet, using either 2 or 3 columns.
- Adjusted to less whitespace underneath the "Style guide" header.
- Adjusted size of header image (the Only logo).
- Added !important to the margin and padding utility classes, so you always get the values you want.
- Added an ARIA role to the header SVG image for better accessibility.
- Added $margin-small (1em) to `utilities.scss`.
- Fixed buttons that were all-white on Safari mobile (and probably some other platforms).
- Added new screen size ($size-mobilemid) to `_global.scss`.

### 2.0 (20160715)
A huge number of changes have happened for this release. Some of the most important ones are listed below:
- There is no more separation between framework and scaffold—it's now a one-stop shop which should simplify most development. However, if you ran Only as a Codekit framework this will now be troublesome as the SCSS is not separated from the rest of the content.
- We tried making Only based around a design-centric principle, so its intended workflow now concerns building a styleguide (driven by variables set in SCSS) and building components in the Component Designer (`designer.html`) which uses Fragment.js to load HTML files inside the wrapper. Use live reloading on one screen and write your code on the other and it all works like magic!
- Only tries to make as few assumptions and have as few opinions as humanly possible about what you do as, how a standard template should look and how you do your work as a web designer/developer and what your technology stack is. Our focus has been on integrating industry-leading libraries to give maximum performance (like LoadCSS and Font Face Observer) as well as providing some hints about how to do things like critical CSS inlining on top of an extensible, modular scaffold.
- A logo has been created for Only Framework.
- `/dist` folder added into the `/css` and `/scripts` folders for your production ready code.
- Updated favicon code with more sizes.
- Created new templates (`styleguide.html`, `designer.html` and `index.html`) and cleaned out old ones: size is down from around 7mb to 1mb!
- Added the template `componentexample.html` for you to modify for your own buttons and other component stuff.
- New, simplified images for testing responsive images or loading placeholder images.
- More error pages (400, 401, 403, 404, 408, 503).
- New libraries added into the minified `scripts.min.js` (LoadCSS, Font Face Observer, HTML5Shiv, Respimage, Lazysizes, Fastclick, Fragment.js).
- Content security policy somewhat updated.
- Some of the SCSS files have moved around a bit.
- Added the components folder both in the root as well as in the sass folder.

### 1.4 (20160415)
- Moved colors (in `_colors.scss`) into a Sass map rather than as variables.
- Improved typescaling and added typography settings into Sass map/mixin rather than as variables (see `_fonts.scss`).

### 1.3.1 (20160405)
- Slight modification in content security policy (`csp-template.html`) as it would not work in Firefox if enter/return keypresses were found in the header: all of those should be removed before deployment. I left them in, however, as it's easier to work with them on separate rows before going final and cross-browser.

### 1.3 (20160322)
- Added a content security policy template (`csp-template.html`) - note that it is possible that frame-ancestors, form-action etc may not work when put in a meta tag
- Put in some rudimentary responsive breakpoints for the wrapper
- Tweaked some of the values for the responsive type scaling
- Synchronized most/all of the formatting in the framework with the stuff found in the scaffold styles, because this makes it much easier for you to change "hidden" stuff that is being affected by the base style; this adds some bulk but is at least way easier to read, understand and change when needed
- Added OpenGraph and Twitter card meta blocks in header of scaffold template page
- Broke up SCSS files into further modularized partials (`_header.scss` etc.)
- Added modularized SCSS files (partials) to scaffold
- All files in framework now use tabbed indentation

### 1.2 (20160120)
- Added objects folder in root of scaffold for snippets, patterns or other regular pieces of code.
- Added addons folder in sass folder of scaffold for external libraries such as Bootstrap.
- Added sections for Reserved class names and Helper classes in the readme document.
- Added section for Planned future development in the readme document.
- Added notes on how to upgrade your Only version, both for the scaffold and the framework.
- Updated .htaccess with an optional hotlink protection block (at mod_rewrite.c section)
- Broke out styling content from broader-scope partials into more specific ones, for example `_links.scss`

### 1.1 (20151201)
- Cleaned and separated the framework from the scaffold to reduce duplicate files and to make it all really super smooth for you to use.
- Switched to BEM style notation in `_global.scss` which may break dependencies if you've used those globals (for typography and sizing etc).
- There is now automatic font scaling for tablet, mobile and desktop in `_global.scss`. Easy to use: just edit the percentage number and you should be all clear.
- Added two "hide" helper classes for print and mobile in `_layout.scss` if you want to remove visibility on such devices for any reason. 
- Added a few more scaffold elements in `_global.scss` so you can adjust sizing, selection color and other colors a bit quicker if you use the scaffold.
- Added another breakpoint: $break-mobilexl, which is used for devices up to iPhone 6 Plus in landscape mode. Please note that the breakpoints are always set to 1 pixel below the actual size of a display.

### 1.0 (20151025)
- First version launched.

## Contents
### Libraries
#### CSS/SCSS
Uses bits and pieces from [HTML 5 Boilerplate](https://html5boilerplate.com) and incorporates [Normalize](https://necolas.github.io/normalize.css/) 4.2.0 in `_reset.scss`.

#### Javascript
The file `scripts.min.js` loads minified versions of:

- [LoadCSS](https://github.com/filamentgroup/loadCSS) 1.2.0
- [Font Face Observer](https://github.com/bramstein/fontfaceobserver) 2.0.1
- [HTML5Shiv](https://github.com/aFarkas/html5shiv) 3.7.3
- [Respimage](https://github.com/aFarkas/respimage) 1.4.2
- [Lazysizes](https://github.com/aFarkas/lazysizes) 2.0.0
- [Fastclick](https://github.com/ftlabs/fastclick) 1.0.6
- [Fragment.js](http://danielrapp.github.io/fragment.js/)