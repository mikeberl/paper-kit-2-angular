# STATUS 26/03
### WELCOME PAGE
da fare tutta



### DONE
LOGIN
SIGNUP


### HOME
cambiare colore win (nelle variabili generali): 5 colori -> primario, secondario, grigio, rosso e blu
cambiare barra superiore delle card (in grigio)
nella card your league centrare + cambiare il colore del tasto

### SETTINGS
aggiungere un tasto per accendere all league

### CREATE MATCH
aggiungere barra inferiore
rimuovere barra superiore e trovare posto per scelta leghe (?)
players in una card
sistemare punti
betting points cambiare colore barra superiore della card + sistemare slide punti 
trovare soluzione visualizzazione nomi

### MATCH-PREVIEW
barra superiore : cambiare colore e rendere i tasti ad icona
nella card: cambiare in winners/losers points + aggiungere sezione commenti + altro
inserire 3 tasti al posti di uno: Nuovo game/nuovo game con nuove squadre / end


### LAST MATCHES
my games diventa all games per visualizzare tutti i match e va nella barra superiore
quando si apre il game aggiungere un tasto info(+ notifica) 
quando si apre il game abbiamo 3 tasti e non solo il tasto report (info report hide)

### ALL LEAGUES
Rimuovere barra inferiore e inserire superiore
barra di ricerca fuori dalla carta
aggiungere intestazione alla tabella delle leghe
rimuovere host per aggiungere spazio


### LEAGUE
da uniformare al design del resto dell'app live session

### PAGINE DA FARE
profile base



# NOTE call 16/11
- mike - last match back da correggere
- cri - preview cambio colori
- cri - provare icone
- home - cambiare colore blu/verde
- mike - cambiare footer
- mike - footer nella pagina league
- mike - detailed stats / leave/join-league + search league button da aggiungere e mettere belli in league
 ^

## Create match
barra per i punti e chips da sistemare
## Preview match
edit /delete buttons
allineamento chip
colori

# Passaggi per caricare scaricare da github x Cri

git pull -> scaricare gli aggiornarmi 

git commit -a -m  "Il commento che vuoi fare" -> serve per commentare i cambiamenti

git push -> caricare 

git status -> cosa é cambiato

git add *  (oppure) git add nome_del_file -> per aggiungere file a git

git checkout _nome_del_branch_ per cambiare branch

git stash -> ritorna all'ultimo commit (save)

# TODO FOR CRI

## CREATE MATCH (http://localhost:4200/#/creatch-match)

