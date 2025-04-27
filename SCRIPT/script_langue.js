//traductions
var count = 0;

function langue() {
	if (count == 0) {
		english();
	}
	else if (count == 1) {
		francais();
	}
}

function english() {
	count = 1;
	document.getElementById("langue").innerHTML = "ENG";
	document.getElementById("aboutLink").innerHTML = "ABOUT";
	document.getElementById("newsLink").innerHTML = "NEWS";
	document.getElementById("voeuxLink").innerHTML = "ÉSAD •GV greetings";
	document.getElementById("jpoLink").innerHTML = "ÉSAD •GV open days";

	document.getElementById("texteBoutique").style.display = "none";
	document.getElementById("texteBoutiqueAnglais").style.display = "block";
	document.getElementById("couleurs").style.display = "none";
	document.getElementById("couleursAnglais").style.display = "block";


	document.getElementById("texteMagnin").innerHTML = "Design of the poster announcing free entry to the Musée national Magnin. To encourage younger people and families to discover this private mansion and its paintings, the poster was designed to be friendly and colourful, showing an idealised image of the museum's inner courtyard, using a mix of photography, painting and hand-written typography. It is shown during several months through Dijon and Bourgogne-Franche-Comté on multiple supports, like flyers, large posters and magazines.";
	document.getElementById("texteMobileMagnin").innerHTML = "Design of the poster announcing free entry to the Musée national Magnin. To encourage younger people and families to discover this private mansion and its paintings, the poster was designed to be friendly and colourful, showing an idealised image of the museum's inner courtyard, using a mix of photography, painting and hand-written typography. It is shown during several months through Dijon and Bourgogne-Franche-Comté on multiple supports, like flyers, large posters and magazines.";
	document.getElementById("infosMagnin").innerHTML = "1200&nbsp;×&nbsp;1750&nbsp;mm posters<br>590&nbsp;×&nbsp;790&nbsp;mm poster<br>A3 posters<br>A5 flyers";

	document.getElementById("texteLycee").innerHTML = "Residency at the Lycée Carnot à Dijon, as part of the program «&nbsp;Artistes plasticiens au lycée&nbsp;», initiated by the Région Bourgogne-Franche-Comté. With a group of students, we made a movable installation in the form of a large-scale map of the sky, which has been installed in the school to be handled by its users. Students have created shapes representing planets and others celestial objects, using a variety of drawing techniques, then each piece has been painted, screen-printed and assembled to build this planetary orientation table.";
	document.getElementById("texteMobileLycee").innerHTML = "Residency at the Lycée Carnot à Dijon, as part of the program «&nbsp;Artistes plasticiens au lycée&nbsp;», initiated by the Région Bourgogne-Franche-Comté. With a group of students, we made a movable installation in the form of a large-scale map of the sky, which has been installed in the school to be handled by its users. Students have created shapes representing planets and others celestial objects, using a variety of drawing techniques, then each piece has been painted, screen-printed and assembled to build this planetary orientation table.";
	document.getElementById("infosLycee").innerHTML = "Project coordinated by Tache Papier<br><br>Dimensions of the installation&nbsp;:<br>1,60&nbsp;m (diameter)&nbsp;×&nbsp;0,80&nbsp;m (height)";

	document.getElementById("texteJeux").innerHTML = "Design of the 2024 new year greetings card for La Madeleine, the conventioned theatre of Troyes, France. It bends in either direction to mark the transition to the new year and combine the silhouettes with their respective masks.";
	document.getElementById("texteMobileJeux").innerHTML = "Design of the 2024 new year greetings card for La Madeleine, the conventioned theatre of Troyes, France. It bends in either direction to mark the transition to the new year and combine the silhouettes with their respective masks.";
	document.getElementById("infosJeux").innerHTML = "200&nbsp;×&nbsp;200&nbsp;mm<br>200 copies";

	document.getElementById("texteMadeleine").innerHTML = "Illustration of the 2023-2024 season of La Madeleine, the conventioned theatre of Troyes, France. This work is still in progress and features a multitude of masked silhouettes throught the programme of the shows, the venue's signage and communication medias.";
	document.getElementById("texteMobileMadeleine").innerHTML = "Illustration of the 2023-2024 season of La Madeleine, the conventioned theatre of Troyes, France. This work is still in progress and features a multitude of masked silhouettes throught the programme of the shows, the venue's signage and communication medias.";
	document.getElementById("infosMadeleine").innerHTML = "Graphic design&nbsp;: Bruno Voidey.";

	document.getElementById("texteChien").innerHTML = "Identity and communication for the exhibition «&nbsp;Après-midi de chien&nbsp;» by Collectif Portail, from August 25th to September 10th, 2023 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of nine young artists, whose some were made during a three-week residency. It is the sixth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("texteMobileChien").innerHTML = "Identity and communication for the exhibition «&nbsp;Après-midi de chien&nbsp;» by Collectif Portail, from August 25th to September 10th, 2023 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of nine young artists, whose some were made during a three-week residency. It is the sixth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("infosChien").innerHTML = "A3 poster<br>Risography printing<br>50 copies<br><br>Flyer 148&nbsp;×&nbsp;420 mm<br>Risography<br>300 copies";
	document.getElementById("categorieChien").innerHTML = "VISUAL IDENTITY";
	document.getElementById("categorieMobileChien").innerHTML = "VISUAL IDENTITY";

	document.getElementById("texteBourbon").innerHTML = "Poster for Joris Creuze and Sylvain Owelle's exhibition «&nbsp;Trois petits tours et puis s'en vont&nbsp;» in Saint-Nazaire church and musuem, in Bourbon-Lancy, France, from May 13th to September 3rd, 2023. As the artists use architectural and folkloric elements of the town of Bourbon-Lancy in the exhibition, graphic details referring to the gargoyles and signs of the town's historic center are scattered throughout the poster like a hide-and-seek game.";
	document.getElementById("texteMobileBourbon").innerHTML = "Poster for Joris Creuze and Sylvain Owelle's exhibition «&nbsp;Trois petits tours et puis s'en vont&nbsp;» in Saint-Nazaire church and musuem, in Bourbon-Lancy, France, from May 13th to September 3rd, 2023. As the artists use architectural and folkloric elements of the town of Bourbon-Lancy in the exhibition, graphic details referring to the gargoyles and signs of the town's historic center are scattered throughout the poster like a hide-and-seek game.";
	document.getElementById("infosBourbon").innerHTML = "";
	document.getElementById("categorieBourbon").innerHTML = "POSTER";
	document.getElementById("categorieMobileBourbon").innerHTML = "POSTER";

	/* 	document.getElementById("texteFlaur").innerHTML = "Art direction of the Dijon-based band FLAUR's EP <i>Hold On</i>.";
		document.getElementById("texteMobileFlaur").innerHTML = "Art direction of the Dijon-based band FLAUR's EP <i>Hold On</i>.";
		document.getElementById("infosFlaur").innerHTML = "";
		document.getElementById("categorieFlaur").innerHTML = "ART DIRECTION";
		document.getElementById("categorieMobileFlaur").innerHTML = "ART DIRECTION"; */

	document.getElementById("texteBataille").innerHTML = "Initiation workshop to risograph printing made with 1st, 2nd and 4th years students of the École Media Art of Chalon-sur-Saône.<br>The students produced monochrome images using cut-out paper, which were then printed in risography. As the week progressed, they created superimpositions between all their compositions, to confront, by chance and by combination, the different printed images.";
	document.getElementById("texteMobileBataille").innerHTML = "Initiation workshop to risograph printing made with 1st, 2nd and 4th years students of the École Media Art of Chalon-sur-Saône.<br>The students produced monochrome images using cut-out paper, which were then printed in risography. As the week progressed, they created superimpositions between all their compositions, to confront, by chance and by combination, the different printed images.";
	document.getElementById("infosBataille").innerHTML = "On an invitation from Bruno Voidey.";

	document.getElementById("texteHoldOn").innerHTML = "Music video for the song <i>Hold On</i> from the Dijon-based band FLAUR, co-directed with Félix Pommier.";
	document.getElementById("texteMobileHoldOn").innerHTML = "Music video for the song <i>Hold On</i> from the Dijon-based band FLAUR, co-directed with Félix Pommier.";
	document.getElementById("infosHoldOn").innerHTML = "Illustration, art direction ansd scenario&nbsp;: Julian Lagoutte<br><br>Animation&nbsp;: Félix Pommier<br><br>Music by FLAUR<br><br>Watch the music video <a class='link' href='https://www.youtube.com/watch?v=5bjfj79tZSA' target='_blank'>here</a>.";
	document.getElementById("categorieHoldOn").innerHTML = "VIDEO";
	document.getElementById("categorieMobileHoldOn").innerHTML = "VIDEO";

	document.getElementById("texteOrage").innerHTML = "Identity and communication for the exhibition «&nbsp;Y'a de l'orage&nbsp;» by Collectif Portail, from August 19th to September 4th, 2022 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of nine young artists, whose some were made during a three-week residency. It is the fifth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("texteMobileOrage").innerHTML = "Identity and communication for the exhibition «&nbsp;Y'a de l'orage&nbsp;» by Collectif Portail, from August 19th to September 4th, 2022 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of nine young artists, whose some were made during a three-week residency. It is the fifth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("infosOrage").innerHTML = "A3 poster<br>Risography printing<br>50 copies<br><br>Flyer 148&nbsp;×&nbsp;420 mm<br>Risography printing<br>200 copies";
	document.getElementById("categorieOrage").innerHTML = "VISUAL IDENTITY";
	document.getElementById("categorieMobileOrage").innerHTML = "VISUAL IDENTITY";

	document.getElementById("texteSunflower").innerHTML = "Animated music video for the song <i>Sunflower</i> from the Dijon-based band FLAUR. The song is about travelling and discovering the unknown as the video follows the wanderings of a characters through a fantastic and dreamy world.";
	document.getElementById("texteMobileSunflower").innerHTML = "Animated music video for the song <i>Sunflower</i> from the Dijon-based band FLAUR. The song is about travelling and discovering the unknown as the video follows the wanderings of a characters through a fantastic and dreamy world.";
	document.getElementById("infosSunflower").innerHTML = "Music by FLAUR<br><br>Watch the music video <a class='link' href='https://www.youtube.com/watch?v=mQ_dYY3_0VA' target='_blank'>here</a>.";
	document.getElementById("categorieSunflower").innerHTML = "VIDEO";
	document.getElementById("categorieMobileSunflower").innerHTML = "VIDEO";

	document.getElementById("texteAstro").innerHTML = "An astronomer who complains about the monotony of the sky, who plays golf with stars fallen from the sky, or who accuses a black hole of having eaten his meal... Some common situations which could probably happen in the circular comic strip <i>Les Astronomes</i>. By turning the discs which compose the strip, the reader combines the different boxes in order to create his own stories and generate more or less silly situations.<br><br> This publication is the result of a one-week residency at Tache Papier in Dijon and is part of my researches on volvelles, this rotative objects used from the 15th century in astronomy books or sky maps. I re-use the principle of these objects and add a narrative dimension to them.<br><br><i>Les astronomes</i> was published by Tache Papier and was printed in 30 copies, as part of a residency at Tache Papier. To accompany the launch of the edition, I also imagined an interactive exhibition made by wall discs, which could be manipulated freely by the visitors.";
	document.getElementById("texteMobileAstro").innerHTML = "An astronomer who complains about the monotony of the sky, who plays golf with stars fallen from the sky, or who accuses a black hole of having eaten his meal... Some common situations which could probably happen in the circular comic strip <i>Les Astronomes</i>. By turning the discs which compose the strip, the reader combines the different boxes in order to create his own stories and generate more or less silly situations.<br><br> This publication is the result of a one-week residency at Tache Papier in Dijon and is part of my researches on volvelles, this rotative objects used from the 15th century in astronomy books or sky maps. I re-use the principle of these objects and add a narrative dimension to them.<br><br><i>Les astronomes</i> was published by Tache Papier and was printed in 30 copies, as part of a residency at Tache Papier. To accompany the launch of the edition, I also imagined an interactive exhibition made by wall discs, which could be manipulated freely by the visitors.";
	document.getElementById("infosAstro").innerHTML = "320&nbsp;×&nbsp;320&nbsp;mm<br>Risography (disc) et silkscreen printing (sleeve)<br><br>1st edition&nbsp;:<br>March 2022<br>30 copies<br><br>2nd edition&nbsp;:<br>Septembrer 2023<br>60 copies";
	document.getElementById("categorieAstro").innerHTML = "PUBLICATION";
	document.getElementById("categorieMobileAstro").innerHTML = "PUBLICATION";

	document.getElementById("texteVapeur").innerHTML = "Illustration of the 2021-2022 season of La Vapeur, the contemporary music scene of Dijon.";
	document.getElementById("texteMobileVapeur").innerHTML = "Illustration of the 2021-2022 season of La Vapeur, the contemporary music scene of Dijon.";
	document.getElementById("infosVapeur").innerHTML = "Graphic design&nbsp;: Trafik<br><br>A different Pantone was used each trimester to print the programmes and the A3 posters.";

	document.getElementById("texteGrandDej").innerHTML = "Poster for the 2021 edition of Le Grand Dej', the annual meeting for Dijon's associations, co-organised by La Ligue de l'enseignement de Côte-d'Or and the Fédération Régionale des MJC de Bourgogne-Franche-Comté.";
	document.getElementById("texteMobileGrandDej").innerHTML = "Poster for the 2021 edition of Le Grand Dej', the annual meeting for Dijon's associations, co-organised by La Ligue de l'enseignement de Côte-d'Or and the Fédération Régionale des MJC de Bourgogne-Franche-Comté.";
	document.getElementById("infosGrandDej").innerHTML = "Commission for Tache Papier<br><br>Poster 1200&nbsp;×&nbsp;1760&nbsp;mm";
	document.getElementById("categorieGrandDej").innerHTML = "POSTER";
	document.getElementById("categorieMobileGrandDej").innerHTML = "POSTER";

	document.getElementById("texteTrous").innerHTML = "Identity and communication for the exhibition «&nbsp;Des trous dans les murs&nbsp;» by Collectif Portail, from August 28th to September 12th, 2021 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of eleven young artists, whose some were made during a three-week residency. It is the fourth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("texteMobileTrous").innerHTML = "Identity and communication for the exhibition «&nbsp;Des trous dans les murs&nbsp;» by Collectif Portail, from August 28th to September 12th, 2021 in Chagny, France. The exhibition, supported by the FRAC Bourgogne, includes works of eleven young artists, whose some were made during a three-week residency. It is the fourth in a series of exhibitions organised by Collectif Portail every summer since 2018.";
	document.getElementById("infosTrous").innerHTML = "A3 poster<br>Risography printing<br>50 copies<br><br>Flyer 148&nbsp;×&nbsp;420 mm<br>Risography<br>300 copies";
	document.getElementById("categorieTrous").innerHTML = "VISUAL IDENTITY";
	document.getElementById("categorieMobileTrous").innerHTML = "VISUAL IDENTITY";

	document.getElementById("texteVoeux").innerHTML = "2021 new year greetings card for the École Supérieure d'Art et Design •Grenoble •Valence.";
	document.getElementById("texteMobileVoeux").innerHTML = "2021 new year greetings card for the École Supérieure d'Art et Design •Grenoble •Valence.";
	document.getElementById("infosVoeux").innerHTML = "210&nbsp;×&nbsp;148 mm<br>Offset print<br>Pantone Blue 072 U and 7753 U<br>1000 copies<br><br>In collaboration with Ariane Corfmat and Sirima de Rességuier";
	document.getElementById("titreVoeux").innerHTML = "ÉSAD •GV greetings";

	document.getElementById("texteDisco").innerHTML = "<i>Disco-graphiques</i> is a series of workshops for kids and teens conceived for La Fabrique, from December 21, 2019 to March 1, 2020 at the Centre Georges Pompidou in Paris.<br><br>Through these workshops, I introduce the participants of the principles of parametric design and offer them to reinterpret the graphic vocabulary of fireworks and volvelles. Using digital application and shapes directory that I prepared for them, and using the laser cutter, they make graphic, playful and contemplative compositions, based on circle and rotation.";
	document.getElementById("texteMobileDisco").innerHTML = "<i>Disco-graphiques</i> is a series of workshops for kids and teens conceived for La Fabrique, from December 21, 2019 to March 1, 2020 at the Centre Georges Pompidou in Paris.<br><br>Through these workshops, I introduce the participants of the principles of parametric design and offer them to reinterpret the graphic vocabulary of fireworks and volvelles. Using digital application and shapes directory that I prepared for them, and using the laser cutter, they make graphic, playful and contemplative compositions, based on circle and rotation.";
	document.getElementById("infosDisco").innerHTML = "In partnership with the magazine Étapes: around the issue dedicated to the young graduates.<br><br>The presentation video and interview is visible <a class='link' href='https://www.youtube.com/watch?v=1o3sNlTkldQ' target='_blank'>here</a>";
	document.getElementById("categorieDisco").innerHTML = "WORKSHOPS";
	document.getElementById("categorieMobileDisco").innerHTML = "WORKSHOPS";

	document.getElementById("texteTohuBohu").innerHTML = "Tohu-bohu is a typeface at the border between letter and sign. It is composed of two types of elements, «&nbsp;full&nbsp;» and «&nbsp;corners&nbsp;», which are exchangeable in order to modify the drawing of the letters. With a set of 20 full elements and 20 corners elements, Tohu-bohu has 400 potential variations. The combination of the modules and the construction of the letters is done during the entry, thanks to a system of ligatures (see demo video).";
	document.getElementById("texteMobileTohuBohu").innerHTML = "Tohu-bohu is a typeface at the border between letter and sign. It is composed of two types of elements, «&nbsp;full&nbsp;» and «&nbsp;corners&nbsp;», which are exchangeable in order to modify the drawing of the letters. With a set of 20 full elements and 20 corners elements, Tohu-bohu has 400 potential variations. The combination of the modules and the construction of the letters is done during the entry, thanks to a system of ligatures (see demo video).";
	document.getElementById("infosTohuBohu").innerHTML = "Watch the demonstration video <a class='link' href='https://vimeo.com/user73764747' target='_blank'>here</a>.<br><br>Specimen&nbsp;: 230&nbsp;×&nbsp;320 mm, 28 pages<br>Digital printing";
	document.getElementById("categorieTohuBohu").innerHTML = "TYPEFACE";
	document.getElementById("categorieMobileTohuBohu").innerHTML = "TYPEFACE";

	document.getElementById("texteVoyeurs").innerHTML = "Design of the publication of the École Supérieure d'Art et Design •Grenoble •Valence for the 3rd edition of the biennale Exemplaires, from March 23 to April 28, 2019 in Rennes. Each art school which contributed to the event had to present, throught a publication and an exhibition, a selection of six French-speaking books published in the last five years, judged as exemplary, regarding their graphical qualities or their purpose.<br><br>The selection made by the ÉSAD •Valence students for this 2019 edition, titled <i>Voyeurs</i>, focused on the question of the book as a way to show and diffuse images. Whether collected, fragmented, recomposed, or even manipulated, what is book doing to images&nbsp;? What are images doing to book&nbsp;?<br><br>The publication plays with these two questions by requiring the reader to make a choice&nbsp;: making readable the text or the image. The book presents itself as a poster and the disposition of the pages on the verso makes it difficult to read the text. Only the image on the recto, which shows all the cited and selected books, is entirely visible. To read the text, the reader has to cut and reassemble the publication, and sacrifice the image.";
	document.getElementById("texteMobileVoyeurs").innerHTML = "Design of the publication of the École Supérieure d'Art et Design •Grenoble •Valence for the 3rd edition of the biennale Exemplaires, from March 23 to April 28, 2019 in Rennes. Each art school which contributed to the event had to present, throught a publication and an exhibition, a selection of six French-speaking books published in the last five years, judged as exemplary, regarding their graphical qualities or their purpose.<br><br>The selection made by the ÉSAD •Valence students for this 2019 edition, titled <i>Voyeurs</i>, focused on the question of the book as a way to show and diffuse images. Whether collected, fragmented, recomposed, or even manipulated, what is book doing to images&nbsp;? What are images doing to book&nbsp;?<br><br>The publication plays with these two questions by requiring the reader to make a choice&nbsp;: making readable the text or the image. The book presents itself as a poster and the disposition of the pages on the verso makes it difficult to read the text. Only the image on the recto, which shows all the cited and selected books, is entirely visible. To read the text, the reader has to cut and reassemble the publication, and sacrifice the image.";
	document.getElementById("infosVoyeurs").innerHTML = "Fold-out book&nbsp;: 920&nbsp;×&nbsp;650 mm<br>Shaped book&nbsp;: 81&nbsp;×&nbsp;115 mm, 64 pages<br>Offset printing<br>600 copies<br><br>In collaboration with Ariane Corfmat, Solène Lautridou and Céline Renault";
	document.getElementById("categorieVoyeurs").innerHTML = "PUBLICATION";
	document.getElementById("categorieMobileVoyeurs").innerHTML = "PUBLICATION";

	document.getElementById("texteMemoire").innerHTML = "Play could not only be a marginal activity everyone does for their own pleasure. This word of three letters, which seems so obvious and familiar to us, is hiding a complexity of interlaced notions. In this thesis I tried to examine this complicity, questioning the too common analogy between play and entertainment, to ask myself&nbsp;: what if graphic design could be played&nbsp;?<br><br>I try then, as a play explorer, to identify the playability of graphic design. How can a designer play his practice and how can this be used as a working methodology&nbsp;?";
	document.getElementById("texteMobileMemoire").innerHTML = "Play could not only be a marginal activity everyone does for their own pleasure. This word of three letters, which seems so obvious and familiar to us, is hiding a complexity of interlaced notions. In this thesis I tried to examine this complicity, questioning the too common analogy between play and entertainment, to ask myself&nbsp;: what if graphic design could be played&nbsp;?<br><br>I try then, as a play explorer, to identify the playability of graphic design. How can a designer play his practice and how can this be used as a working methodology&nbsp;?";
	document.getElementById("infosMemoire").innerHTML = "160&nbsp;×&nbsp;230&nbsp;mm, 96 pages<br>Digital printing<br>8 copies<br><br>Available to read in PDF <a class='link' href='DOCS/Julian_Lagoutte_-_L'aventure_du_jeu.pdf' target='_blank'>here</a>.";
	document.getElementById("categorieMemoire").innerHTML = "MASTER THESIS";
	document.getElementById("categorieMobileMemoire").innerHTML = "MASTER THESIS";

	document.getElementById("texteJpo").innerHTML = "Communication for the 2018 open days at École Supérieure d'Art et Design •Grenoble •Valence, including a series of posters, postcards and the redesign of the home page of the school's website.";
	document.getElementById("texteMobileJpo").innerHTML = "Communication for the 2018 open days at École Supérieure d'Art et Design •Grenoble •Valence, including a series of posters, postcards and a temporary home page for the school's website.";
	document.getElementById("infosJpo").innerHTML = "A3 and A1 posters<br>Risography (A3) and silkscreen printing (A1)<br><br>In collaboration with Solène Lautridou and Sebastian Schmitt";
	document.getElementById("categorieJpo").innerHTML = "VISUAL IDENTITY";
	document.getElementById("categorieMobileJpo").innerHTML = "VISUAL IDENTITY";
	document.getElementById("titreJpo").innerHTML = "ÉSAD •GV open days";

	document.getElementById("texteLimo").innerHTML = "Design and development of the Asso Limo's website, a publisher founded by Samuel Eckert in 2016. This is a platform where consulting the books published by the publisher becomes a source of entertainment and play.";
	document.getElementById("texteMobileLimo").innerHTML = "Design and development of the Asso Limo's website, a publisher founded by Samuel Eckert in 2016. This is a platform where consulting the books published by the publisher becomes a source of entertainment and play.";
	document.getElementById("infosLimo").innerHTML = "In collaboration with Samuel Eckert";

	document.getElementById("texteDisques").innerHTML = "Illustrations created in a circular format and assembled so that they can be rotated to produce an animation, a short story or a graphic game, in the style of the pop-ups. This series of objects forms a project called Les Disques Illustrés, which was inspired by systems of paper discs, called <i>volvelles</i>, originally used in astronomy books.";
	document.getElementById("texteMobileDisques").innerHTML = "Illustrations created in a circular format and assembled so that they can be rotated to produce an animation, a short story or a graphic game, in the style of the pop-ups. This series of objects forms a project called Les Disques Illustrés, which was inspired by systems of paper discs, called <i>volvelles</i>, originally used in astronomy books.";
	document.getElementById("infosDisques").innerHTML = "Website of the project here&nbsp;:<br><a class='link' href='https://les-disques-illustres.fr/index.html' target='_blank'>www.les-disques-illustres.fr</a>";
	document.getElementById("categorieDisques").innerHTML = "EDITION";
	document.getElementById("categorieMobileDisques").innerHTML = "EDITION";
	document.getElementById("commanditaireDisques").innerHTML = "PERSONAL PROJECT";

	document.getElementById("bio").innerHTML = "<span class='introAbout'>Julian Lagoutte, graphic designer and illustrator based in Dijon, France, graduated from the ÉSAD •Valence in 2019.</span><br><br>I create visual identities, posters, publications, websites and illustrations. I consider graphic design and illustration as complementary in my work.<br><br>My knowledge in traditional and artisanal printing processes allows me to propose relevant, thoughtful projects, and in tune with their context, and create singular and sensitive objects. Concerned with the pedagogical appraoch of graphic design, I also work on the conception and animation of workshops.";

	document.getElementById("texteAbout1").innerHTML = "• <i>Les astronomes</i>, publication at Éditions du Tache Papier, 2022.<br><br>• Publication in <i>Étapes:</i> n°252, «&nbsp;Écoles d'art et de design&nbsp;: 30 diplômes&nbsp;», Pyramid Editions, 2019<br><br>• <i>Voyeurs</i>, collective publication from ÉSAD •Valence as part of the biennale «&nbsp;Exemplaires, formes et pratiques de l'édition contemporaine&nbsp;», Rennes, 2019.<br><br>• Contribution to the book <i>Ficciones Typografika 1642</i> by Erik Brandt, Ben DuVall and Paul Schmelzer, Formist Editions, 2019.";

	document.getElementById("sousTitreAbout2").innerHTML = "EXHIBITIONS AND INTERVENTIONS";
	document.getElementById("texteAbout2").innerHTML = "• Workshop «&nbsp;Bataille risographique&nbsp;», École Média Art de Chalon-sur-Saône, 2023.<br><br>• <i>Les astronomes</i>, personal exhibition, Tache Papier, Dijon, 2022.<br><br>• Workshop «&nbsp;histoireDeFormes&nbsp;», École Média Art de Chalon-sur-Saône, 2021.<br><br>• <i>Popweb</i>, collective exhibition under the direction of Dominique Cunin, Lux Scène Nationale de Valence, 2017.<br><br>• <i>Une cartographie de la recherche en design graphique</i>, Le Signe, Chaumont, 2017.";

	document.getElementById("texteAbout3").innerHTML = "• <a class='link' href='https://www.kiblind.com/articles/decryptage-nos-clips-animes-preferes-davril/' target='_blank'>Kiblind</a>, 2022.<br><br>• <a class='link' href='https://youtu.be/1o3sNlTkldQ' target='_blank'>Centre Georges Pompidou</a>, 2019.";

	document.getElementById("sousTitreAbout4").innerHTML = "SELF-INITIATED PROJECTS";
	document.getElementById("texteAbout4").innerHTML = "<a class='link' href='https://les-disques-illustres.fr/' target='_blank'>Les Disques Illustrés</a><br><br>Les Disques Illustrés is a publication project which was inspired by <i>volvelles</i>, paper discs used in 15th-century astronomy books to calculate and represent cosmic phenomena. I use these rotation systems to produce animated and playful illustrations, either on my own or in collaboration with other artists.";

	document.getElementById("categorieAbout").innerHTML = "CREDITS";
	document.getElementById("credits1").innerHTML = "Web design and development by Julian Lagoutte.<br>Font&nbsp;: Hershey Noailles by Luuse.<br>Every picture of this website was made by Julian Lagoutte, except for <i>Discographiques</i> whose pictures, as well as the presentation video, were produced by the Centre Georges Pompidou.";
	document.getElementById("credits2").innerHTML = "<u>Legal Notice</u><br>Any reproduction, in whole or in part, of these pictures or any element of this website is strictly prohibited without any permission from the author.<br>Last update&nbsp;: February 2024.<br>© Julian Lagoutte 2018-2024";
	document.getElementById("titreCreditsMobile").innerHTML = "CREDITS";
	document.getElementById("creditsMobile").innerHTML = "Web design and development by Julian Lagoutte.<br>Font&nbsp;: Hershey Noailles by Luuse.<br><br>Every picture of this website was made by Julian Lagoutte, except for <i>Discographiques</i> whose pictures, as well as the presentation video, were produced by the Centre Georges Pompidou.<br><br><u>Legal Notice</u><br><br>Any reproduction, in whole or in part, of these pictures or any element of this website is strictly prohibited without any permission from the author.<br>Last update&nbsp;: February 2024.<br>© Julian Lagoutte 2018-2024";

	document.getElementById("adresses1").innerHTML = "Contact me for your project or to ask to collaborate together&nbsp;:";
	document.getElementById("adresses2").innerHTML = "<a href='mailto:bonjour@julianlagoutte.fr'>bonjour@julianlagoutte.fr</a><br>+33(0)6.69.25.21.53<br>44 rue des Forges, Dijon, FR";
	document.getElementById("adresseMobile").innerHTML = "Contact me for your project or to ask to collaborate together&nbsp;:<br><br><a href='mailto:bonjour@julianlagoutte.fr'>bonjour@julianlagoutte.fr</a><br>+33(0)6.69.25.21.53<br>44 rue des Forges, Dijon, FR";
	document.getElementById("suivez").innerHTML = "FOLLOW ME";
	document.getElementById("aussi").innerHTML = "ALSO ON";
	document.getElementById("suivezMobile").innerHTML = "FOLLOW ME ALSO ON";

	document.getElementById("categorieBoutique").innerHTML = "RISOGRAPHY";
	document.getElementById("infosBoutique").innerHTML = "To place an order, send a message with the titles and the quantities you want to <a class='link' href='mailto:julian.lagoutte@gmail.com'>julian.lagoutte@gmail.com</a><br><br>International shipping<br>Payment by Paypal";
	document.getElementById("categorieBoutiqueMobile").innerHTML = "To place an order, send a message with the titles and the quantities you want to <a class='link' href='mailto:julian.lagoutte@gmail.com'>julian.lagoutte@gmail.com</a>";
	document.getElementById("anneeBoutiqueMobile").innerHTML = "International shipping, payment by Paypal";

	document.getElementById("texteTrous").innerHTML = "<div class='sousTitreAbout'>TROUS — 15€</div><p class='texteAbout'>A4 risograph print, 4 colours, on 240g Munken Rough paper.<br>Limited edition of 30 signed and numbered copies.</p>";
	document.getElementById("texteComete").innerHTML = "<div class='sousTitreAbout'>L'ARRIVÉE DE LA COMÈTE — 9€</div><p class='texteAbout'>A5 risograph print, 4 colours, on 240g Munken Rough paper.<br>Limited edition of 30 signed and numbered copies.</p>";
	document.getElementById("texteNoeuds").innerHTML = "<div class='sousTitreAbout'>SAC DE NOEUDS — 9€</div><p class='texteAbout'>A5 risograph print, 2 colours, on 240g Munken Rough paper.<br>Limited edition of 30 signed and numbered copies.</p>";
	document.getElementById("texteMinigolfDamier").innerHTML = "<div class='sousTitreAbout'>MINIGOLF DAMIER — 15€</div><p class='texteAbout'>A4 risograph print, 3 colours, on 240g Munken Rough paper.<br>Limited edition of 20 signed and numbered copies.</p>";
	document.getElementById("texteMinigolfSpherique").innerHTML = "<div class='sousTitreAbout'>MINIGOLF SPHÉRIQUE — 12€</div><p class='texteAbout'>21&nbsp;×&nbsp;21 cm risograph print, 3 colours, on 240g Munken Rough paper.<br>Limited edition of 20 signed and numbered copies.</p>";
	document.getElementById("texteMinigolfSpirale").innerHTML = "<div class='sousTitreAbout'>MINIGOLF SPIRALE — 5€</div><p class='texteAbout'>Bookmark format (8,7&nbsp;×&nbsp;21 cm) risograph print, 3 colours, on 240g Munken Rough paper.<br>Limited edition of 20 signed and numbered copies.</p>";
	document.getElementById("texteCometeZigzagante").innerHTML = "<div class='sousTitreAbout'>COMÈTE ZIGZAGANTE — 25€</div><p class='texteAbout'>A3 risograph print, 3 colours, on 240g Munken Polar paper.<br>Limited edition of 10 signed and numbered copies.</p>";
	document.getElementById("texteLevitation").innerHTML = "<div class='sousTitreAbout'>LÉVITATION — 18€</div><p class='texteAbout'>29,7&nbsp;×&nbsp;29,7 cm risograph print, 2 colours, on 240g Munken Polar paper.<br>Limited edition of 15 signed and numbered copies.</p>";
	document.getElementById("texteMaison").innerHTML = "<div class='sousTitreAbout'>LA MAISON SUR LE NUAGE — 4€</div><p class='texteAbout'>Risograph printed postcard, 3 colours, on 240g Munken Polar paper.<br>Limited edition of 16 copies.</p>";
	document.getElementById("texteMinigolfHabite").innerHTML = "<div class='sousTitreAbout'>MINIGOLF HABITÉ — 9€</div><p class='texteAbout'>A5 risograph print, 3 colours, on 240g Munken Polar paper.<br>Limited edition of 10 signed and numbered copies.</p>";
	document.getElementById("texteMinigolfCone").innerHTML = "<div class='sousTitreAbout'>MINIGOLF CÔNE — 4€</div><p class='texteAbout'>Risograph printed postcard, 3 colours, on 240g Munken Polar paper.<br>Limited edition of 10 signed and numbered copies.</p>";
	document.getElementById("texteDessusDessous").innerHTML = "<div class='sousTitreAbout'>SANS DESSUS DESSOUS — 9€</div><p class='texteAbout'>A5 risograph print, 2 colours, on 240g Munken Pure paper.<br>Limited edition of 15 signed and numbered copies.</p>";
	document.getElementById("texteMontagnes").innerHTML = "<div class='sousTitreAbout'>MONTAGNE ÉNERVÉE — 25€</div><p class='texteAbout'>A3 risograph print, 4 colours, on 240g Munken Rough Pure paper.<br>Limited edition of 20 signed and numbered copies.<br>Illustration 1/2 from a collaboration with Félix Pommier.</p>";
	document.getElementById("texteFemme").innerHTML = "<div class='sousTitreAbout'>HORIZON GALBÉ — 25€</div><p class='texteAbout'>A3 risograph print, 4 colours, on 240g Munken Rough Pure paper.<br>Limited edition of 20 signed and numbered copies.<br>Illustration 2/2 from a collaboration with Félix Pommier.</p>";
	document.getElementById("texteAstronomes").innerHTML = "<div class='sousTitreAbout'>LES ASTRONOMES — 15€</div><p class='texteAbout'>Rotative comic, Les Éditions du Tache Papier, March 2022.<br>1 colour risograph print on 240g Munken Polar paper. The sticker on the sleeve is silkscreen printed.<br>Second edition (September 2023), 60 numbered copies.</p>";
	document.getElementById("texteAscension").innerHTML = "<div class='sousTitreAbout'>ASCENSION GLISSANTE — 25€</div><p class='texteAbout'>A3 risograph print, 2 colours, on 200g Fedrigoni Arena paper.<br>Limited edition of 15 signed and numbered copies.</p>";
	document.getElementById("texteColline").innerHTML = "<div class='sousTitreAbout'>COLLINE — 15€</div><p class='texteAbout'>A4 risograph print, 3 colours, on 240g Munken Cream paper.<br>Limited edition of 13 signed and numbered copies.</p>";
	document.getElementById("texteChute").innerHTML = "<div class='sousTitreAbout'>LA CHUTE — 9€</div><p class='texteAbout'>A5 risograph print, 1 colour, on 240g Munken Cream paper.<br>Limited edition of 15 signed and numbered copies.</p>";

	var retour = document.getElementsByClassName("retour");
	var r;

	for (r = 0; r < retour.length; r++) {
		retour[r].innerHTML = "BACK";
	}
};


