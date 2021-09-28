create table if not exists blogposts (
    id SERIAL,
    title VARCHAR (255) NOT NULL,
    autor VARCHAR (255),
    nextpost VARCHAR (255),
    previouspost VARCHAR (255),
    categoryDisplayValue VARCHAR (255) NOT NULL,
    categorySlug VARCHAR (255) NOT NULL,
    slug VARCHAR (255) NOT NULL,
    date TIMESTAMP NOT NULL,
    image VARCHAR (255),
    text text NOT NULL,
    PRIMARY KEY (id)
    );

INSERT INTO  blogposts (id, title, nextpost, previouspost, categoryDisplayValue, categorySlug, slug, date, image, text)
VALUES (
        1,
        'Der Weihnachtsmann',
        'rudolf-the-red-nose-reindeer',
        NULL,
        'Kategorie 1',
        'kategorie-1',
        'der-weihnachtsmann',
        '2020-11-26T14:45:45.351Z',
        'https://i.pinimg.com/originals/a6/e7/ac/a6e7ac7ece3b2a567d5073af84013cf6.jpg',
        'Der Weihnachtsmann ist eine Symbolfigur weihnachtlichen Schenkens, die in Deutschland vor allem in Nord-, Mittel- und Ostdeutschland sowie in der übrigen Welt ' ||
        'besonders in evangelisch geprägten Regionen, wie in der französischsprachigen Westschweiz (Père Noël), den Niederlanden, Skandinavien, Estland, Lettland, ' ||
        'dem Vereinigten Königreich, in Australien, Kanada und den Vereinigten Staaten, populär ist.[1]\n\nDargestellt wird er als rundlicher, freundlicher alter Mann ' ||
        'mit langem weißem Rauschebart, rotem und mit weißem Pelz verbrämten Gewand; Attribute sind sein Geschenkesack und (früher auch) eine Rute. ' ||
        'Dass es diese Darstellung bereits im 19. Jahrhundert gab, beweisen zeitgenössische Postkarten.[2] Die Coca-Cola Company nutzte ab 1931 alljährlich zur ' ||
        'Weihnachtszeit diese Darstellung für eigene Werbekampagnen.'
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
        'Die Kaufhauskette Montgomery Ward aus Chicago verkaufte Malbücher verschiedener fremder Buchverlage. Die Unternehmensleitung entschied im Jahre 1939, ' ||
        'aus Kostengründen auch ein eigenes Malbuch herauszugeben, das als Anzeigen-Kampagne gedacht war. Der mit Kinderliedern vertraute Autor Robert Lewis May, ' ||
        'seit 1935 als Anzeigenverfasser bei der Kaufhauskette, hatte sich für die Geschichte mit Rudolph, dem rotnasigen Rentier entschieden, ' ||
        'nachdem er Vornamen wie Reginald (zu britisch) oder Rollo (zu heiter) verworfen hatte. Die Kaufhausleitung war wegen des Attributs „rotnasig” zunächst besorgt, ' ||
        'da dies mit Alkoholismus und Alkoholikern assoziiert werden konnte und deshalb nicht gerade zu Weihnachten passte. ' ||
        'Als letzte Zweifel ausgeräumt waren, wurde die Geschichte vom jungen, aus der Art geschlagenen Rentier mit der leuchtenden Nase zu Weihnachten 1939 ' ||
        'veröffentlicht und 2,4 Millionen Mal verkauft, bis 1946 gingen über sechs Millionen Exemplare dieses Malbuchs über die Ladentheken. May hatte für seine Idee ' ||
        'lediglich eine Pauschale kassiert, das Urheberrecht wurde für die Kaufhauskette eingetragen. Erst im Mai 1947 erhielt May das Urheberrecht.'
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
        'Als Plätzchen (Diminutiv von mundartlich Platz, „flach geformter Kuchen”, nach der flachen Form übertragen von Platz aus altfranzösisch place) ' ||
        'bezeichnet man allgemein zu den Feinbackwaren gehörendes süßes Kleingebäck wie Kekse, Konfekt und Ähnliches. Plätzchen sind ein beliebtes Weihnachtsgebäck.' ||
        'Ein unterschiedlicher Sammelbegriff ist Teegebäck. Weihnachtsplätzchen In Mitteldeutschland und Österreich werden Plätzchen als Kekse bezeichnet, ' ||
        'in der Deutschschweiz Biscuits, im Dialekt Güetzi, Guetzli, Chrömli und ähnlich, in Süddeutschland auch Platzerl, Bredla, Loible/Loibla oder Guatl/Gutsle/Guatsle, ' ||
        'in der Schweiz vereinzelt Brötle (übergreifend für Süßigkeiten). In den USA ist die Bezeichnung Cookies üblich. ' ||
        'In Großbritannien nennt man sie Biscuits (ein englisches Lehnwort aus dem Französischen), auch wenn sie in der Zusammensetzung nicht unbedingt dem deutschen Biskuit ' ||
        'entsprechen. Die üblichen Formen sind runde Taler, rechteckige Schnitten, Ringe, Rauten, Makronen, Häufchen, Kipferl oder mithilfe von Ausstechformen erzeugte Figuren.'
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
        'Ein Weihnachtsbaum, auch Christbaum (in Österreich, Altbayern, der deutschsprachigen Schweiz und Liechtenstein ausschließlich, im Rheinland häufig) ' ||
        'oder Tannenbaum ist ein geschmückter Nadelbaum, der zur Weihnachtszeit in einem Gebäude oder im Freien aufgestellt wird. ' ||
        'Traditionelle Aufstellorte sind Kirchen und Wohnungen. Als Baumschmuck dienen meist Lichterketten, Kerzen, Christbaumkugeln, Lametta, Engels- oder andere Figuren. ' ||
        'Dieser Weihnachtsbrauch verbreitete sich im 19. Jahrhundert vom deutschsprachigen Raum aus über die ganze Welt.'
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
        'Der erste Gummiballon wurde im Jahre 1824 in London von Michael Faraday im Rahmen seiner Experimente mit Wasserstoff an der Royal Institution in London hergestellt. ' ||
        'Er verwendete Rohgummi, aus dem er zwei runde Flächen schnitt, diese aufeinander legte und an den Rändern zusammendrückte. Innen war der Ballon mit Mehl bestäubt, ' ||
        'um ein Aneinanderkleben der Flächen zu verhindern. Nach seinem Bericht im Quarterly Journal of Science 1824 dehnte sich dieser Ballon sehr stark aus, ' ||
        'wurde transparent und schwebte zur Decke. Bereits ein Jahr später, im Jahr 1825, wurde diese Erfindung von dem Engländer Thomas Hancock (1786–1865) als Set verkauft, ' ||
        'wobei man aus der Rohgummimasse mittels einer Spritze die Ballons selbst herstellen musste. Da unvulkanisierter Gummi sehr klebrig ist, war die Haltbarkeit gering. ' ||
        'Vulkanisierte Luftballons, hergestellt mit der noch heute gebräuchlichen Tauchmethode, wurden erstmals 1847 von J. G. Ingram in London hergestellt und verkauft.'
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
        'Die Herkunft des Wortes ist ungeklärt. Es wird heute meist mit dem Imperativ hurra von mittelhochdeutsch hurren, „sich schnell bewegen“ ' ||
        '(vergl. dt. hurtig oder engl. to hurry, „eilen, sich beeilen“) in Verbindung gebracht. Eine andere These vermutet den Ursprung in Zentralasien: ' ||
        'Bereits Jean de Mandeville schilderte im 14. Jahrhundert den Warn- und Waffenruf „Kera! Kera! Kera!“, was mit den russischen Kriegsrufen („Ura“, „Houra“) ' ||
        'in Verbindung gebracht wurde; andere Autoren vermuten, der Schlachtruf habe mongolische Wurzeln. Die Herleitung erfolge über turkotatarisch urra ' ||
        'von urmak „schlagen“. Einer im 19. Jahrhundert aufgekommenen Vermutung zufolge leitet sich das Wort von einem angeblichen Ruf Thur aïe (‚Thor hilf!‘) her, ' ||
        'den heidnische Normannen als Schlachtruf gebraucht und dem christlichen Schlachtruf Deus aïe (‚Gott hilf!‘) entgegengesetzt haben sollen. ' ||
        'Einziger Beleg hierfür ist eine Stelle im Roman de Rou des anglonormannischen Dichters Wace († nach 1174), wonach Raoul Tesson einen ähnlichen Ruf ' ||
        'in der Schlacht von Val-ès-Dunes (1047) zur Anfeuerung seiner Leute gebraucht haben soll. Bei diesem Schlachtruf, in der Handschrift wiedergegeben ' ||
        'in der Form turie und gereimt auf emmie, vom ersten Herausgeber Frédéric Pluquet (1824) dann gedeutet als Tur aïe, handelte es sich aber nicht um eine ' ||
        'Anrufung der germanischen Gottheit Thor, sondern um den Namen von Tessons Baronie Thury (heute Thury-Harcourt), weshalb diese These in der Sprachwissenschaft ' ||
        'heute nicht mehr vertreten wird.'
        );