### Da fare:
- controllare e sistemare visualizzazione da pc
- slider per i punti, sistemare stile e colori
- modificare titolo delle carte winners/losers + span label
- colore bottoni end/new match
- adattare colori (credo serva solo per rosso e verde al resto dell'app)
- sistemare finestra di dialogo per end su invalid match
- solo tasto preview

### Fatto:

### Michele:
- backTostart() non funziona come dovrebbe  / DONE
- finestra di dialogo in caso di end con partite non valide / DONE
- popover con messaggi di errore e error handling 


## MATCH SUBMISSION PREVIEW (http://localhost:4200/#/match-submission-preview)

### Da fare:
- backnav va sistemata e uniformata alle altre barre di navigazione
- layout datepicker da sistemare
- visualizzazione dei punti da sistemare
- i bottoni edit/ confirm sono troppo simili, soluzioni?
- adattare colori (credo serva solo per rosso e verde al resto dell'app)
- bottoni edit (matita), remove(bidone)
- aggiungere new-match + confirm

### Fatto:


### Michele:
- Refactoring per cri
- datepicker con data suggerita 
- il datepicker viene visualizzato sotto la carta successiva va sistemato
- collegare edit a create-match 
- datepicker senza tabella dati

## SEARCH LEAGUE (http://localhost:4200/#/leagues)

## BACK NAVBAR

### Da fare:
- Design




## LEAGUE

### Michele
- quando la pagina é pronta -> leave leguea diventa manage league se super user


## SIGNUP

### Michele
- error handling if something is not working with the server


## SEARCH LEAGUE (http://localhost:4200/#/leagues)

## BACK NAVBAR

### Da fare:
- Design




## LEAGUE

### My todos
- quando la pagina é pronta -> leave leguea diventa manage league se super user


## SIGNUP

### My todos 
- error handling if something is not working with the server





# [Paper Kit 2 Angular - Free Bootstrap 4 UI Kit](https://demos.creative-tim.com/paper-kit-2-angular/)

![version](https://img.shields.io/badge/version-1.5.0-blue.svg) [![license][license-badge]][LICENSE] [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/paper-kit-2-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/paper-kit-2-angular/issues?q=is%3Aopen+is%3Aissue) [![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/creativetimofficial/paper-kit-2-angular.svg?maxAge=259200)](https://github.com/creativetimofficial/paper-kit-2-angular/issues?q=is%3Aissue+is%3Aclosed) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)
![Paper Kit 2 Angular](https://s3.amazonaws.com/creativetim_bucket/products/65/original/opt_pk2_angular_thumbnail.jpg "Paper Kit 2 Angular Free")

Paper Kit 2 Angular is a free Bootstrap 4 UI Kit with pale colors, beautiful typography built for Angular 7.

All components are fully responsive and look great on every screen size. Transitions, shadows, colors, they all resemble the flow you would have using pieces of paper.

We have created Paper UI Kit kit having pastel colors and paper in mind. It feels light, fresh and easy to go through.

Paper Kit 2 Angular is using Ng Bootstrap (https://ng-bootstrap.github.io/#/home), as core framework.

**Bootstrap 4 support**

Paper Kit 2 Angular is built on top of Bootstrap 4, so it fully supports it. Most of the elements from the framework are re-designed to resemble sheets of paper and color pastels. If the are elements that we have not touched, they will gracefully fall back to the Bootstrap 4 default.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/paper-kit-2)
[<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/paper-kit-2-angular)


| HTML | Angular |
| --- | --- |
| ![Paper Kit 2 HTML](https://s3.amazonaws.com/creativetim_bucket/products/61/opt_pk2_thumbnail.jpg) | ![Paper Kit 2 Angular](https://s3.amazonaws.com/creativetim_bucket/products/65/opt_pk2_angular_thumbnail.jpg)

## Demo

- [Start page](https://demos.creative-tim.com/paper-kit-2-angular/home)
- [Landing Page](https://demos.creative-tim.com/paper-kit-2-angular/landing)
- [Register Page](https://demos.creative-tim.com/paper-kit-2-angular/signup)
- [Profile Page](https://demos.creative-tim.com/paper-kit-2-angular/user-profile)

[View More](https://demos.creative-tim.com/paper-kit-2-angular/).


## Quick start

Quick start options:

- [Download from Github](https://github.com/creativetimofficial/pk2-angular.git).
- [Download from Creative Tim](https://www.creative-tim.com/product/paper-kit-2-angular).
- Clone the repo: `git clone https://github.com/creativetimofficial/pk2-angular.git`.


## Documentation

Once you download the archive, you will be able find a tutorial page inside it explaining how to start using it. You can also check the [documentation online](https://demos.creative-tim.com/paper-kit-2-angular/documentation/tutorial).

## File Structure

Within the download you'll find the following directories and files:

```
paper-kit-2-angular
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── documentation
│   ├── css
│   ├── js
│   └── tutorial-components.html
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── basicelements
│   │   │   │   ├── basicelements.component.html
│   │   │   │   ├── basicelements.component.scss
│   │   │   │   ├── basicelements.component.spec.ts
│   │   │   │   └── basicelements.component.ts
│   │   │   ├── components.component.html
│   │   │   ├── components.component.ts
│   │   │   ├── components.module.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation
│   │   │   │   ├── navigation.component.html
│   │   │   │   ├── navigation.component.scss
│   │   │   │   ├── navigation.component.spec.ts
│   │   │   │   └── navigation.component.ts
│   │   │   ├── notification
│   │   │   │   ├── notification.component.html
│   │   │   │   ├── notification.component.scss
│   │   │   │   ├── notification.component.spec.ts
│   │   │   │   └── notification.component.ts
│   │   │   ├── nucleoicons
│   │   │   │   ├── nucleoicons.component.html
│   │   │   │   ├── nucleoicons.component.scss
│   │   │   │   ├── nucleoicons.component.spec.ts
│   │   │   │   └── nucleoicons.component.ts
│   │   │   └── typography
│   │   │       ├── typography.component.html
│   │   │       ├── typography.component.scss
│   │   │       ├── typography.component.spec.ts
│   │   │       └── typography.component.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── landing
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── landing.component.spec.ts
│   │   │   └── landing.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   └── signup
│   │       ├── signup.component.html
│   │       ├── signup.component.scss
│   │       ├── signup.component.spec.ts
│   │       └── signup.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img=
│   │   └── sass
│   │       ├── paper-kit
│   │       └── paper-kit.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json

```
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">


## Resources
- [Live Preview](https://demos.creative-tim.com/paper-kit-2-angular/)
- Download Page: https://www.creative-tim.com/product/paper-kit-2-angular
- Documentation is [here](https://demos.creative-tim.com/paper-kit-2-angular/documentation/tutorial)
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/paper-kit-2-angular/issues)

## Reporting Issues
We use GitHub Issues as the official bug tracker for the Paper Kit 2 Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Paper Kit 2 Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Creative Tim [license](https://www.creative-tim.com/license)

## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

##### Social Media

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