function francais() {
	count = 0;
	document.getElementById("langue").innerHTML = "FRA";
	document.getElementById("aboutLink").innerHTML = "À PROPOS";
	document.getElementById("newsLink").innerHTML = "ACTUALITÉS";
	document.getElementById("voeuxLink").innerHTML = "Vœux ÉSAD •GV";
	document.getElementById("jpoLink").innerHTML = "Portes ouvertes ÉSAD •GV";

	document.getElementById("texteBoutique").style.display = "block";
	document.getElementById("texteBoutiqueAnglais").style.display = "none";
	document.getElementById("couleurs").style.display = "block";
	document.getElementById("couleursAnglais").style.display = "none";


	document.getElementById("texteMagnin").innerHTML = "Conception de l'affiche annonçant la gratuité du Musée national Magnin. Afin d'inciter un public plus jeune et plus familial à aller découvrir cet hôtel particulier et ses tableaux, l'affiche se voulait conviviale et colorée, et montre une image idéalisée de la cour intérieure du musée, en mélangeant photographie, peinture et typographie manuscrite. Elle est diffusée sur plusieurs mois à Dijon et en Bourgogne-Franche-Comté sur de multiples supports, tel que flyers, affiches en grand format et magazines.";
	document.getElementById("texteMobileMagnin").innerHTML = "Conception de l'affiche annonçant la gratuité du Musée national Magnin. Afin d'inciter un public plus jeune et plus familial à aller découvrir cet hôtel particulier et ses tableaux, l'affiche se voulait conviviale et colorée, et montre une image idéalisée de la cour intérieure du musée, en mélangeant photographie, peinture et typographie manuscrite. Elle est diffusée sur plusieurs mois à Dijon et en Bourgogne-Franche-Comté sur de multiples supports, tel que flyers, affiches en grand format et magazines.";
	document.getElementById("infosMagnin").innerHTML = "Affiches 1200&nbsp;×&nbsp;1750&nbsp;mm<br>Affiche 590&nbsp;×&nbsp;790&nbsp;mm<br>Affiches A3<br>Flyers A5";

	document.getElementById("texteLycee").innerHTML = "Résidence au lycée Carnot à Dijon, dans le cadre du dispositif «&nbsp;Artistes plasticiens au lycée&nbsp;», initié par la Région Bourgogne-Franche-Comté. Nous avons fabriqué, avec un groupe de lycéens, une installation mobile prenant la forme d'une carte du ciel à grande échelle, qui a été installée dans l'établissement pour être manipulé par ses usagers. Les élèves ont imaginé des formes rappelant des planètes et autres corps célèstes à l'aide de différentes techniques de dessin, puis chaque pièce a été peinte, sérigraphiée puis assemblée pour construire cette table d'orientation planétaire.";
	document.getElementById("texteMobileLycee").innerHTML = "Résidence au lycée Carnot à Dijon, dans le cadre du dispositif «&nbsp;Artistes plasticiens au lycée&nbsp;», initié par la Région Bourgogne-Franche-Comté. Nous avons fabriqué, avec un groupe de lycéens, une installation mobile prenant la forme d'une carte du ciel à grande échelle, qui a été installée dans l'établissement pour être manipulé par ses usagers. Les élèves ont imaginé des formes rappelant des planètes et autres corps célèstes à l'aide de différentes techniques de dessin, puis chaque pièce a été peinte, sérigraphiée puis assemblée pour construire cette table d'orientation planétaire.";
	document.getElementById("infosLycee").innerHTML = "Projet coordonné par Tache Papier<br><br>Dimensions de l'installation&nbsp;:<br>1,60&nbsp;m (diamètre)&nbsp;×&nbsp;0,80&nbsp;m (hauteur)";

	document.getElementById("texteJeux").innerHTML = "Conception de la carte voeux de La Madeleine, scène conventionnée de Troyes, pour l'année 2024. Elle se plie dans un sens ou dans l'autre pour marquer le passage à la nouvelle année et combiner les silhouettes avec leur masque.";
	document.getElementById("texteMobileJeux").innerHTML = "Conception de la carte voeux de La Madeleine, scène conventionnée de Troyes, pour l'année 2024. Elle se plie dans un sens ou dans l'autre pour marquer le passage à la nouvelle année et combiner les silhouettes avec leur masque.";
	document.getElementById("infosJeux").innerHTML = "200&nbsp;×&nbsp;200&nbsp;mm<br>200 exemplaires";

	document.getElementById("texteMadeleine").innerHTML = "Illustration de la saison 2023-2024 de La Madeleine, scène conventionnée de Troyes. Ce travail est toujours en cours et déploit une multitude de silhouettes masquées à travers le programme des spectacles, la signalétique du lieu et ses supports de communication.";
	document.getElementById("texteMobileMadeleine").innerHTML = "Illustration de la saison 2023-2024 de La Madeleine, scène conventionnée de Troyes. Ce travail est toujours en cours et déploit une multitude de silhouettes masquées à travers le programme des spectacles, la signalétique du lieu et ses supports de communication.";
	document.getElementById("infosMadeleine").innerHTML = "Graphisme&nbsp;: Bruno Voidey.";

	document.getElementById("texteChien").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Après-midi de chien&nbsp;» initiée par Collectif Portail, du 25 août au 10 septembre 2023 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de neuf jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 6e d'une série d'expositions et résidences organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("texteMobileChien").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Après-midi de chien&nbsp;» initiée par Collectif Portail, du 25 août au 10 septembre 2023 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de neuf jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 6e d'une série d'expositions et résidences organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("infosChien").innerHTML = "Affiche A3<br>Impression risographie<br>50 exemplaires<br><br>Dépliant 148&nbsp;×&nbsp;420&nbsp;mm<br>Impression risographie<br>300 exemplaires";
	document.getElementById("categorieChien").innerHTML = "IDENTITÉ VISUELLE";
	document.getElementById("categorieMobileChien").innerHTML = "IDENTITÉ VISUELLE";

	document.getElementById("texteBourbon").innerHTML = "Affiche de l'exposition «&nbsp;Trois petits tours et puis s'en vont&nbsp;» par Joris Creuze et Sylvain Owelle dans l'Église-Musée Saint-Nazaire de Bourbon-Lancy, du 13 mai au 3 septembre 2023. De la même manière que les artistes reprennent des éléments architecturaux et folkloriques de la ville de Bourbon-Lancy au sein de l'exposition, des détails graphiques, faisant référence aux gargouilles et enseignes du centre historique de la ville, sont disséminés dans l'affiche tel un jeu de cache-cache.";
	document.getElementById("texteMobileBourbon").innerHTML = "Affiche de l'exposition «&nbsp;Trois petits tours et puis s'en vont&nbsp;» par Joris Creuze et Sylvain Owelle dans l'Église-Musée Saint-Nazaire de Bourbon-Lancy, du 13 mai au 3 septembre 2023. De la même manière que les artistes reprennent des éléments architecturaux et folkloriques de la ville de Bourbon-Lancy au sein de l'exposition, des détails graphiques, faisant référence aux gargouilles et enseignes du centre historique de la ville, sont disséminés dans l'affiche tel un jeu de cache-cache.";
	document.getElementById("infosBourbon").innerHTML = "";
	document.getElementById("categorieBourbon").innerHTML = "AFFICHE";
	document.getElementById("categorieMobileBourbon").innerHTML = "AFFICHE";

	/* document.getElementById("texteFlaur").innerHTML = "Direction artistique de l'EP <i>Hold On</i> On du groupe dijonnais FLAUR.";
	document.getElementById("texteMobileFlaur").innerHTML = "Direction artistique de l'EP <i>Hold On</i> On du groupe dijonnais FLAUR.";
	document.getElementById("infosFlaur").innerHTML = "";
	document.getElementById("categorieFlaur").innerHTML = "DIRECTION ARTISTIQUE";
	document.getElementById("categorieMobileFlaur").innerHTML = "DIRECTION ARTISTIQUE"; */

	document.getElementById("texteBataille").innerHTML = "Workshop mené auprès d'étudiant•e•s de 1ère, 2e et 4e années à l'École Média Art de Chalon-sur-Saône autour de la risographie.<br>Les étudiant•e•s ont produit des images monochromes à l'aide de papier découpé, qui étaient ensuite imprimées en risographie. Iels ont, au fur et à mesure de la semaine, créé des surimpressions entre toutes leurs compositions, pour confronter, au gré du hasard et des combinaisons, les différentes images imprimées.";
	document.getElementById("texteMobileBataille").innerHTML = "Workshop mené auprès d'étudiant•e•s de 1ère, 2e et 4e années à l'École Média Art de Chalon-sur-Saône autour de la risographie.<br>Les étudiant•e•s ont produit des images monochromes à l'aide de papier découpé, qui étaient ensuite imprimées en risographie. Iels ont, au fur et à mesure de la semaine, créé des surimpressions entre toutes leurs compositions, pour confronter, au gré du hasard et des combinaisons, les différentes images imprimées.";
	document.getElementById("infosBataille").innerHTML = "Sur une invitation de Bruno Voidey.";

	document.getElementById("texteHoldOn").innerHTML = "Clip pour la chanson <i>Hold On</i> du groupe dijonnais FLAUR, co-réalisé avec Félix Pommier.";
	document.getElementById("texteMobileHoldOn").innerHTML = "Clip pour la chanson <i>Hold On</i> du groupe dijonnais FLAUR, co-réalisé avec Félix Pommier.";
	document.getElementById("infosHoldOn").innerHTML = "Illustration, direction artistique et scénario&nbsp;: Julian Lagoutte<br><br>Animation&nbsp;: Félix Pommier<br><br>Musique par FLAUR<br><br>Le clip est visible <a class='link' href='https://www.youtube.com/watch?v=5bjfj79tZSA' target='_blank'>ici</a>.";
	document.getElementById("categorieHoldOn").innerHTML = "VIDÉO";
	document.getElementById("categorieMobileHoldOn").innerHTML = "VIDÉO";

	document.getElementById("texteOrage").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Y'a de l'orage&nbsp;» initiée par Collectif Portail, et qui s'est tenue du 19 août au 4 septembre 2022 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de neuf jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 5e d'une série d'expositions organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("texteMobileOrage").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Y'a de l'orage&nbsp;» initiée par Collectif Portail, et qui s'est tenue du 19 août au 4 septembre 2022 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de neuf jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 5e d'une série d'expositions organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("infosOrage").innerHTML = "Affiche A3<br>Impression risographie <br>50 exemplaires<br><br>Dépliant 148&nbsp;×&nbsp;420 mm<br>Impression risographie<br>200 exemplaires";
	document.getElementById("categorieOrage").innerHTML = "IDENTITÉ VISUELLE";
	document.getElementById("categorieMobileOrage").innerHTML = "IDENTITÉ VISUELLE";

	document.getElementById("texteSunflower").innerHTML = "Clip animé pour la chanson <i>Sunflower</i> du groupe dijonnais FLAUR. La chanson aborde les thèmes du voyage et de la découverte de l'inconnue et le clip suit les déambulations d'un personnage à travers un monde fantastique et onirique.";
	document.getElementById("texteMobileSunflower").innerHTML = "Clip animé pour la chanson <i>Sunflower</i> du groupe dijonnais FLAUR. La chanson aborde les thèmes du voyage et de la découverte de l'inconnue et le clip suit les déambulations d'un personnage à travers un monde fantastique et onirique.";
	document.getElementById("infosSunflower").innerHTML = "Musique par FLAUR<br><br>Le clip est visible <a class='link' href='https://www.youtube.com/watch?v=mQ_dYY3_0VA' target='_blank'>ici</a>.";
	document.getElementById("categorieSunflower").innerHTML = "VIDÉO";
	document.getElementById("categorieMobileSunflower").innerHTML = "VIDÉO";

	document.getElementById("texteAstro").innerHTML = "Un astronome qui se plaint de la monotonie du ciel, qui joue au golf avec des étoiles tombées du ciel, ou encore qui accuse un trou noir d'avoir englouti son repas… Des situations banales qui pourraient bien se produire dans la bande dessinée circulaire <i>Les astronomes</i>. En faisant tourner les disques qui la compose, le lecteur combine les cases entre elles pour se raconter ses propres histoires et générer des situations plus ou moins incongrues.<br><br> Cette édition est le fruit d'une semaine de résidence au Tache Papier à Dijon et s'inscrit dans mes recherches autour des volvelles, des objets rotatifs utilisés à partir du XVe siècle dans les livres d'astronomie ou les cartes du ciel. Je réinterprète alors le principe de ces objets pour y injecter une dimension narrative.<br><br><i>Les astronomes</i> a été édité aux éditions du Tache Papier et a été imprimé et façonné en 30 exemplaires, dans le cadre d'une résidence au Tache Papier. Pour accompagner le lancement de l'édition, j'ai également imaginé une exposition interactive qui prolonge la bande-dessinée à travers des disques muraux, qui pouvaient être manipulés librement par les visiteurs.";
	document.getElementById("texteMobileAstro").innerHTML = "Un astronome qui se plaint de la monotonie du ciel, qui joue au golf avec des étoiles tombées du ciel, ou encore qui accuse un trou noir d'avoir englouti son repas… Des situations banales qui pourraient bien se produire dans la bande dessinée circulaire <i>Les astronomes</i>. En faisant tourner les disques qui la compose, le lecteur combine les cases entre elles pour se raconter ses propres histoires et générer des situations plus ou moins incongrues.<br><br> Cette édition est le fruit d'une semaine de résidence au Tache Papier à Dijon et s'inscrit dans mes recherches autour des volvelles, des objets rotatifs utilisés à partir du XVe siècle dans les livres d'astronomie ou les cartes du ciel. Je réinterprète alors le principe de ces objets pour y injecter une dimension narrative.<br><br><i>Les astronomes</i> a été édité aux éditions du Tache Papier et a été imprimé et façonné en 30 exemplaires, dans le cadre d'une résidence au Tache Papier. Pour accompagner le lancement de l'édition, j'ai également imaginé une exposition interactive qui prolonge la bande-dessinée à travers des disques muraux, qui pouvaient être manipulés librement par les visiteurs.";
	document.getElementById("infosAstro").innerHTML = "320&nbsp;×&nbsp;320&nbsp;mm<br>Impression risographie (disque) et sérigraphie (pochette)<br><br>1ère édition&nbsp;:<br>mars 2022<br>30 exemplaires<br><br>2nde édition&nbsp;:<br>septembre 2023<br>60 exemplaires";
	document.getElementById("categorieAstro").innerHTML = "ÉDITION";
	document.getElementById("categorieMobileAstro").innerHTML = "ÉDITION";

	document.getElementById("texteVapeur").innerHTML = "Illustration de la saison 2021-2022 de La Vapeur, scène de musiques actuelles à Dijon.";
	document.getElementById("texteMobileVapeur").innerHTML = "Illustration de la saison 2021-2022 de La Vapeur, scène de musiques actuelles à Dijon.";
	document.getElementById("infosVapeur").innerHTML = "Graphisme&nbsp;: Trafik<br><br>Un Pantone différent a été utilisé à chaque trimestre, pour l'impression des programmes et des affiches A3.";

	document.getElementById("texteGrandDej").innerHTML = "Affiche de l'édition 2021 du Grand Dej', le rendez-vous annuel des associations de Dijon, co-organisé par La Ligue de l'enseignement de Côte-d'Or et la Fédération Régionale des MJC de Bourgogne-Franche-Comté.";
	document.getElementById("texteMobileGrandDej").innerHTML = "Affiche de l'édition 2021 du Grand Dej', le rendez-vous annuel des associations de Dijon, co-organisé par La Ligue de l'enseignement de Côte-d'Or et la Fédération Régionale des MJC de Bourgogne-Franche-Comté.";
	document.getElementById("infosGrandDej").innerHTML = "Commande pour le Tache Papier<br><br>Affiche 1200&nbsp;×&nbsp;1760&nbsp;mm";
	document.getElementById("categorieGrandDej").innerHTML = "AFFICHE";
	document.getElementById("categorieMobileGrandDej").innerHTML = "AFFICHE";

	document.getElementById("texteTrous").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Des trous dans les murs&nbsp;» initiée par Collectif Portail, du 28 août au 12 septembre 2021 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de onze jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 4e d'une série d'expositions et résidences organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("texteMobileTrous").innerHTML = "Identité visuelle et communication graphique de l'exposition «&nbsp;Des trous dans les murs&nbsp;» initiée par Collectif Portail, du 28 août au 12 septembre 2021 à Chagny. L'exposition, soutenue par le FRAC Bourgogne, regroupe des pièces de onze jeunes artistes, en partie produites à l'issue de trois semaines de résidence. Elle est la 4e d'une série d'expositions et résidences organisées chaque été par Collectif Portail depuis 2018.";
	document.getElementById("infosTrous").innerHTML = "Affiche A3<br>Impression risographie<br>50 exemplaires<br><br>Dépliant 148 × 420 mm<br>Impression risographie<br>300 exemplaires";
	document.getElementById("categorieTrous").innerHTML = "IDENTITÉ VISUELLE";
	document.getElementById("categorieMobileTrous").innerHTML = "IDENTITÉ VISUELLE";

	document.getElementById("texteVoeux").innerHTML = "Conception graphique de la carte de vœux de l'École Supérieure d'Art et Design •Grenoble •Valence pour l'année 2021.";
	document.getElementById("texteMobileVoeux").innerHTML = "Conception graphique de la carte de vœux de l'École Supérieure d'Art et Design •Grenoble •Valence pour l'année 2021.";
	document.getElementById("infosVoeux").innerHTML = "210&nbsp;×&nbsp;148 mm<br>Impression offset<br>Pantone Blue 072 U et 7753 U<br>1000 exemplaires<br><br>En collaboration avec Ariane Corfmat et Sirima de Rességuier";
	document.getElementById("titreVoeux").innerHTML = "Vœux ÉSAD •GV";

	document.getElementById("texteDisco").innerHTML = "<i>Disco-graphiques</i> est une série d'ateliers jeune public conçus pour La Fabrique, du 21 décembre 2019 au 1er mars 2020 au Centre Georges Pompidou.<br><br>À travers ces ateliers, j'initie les participant•es aux principes de la conception paramétrique et leur propose de réinterpréter le vocabulaire graphique des feux d'artifice et des volvelles. À partir d'applications numériques et de répertoires de formes que je leur fournis, ainsi qu'à l'aide de la découpe laser, iels conçoivent des compositions graphiques, ludiques et contemplatives, basées sur le cercle et la rotation.";
	document.getElementById("texteMobileDisco").innerHTML = "<i>Disco-graphiques</i> est une série d'ateliers jeune public conçus pour La Fabrique, du 21 décembre 2019 au 1er mars 2020 au Centre Georges Pompidou.<br><br>À travers ces ateliers, j'initie les participant•es aux principes de la conception paramétrique et leur propose de réinterpréter le vocabulaire graphique des feux d'artifice et des volvelles. À partir d'applications numériques et de répertoires de formes que je leur fournis, ainsi qu'à l'aide de la découpe laser, iels conçoivent des compositions graphiques, ludiques et contemplatives, basées sur le cercle et la rotation.";
	document.getElementById("infosDisco").innerHTML = "En partenariat avec le magazine Étapes: autour du numéro consacré aux jeunes diplômés.<br><br>Vidéo de présentation et interview visible <a class='link' href='https://www.youtube.com/watch?v=1o3sNlTkldQ' target='_blank'>ici</a>.";
	document.getElementById("categorieDisco").innerHTML = "ATELIERS";
	document.getElementById("categorieMobileDisco").innerHTML = "ATELIERS";

	document.getElementById("texteTohuBohu").innerHTML = "Tohu-bohu est un caractère typographique à la frontière entre la lettre et le signe. Il est composé de deux types d'éléments, des «&nbsp;pleins&nbsp;» et des «&nbsp;angles&nbsp;», qui sont interchangeables afin de modifier le dessin de chaque caractère. Avec un set de 20 éléments pleins et 20 éléments d'angle, Tohu-bohu possède 400 variations potentielles. La combinaison des modules et la construction des lettres se fait pendant la saisie, grâce à un système de ligatures (voir vidéo de démonstration).";
	document.getElementById("texteMobileTohuBohu").innerHTML = "Tohu-bohu est un caractère typographique à la frontière entre la lettre et le signe. Il est composé de deux types d'éléments, des «&nbsp;pleins&nbsp;» et des «&nbsp;angles&nbsp;», qui sont interchangeables afin de modifier le dessin de chaque caractère. Avec un set de 20 éléments pleins et 20 éléments d'angle, Tohu-bohu possède 400 variations potentielles. La combinaison des modules et la construction des lettres se fait pendant la saisie, grâce à un système de ligatures (voir vidéo de démonstration).";
	document.getElementById("infosTohuBohu").innerHTML = "Vidéo de démonstration visible <a class='link' href='https://vimeo.com/user73764747' target='_blank'>ici</a>.<br><br>Specimen&nbsp;: 230&nbsp;×&nbsp;320 mm, 28 pages<br>Impression numérique";
	document.getElementById("categorieTohuBohu").innerHTML = "TYPOGRAPHIE";
	document.getElementById("categorieMobileTohuBohu").innerHTML = "TYPOGRAPHIE";

	document.getElementById("texteVoyeurs").innerHTML = "Conception et mise en page de l'édition de l'École Supérieure d'Art et Design •Grenoble •Valence pour la 3e biennale Exemplaires, du 23 mars au 28 avril 2019 à Rennes. Les écoles d'art qui participent à cet évènement ont chacune présenté, à travers une publication et une exposition, une sélection de six ouvrages francophones datant de moins de cinq ans, jugés exemplaires et singuliers par leurs qualités graphiques ou leur propos.<br><br>La sélection des étudiants de l'ÉSAD •Valence pour cette édition 2019, intitulée <i>Voyeurs</i>, s'est attardée sur la question du livre comme dispositif de circulation des images. Qu'elles soient collectées, fragmentées, recomposées, ou même manipulables, que fait le livre aux images&nbsp;? Que font les images au livre&nbsp;?<br><br>L'édition se joue de ces deux questions en obligeant le lecteur à faire un choix&nbsp;: rendre lisible le texte ou l'image. N'étant pas façonnée au préalable, elle se présente comme une affiche et l'imposition des pages au verso rend difficile la lecture du texte. Seule l'image au recto, présentant l'ensemble des ouvrages cités et sélectionnés, est visible dans son intégralité. Pour lire le texte, le lecteur doit découper et façonner l'édition, et donc sacrifier l'image.";
	document.getElementById("texteMobileVoyeurs").innerHTML = "Conception et mise en page de l'édition de l'École Supérieure d'Art et Design •Grenoble •Valence pour la 3e biennale Exemplaires, du 23 mars au 28 avril 2019 à Rennes. Les écoles d'art qui participent à cet évènement ont chacune présenté, à travers une publication et une exposition, une sélection de six ouvrages francophones datant de moins de cinq ans, jugés exemplaires et singuliers par leurs qualités graphiques ou leur propos.<br><br>La sélection des étudiants de l'ÉSAD •Valence pour cette édition 2019, intitulée <i>Voyeurs</i>, s'est attardée sur la question du livre comme dispositif de circulation des images. Qu'elles soient collectées, fragmentées, recomposées, ou même manipulables, que fait le livre aux images&nbsp;? Que font les images au livre&nbsp;?<br><br>L'édition se joue de ces deux questions en obligeant le lecteur à faire un choix&nbsp;: rendre lisible le texte ou l'image. N'étant pas façonnée au préalable, elle se présente comme une affiche et l'imposition des pages au verso rend difficile la lecture du texte. Seule l'image au recto, présentant l'ensemble des ouvrages cités et sélectionnés, est visible dans son intégralité. Pour lire le texte, le lecteur doit découper et façonner l'édition, et donc sacrifier l'image.";
	document.getElementById("infosVoyeurs").innerHTML = "Édition dépliée&nbsp;: 920&nbsp;×&nbsp;650 mm<br>Édition façonnée&nbsp;: 81&nbsp;×&nbsp;115 mm, 64 pages<br>Impression offset<br>600 exemplaires<br><br>En collaboration avec Ariane Corfmat, Solène Lautridou et Céline Renault";
	document.getElementById("categorieVoyeurs").innerHTML = "ÉDITION";
	document.getElementById("categorieMobileVoyeurs").innerHTML = "ÉDITION";

	document.getElementById("texteMemoire").innerHTML = "Le jeu pourrait ne pas seulement être une activité marginale à laquelle chacun s'adonne pour son plaisir. Ce mot de trois lettres, qui nous semble évident, et avec lequel nous sommes si familier, cache en réalité une complexité de notions qui s'entremêlent. C'est cette complexité que j'ai tenté de disséquer dans ce mémoire, tout en questionnant l'analogie trop répandue entre jeu et divertissement, pour me poser la question suivante&nbsp;: et si le design graphique pouvait être joué&nbsp;?<br><br>Je tente alors, à la manière d'un «&nbsp;explorateur du jeu&nbsp;», de déceler la jouabilité du design graphique. Comment un designer peut-il jouer sa pratique et en quoi ceci peut-il faire office de méthodologie de travail&nbsp;?";
	document.getElementById("texteMobileMemoire").innerHTML = "Le jeu pourrait ne pas seulement être une activité marginale à laquelle chacun s'adonne pour son plaisir. Ce mot de trois lettres, qui nous semble évident, et avec lequel nous sommes si familier, cache en réalité une complexité de notions qui s'entremêlent. C'est cette complexité que j'ai tenté de disséquer dans ce mémoire, tout en questionnant l'analogie trop répandue entre jeu et divertissement, pour me poser la question suivante&nbsp;: et si le design graphique pouvait être joué&nbsp;?<br><br>Je tente alors, à la manière d'un «&nbsp;explorateur du jeu&nbsp;», de déceler la jouabilité du design graphique. Comment un designer peut-il jouer sa pratique et en quoi ceci peut-il faire office de méthodologie de travail&nbsp;?";
	document.getElementById("infosMemoire").innerHTML = "160&nbsp;×&nbsp;230&nbsp;mm, 96 pages<br>Impression numérique<br>8 exemplaires<br><br>Disponible à la consultation en format PDF <a class='link' href='DOCS/Julian_Lagoutte_-_L'aventure_du_jeu.pdf' target='_blank'>ici</a>.";
	document.getElementById("categorieMemoire").innerHTML = "MÉMOIRE DE DNSEP";
	document.getElementById("categorieMobileMemoire").innerHTML = "MÉMOIRE DE DNSEP";

	document.getElementById("texteJpo").innerHTML = "Communication des journées portes ouvertes 2018 de l'École Supérieure d'Art et Design •Grenoble •Valence, comprenant une série d'affiches, de cartes postales ainsi que la refonte de la page d'accueil du site internet de l'école.";
	document.getElementById("texteMobileJpo").innerHTML = "Communication des journées portes ouvertes 2018 de l'École Supérieure d'Art et Design •Grenoble •Valence, comprenant une série d'affiches, de cartes postales ainsi qu'une page d'accueil temporaire du site internet de l'école.";
	document.getElementById("infosJpo").innerHTML = "Affiches A3 et A1<br>Impression risographie (A3) et sérigraphie (A1)<br><br>En collaboration avec Solène Lautridou et Sebastian Schmitt";
	document.getElementById("categorieJpo").innerHTML = "IDENTITÉ VISUELLE";
	document.getElementById("categorieMobileJpo").innerHTML = "IDENTITÉ VISUELLE";
	document.getElementById("titreJpo").innerHTML = "Portes ouvertes ÉSAD •GV";

	document.getElementById("texteLimo").innerHTML = "Conception et développement du site web d'Asso Limo, maison d'auto-édition fondée en 2016 par Samuel Eckert. Ce site est une plateforme ludique qui propose la consultation des éditions publiées par la maison.";
	document.getElementById("texteMobileLimo").innerHTML = "Conception et développement du site web d'Asso Limo, maison d'auto-édition fondée en 2016 par Samuel Eckert. Ce site est une plateforme ludique qui propose la consultation des éditions publiées par la maison.";
	document.getElementById("infosLimo").innerHTML = "En collaboration avec Samuel Eckert";

	document.getElementById("texteDisques").innerHTML = "Illustrations créées dans un format circulaire et assemblées de manière à pouvoir tourner pour produire une animation, une petite histoire ou un jeu graphique, à la manière des pop-up. Cette série d'objets forme le projet Les Disques Illustrés, qui s'inspire de systèmes de disques en papier, appelés <i>volvelles</i>, à l'origine utilisés dans les livres d'astronomie.";
	document.getElementById("texteMobileDisques").innerHTML = "Illustrations créées dans un format circulaire et assemblées de manière à pouvoir tourner pour produire une animation, une petite histoire ou un jeu graphique, à la manière des pop-up. Cette série d'objets forme le projet Les Disques Illustrés, qui s'inspire de systèmes de disques en papier, appelés <i>volvelles</i>, à l'origine utilisés dans les livres d'astronomie.";
	document.getElementById("infosDisques").innerHTML = "Site internet dédié au projet ici&nbsp;:<br><a class='link' href='https://les-disques-illustres.fr/index.html' target='_blank'>www.les-disques-illustres.fr</a>";
	document.getElementById("categorieDisques").innerHTML = "ÉDITION";
	document.getElementById("categorieMobileDisques").innerHTML = "ÉDITION";
	document.getElementById("commanditaireDisques").innerHTML = "PROJET PERSONNEL";

	document.getElementById("bio").innerHTML = "<span class='introAbout'>Julian Lagoutte, designer graphique et illustrateur basé à Dijon, diplômé de l'ÉSAD •Valence en 2019.</span><br><br>Je crée des identités visuelles, des affiches, des éditions, des sites internet et des illustrations. Je considère le graphisme et l'illustration comme complémentaires dans mon travail.<br><br>Ma connaissance des procédés d'impression traditionnelle et artisanale me permet de proposer des projets réfléchis, en accord avec leur contexte, et d'élaborer des objets singuliers et sensibles. Soucieux de la dimension pédagogique du graphisme, j'interviens également dans la conception et l'animation d'ateliers, ou dans le cadre de workshops.";

	document.getElementById("texteAbout1").innerHTML = "• <i>Les astronomes</i>, publication aux Éditions du Tache Papier, 2022.<br><br>• Parution dans <i>Étapes:</i> n°252, «&nbsp;Écoles d'art et de design&nbsp;: 30 diplômes&nbsp;», Pyramid Éditions, 2019<br><br>• <i>Voyeurs</i>, publication collective de l'ÉSAD •Valence dans le cadre de la biennale «&nbsp;Exemplaires, formes et pratiques de l'édition contemporaine&nbsp;», Rennes, 2019.<br><br>• Contribution au livre <i>Ficciones Typografika 1642</i> par Erik Brandt, Ben DuVall et Paul Schmelzer, Formist Editions, 2019.";

	document.getElementById("sousTitreAbout2").innerHTML = "EXPOSITIONS ET INTERVENTIONS";
	document.getElementById("texteAbout2").innerHTML = "• Workshop «&nbsp;Bataille risographique&nbsp;», École Média Art de Chalon-sur-Saône, 2023.<br><br>• <i>Les astronomes</i>, exposition personnelle, Tache Papier, Dijon, 2022.<br><br>• Workshop «&nbsp;histoireDeFormes&nbsp;», École Média Art de Chalon-sur-Saône, 2021.<br><br>• <i>Popweb</i>, exposition collective sous la direction de Dominique Cunin, Lux Scène Nationale de Valence, 2017.<br><br>• <i>Une cartographie de la recherche en design graphique</i>, Le Signe, Chaumont, 2017.";

	document.getElementById("texteAbout3").innerHTML = "• <a class='link' href='https://www.kiblind.com/articles/decryptage-nos-clips-animes-preferes-davril/' target='_blank'>Kiblind</a>, 2022.<br><br>• <a class='link' href='https://youtu.be/1o3sNlTkldQ' target='_blank'>Centre Georges Pompidou</a>, 2019.";

	document.getElementById("sousTitreAbout4").innerHTML = "PROJETS AUTO-INITIÉS";
	document.getElementById("texteAbout4").innerHTML = "<a class='link' href='https://les-disques-illustres.fr/' target='_blank'>Les Disques Illustrés</a><br><br>Les Disques Illustrés est un projet d'édition qui s'inspire des <i>volvelles</i>, des disques en papier présents dans les livres d'astronomie du XVe siècle pour calculer et représenter des phénomènes cosmiques. Je reprend ces systèmes de rotation pour éditer des illustrations animées et ludiques, seul ou en collaboration avec d'autres artistes.";

	document.getElementById("categorieAbout").innerHTML = "CRÉDITS";
	document.getElementById("credits1").innerHTML = "Conception graphique et développement du site par Julian Lagoutte.<br>Typographie&nbsp;: Hershey Noailles par Luuse.<br>Toutes les images de ce site ont été prises par Julian Lagoutte, excepté pour <i>Discographiques</i> où les photographies, ainsi que la vidéo de présentation, ont été produites par le Centre Georges Pompidou.";
	document.getElementById("credits2").innerHTML = "<u>Mentions légales</u><br>Toute reproduction, intégrale ou partielle, de ces images ou de quelconque élément de ce site est formellement interdite sans permission de l'auteur.<br>Dernière mise à jour&nbsp;: février 2024.<br>© Julian Lagoutte 2018-2024";
	document.getElementById("titreCreditsMobile").innerHTML = "CRÉDITS";
	document.getElementById("creditsMobile").innerHTML = "Conception graphique et développement du site par Julian Lagoutte.<br>Typographie&nbsp;: Hershey Noailles par Luuse.<br><br>Toutes les images de ce site ont été prises par Julian Lagoutte, excepté pour <i>Discographiques</i> où les photographies, ainsi que la vidéo de présentation, ont été produites par le Centre Georges Pompidou.<br><br><u>Mentions légales</u><br><br>Toute reproduction, intégrale ou partielle, de ces images ou de quelconque élément de ce site est formellement interdite sans permission de l'auteur.<br>Dernière mise à jour&nbsp;: février 2024.<br>© Julian Lagoutte 2018-2024";

	document.getElementById("adresses1").innerHTML = "N'hésitez pas à me contacter pour votre projet ou pour me proposer de collaborer&nbsp;:";
	document.getElementById("adresses2").innerHTML = "<a href='mailto:bonjour@julianlagoutte.fr'>bonjour@julianlagoutte.fr</a><br>06.69.25.21.53<br>44 rue des Forges, Dijon, FR";
	document.getElementById("adresseMobile").innerHTML = "N'hésitez pas à me contacter pour votre projet ou pour me proposer de collaborer&nbsp;:<br><br><a href='mailto:bonjour@julianlagoutte.fr'>bonjour@julianlagoutte.fr</a><br>06.69.25.21.53<br>44 rue des Forges, Dijon, FR";
	document.getElementById("suivez").innerHTML = "SUIVEZ-MOI";
	document.getElementById("aussi").innerHTML = "AUSSI SUR";
	document.getElementById("suivezMobile").innerHTML = "SUIVEZ-MOI AUSSI SUR";

	document.getElementById("categorieBoutique").innerHTML = "RISOGRAPHIE";
	document.getElementById("infosBoutique").innerHTML = "Pour faire une commande, envoyez un message avec les titres et les quantités souhaités à <a class='link' href='mailto:julian.lagoutte@gmail.com'>julian.lagoutte@gmail.com</a><br><br>Envoi à l'international<br>Paiement via Paypal";
	document.getElementById("categorieBoutiqueMobile").innerHTML = "Pour faire une commande, envoyez un message avec les titres et les quantités souhaités à <a class='link' href='mailto:julian.lagoutte@gmail.com'>julian.lagoutte@gmail.com</a>";
	document.getElementById("anneeBoutiqueMobile").innerHTML = "Envoi à l'international, paiement via Paypal";

	document.getElementById("texteTrous").innerHTML = "<div class='sousTitreAbout'>TROUS — 15€</div><p class='texteAbout'>Risographie A4, 4 couleurs, sur papier Munken Rough 240gr.<br>Limité à 30 exemplaires numérotés et signés.</p>";
	document.getElementById("texteComete").innerHTML = "<div class='sousTitreAbout'>L'ARRIVÉE DE LA COMÈTE — 9€</div><p class='texteAbout'>Risographie A5, 4 couleurs, sur papier Munken Rough 240gr.<br>Limité à 30 exemplaires numérotés et signés.</p>";
	document.getElementById("texteNoeuds").innerHTML = "<div class='sousTitreAbout'>SAC DE NOEUDS — 9€</div><p class='texteAbout'>Risographie A5, 2 couleurs, sur papier Munken Rough 240gr.<br>Limité à 30 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMinigolfDamier").innerHTML = "<div class='sousTitreAbout'>MINIGOLFS DAMIER — 15€</div><p class='texteAbout'>Risographie A4, 3 couleurs, sur papier Munken Rough 240gr.<br>Limité à 20 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMinigolfSpherique").innerHTML = "<div class='sousTitreAbout'>MINIGOLF SPHÉRIQUE — 12€</div><p class='texteAbout'>Risographie 21&nbsp;×&nbsp;21 cm, 3 couleurs, sur papier Munken Rough 240gr.<br>Limité à 20 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMinigolfSpirale").innerHTML = "<div class='sousTitreAbout'>MINIGOLF SPIRALE — 5€</div><p class='texteAbout'>Risographie format marque-page (8,7&nbsp;×&nbsp;21 cm), 3 couleurs, sur papier Munken Rough 240gr.<br>Limité à 20 exemplaires numérotés et signés.</p>";
	document.getElementById("texteCometeZigzagante").innerHTML = "<div class='sousTitreAbout'>COMÈTE ZIGZAGANTE — 25€</div><p class='texteAbout'>Risographie A3, 3 couleurs, sur papier Munken Polar 240gr.<br>Limité à 10 exemplaires numérotés et signés.</p>";
	document.getElementById("texteLevitation").innerHTML = "<div class='sousTitreAbout'>LÉVITATION — 18€</div><p class='texteAbout'>Risographie 29,7&nbsp;×&nbsp;29,7 cm, 2 couleurs, sur papier Munken Polar 240gr.<br>Limité à 15 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMaison").innerHTML = "<div class='sousTitreAbout'>LA MAISON SUR LE NUAGE — 4€</div><p class='texteAbout'>Carte postale risographiée, 3 couleurs, sur papier Munken Polar 240gr.<br>Limité à 16 exemplaires.</p>";
	document.getElementById("texteMinigolfHabite").innerHTML = "<div class='sousTitreAbout'>MINIGOLF HABITÉ — 9€</div><p class='texteAbout'>Risographie A5, 3 couleurs, sur papier Munken Polar 240gr.<br>Limité à 10 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMinigolfCone").innerHTML = "<div class='sousTitreAbout'>MINIGOLF CÔNE — 4€</div><p class='texteAbout'>Carte postale risographiée, 3 couleurs, sur papier Munken Polar 240gr.<br>Limité à 10 exemplaires numérotés et signés.</p>";
	document.getElementById("texteDessusDessous").innerHTML = "<div class='sousTitreAbout'>SANS DESSUS DESSOUS — 9€</div><p class='texteAbout'>Risographie A5, 2 couleurs, sur papier Munken Pure 240gr.<br>Limité à 15 exemplaires numérotés et signés.</p>";
	document.getElementById("texteMontagnes").innerHTML = "<div class='sousTitreAbout'>MONTAGNE ÉNERVÉE — 25€</div><p class='texteAbout'>Risographie A3, 4 couleurs, sur papier Munken Rough Pure 240gr.<br>Limité à 20 exemplaires numérotés et signés.<br>Illustration 1/2 d'une collaboration avec Félix Pommier.</p>";
	document.getElementById("texteFemme").innerHTML = "<div class='sousTitreAbout'>HORIZON GALBÉ — 25€</div><p class='texteAbout'>Risographie A3, 4 couleurs, sur papier Munken Rough Pure 240gr.<br>Limité à 20 exemplaires numérotés et signés.<br>Illustration 2/2 d'une collaboration avec Félix Pommier.</p>";
	document.getElementById("texteAstronomes").innerHTML = "<div class='sousTitreAbout'>LES ASTRONOMES — 15€</div><p class='texteAbout'>Bande dessinée rotative, Les Éditions du Tache Papier, mars 2022.<br>Risographie 1 couleur sur papier Munken Polar 240gr. Autocollant de la pochette imprimé en sérigraphie.<br>Seconde édition (septembre 2023), 60 exemplaires numérotés.</p>";
	document.getElementById("texteAscension").innerHTML = "<div class='sousTitreAbout'>ASCENSION GLISSANTE — 25€</div><p class='texteAbout'>Risographie A3, 2 couleurs, sur papier Fedrigoni Arena 200gr.<br>Limité à 15 exemplaires numérotés et signés.</p>";
	document.getElementById("texteColline").innerHTML = "<div class='sousTitreAbout'>COLLINE — 15€</div><p class='texteAbout'>Risographie A4, 3 couleurs, sur papier Munken Cream 240gr.<br>Limité à 13 exemplaires numérotés et signés.</p>";
	document.getElementById("texteChute").innerHTML = "<div class='sousTitreAbout'>LA CHUTE — 9€</div><p class='texteAbout'>Risographie A5, 1 couleur, sur papier Munken Cream 240gr.<br>Limité à 15 exemplaires numérotés et signés.</p>";

	var retour = document.getElementsByClassName("retour");
	var r;

	for (r = 0; r < retour.length; r++) {
		retour[r].innerHTML = "RETOUR";
	}

};