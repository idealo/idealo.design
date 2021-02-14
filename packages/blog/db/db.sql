
create table if not exists blogposts (
    id integer not null,
    title varchar(255) not null,
    nextpost varchar(255),
    previouspost varchar(255),
    categoryDisplayValue varchar(255) not null,
    categorySlug varchar(255) not null,
    slug varchar(255) not null,
    date timestamp not null,
    image varchar(255) not null,
    text text not null,
    primary key(id)
    );

create table if not exists accounts (
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    email varchar(255) not null,
    instagram varchar(255),
    twitter varchar(255),
    github varchar(255),
    facebook varchar(255),
    primary key(email)
    );

insert into blogposts (
    id,
    title,
    nextpost,
    previouspost,
    categoryDisplayValue,
    categorySlug,
    slug,
    date,
    image,
    text
)
values
(
    1,
    'Der Weihnachtsmann',
    'rudolf-the-red-nose-reindeer',
    NULL,
    'Kategorie 1',
    'kategorie-1',
    'der-weihnachtsmann',
    '2020-11-26T14:45:45.351Z',
    'https://i.pinimg.com/originals/a6/e7/ac/a6e7ac7ece3b2a567d5073af84013cf6.jpg',
    'Der Weihnachtsmann ist eine Symbolfigur weihnachtlichen Schenkens, die in Deutschland vor allem in Nord-, Mittel- und Ostdeutschland sowie in der übrigen Welt besonders in evangelisch geprägten Regionen, wie in der französischsprachigen Westschweiz (Père Noël), den Niederlanden, Skandinavien, Estland, Lettland, dem Vereinigten Königreich, in Australien, Kanada und den Vereinigten Staaten, populär ist.[1]\n\nDargestellt wird er als rundlicher, freundlicher alter Mann mit langem weißem Rauschebart, rotem und mit weißem Pelz verbrämten Gewand; Attribute sind sein Geschenkesack und (früher auch) eine Rute. Dass es diese Darstellung bereits im 19. Jahrhundert gab, beweisen zeitgenössische Postkarten.[2] Die Coca-Cola Company nutzte ab 1931 alljährlich zur Weihnachtszeit diese Darstellung für eigene Werbekampagnen.'

),
(
    2,
    'Rudolf the Red Nose Reindeer',
    'bitte-nicht-die-cookies-löschen',
    'der-weihnachtsmann',
    'Kategorie 2',
    'kategorie-2',
    'rudolf-the-red-nose-reindeer',
    '2020-11-27T14:45:45.351Z',
    'https://st3.depositphotos.com/1832477/13417/v/450/depositphotos_134170294-stock-illustration-funny-reindeer-holding-balls-for.jpg',
    'Die Kaufhauskette Montgomery Ward aus Chicago verkaufte Malbücher verschiedener fremder Buchverlage. Die Unternehmensleitung entschied im Jahre 1939, aus Kostengründen auch ein eigenes Malbuch herauszugeben, das als Anzeigen-Kampagne gedacht war. Der mit Kinderliedern vertraute Autor Robert Lewis May, seit 1935 als Anzeigenverfasser bei der Kaufhauskette, hatte sich für die Geschichte mit Rudolph, dem rotnasigen Rentier entschieden, nachdem er Vornamen wie Reginald (zu britisch) oder Rollo (zu heiter) verworfen hatte. Die Kaufhausleitung war wegen des Attributs „rotnasig” zunächst besorgt, da dies mit Alkoholismus und Alkoholikern assoziiert werden konnte und deshalb nicht gerade zu Weihnachten passte. Als letzte Zweifel ausgeräumt waren, wurde die Geschichte vom jungen, aus der Art geschlagenen Rentier mit der leuchtenden Nase zu Weihnachten 1939 veröffentlicht und 2,4 Millionen Mal verkauft, bis 1946 gingen über sechs Millionen Exemplare dieses Malbuchs über die Ladentheken. May hatte für seine Idee lediglich eine Pauschale kassiert, das Urheberrecht wurde für die Kaufhauskette eingetragen. Erst im Mai 1947 erhielt May das Urheberrecht.'

),
(
    3,
    'Bitte nicht die Cookies löschen',
    'über-den-weihnachtsbaum',
    'rudolf-the-red-nose-reindeer',
    'Kategorie 3',
    'kategorie-3',
    'bitte-nicht-die-cookies-löschen',
    '2020-11-28T14:45:45.351Z',
    'https://images-na.ssl-images-amazon.com/images/I/51TpeQ5tTPL._AC_.jpg',
    'Als Plätzchen (Diminutiv von mundartlich Platz, „flach geformter Kuchen”, nach der flachen Form übertragen von Platz aus altfranzösisch place[1]) bezeichnet man allgemein zu den Feinbackwaren gehörendes süßes Kleingebäck wie Kekse, Konfekt und Ähnliches. Plätzchen sind ein beliebtes Weihnachtsgebäck.\n\nEin unterschiedlicher Sammelbegriff ist Teegebäck.[2]\nWeihnachtsplätzchen\n\nIn Mitteldeutschland und Österreich[3] werden Plätzchen als Kekse bezeichnet, in der Deutschschweiz Biscuits, im Dialekt Güetzi, Guetzli, Chrömli und ähnlich, in Süddeutschland auch Platzerl, Bredla, Loible/Loibla oder Guatl/Gutsle/Guatsle, in der Schweiz vereinzelt Brötle (übergreifend für Süßigkeiten).\n\nIn den USA ist die Bezeichnung Cookies üblich.[4] In Großbritannien nennt man sie Biscuits[5] (ein englisches Lehnwort aus dem Französischen), auch wenn sie in der Zusammensetzung nicht unbedingt dem deutschen Biskuit entsprechen.\n\nDie üblichen Formen sind runde Taler, rechteckige Schnitten, Ringe, Rauten, Makronen, Häufchen, Kipferl oder mithilfe von Ausstechformen erzeugte Figuren.'

),
(
    4,
    'Über Weihnachten',
    'bunte-luftballons',
    'bitte-nicht-die-cookies-löschen',
    'Kategorie 4',
    'kategorie-4',
    'über-weihnachten',
    '2020-11-26T14:45:45.351Z',
    'https://img.favpng.com/6/10/10/balloon-clip-art-png-favpng-pMsmfEyLkSHHwrmsDuTebXD5z.jpg',
    'Ein Weihnachtsbaum, auch Christbaum (in Österreich, Altbayern, der deutschsprachigen Schweiz und Liechtenstein ausschließlich, im Rheinland häufig) oder Tannenbaum ist ein geschmückter Nadelbaum, der zur Weihnachtszeit in einem Gebäude oder im Freien aufgestellt wird. Traditionelle Aufstellorte sind Kirchen und Wohnungen. Als Baumschmuck dienen meist Lichterketten, Kerzen, Christbaumkugeln, Lametta, Engels- oder andere Figuren. Dieser Weihnachtsbrauch verbreitete sich im 19. Jahrhundert vom deutschsprachigen Raum aus über die ganze Welt.'

),
(
    5,
    'Bunte Luftballons',
    'hurrah',
    'über-den-weihnachtsbaum',
    'Kategorie 5',
    'kategorie-5',
    'bunte-luftballons',
    '2020-11-26T14:45:45.351Z',
    'https://img.favpng.com/6/10/10/balloon-clip-art-png-favpng-pMsmfEyLkSHHwrmsDuTebXD5z.jpg',
    'Der erste Gummiballon wurde im Jahre 1824 in London von Michael Faraday im Rahmen seiner Experimente mit Wasserstoff an der Royal Institution in London hergestellt. Er verwendete Rohgummi, aus dem er zwei runde Flächen schnitt, diese aufeinander legte und an den Rändern zusammendrückte. Innen war der Ballon mit Mehl bestäubt, um ein Aneinanderkleben der Flächen zu verhindern. Nach seinem Bericht im Quarterly Journal of Science 1824 dehnte sich dieser Ballon sehr stark aus, wurde transparent und schwebte zur Decke. Bereits ein Jahr später, im Jahr 1825, wurde diese Erfindung von dem Engländer Thomas Hancock (1786–1865) als Set verkauft, wobei man aus der Rohgummimasse mittels einer Spritze die Ballons selbst herstellen musste. Da unvulkanisierter Gummi sehr klebrig ist, war die Haltbarkeit gering. Vulkanisierte Luftballons, hergestellt mit der noch heute gebräuchlichen Tauchmethode, wurden erstmals 1847 von J. G. Ingram in London hergestellt und verkauft.'

),
(
    6,
    'Hurrah',
    NULL,
    'bunte-luftballons',
    'Kategorie 1',
    'kategorie-1',
    'hurrah',
    '2020-11-26T14:45:45.351Z',
    'https://e7.pngegg.com/pngimages/701/109/png-clipart-celebrate-celebrate-float-thumbnail.png',
    'Die Herkunft des Wortes ist ungeklärt. Es wird heute meist mit dem Imperativ hurra von mittelhochdeutsch hurren, „sich schnell bewegen“ (vergl. dt. hurtig oder engl. to hurry, „eilen, sich beeilen“) in Verbindung gebracht.[1]\n\nEine andere These vermutet den Ursprung in Zentralasien: Bereits Jean de Mandeville schilderte im 14. Jahrhundert den Warn- und Waffenruf „Kera! Kera! Kera!“, was mit den russischen Kriegsrufen („Ura“, „Houra“) in Verbindung gebracht wurde;[2] andere Autoren vermuten, der Schlachtruf habe mongolische Wurzeln.[3] Die Herleitung erfolge über turkotatarisch urra von urmak „schlagen“.[4]\n\nEiner im 19. Jahrhundert aufgekommenen Vermutung zufolge leitet sich das Wort von einem angeblichen Ruf Thur aïe (‚Thor hilf!‘) her, den heidnische Normannen als Schlachtruf gebraucht und dem christlichen Schlachtruf Deus aïe (‚Gott hilf!‘) entgegengesetzt haben sollen. Einziger Beleg hierfür ist eine Stelle im Roman de Rou des anglonormannischen Dichters Wace († nach 1174), wonach Raoul Tesson einen ähnlichen Ruf in der Schlacht von Val-ès-Dunes (1047) zur Anfeuerung seiner Leute gebraucht haben soll. Bei diesem Schlachtruf, in der Handschrift wiedergegeben in der Form turie und gereimt auf emmie, vom ersten Herausgeber Frédéric Pluquet (1824) dann gedeutet als Tur aïe, handelte es sich aber nicht um eine Anrufung der germanischen Gottheit Thor, sondern um den Namen von Tessons Baronie Thury (heute Thury-Harcourt), weshalb diese These in der Sprachwissenschaft heute nicht mehr vertreten wird.'

);

