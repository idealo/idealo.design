UPDATE blogposts SET
                     title = 'Docker',
                     nextpost = NULL,
                     previouspost = 'Einstieg-in-die-Welt-der-Datenbanken',
                     categoryDisplayValue = 'Docker',
                     categorySlug = 'Docker',
                     slug = 'Docker',
                     date = '2021-01-20T14:45:45.351Z',
                     image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2000px-Docker_%28container_engine%29_logo.svg.png',
                     text = 'Hallo zusammen! In diesem Blogpost erkläre ich euch was  Docker ist =) Was ist eigentlich Docker? ' ||
                            'Docker ist eine Softwareplattform in dem ihr Anwendungen schnell erstellen, testen und bereitstellen könnt. ' ||
                            'Docker verpackt die Software in sogenannte Container und diese enthalten alles was man zum Ausführen der Software benötigt, ' ||
                            'sei es Bibliotheken, Systemtools oder auch Code und die Laufzeit. Ein Vorteil ist, dass man mit Docker Anwendungen in jeder Umgebung schnell ' ||
                            'bereitstellen kann und skalieren kann und das ohne viel Aufwand und Kosten… Wie habe ich Docker ausgeführt? Als erstes habe ich  die Webseite ' ||
                            'https://www.docker.com/products/docker-desktop aufgerufen und mir das Paket für mein Betriebssystem heruntergeladen. ' ||
                            'Ich habe das heruntergeladene Installationsprogramm ausgeführt und die einzelnen Schritte  befolgt. ' ||
                            'Wenn ich das Terminal (Terminal App unter Mac OS und Linux, Eingabeaufforderung unter Windows („Eingabeaufforderung")) öffne und das Befehl eingebe ' ||
                            '$ docker run hello-world lädt Docker das Hello-World-Container-Image herunter und führt es aus. Und es erscheint eine Ausgabe, wie das folgende : ' ||
                            'Hello from Docker! This message shows that your installation appears to be working correctly. Jetzt habe ich Docker installiert. ' ||
                            'Wenn ihr unter Windows oder Mac OS arbeitet, seid ihr fertig. Wenn ihr aber unter Linux arbeitet, müsst ihr Docker Compose installieren, ' ||
                            'um die Docker-Container programmgesteuert auszuführen. Viel Spaß beim ausprobieren  =)'
WHERE id = 1;

UPDATE blogposts SET
                     title = 'Einstieg in die Welt der Datenbanken',
                     nextpost = 'Docker',
                     previouspost = 'Mein-rstes-Mal-mit-React',
                     categoryDisplayValue = 'Docker',
                     categorySlug = 'Docker',
                     slug = 'Einstieg-in-die-Welt-der-Datenbanken',
                     date = '2021-01-28T14:45:45.351Z',
                     image = 'https://s12.directupload.net/images/210212/bd5j6kn8.jpg',
                     text = 'Für das Erstellen des Weblogs war der nächste Punkt auf der Agenda eine Datenbank einzurichten, ' ||
                            'sodass die Blogposts und Informationen zu den Autoren unabhängig vom Standort aufgerufen werden können. ' ||
                            'Eine Aufgabe, welche viele Fragezeichen bei uns Entwicklerinnen aufrief, da es schon eine Weile her war, seitdem wir Datenbanken belegt hatten. ' ||
                            'Der erste Schritt war zu entscheiden, in welcher Umgebung die Datenbank weitergegeben wird. ' ||
                            'Hierbei entschieden wir uns für Docker und gegen eine virtuelle Maschine, wie es uns vorher bekannt war. ' ||
                            'Aus dem Grund, dass eine virtuelle Maschine zum Einen langsamer arbeitet, weil sie mit einem eigenem Betriebssystem versehrt ist und zum Anderen weniger Speicher zur Verfügung stellt, ' ||
                            'aufgrund von Abhängigkeiten, die die virtuelle Maschine benötigt, um zu laufen bevor sie überhaupt eine Datenbank einrichten kann. ' ||
                            'Docker ist von der Performance her zu vergleichen, wie ein Programm, das auf unserem Betriebssystem ausgeführt wird -  wesentlich schneller und einfacher. ' ||
                            'Im Übrigen auch spaßiger, da die der Container sehr einfallsreich sind. So heißt der Container auf meinem Rechner “nice_davinci”. ' ||
                            'Als die Vorbereitungen getroffen wurden, wurde postgreSQL aus dem Docker Repository gezogen, sodass wir beginnen konnten unseren Container einzurichten. ' ||
                            'So wie mySQL, welches wir aus Datenbanken kennen, ist auch postgreSQL ein Datenbanksystem. ' ||
                            'Die Unterschiede liegen lediglich darin, dass postgreSQL neben JSON auch XML und weitere Features unterstützt, die im Internet gängig sind und, ' ||
                            'dass postgreSQL kompatibler mit der Arbeit auf verteilten Systemen ist. Da sich unsere Datenbank über HTTP Requests befüllen lässt und jede lokal auf die Datenbank zugreifen soll, ' ||
                            'war postgres somit die bessere Wahl für uns. Die Datenbanksprache, die verwendet wird, bleibt bei beiden SQL. Es wurde ein Schema erstellt, sodass es jeder möglich war, ' ||
                            'die Datenbank lokal einzurichten. Darin war der Aufbau, als auch die Befehle, um diese umzusetzen genaust beschrieben wurden. ' ||
                            'Nichtsdestotrotz schlichen sich immer wieder kleine Fehler ein, welches uns Entwicklerinnen nach etlichem Scannen des Schemas das Gefühl gab, ' ||
                            'dass wir bald den Code auswendig konnten. Darum möchte ich euch zum Abschluss den Tipp geben, wenn ihr mal eine Datenbank einrichten solltet: ' ||
                            'Vergesst nicht das Semikolon am Ende!'
