//changer de projet

function switchProjet(nomSouligne, projet) {

	//soulignements dans la liste
	var x = document.getElementsByClassName("nomsProjets");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.textDecoration = "none";
	}
	document.getElementById(nomSouligne).style.textDecoration = "underline";

	document.getElementById('aboutLink').style.textDecoration = "none";
	document.getElementById('contactLink').style.textDecoration = "none";
	/* document.getElementById('aboutMobile').style.textDecoration = "none"; */

	//display des projets
	var y = document.getElementsByClassName("projet");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].scrollTo(0, 0);
		y[i].style.display = "none";
	}

	document.getElementById(projet).style.display = "block";

	posSlider = 0

	var imagesProjets = document.getElementsByClassName("imgProjet");
	var i;
	for (i = 0; i < imagesProjets.length; i++) {
		imagesProjets[i].style.marginLeft = posSlider;
	}

	if (magnin == 1) {
		imagesMagnin();
	}
	if (lycee == 1) {
		imagesLycee();
	}
	if (jeux == 1) {
		imagesJeux();
	}
	if (madeleine == 1) {
		imagesMadeleine();
	}
	if (chien == 1) {
		imagesChien();
	}
	if (bourbon == 1) {
		imagesBourbon();
	}
	/* if (flaur == 1) {
		imagesFlaur();
	} */
	if (bataille == 1) {
		imagesBataille();
	}
	if (holdOn == 1) {
		imagesHoldOn();
	}
	if (orage == 1) {
		imagesOrage();
	}
	if (sunflower == 1) {
		imagesSunflower();
	}
	if (astro == 1) {
		imagesAstro();
	}
	if (vapeur == 1) {
		imagesVapeur();
	}
	if (grandDej == 1) {
		imagesGrandDej();
	}
	if (trous == 1) {
		imagesTrous();
	}
	if (voeux == 1) {
		imagesVoeux();
	}
	if (disco == 1) {
		imagesDisco();
	}
	if (tohuBohu == 1) {
		imagesTohuBohu();
	}
	if (voyeurs == 1) {
		imagesVoyeurs();
	}
	if (memoire == 1) {
		imagesMemoire();
	}
	if (jpo == 1) {
		imagesJpo();
	}
	if (limo == 1) {
		imagesLimo();
	}
	if (disques == 1) {
		imagesDisques();
	}
	if (boutique == 1) {
		imagesBoutique();
	}
}


var magnin = 0;
var lycee = 0;
var jeux = 0;
var madeleine = 0;
var chien = 0;
var bourbon = 0;
/* var flaur = 0; */
var bataille = 0;
var holdOn = 0;
var orage = 0;
var sunflower = 0;
var astro = 0;
var vapeur = 0;
var grandDej = 0;
var trous = 0;
var voeux = 0;
var disco = 0;
var tohuBohu = 0;
var voyeurs = 0;
var memoire = 0;
var jpo = 0;
var interest = 0;
var limo = 0;
var disques = 0;
var boutique = 0;



function clickMagnin() {
	magnin = magnin + 1;
}

function clickLycee() {
	lycee = lycee + 1;
}

function clickJeux() {
	jeux = jeux + 1;
}

function clickMadeleine() {
	madeleine = madeleine + 1;
}

function clickChien() {
	chien = chien + 1;
}

function clickBourbon() {
	bourbon = bourbon + 1;
}

function clickFlaur() {
	flaur = flaur + 1;
}

function clickBataille() {
	bataille = bataille + 1;
}

function clickHoldOn() {
	holdOn = holdOn + 1;
}

function clickOrage() {
	orage = orage + 1;
}

function clickSunflower() {
	sunflower = sunflower + 1;
}

function clickAstro() {
	astro = astro + 1;
}

function clickVapeur() {
	vapeur = vapeur + 1;
}

function clickGrandDej() {
	grandDej = grandDej + 1;
}

function clickTrous() {
	trous = trous + 1;
}

function clickVoeux() {
	voeux = voeux + 1;
}

function clickDisco() {
	disco = disco + 1;
}

function clickTohuBohu() {
	tohuBohu = tohuBohu + 1;
}

function clickVoyeurs() {
	voyeurs = voyeurs + 1;
}

function clickMemoire() {
	memoire = memoire + 1;
}

function clickJpo() {
	jpo = jpo + 1;
}

function clickLimo() {
	limo = limo + 1;
}

function clickDisques() {
	disques = disques + 1;
}

function clickBoutique() {
	boutique = boutique + 1;
}