insert into accounts (
    firstname,
    lastname ,
    email ,
    instagram ,
    twitter ,
    github ,
    facebook
)
values
(
    'Theodor',
    'Fontane',
    'christiano.renaldo@email.com',
    'https://www.instagram.com/cristiano/',
    'https://twitter.com/',
    'https://github.com/',
    'https://www.facebook.com/Cristiano'

),
(
    'Bertholt',
    'Brecht',
    'b.brecht@gmail.com',
    'https://www.instagram.com/therock/',
    'https://twitter.com/',
    null,
    null

),
(
    'Friedrich',
    'Schiller',
    'f.schiller@gmail.com',
    null,
    null,
    null,
    null

),
(
    'Thomas',
    'Mann',
    'thomas.mann@gmail.com',
    null,
    null,
    null,
    null

),
(
    'Johann Wolfgang',
    'Goethe',
    'j.h.goethe@gmail.com',
    null,
    null,
    null,
    null

),
(
    'Heinrich',
    'Heine',
    'heinrich-heine@heinz.de',
    null,
    null,
    null,
    null

);

create sequence blogposts_id_seq;
alter table blogposts alter id set default nextval('blogposts_id_seq');



UPDATE blogposts
	SET
		title = 'Docker' ,
    		nextpost = 'Einstieg-in-die-Welt-der-Datenbanken',
    		previouspost = NULL,
    		categoryDisplayValue = 'Kategorie 1',
    		categorySlug = 'kategorie-1',
    		slug = 'docker',
    		date = '2021-01-20T14:45:45.351Z',
    		image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2000px-Docker_%28container_engine%29_logo.svg.png',
    		text = 'Hallo zusammen!