WHERE id = 2;

UPDATE blogposts SET
                     title = 'Mein erstes Mal mit React',
                     nextpost = 'Einstieg-in-die-Welt-der-Datenbanken',
                     previouspost = 'Versionskontrolle',
                     categoryDisplayValue = 'React',
                     categorySlug = 'React',
                     slug = 'Mein-erstes-Mal-mit-React',
                     date = '2021-01-21T14:45:45.351Z',
                     image = 'https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg',
                     text = 'React ist eine JavaScript-Softwarebibliothek die verwendet wird um professionelle Benutzeroberflächen zu erstellen. ' ||
                            'Sie wurde im Jahr 2013 von Facebook unter BSD-Lizenz veröffentlicht und ist seitdem sehr beliebt und hat eine starke Beeinflussung in der ' ||
                            'JavaScript-Frontend Landschaft. Als HTW Studentin, habe ich gelernt mit Angular umzugehen und hatte das Glück gehabt im Projekt mit Idealo React zum ersten ' ||
                            'Mal nutzen zu können. Die Umstellung von Angular auf React war jedoch für mich schwierig gewesen, weil Angular ein Framework und React eher eine ' ||
                            'verhältnismäßig kleine und einfache Bibliothek zum Rendern grafischer Oberflächen ist. Wer React zum ersten Mal nutzt, muss wissen, dass diese Neuerungen ' ||
                            'nichts Vertrautes mit sich bringen. Ein guter Einstieg in React gelang mir am besten, als ich bereit war, mich auf ungewöhnliche Ideen einzulassen und ' ||
                            'alte Überzeugungen abzulegen. Zum Beispiel ist es ratsam JSX Vorkenntnisse zu haben um schneller reinzukommen, was bei mir nicht der Fall war. ' ||
                            'Aber man sollte jedoch keine Angst davor haben, denn React ist schnell zu verstehen und stellt eine Seite zur Verfügung mit sehr vielen nützlichen ' ||
                            'Informationen um die Anwendungen zu erleichtern ( siehe auch: https://de.reactjs.org/). Sie bringt auch sehr viele Vorteile mit sich wie zum Beispiel ' ||
                            'wiederverwendbare Komponente. Heißt, wenn man einmal sauber implementiert hat, kann man die Komponenten immer wieder verwenden. ' ||
                            'Desweiteren gehören Methoden und Markup zusammen, weil JSX in der Komponente selbst definiert wird, muss im Editor nicht ständig zwischen Markup und JavaScript ' ||
                            'gewechselt werden. Dies macht es einfach für mich als Entwicklerin, den Überblick zu behalten. Schön ist es auch, dass React die neuesten Features von JavaScript ' ||
                            'verwendet und fremdelt nicht mit anderen Sprachen, wie TypeScript oder Java. Mir ist aufgefallen, dass React alleine kaum ausreichen kann, um eine anständige ' ||
                            'Website aufzubauen. Da es sich nur um eine Bibliothek handelt die einige spezifische Funktionen zum Schreiben der Anwendungen anbietet und die Entwicklung ' ||
                            'viele Freiheiten gibt, was den Aufbau und die Gestaltung einer Applikation angeht. Das kann gut aber auch schlecht sein, denn gerade für Einsteiger, wie mich, ' ||
                            'wird es an dieser Stelle schwierig, weil man sich tausende Fragen stellt, wie zum Beispiel, “Wo muss ich anfangen? Wie strukturiere ich meine Applikation? ' ||
                            'Wie löse ich konkrete Problemstellungen oder welche Bibliotheken und Hilfsmittel benötige ich für die Entwicklung meiner Applikation?”. ' ||
                            'In einem Projekt mit engem Zeitplan kann es sehr stressig werden, da hier weitere Recherchen nach Lösungen einzurechnen sind. Um solche Probleme zu lösen, ' ||
                            'hat mir die Kommunikation im Team sehr geholfen und somit fühlte ich mich nicht ganz alleine. Als Fazit kann ich sagen, dass React vor allem für sehr ' ||
                            'interaktive Projekte geeignet ist, in denen ohnehin weitere Bibliotheken zum Einsatz kommen und selbst, wenn JSX für mich ein Fremdwort war, ist es zwar eine ' ||
                            'starke Umstellung, aber man kommt ganz gut rein.'