function imagesMagnin() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MAGNIN/01.jpg';
	document.getElementById('imgMagnin').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageMagnin");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MAGNIN/02.jpg';
	document.getElementById('imgMagnin').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MAGNIN/03.jpg';
	document.getElementById('imgMagnin').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MAGNIN/04.jpg';
	document.getElementById('imgMagnin').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MAGNIN/05.jpg';
	document.getElementById('imgMagnin').appendChild(img);
	img.className = "imgProjet";

	magnin = 2;
}

function imagesLycee() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/01.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageLycee");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/02.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/03.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/04.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/05.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/06.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/07.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/08.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/09.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/10.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/11.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/12.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/13.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/14.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/15.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/16.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/17.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/18.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/19.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/20.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LYCEE/21.JPG';
	document.getElementById('imgLycee').appendChild(img);
	img.className = "imgProjet";

	lycee = 2;
}

function imagesJeux() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/01.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageJeux");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/02.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/03.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/04.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/05.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/06.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/07.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/08.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/09.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/10.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JEUX/11.jpg';
	document.getElementById('imgJeux').appendChild(img);
	img.className = "imgProjet";

	jeux = 2;
}

function imagesMadeleine() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/01.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageMadeleine");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/02.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/03.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/05.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/06.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/07.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/08.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/09.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/11.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/12.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/13.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/14.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/15.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/16.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/17.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/18.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/19.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MADELEINE/20.jpg';
	document.getElementById('imgMadeleine').appendChild(img);
	img.className = "imgProjet";

	madeleine = 2;
}

function imagesChien() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/CHIEN/01.jpg';
	document.getElementById('imgChien').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageChien");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/CHIEN/02.jpg';
	document.getElementById('imgChien').appendChild(img);
	img.className = "imgProjet";

	chien = 2;
}

function imagesBourbon() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/01.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageBourbon");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/02.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/03.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/04.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/05.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BOURBON/06.jpg';
	document.getElementById('imgBourbon').appendChild(img);
	img.className = "imgProjet";

	bourbon = 2;
}

/* function imagesFlaur() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/FLAUR/01.jpg';
	document.getElementById('imgFlaur').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageFlaur");

	flaur = 2;
} */

function imagesBataille() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/01.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageBataille");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/02.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/03.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/04.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/05.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/06.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/07.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/08.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/09.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/10.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/11.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/12.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/13.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/14.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/16.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/17.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/18.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/19.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/20.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/21.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/BATAILLE/22.jpg';
	document.getElementById('imgBataille').appendChild(img);
	img.className = "imgProjet";

	bataille = 2;
}

function imagesHoldOn() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/00.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageHoldOn");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/01.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/02.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/03.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/04.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/05.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/06.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/07.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/08.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/09.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/10.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/HOLDON/11.jpg';
	document.getElementById('imgHoldOn').appendChild(img);
	img.className = "imgProjet";

	holdOn = 2;
}

function imagesOrage() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/00.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageOrage");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/01.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	/* var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/02.jpg';
	document.getElementById('imgOrage').appendChild(img); */

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/03.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/04.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/05.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/06.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/07.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ORAGE/08.jpg';
	document.getElementById('imgOrage').appendChild(img);
	img.className = "imgProjet";

	orage = 2;
}

function imagesSunflower() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/00.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageSunflower");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/01.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/02.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/03.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/04.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/05.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/06.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/07.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/08.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SUNFLOWER/09.jpg';
	document.getElementById('imgSunflower').appendChild(img);
	img.className = "imgProjet";

	sunflower = 2;
}

function imagesAstro() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/00.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageAstro");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/01.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/03.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/04.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/05.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/06.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/07.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/08.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/09.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/10.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/11.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/12.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/13.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/14.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/15.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/16.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/17.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/18.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/ASTRONOMES/19.jpg';
	document.getElementById('imgAstro').appendChild(img);
	img.className = "imgProjet";

	astro = 2;
}

function imagesVapeur() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/01.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageVapeur");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/02.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/03.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/04.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/05.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/06.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/07.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/08.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/09.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/10.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/11.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/12.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/13.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/14.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/15.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/16.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/17.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/18.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VAPEUR/19.jpg';
	document.getElementById('imgVapeur').appendChild(img);
	img.className = "imgProjet";

	vapeur = 2;
}

