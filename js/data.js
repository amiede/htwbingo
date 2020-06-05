// define size; should be an odd number if joker is active
const SIZE = 5;
// define whether joker is active or not
const USE_JOKER = true;

// define captions
var headerText = "Telko-Bingo";
var footerText = "Neue Textvorschläge gerne im <a href='https://docs.google.com/spreadsheets/d/1RgU1Jk9zHyI7AKMIbt7xog4B34jnwSgEeiGqLp7HSTI/edit' target='_blank'>Google Sheet</a> eintragen";

// ...and additional texts
var winText = "Yeah, du hast gewonnen!";
var jokerText = "JOKER";
var flavOptText = "Spielvariante "

// define sounds
var clickSnd = new Audio("audio/click.mp3");
var winSnd = new Audio("audio/win.mp3");

// define square texts
var JSONBingo = {"squares": 
[
	{"square":"\"Das ist Aufgabe der CPOs\"","flavors":["Scrum"]},
	{"square":"\"Das ist Aufgabe von Team X\"","flavors":["Scrum"]},
	{"square":"\"So kann die Q-Maßnahme nicht geschlossen werden\"","flavors":["Scrum"]},
	{"square":"\"Das verstößt gegen die IT-Prozesse\"","flavors":["Scrum","Telko"]},
	{"square":"\"Nehme ich mit\"","flavors":["Scrum","Telko"]},
	{"square":"\"Ich kam nicht in die Telko rein\"","flavors":["Scrum","Telko"]},
	{"square":"\"Kannst du bitte größer machen?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Wer tippt denn da ständig?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Könnt ihr meinen Bildschirm sehen?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Oh, ich war ja auf stumm geschaltet!\"","flavors":["Scrum","Telko"]},
	{"square":"\"Man hört nichts, du bist stumm geschaltet!\"","flavors":["Scrum","Telko"]},
	{"square":"\"Schaltet euch bitte alle stumm!\"","flavors":["Scrum","Telko"]},
	{"square":"\"X schreibt mir gerade bei WhatsApp\"","flavors":["Scrum","Telko"]},
	{"square":"\"X wählt sich gerade ein, wir warten noch kurz\"","flavors":["Scrum","Telko"]},
	{"square":"\"Weiß jemand, ob X noch kommt?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Man sieht nur grau\"","flavors":["Scrum","Telko"]},
	{"square":"\"Könnt Ihr mich hören?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Hallo, ist schon jemand da?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Wer fehlt denn noch?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Mein Mikro war stumm geschaltet\"","flavors":["Scrum","Telko"]},
	{"square":"\"Sprichst du mit uns?\"","flavors":["Scrum","Telko"]},
	{"square":"\"Upps, ich bin eben rausgeflogen\"","flavors":["Scrum","Telko"]},
	{"square":"\"Mein Netz ist schwach\"","flavors":["Scrum","Telko"]},
	{"square":"\"X hat die Konferenz verlassen\"","flavors":["Scrum","Telko"]},
	{"square":"\"Wer leitet eigentlich die Besprechung?\"","flavors":["Scrum","Telko"]},
	{"square":"*Tastatur hämmert wie ein MG*","flavors":["Scrum","Telko"]},
	{"square":"*Viele reden durcheinander*","flavors":["Scrum","Telko"]},
	{"square":"*Kind wird beim Namen gerufen*","flavors":["Scrum","Telko"]},
	{"square":"*Kind läuft durch das Bild*","flavors":["Scrum","Telko"]},
	{"square":"*Es gibt eine Rückkopplung*","flavors":["Scrum","Telko"]},
	{"square":"*Stille*","flavors":["Scrum","Telko"]},
	{"square":"*Geschrei im Hintergrund*","flavors":["Scrum","Telko"]},
	{"square":"*Hund bellt*","flavors":["Scrum","Telko"]},
	{"square":"*Schweres Atmen*","flavors":["Scrum","Telko"]},
	{"square":"\"Ist ongoing\"","flavors":["Scrum","Debug"]},
	{"square":"\"Was sagt der Scrum Guide dazu?\"","flavors":["Scrum","Debug"]},
	{"square":"*Vogelgezwitscher*","flavors":["Scrum","Telko"]},
	{"square":"*Jemand isst*","flavors":["Scrum","Telko"]}
]
};