WHERE id = 3;

UPDATE blogposts SET
                     title = 'Versionskontrolle mit Git und GitHub',
                     nextpost = 'Mein-erstes-Mal-mit-React',
                     previouspost = 'Draft-JS-als-Open-Source-Editor',
                     categoryDisplayValue = 'Git',
                     categorySlug = 'Git',
                     slug = 'Versionskontrolle',
                     date = '2021-01-21T14:45:45.351Z',
                     image = 'https://s20.directupload.net/images/210212/zhmkr8zv.png',
                     text = 'Versionskontroll-Systeme ermöglichen übersichtliches und effizientes Arbeiten an Web-Projekten. Ein moderner Standard für die Softwareentwicklung ' ||
                            'ist dabei das kostenlose Open-Source Versionskontrollsystem Git mit der dazugehörigen Online-Plattform GitHub. Auf GitHub werden Projekte in ' ||
                            'Repositories organisiert, die die jeweiligen Bestandteile wie HTML-, JavaScript und CSS-Dateien beinhalten. Die am Projekt beteiligten User ' ||
                            'können eine Kopie des Repositories auf ihrem Computer anlegen und anschließend daran arbeiten. Git bietet eine umfassende Unterstützung für das ' ||
                            'Branching, Merging und Umarbeiten des Repository-Verlaufs, was viele innovative Workflows und Tools entstehen ließ. Um ein paralleles Arbeiten ' ||
                            'ermöglichen zu können kann ein Git-Projekt in Branches aufgeteilt werden. Mit dem Branch wird eine 1:1 Kopie des aktuellen Standes angelegt, ' ||
                            'der dann parallel weitergearbeitet werden kann. Nachdem die Entwicklung an einem Branch abgeschlossen wurde kann dieser mit anderen Branches ' ||
                            'zusammengefasst werden - dies nennt man Merging. Dies funktioniert besonders gut, wenn der Branch Änderungen von Dateien vornimmt, der von keinem ' ||
                            'anderen User in dem Branch, mit dem die Zusammenführung durchgeführt werden soll, bearbeitet wurden. Die gängigsten Befehle, die man beim Umgang ' ||
                            'mit Git benötigt sind unter anderem: Commit - mit diesem Befehl teilt man seinem lokalen Repository mit, dass bestimmte Dateien verändert wurden ' ||
                            'und diese nun in die Versionierung mit aufgenommen werden sollen. Es lassen sich die veränderten Dateien auswählen und der Commit kann mit einem ' ||
                            'Kommentar versehen werden, um später besser nachvollziehen zu können was verändert wurde. Push - wenn die Änderungen, die durch den Commit auf dem ' ||
                            'lokalen Repository gespeichert wurden, an die zentrale Versionsverwaltung (GitHub) übermittelt werden sollen braucht man den „Push“ Befehl. Pull - ' ||
                            'dieser Befehl ist das Gegenteil vom Push: man kann sein lokales Repository mit Daten aus dem entfernten Repository abgleichen und Änderungen übernehmen. ' ||
                            'Dadurch können alle Projektteilnehmer immer die aktuellste Fassung des Projektes zur Verfügung haben. Weitere wichtige Befehle, die den Umgang mit Git ' ||
                            'vereinfachen, sind in diesem Cheat-Sheet zusammengefasst: '
WHERE id = 4;