function imagesGrandDej() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/GRANDDEJ/01.jpg';
	document.getElementById('imgGrandDej').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageGrandDej");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/GRANDDEJ/02.jpg';
	document.getElementById('imgGrandDej').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/GRANDDEJ/03.jpg';
	document.getElementById('imgGrandDej').appendChild(img);
	img.className = "imgProjet";

	grandDej = 2;
}

function imagesTrous() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/02.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageTrous");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/03.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/04.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/05.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/06.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/07.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/08.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TROUS/09.jpg';
	document.getElementById('imgTrous').appendChild(img);
	img.className = "imgProjet";

	trous = 2;
}

function imagesVoeux() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/00.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageVoeux");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/02.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/03.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/04.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/01.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/05.jpg';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOEUX/07.gif';
	document.getElementById('imgVoeux').appendChild(img);
	img.className = "imgProjet";

	voeux = 2;
}

function imagesDisco() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/01.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageDisco");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/03.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/02.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/035.png';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/04.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/05.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/06.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/07.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/08.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISCO/09.jpg';
	document.getElementById('imgDisco').appendChild(img);
	img.className = "imgProjet";

	disco = 2;
}

function imagesTohuBohu() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/00.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageTohuBohu");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/01.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/02.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/03.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/04.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/05.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/06.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/07.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/08.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/09.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/TOHUBOHU/10.jpg';
	document.getElementById('imgTohuBohu').appendChild(img);
	img.className = "imgProjet";

	tohuBohu = 2;
}

function imagesVoyeurs() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/00.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageVoyeurs");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/01.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/02.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/03.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/04.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/05.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/06.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/07.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/08.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/09.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/10.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/11.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/VOYEURS/12.jpg';
	document.getElementById('imgVoyeurs').appendChild(img);
	img.className = "imgProjet";

	voyeurs = 2;
}

function imagesMemoire() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_1.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageMemoire");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_2.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_3.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_4.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_6.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_7.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_8.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_9.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_10.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_11.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_12.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_13.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_14.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_15.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/MEMOIRE/memoire_16.jpg';
	document.getElementById('imgMemoire').appendChild(img);
	img.className = "imgProjet";

	memoire = 2;
}

function imagesJpo() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/00.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageJpo");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/01.png';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/02.png';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/03.png';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/04.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/05.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/06.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/07.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/08.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/09.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/10.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/11.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/12.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/JPO/13.jpg';
	document.getElementById('imgJpo').appendChild(img);
	img.className = "imgProjet";

	jpo = 2;
}

function imagesLimo() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/01.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageLimo");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/02.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/03.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/04.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/06.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/07.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/08.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/09.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/10.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/11.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/12.jpg';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/LIMO/13.gif';
	document.getElementById('imgLimo').appendChild(img);
	img.className = "imgProjet";

	limo = 2;
}

function imagesDisques() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/01.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageDisques");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/02.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/03.gif';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/04.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/05.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/06.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/07.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/08.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/09.gif';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/10.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/11.gif';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/12.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/13.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/14.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/15.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/16.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/17.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/18.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/19.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/20.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/21.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/22.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/23.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/DISQUES_ILLUSTRES/24.jpg';
	document.getElementById('imgDisques').appendChild(img);
	img.className = "imgProjet";

	disques = 2;
}

function imagesBoutique() {

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/01.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.classList.add("imgProjet", "premiereImage");
	img.setAttribute("id", "premiereImageBoutique");

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/02.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/03.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/04.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/05.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/06.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/07.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/08.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/09.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/10.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/11.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/12.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/13.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/14.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/15.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/16.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/17.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	var img = document.createElement('img');
	img.src = 'IMAGES/PROJETS/SHOP/18.jpg';
	document.getElementById('imgBoutique').appendChild(img);
	img.className = "imgProjet";

	boutique = 2;
}


//About

function switchProjetAbout() {

	//soulignements dans la liste
	var x = document.getElementsByClassName("nomsProjets");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.textDecoration = "none";
	}
	document.getElementById('aboutLink').style.textDecoration = "underline";

	//display des projets
	var y = document.getElementsByClassName("projet");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].scrollTo(0, 0);
		y[i].style.display = "none";
	}

	document.getElementById('about').style.display = "block";
}


//Contact

function switchProjetContact() {

	//soulignements dans la liste
	var x = document.getElementsByClassName("nomsProjets");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.textDecoration = "none";
	}
	document.getElementById('contactLink').style.textDecoration = "underline";

	//display des projets
	var y = document.getElementsByClassName("projet");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].scrollTo(0, 0);
		y[i].style.display = "none";
	}

	document.getElementById('contact').style.display = "block";
}