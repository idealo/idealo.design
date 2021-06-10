UPDATE blogposts SET previouspost where id=5 = 'contract-testing';

insert into blogposts (id,
                       title,
                       autor,
                       nextpost,
                       previouspost,
                       categoryDisplayValue,
                       categorySlug,
                       slug,
                       date,
                       image,
                       blogpostcontent)

values (6,
        'Contract Testing',
        'Eda Güngör',
        'Draft.js',
        NULL,
        'Contract Testing',
        'contract-testing',
        'contract-testing',
        '2021-06-04T14:45:45.351Z',
        'https://blog.theodo.com/static/7004d4a65a6078c93e2fdbce2a06f36c/a79d3/cover.png',
        '{"blocks": [{"key": "3aovk", "data": {}, "text": "Contract Testing Die Grundidee eines Consumer-Driven Contacts ist, dass Consumer (Aufrufe einer API) zunächst ihre Erwartungen an die API eines Providers (den Bereitsteller der API) formulieren. Diese Erwartungen werden dann als Grundlage für die Definition des Contracts zwischen den beteiligten Systemen verwendet, der mithilfe sogenannter Contract Tests technisch auf Einhaltung der Anforderungen überprüft werden kann. Ein Contract ist eine Sammlung von Interaktionen zwischen API-Consumer und API-Provider. Eine Interaktion beschreibt die Struktur eines Requests und der zugehörigen Response zwischen beiden Akteuren. Interaktionen betrachten ausschließlich statische Aspekte bei der Kommunikation mit einer Schnittstelle, jedoch nicht  das erwartete Verhalten einer Software.Sie definiert also, WELCHE Funktionalität oder Ressource WIE angefordert werden kann. Darüber hinaus sorgen Contract Tests dafür, dass ein gemeinsames Verständnis über die Struktur der zwischen den Partnersystemen ausgetauschten Nachrichten sichergestellt ist und diese zentral dokumentiert wird. Ein weiterer Vorteil von CDC ist, dass sich der API-Provider frühzeitig mit den verschiedenen Bedürfnissen etwaiger Konsumenten arrangieren kann, um den Anfragen aller API-Consumer soweit wie möglich erfüllen zu können.Tools Für die Implementierung von CDC ist kein spezielles Tool notwendig, aber das Einsetzen von Werkzeugen wie Pact, Spring Cloud Contract wird die Implementierung von CDC erleichtern. Sie stellen einen technischen Rahmen für die Spezifizierung und die Sicherstellung der Einhaltung der Schnittstellenverträge durch den Einsatz von Contract Tests bereit. Die Contract Tests werden als Unit-Tests – und nicht mehr erst als Integrationstests – ausgeführt und stellen so frühzeitig im Entwicklungs-Zyklus die Einhaltung der Schnittstellenverträge sicher. Kontinuierliche Prüfung der Einhaltung der Contracts Da Contract Tests als Unit-Tests realisiert werden, können sie problemlos in ein CI/CD-Umfeld integriert werden. Dadurch können APIs regelmäßig und automatisiert auf Breaking Changes geprüft werden. Ohne den Einsatz von Contract Tests wäre frühestens bei der Ausführung von Smoke- bzw. Integration-Tests zu erkennen, dass eine Schnittstelle nicht mehr kompatibel ist – also dann, wenn tatsächlich ein Request gegen den betroffenen API-Endpunkt gesendet wird. Die Integration von Contract Tests sorgt automatisch eine stärkere Kommunikation zwischen den Schnittstellenpartnern, da alle Beteiligten an der Gestaltung und Einhaltung der Schnittstelle mitarbeiten müssen, um deployfähig zu bleiben. Ablauf Der Consumer erstellt einen technischen Schnittstellenvertrag („Contract“), Er enthält die erwarteten Interaktionen mit der Schnittstelle. Die erwarteten Anfragen aus dem Contract werden im Rahmen eines Unit-Tests an einen Mock-Provider (Mock-Server, der vom Pact-Framework auf Grundlage der Contracts für die Unit-Tests bereitgestellt wird) gestellt. Dabei wird ein Contract (Pact)-File erstellt, das die Bedingungen des Schnittstellenvertrags enthält. Dieses File wird an den Provider übergeben. Auf Basis des Contracts wird auf Provider-Seite ein Consumer simuliert, der die erwarteten Anfragen an den Provider stellt. Dies geschieht im Rahmen von Unit-Tests, die aus dem Contract generiert werden. Wenn alle Unit Testserfolgreich sind, kann der Provider seine Änderungen deployen, da nun klar ist, dass der Consumer mit ihm kommunizieren und seine Antworten verarbeiten kann. nicht erfolgreich sind, darf der Provider seine Änderungen nicht veröffentlichen, da der Consumer nicht mit ihm kommunizieren und/oder seine Antworten nicht verarbeiten könnte. Der Provider muss seine API nun so anpassen, dass sie dem Schnittstellenvertrag entspricht und die Unit Tests nicht mehr fehlschlagen.   ","type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}');