UPDATE blogposts SET
                     title = 'Draft JS als Open Source Editor',
                     nextpost = Versionskontrolle,
                     previouspost = NULL,
                     categoryDisplayValue ='Draft JS',
                     categorySlug = 'Draft-JS',
                     slug = 'Draft-JS-als-Open-Source-Editor',
                     date = '2023-01-21T14:45:45.351Z',
                     image ='https://miro.medium.com/max/700/1*MNBn-6DkW-RnIsZgO_bP3Q.png',
                     text = 'Was ist Draft.js? Draft.js ist ein sogenanntes Rich Text Editor Framework, welches von Facebook entwickelt wurde und 2016 von Isaac Salier-Hellendag ' ||
                            'auf der React.js Conf vorgestellt wurde. Draft.js kann nur in Verbindung mit React und React DOM genutzt werden und wurde speziell für React entwickelt. ' ||
                            'Es wird in der Entwicklung von Facebook genutzt und zum Beispiel für das Statuseingabefeld sowie für das Kommentareingabefeld als auch für den ' ||
                            'mobilen Facebook-Messanger messenger.com genutzt. Ziel der Entwicklung von Draft.js war es die Flexibilität und das Verhalten von Texteingabefeldern ' ||
                            'auf Facebook zu verbessern. Wozu Rich Text Editing? Ohne Rich Text Editing ist alles doof. Der Unterschied zwischen Plain Text und Rich Text besteht ' ||
                            'vor allem darin, dass bei Rich Text nicht nur der reine Text sondern auch Formatierungseinstellungen so wie Schriftfarbe, Schriftgröße und andere Eigenschaften ' ||
                            'mit gespeichert und beachtet werden. Dies führt zu einer besseren Benutzerfreundlichkeit und wird inzwischen von den meisten NutzerInnen, ' ||
                            'beim verfassen eines Kommentars auf Facebook zum Beispiel, erwartet. ' ||
                            'Was kann mir ein Draft.js Rich Text Editor bieten? Facebook Notes, ein älteres Facebook Feature, welches auch heute noch genutzt wird, zeigt, ' ||
                            'was ein Rich Text Editor, bereitgestellt durch Draft.js, zu bieten hat. So kann man in Facebook Notes generelle Funktionen wie fette Schriftart, ' ||
                            'kursive Schriftart und Änderung der Schriftgröße etc. nutzen - darüber hinaus aber auch folgende weitere Funktionen: ' ||
                            'Einbinden von Bildern ' ||
                            'Einbinden von Inhalt aus dritter Hand (z.B. YouTube-Video) ' ||
                            'Darstellen von Listen Verlinkung von Webseiten ' ||
                            'Styling von Zitaten ' ||
                            'Einbinden und Styling von Programmiercode ' ||
                            'Wie funktioniert Draft.js innerhalb von React? Draft.js besteht hauptsächlich aus der "Editor"-Komponente, die eine sogenannte kontrollierte "ContentEditable" ist. ' ||
                            'Diese Komponente beinhaltet einmal den Wert, "value", des Zustandes des Eingabefelds und darüber hinaus einen "onChange" prop-Funktion, ' ||
                            'welche für das aktualisieren der Eingabe verantwortlich ist. Die "Editor"-Komponente hat die volle Kontrolle über den Eingabezustand. ' ||
                            'Da Draft.js damit "ContentEditable" übernimmt, ist alles browserunabhängig bestimmt. Das sogennante "EditorState"-Objekt beinhaltet eine Momentaufnahme ' ||
                            'des Editorzustandes. Dazu gehören sowohl der Inhalt des Editors als auch die Kursorposition und die vergangengen Zustände. Jede Zustandsänderung erzeugt ein neues ' ||
                            '"EditorState"-Objekt. Draft.js überführt den gesamten Zustand des Editors in JSON-Format, welches dann an eine Datenbank weitergegeben werden kann. ' ||
                            'Wie wird Draft.js installiert? Die Installation von Draft.js innerhalb eines React-Projektes gestaltet sich relativ einfach. Zur Installation können ' ||
                            'beispielsweise die Befehle: npm install draft-js react react-dom oder alternativ auch yarn add draft-js react react-dom genutzt werden. Was ist weiter bei der ' ||
                            'Installation zu beachten? Draft.js kommt Hand in Hand mit einem eigenen Stylesheet, Draft.css. Es wird empfohlen dieses Css Stylessheet zu benutzen, da es ' ||
                            'vordefinierte Eigenschaften für Textausrichtung, Zeilenabstände und andere Elemente enthält. Und das alles Open Source? Ja. Der Code zu Draft.js wurde von ' ||
                            'Facebook auf Github veröffentlicht und ist unter https://github.com/facebook/draft-js einsehbar. Dort befinden sich neben der allgemeinen ReadMe Datei auch ' ||
                            'Beispieldateien, die zur Implementierung von Draft.js im eigenen Projekt genutzt werden können. ' ||
                            'Quellenangaben: ' ||
                            'https://draftjs.org/docs/getting-started/ ' ||
                            'https://youtu.be/feUYwoLhE_4 ' ||
                            'https://github.com/facebook/draft-js ' ||
                            'https://youtu.be/rHat0n1xBVc'
WHERE id = 5;

DELETE FROM blogposts WHERE id = 6;