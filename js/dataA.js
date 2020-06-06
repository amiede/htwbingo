// define size of the board; recommended range is 3..7
const SIZE = 5;
// define whether joker is active or not; defaults to _false_ for _even_ board sizes
const USE_JOKER = false;

// define captions
var headerText = "<img src='img/htwsaar.png' alt='htw saar' />&nbsp;Video-Konferenzen-Bingo™";
var footerText = "Viel Spaß! Vielen Dank an alle Kolleginnen und Kollegen für den Input. </br> Neue Textvorschläge gerne im <a href='https://docs.google.com/spreadsheets/d/1Q3oz26YcdZkuRdY-ZQH5tbv3_KYp0i6PbE_fI6o7Kg4/edit?usp=sharing' target='_blank'>Google Sheet</a> eintragen. <a href='https://github.com/amiede/htwbingo/' target='_blank'>Quellcode bei GitHub verfügbar.</a>";

// ...and additional texts
var winText = "Gewonnen! Bitte Kostenstelle per E-Mail mitteilen.";
var jokerText = "JOKER";
var flavOptText = "Spielvariante: "

// define sounds
var clickSnd = new Audio("audio/click.mp3");
var winSnd = new Audio("audio/win.mp3");

// define square texts
var JSONBingo = {"squares": 
[
{"square":"\"Ich kam nicht in die Session rein.\"","flavors":["Sitzung"]},
{"square":"\"Kannst du bitte größer machen?\"","flavors":["Sitzung"]},
{"square":"\"Wer tippt denn da ständig?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Könnt ihr meinen Bildschirm sehen?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Oh, ich war ja auf stumm geschaltet!\"","flavors":["Sitzung"]},
{"square":"\"Man hört nichts, du bist stumm geschaltet!\"","flavors":["Sitzung"]},
{"square":"\"Schaltet euch bitte alle stumm!\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"X schreibt mir gerade bei WhatsApp.\"","flavors":["Sitzung"]},
{"square":"\"X wählt sich gerade ein, wir warten noch kurz.\"","flavors":["Sitzung"]},
{"square":"\"Weiß jemand, ob X noch kommt?\"","flavors":["Sitzung"]},
{"square":"\"Man sieht nur grau.\"","flavors":["Sitzung"]},
{"square":"\"Könnt Ihr mich hören?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Hallo, ist schon jemand da?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Wer fehlt denn noch?\"","flavors":["Sitzung"]},
{"square":"\"Mein Mikro war stumm geschaltet.\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Sprichst du mit uns?\"","flavors":["Sitzung"]},
{"square":"\"Upps, ich bin eben rausgeflogen.\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Mein Netz ist schwach.\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"X hat die Konferenz verlassen\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Wer leitet eigentlich die Besprechung?\"","flavors":["Sitzung"]},
{"square":"*Tastatur hämmert wie ein MG*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Viele reden durcheinander*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Kind wird beim Namen gerufen*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Kind läuft durch das Bild*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Es gibt eine Rückkopplung*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Stille*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Geschrei im Hintergrund*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Hund bellt*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Schweres Atmen*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Vogelgezwitscher*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Jemand isst*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Etwas knistert*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Jemand gähnt in die Kamera*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Die Augen von jemandem wandern hin und her*","flavors":["Vorlesung","Sitzung"]},
{"square":"\"BigBlueButton ist super.\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Freiheit von Forschung und Lehre!\"","flavors":["Sitzung"]},
{"square":"\"Die Studierenden beteiligen sich nicht.\"","flavors":["Sitzung"]},
{"square":"\"Könnte bitte mal jemand sein Mikrofon einschalten?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"\"Kann man das geteilte Fenster sehen?\"","flavors":["Vorlesung","Sitzung"]},
{"square":"*Jemand flucht über Microsoft*","flavors":["Vorlesung","Sitzung"]},
{"square":"*Ein Laptop-Lüfter dröhnt wie ein LKW*","flavors":["Vorlesung","Sitzung"]},
{"square":"*AWP | Dragon Lore wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Fnord*","flavors":["Miede2017"]},
{"square":"*Taleb wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Millienials-Bashing*","flavors":["Miede2017"]},
{"square":"*Referenz auf 80er-Jahre-Action-Film*","flavors":["Miede2017"]},
{"square":"*Schwarzenegger wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Ein anderer Dozent wird namentlich genannt*","flavors":["Miede2017"]},
{"square":"*Master wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*M macht einen Gamerwitz*","flavors":["Miede2017"]},
{"square":"*M macht einen Informatikerwitz*","flavors":["Miede2017"]},
{"square":"*Es wird gedenglischt*","flavors":["Miede2017"]},
{"square":"*Weapons of Mass Disctraction wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Datenschutz wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Digitalisierung wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*BWL-Vorlesung wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Es wird in den Folien zurueckgesprungen*","flavors":["Miede2017"]},
{"square":"*Kombiuebung*","flavors":["Miede2017"]},
{"square":"*Comic/Bild auf Folie*","flavors":["Miede2017"]},
{"square":"*Jemand geht frueher*","flavors":["Miede2017"]},
{"square":"*M traegt eine Krawatte*","flavors":["Miede2017"]},
{"square":"*Google/Facebook oder Amazon werden erwaehnt*","flavors":["Miede2017"]},
{"square":"*M spricht jemand mit Nachnamen an*","flavors":["Miede2017"]},
{"square":"*M erzaehlt von CS:GO*","flavors":["Miede2017"]},
{"square":"\"Denken sie drueber nach\"","flavors":["Miede2017"]},
{"square":"*M spricht ueber sein Arbeitsleben*","flavors":["Miede2017"]},
{"square":"*M schweift ab*","flavors":["Miede2017"]},
{"square":"*M gibt Tipps fuers Leben*","flavors":["Miede2017"]},
{"square":"*Es wird diskutiert*","flavors":["Miede2017"]},
{"square":"*Trump wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Auf der Folie ist ein Pfeildiagramm*","flavors":["Miede2017"]},
{"square":"*M erzaehlt ueber Lehrbuecher*","flavors":["Miede2017"]},
{"square":"*Steam wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Sparkasse wird erwaehnt*","flavors":["Miede2017"]},
{"square":"*Tafel wird benutzt*","flavors":["Miede2017"]},
{"square":"\"Sie haben noch gar nix gesagt\"","flavors":["Miede2017"]},
{"square":"\"Wer braucht noch Zeit?\"","flavors":["Miede2017"]},
{"square":"\"Genau\"","flavors":["Miede2017"]},
{"square":"\"Aspekt\"","flavors":["Miede2017"]},
{"square":"\"Relevant\"","flavors":["Miede2017"]},
{"square":"\"Kunden\"","flavors":["Miede2017"]},
{"square":"\"Techies\"","flavors":["Miede2017"]},
{"square":"\"Prozesse\"","flavors":["Miede2017"]},
{"square":"\"Koennen Sie sich in Ruhe durchlesen\"","flavors":["Miede2017"]},
{"square":"\"Gibts noch Fragen?\"","flavors":["Miede2017"]},
{"square":"*Klausur o. Uebungsblatt werden erwaehnt*","flavors":["Miede2017"]},
{"square":"\"Da habense auch recht\"","flavors":["Miede2017"]},
{"square":"*M bricht Diskussion ab*","flavors":["Miede2017"]},
{"square":"*Nach diskussionsabbruch wird weiter diskutiert*","flavors":["Miede2017"]},
{"square":"*Jemand kommt zu spaet(ab 5 Minuten)*","flavors":["Miede2017"]},
{"square":"*Bulletpoints auf Folie*","flavors":["Miede2017"]},
{"square":"\"Wollen sie noch was ergaenzen?\"","flavors":["Miede2017"]},
{"square":"*Lieblingsfach BWL/Winfo*","flavors":["Miede2017"]},
{"square":"*M traegt eine seiner farbigen englischen Hosen (blau/rot/gruen)*","flavors":["Miede2017"]},
{"square":"\"Haben Sie noch 'ne Idee?\"","flavors":["Miede2017"]},
{"square":"*Frueher war alles besser*","flavors":["Miede2017"]},
{"square":"*Betrieblicher Umsatzprozess wird erwaehnt*","flavors":["Miede2017"]},
{"square":"\"Einen wunderschönen guten Morgen\"","flavors":["Miede2017"]}	
    ]
};
