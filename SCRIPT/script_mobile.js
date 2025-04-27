//MOBILE

var colonne;
var sectionDroite;
var px;
var cv;


window.onload = function setup() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    if (w / h < 1) {
        colonne = 100;
        colonneDroite = 100;
        px = 2;
        cv = 6; // afficher tous les textes du about (fonction texteSuivant() dans le index.html)
    }

    if (w / h > 1) {
        colonne = 0;
        colonneDroite = 0;
        px = 0;
        cv = 0;
    }

    document.getElementById("colonne").style.left = "calc(-" + colonne + "vw - " + px + "px)";
    for (s = 0; s < sectionDroite.length; s++) {
        sectionDroite[s].style.right = "calc(-" + colonneDroite + "vw - " + px + "px)";
    }

    texteSuivant();

}

var premieresImages = document.getElementsByClassName("premiereImage");
var p;

window.onresize = function resize() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    if (w / h < 1) {
        colonne = 100;
        colonneDroite = 100;
        px = 2;
        cv = 6; // afficher tous les textes du about (fonction texteSuivant() dans le index.html)
        posSlider = 0;
        countFull = 0;
        for (p = 0; p < premieresImages.length; p++) {
            premieresImages[p].style.marginLeft = posSlider + "%";
        }

        for (j = 0; j < sectionImage.length; j++) {
            sectionImage[j].style.width = 100 + "vw";
            sectionImage[j].style.height = "calc(100vh - 33vw)";
            sectionImage[j].scrollTop = 0;
            document.getElementById("sectionImageContact").style.height = "calc(100vh - 26vw)";
        }

        for (j = 0; j < sectionBas.length; j++) {
            sectionBas[j].style.top = 0 + "vh";
            sectionBas[j].style.width = 100 + "vw";
        }

        document.getElementById("imgBoutique").style.height = "calc(100vh - 22vw)";
    }

    if (w / h > 1) {
        colonne = 0;
        colonneDroite = 0;
        px = 0;
        cv = 0;

        for (j = 0; j < sectionImage.length; j++) {
            sectionImage[j].style.width = 60 + "vw";
            sectionImage[j].style.height = 76 + "vh";
        }

        for (j = 0; j < sectionBas.length; j++) {
            sectionBas[j].style.top = 76 + "vh";
            sectionBas[j].style.width = 60 + "vw";
        }
    }

    document.getElementById("colonne").style.left = "calc(-" + colonne + "vw - " + px + "px)";
    for (s = 0; s < sectionDroite.length; s++) {
        sectionDroite[s].style.right = "calc(-" + colonneDroite + "vw - " + px + "px)";
    }

    document.getElementById("colonne").scrollTo(0, 0);

    countFull = 0;
    texteSuivant();

}

// volet gauche

function voletGauche() {
    document.getElementById("colonne").style.left = 0;
}

var sectionDroite = document.getElementsByClassName("sectionDroite");
var s;

function voletDroit() {

    for (s = 0; s < sectionDroite.length; s++) {
        sectionDroite[s].style.right = 0;
    }

}

function retour() {
    document.getElementById("colonne").style.left = "calc(-" + colonne + "vw - " + px + "px)";

    for (s = 0; s < sectionDroite.length; s++) {
        sectionDroite[s].style.right = "calc(-" + colonneDroite + "vw - " + px + "px)";
    }

}

// Affichage texte boutique

var num = 0;

function texteBoutique() {

    if (num == 0) {
        afficherTexteBoutique();
    }
    else if (num == 1) {
        masquerTexteBoutique();
    }
}

function afficherTexteBoutique() {
    document.getElementById("textesBoutiqueMobile").style.opacity = 1;
    num = 1;
}

function masquerTexteBoutique() {
    document.getElementById("textesBoutiqueMobile").style.opacity = 0;
    num = 0;
}