In diesem Blogpost erkläre ich euch was  Docker ist =)

Was ist eigentlich Docker?
Docker ist eine Softwareplattform in dem ihr Anwendungen schnell erstellen, testen und bereitstellen könnt. Docker verpackt die Software in sogenannte Container und diese enthalten  alles was man zum Ausführen der Software benötigt, sei es Bibliotheken, Systemtools oder auch Code und die Laufzeit. Ein Vorteil ist, dass man mit Docker Anwendungen in jeder Umgebung schnell bereitstellen kann und skalieren kann und das ohne viel Aufwand und Kosten…


Wie habe ich Docker ausgeführt?

Als erstes habe ich  die Webseite https://www.docker.com/products/docker-desktop aufgerufen und mir das Paket für mein Betriebssystem heruntergeladen. Ich habe das heruntergeladene Installationsprogramm ausgeführt und die einzelnen Schritte  befolgt.

Wenn ich das Terminal (Terminal App unter Mac OS und Linux, Eingabeaufforderung unter Windows („Eingabeaufforderung")) öffne und das Befehl eingebe

$ docker run hello-world


lädt Docker das Hello-World-Container-Image herunter und führt es aus. Und es erscheint eine Ausgabe, wie das folgende :

Hello from Docker!
This message shows that your installation appears to be working 			   correctly.

Jetzt habe ich Docker installiert. Wenn ihr unter Windows oder Mac OS arbeitet, seid ihr fertig. Wenn ihr aber unter Linux arbeitet, müsst ihr Docker Compose installieren, um die Docker-Container programmgesteuert auszuführen.

Viel Spaß beim ausprobieren  =)'
	WHERE
		id = 1;

UPDATE blogposts
	SET
		title = 'Einstieg in die Welt der Datenbanken' ,
    		nextpost = 'mein-erstes-mal-mit-react',
    		previouspost = 'docker',
    		categoryDisplayValue = 'Kategorie 1',
    		categorySlug = 'kategorie-1',
    		slug = 'Einstieg-in-die-Welt-der-Datenbanken',
    		date = '2021-01-28T14:45:45.351Z',
    		image = 'https://s12.directupload.net/images/210212/bd5j6kn8.jpg',
    		text = 'Für das Erstellen des Weblogs war der nächste Punkt auf der Agenda eine Datenbank einzurichten, sodass die Blogposts und Informationen zu den Autoren unabhängig vom Standort aufgerufen werden können. Eine Aufgabe, welche viele Fragezeichen bei uns Entwicklerinnen aufrief, da es schon eine Weile her war, seitdem wir Datenbanken belegt hatten.
Der erste Schritt war zu entscheiden, in welcher Umgebung die Datenbank weitergegeben wird. Hierbei entschieden wir uns für Docker und gegen eine virtuelle Maschine, wie es uns vorher bekannt war. Aus dem Grund, dass eine virtuelle Maschine zum Einen langsamer arbeitet, weil sie mit einem eigenem Betriebssystem versehrt ist und zum Anderen weniger Speicher zur Verfügung stellt, aufgrund von Abhängigkeiten, die die virtuelle Maschine benötigt, um zu laufen bevor sie überhaupt eine Datenbank einrichten kann. Docker ist von der Performance her zu vergleichen, wie ein Programm, das auf unserem Betriebssystem ausgeführt wird -  wesentlich schneller und einfacher. Im Übrigen auch spaßiger, da die der Container sehr einfallsreich sind. So heißt der Container auf meinem Rechner “nice_davinci”.
Als die Vorbereitungen getroffen wurden, wurde postgreSQL aus dem Docker Repository gezogen, sodass wir beginnen konnten unseren Container einzurichten. So wie mySQL, welches wir aus Datenbanken kennen, ist auch postgreSQL ein Datenbanksystem. Die Unterschiede liegen lediglich darin, dass postgreSQL neben JSON auch XML und weitere Features unterstützt, die im Internet gängig sind und, dass postgreSQL kompatibler mit der Arbeit auf verteilten Systemen ist. Da sich unsere Datenbank über HTTP Requests befüllen lässt und jede lokal auf die Datenbank zugreifen soll, war postgres somit die bessere Wahl für uns. Die Datenbanksprache, die verwendet wird, bleibt bei beiden SQL.
Es wurde ein Schema erstellt, sodass es jeder möglich war, die Datenbank lokal einzurichten. Darin war der Aufbau, als auch die Befehle, um diese umzusetzen genaust beschrieben wurden.
Nichtsdestotrotz schlichen sich immer wieder kleine Fehler ein, welches uns Entwicklerinnen nach etlichem Scannen des Schemas das Gefühl gab, dass wir bald den Code auswendig konnten. Darum möchte ich euch zum Abschluss den Tipp geben, wenn ihr mal eine Datenbank einrichten solltet: Vergesst nicht das Semikolon am Ende!'
	WHERE
		id = 2;

UPDATE blogposts
	SET
		title = 'Mein erstes Mal mit React' ,
    		nextpost = 'Versionskontrolle',
    		previouspost = 'Einstieg-in-die-Welt-der-Datenbanken',
    		categoryDisplayValue = 'Kategorie 2',
    		categorySlug = 'kategorie-2',
    		slug = 'mein-erstes-mal-mit-react',
    		date = '2021-01-21T14:45:45.351Z',
    		image = 'https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg',
    		text = 'React ist eine JavaScript-Softwarebibliothek die verwendet wird um professionelle Benutzeroberflächen zu erstellen. Sie wurde im Jahr 2013 von Facebook unter BSD-Lizenz veröffentlicht und ist seitdem sehr beliebt und hat eine starke Beeinflussung in der JavaScript-Frontend Landschaft.
Als HTW Studentin, habe ich gelernt mit Angular umzugehen und hatte das Glück gehabt im Projekt mit Idealo React zum ersten Mal nutzen zu können. Die Umstellung von Angular auf React war jedoch für mich schwierig gewesen, weil Angular ein Framework und React eher eine verhältnismäßig kleine und einfache Bibliothek zum Rendern grafischer Oberflächen ist.
Wer React zum ersten Mal nutzt, muss wissen, dass diese Neuerungen nichts Vertrautes mit sich bringen. Ein guter Einstieg in React gelang mir am besten, als ich bereit war, mich auf ungewöhnliche Ideen einzulassen und alte Überzeugungen abzulegen. Zum Beispiel ist es ratsam JSX Vorkenntnisse zu haben um schneller reinzukommen, was bei mir nicht der Fall war. Aber man sollte jedoch keine Angst davor haben, denn React ist schnell zu verstehen und stellt eine Seite zur Verfügung mit sehr vielen nützlichen Informationen um die Anwendungen zu erleichtern ( siehe auch: https://de.reactjs.org/).
Sie bringt auch sehr viele Vorteile mit sich wie zum Beispiel wiederverwendbare Komponente. Heißt, wenn man einmal sauber implementiert hat, kann man die Komponenten immer wieder verwenden. Desweiteren gehören Methoden und Markup zusammen, weil JSX in der Komponente selbst definiert wird, muss im Editor nicht ständig zwischen Markup und JavaScript gewechselt werden. Dies macht es einfach für mich als Entwicklerin, den Überblick zu behalten. Schön ist es auch, dass React die neuesten Features von JavaScript verwendet und fremdelt nicht mit anderen Sprachen, wie TypeScript oder Java.
Mir ist aufgefallen, dass React alleine kaum ausreichen kann, um eine anständige Website aufzubauen. Da es sich nur um eine Bibliothek handelt die einige spezifische Funktionen zum Schreiben der Anwendungen anbietet und die Entwicklung viele Freiheiten gibt, was den Aufbau und die Gestaltung einer Applikation angeht. Das kann gut aber auch schlecht sein, denn gerade für Einsteiger, wie mich, wird es an dieser Stelle schwierig, weil man sich tausende Fragen stellt, wie zum Beispiel, “Wo muss ich anfangen? Wie strukturiere ich meine Applikation? Wie löse ich konkrete Problemstellungen oder welche Bibliotheken und Hilfsmittel benötige ich für die Entwicklung meiner Applikation?”. In einem Projekt mit engem Zeitplan kann es sehr stressig werden, da hier weitere Recherchen nach Lösungen einzurechnen sind. Um solche Probleme zu lösen, hat mir die Kommunikation im Team sehr geholfen und somit fühlte ich mich nicht ganz alleine.
Als Fazit kann ich sagen, dass React vor allem für sehr interaktive Projekte geeignet ist, in denen ohnehin weitere Bibliotheken zum Einsatz kommen und selbst, wenn JSX für mich ein Fremdwort war, ist es zwar eine starke Umstellung, aber man kommt ganz gut rein.'
	WHERE
		id = 3;

UPDATE blogposts
	SET
		title = 'Versionskontrolle mit Git und GitHub' ,
    		nextpost = 'Draft.js',
    		previouspost = 'mein-erstes-mal-mit-react',
    		categoryDisplayValue = 'Kategorie 3',
    		categorySlug = 'kategorie-3',
    		slug = 'Versionskontrolle',
    		date = '2021-01-21T14:45:45.351Z',
    		image = 'https://s20.directupload.net/images/210212/zhmkr8zv.png',
    		text = 'Versionskontroll-Systeme ermöglichen übersichtliches und effizientes Arbeiten an Web-Projekten. Ein moderner Standard für die Softwareentwicklung ist dabei das kostenlose Open-Source Versionskontrollsystem Git mit der dazugehörigen Online-Plattform GitHub.

Auf GitHub werden Projekte in Repositories organisiert, die die jeweiligen Bestandteile wie HTML-, JavaScript und CSS-Dateien beinhalten. Die am Projekt beteiligten User können eine Kopie des Repositories auf ihrem Computer anlegen und anschließend daran arbeiten.

Git bietet eine umfassende Unterstützung für das Branching, Merging und Umarbeiten des Repository-Verlaufs, was viele innovative Workflows und Tools entstehen ließ.

Um ein paralleles Arbeiten ermöglichen zu können kann ein Git-Projekt in Branches aufgeteilt werden. Mit dem Branch wird eine 1:1 Kopie des aktuellen Standes angelegt, der dann parallel weitergearbeitet werden kann.

Nachdem die Entwicklung an einem Branch abgeschlossen wurde kann dieser mit anderen Branches zusammengefasst werden - dies nennt man Merging. Dies funktioniert besonders gut, wenn der Branch Änderungen von Dateien vornimmt, der von keinem anderen User in dem Branch, mit dem die Zusammenführung durchgeführt werden soll, bearbeitet wurden.

Die gängigsten Befehle, die man beim Umgang mit Git benötigt sind unter anderem:

Commit - mit diesem Befehl teilt man seinem lokalen Repository mit, dass bestimmte Dateien verändert wurden und diese nun in die Versionierung mit aufgenommen werden sollen. Es lassen sich die veränderten Dateien auswählen und der Commit kann mit einem Kommentar versehen werden, um später besser nachvollziehen zu können was verändert wurde.

Push - wenn die Änderungen, die durch den Commit auf dem lokalen Repository gespeichert wurden, an die zentrale Versionsverwaltung (GitHub) übermittelt werden sollen braucht man den „Push“ Befehl.

Pull - dieser Befehl ist das Gegenteil vom Push: man kann sein lokales Repository mit Daten aus dem entfernten Repository abgleichen und Änderungen übernehmen. Dadurch können alle Projektteilnehmer immer die aktuellste Fassung des Projektes zur Verfügung haben.

Weitere wichtige Befehle, die den Umgang mit Git vereinfachen, sind in diesem Cheat-Sheet zusammengefasst: '
	WHERE
		id = 4;

UPDATE blogposts
	SET
	title ='Draft JS als Open Source Editor' ,
    	nextpost = NULL,
    	previouspost = 'Versionskontrolle',
  	categoryDisplaySlug ='Kategorie 4',
    	categorySlug = 'kategorie-4',
    	slug = 'Draft.js',
    	date = '2023-01-21T14:45:45.351Z',
    	image ='https://miro.medium.com/max/700/1*MNBn-6DkW-RnIsZgO_bP3Q.png',
	text = 'Was ist Draft.js?
Draft.js ist ein sogenanntes Rich Text Editor Framework, welches von Facebook entwickelt wurde und 2016 von Isaac Salier-Hellendag auf der React.js Conf vorgestellt wurde. Draft.js kann nur in Verbindung mit React und React DOM genutzt werden und wurde speziell für React entwickelt.
Es wird in der Entwicklung von Facebook genutzt und zum Beispiel für das Statuseingabefeld sowie für das Kommentareingabefeld als auch für den mobilen Facebook-Messanger messenger.com genutzt. Ziel der Entwicklung von Draft.js war es die Flexibilität und das Verhalten von Texteingabefeldern auf Facebook zu verbessern.


Wozu Rich Text Editing?
Ohne Rich Text Editing ist alles doof. Der Unterschied zwischen Plain Text und Rich Text besteht vor allem darin, dass bei Rich Text nicht nur der reine Text sondern auch Formatierungseinstellungen so wie Schriftfarbe, Schriftgröße und andere Eigenschaften mit gespeichert und beachtet werden. Dies führt zu einer besseren Benutzerfreundlichkeit und wird inzwischen von den meisten NutzerInnen, beim verfassen eines Kommentars auf Facebook zum Beispiel, erwartet.


Was kann mir ein Draft.js Rich Text Editor bieten?
Facebook Notes, ein älteres Facebook Feature, welches auch heute noch genutzt wird, zeigt, was ein Rich Text Editor, bereitgestellt durch Draft.js, zu bieten hat. So kann man in Facebook Notes generelle Funktionen wie fette Schriftart, kursive Schriftart und Änderung der Schriftgröße etc. nutzen - darüber hinaus aber auch folgende weitere Funktionen:
Einbinden von Bildern

Einbinden von Inhalt aus dritter Hand (z.B. YouTube-Video)

Darstellen von Listen

Verlinkung von Webseiten

Styling 	von Zitaten

Einbinden und Styling von Programmiercode


Wie funktioniert Draft.js innerhalb von React?
Draft.js besteht hauptsächlich aus der "Editor"-Komponente, die eine sogenannte kontrollierte "ContentEditable" ist. Diese Komponente beinhaltet einmal den Wert, "value", des Zustandes des Eingabefelds und darüber hinaus einen "onChange" prop-Funktion, welche für das aktualisieren der Eingabe verantwortlich ist. Die "Editor"-Komponente hat die volle Kontrolle über den Eingabezustand. Da Draft.js damit "ContentEditable" übernimmt, ist alles browserunabhängig bestimmt.
Das sogennante "EditorState"-Objekt beinhaltet eine Momentaufnahme des Editorzustandes. Dazu gehören sowohl der Inhalt des Editors als auch die Kursorposition und die vergangengen Zustände. Jede Zustandsänderung erzeugt ein neues "EditorState"-Objekt.
Draft.js überführt den gesamten Zustand des Editors in JSON-Format, welches dann an eine Datenbank weitergegeben werden kann.
Wie wird Draft.js installiert?
Die Installation von Draft.js innerhalb eines React-Projektes gestaltet sich relativ einfach. Zur Installation können beispielsweise die Befehle: npm install draft-js react react-dom oder alternativ auch yarn add draft-js react react-dom genutzt werden.

Was ist weiter bei der Installation zu beachten?
Draft.js kommt Hand in Hand mit einem eigenen Stylesheet, Draft.css. Es wird empfohlen dieses Css Stylessheet zu benutzen, da es vordefinierte Eigenschaften für Textausrichtung, Zeilenabstände und andere Elemente enthält.

Und das alles Open Source?
Ja. Der Code zu Draft.js wurde von Facebook auf Github veröffentlicht und ist unter https://github.com/facebook/draft-js einsehbar. Dort befinden sich neben der allgemeinen ReadMe Datei auch Beispieldateien, die zur Implementierung von Draft.js im eigenen Projekt genutzt werden können.
Quellenangaben:
https://draftjs.org/docs/getting-started/
https://youtu.be/feUYwoLhE_4
https://github.com/facebook/draft-js
https://youtu.be/rHat0n1xBVc'
where id = 5;

DELETE FROM blogposts
	WHERE id = 6;
/*Wir haben nur 5 Posts, also so lange deleten bis nur noch 5 Posts in der Datenbank. */
