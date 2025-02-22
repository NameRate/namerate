# **Wie funktioniert NameRate**

Die Grundlage von NameRate ist ein **nicht interpretierbares** Machine-Learning-Modell, das kontinuierlich mit zusätzlichen Daten nachtrainiert wird. Sobald ein neues Testmodell stabil wird, ersetzt es das Hauptmodell, und das Training wird im neuen Testmodell fortgesetzt.

## Woher die Daten kommen

### **1. Plattformen für den Verkauf von Nicknamen**

Öffentliche Daten von Ressourcen, auf denen Nicknamen und Domains verkauft werden. 

> Heutzutage sind die Hauptquellen:
>
> - **[Fragment](https://fragment.com/?filter=auction)** — eine in TON integrierte Plattform, auf der Nutzer Nicknamen kaufen und verkaufen.
> - **[GetGems](https://getgems.io/collection/EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi)** — ein NFT-Marktplatz zum Handel mit Nicknamen und anderen digitalen Assets.
>

**Was wird analysiert?**

- Erfolgreiche Transaktionen: Nicknamen, die verkauft wurden, ihre Preise und die Verkaufsgeschwindigkeit.
- Fehlgeschlagene Listings: Nicknamen, die keinen Käufer fanden, und die Gründe dafür (Preis, geringe Nachfrage usw.).
- Beliebtheit von Themen: Gefragte Kategorien wie Business, Krypto oder Namen.

### **2. Markttrends**

NameRate analysiert externe Daten zur Beliebtheit von Wörtern und Phrasen. Dafür werden genutzt:

- **Auktionen von Suchmaschinen:** Statistiken, die für die Platzierung von kontextbezogener Werbung verwendet werden.
- **Online-Quellen:** Beliebte Wörter in Internetpublikationen, häufig erwähnte Phrasen.
- **Soziale Netzwerke:** Trends und Schlüsselthemen, die in Telegram, Twitter und anderen Plattformen aktuell sind.
- **Popkultur und Literatur:** Wörter und Ausdrücke, die häufig in der Popkultur, in Büchern oder Filmen vorkommen.

### **3. Nutzerpräferenzen über NameRateBot**

Trotz des großen Volumens an indirekten Trainingsdaten sind **die Verkaufsdaten noch unzureichend** für eine qualitativ hochwertige Validierung des Algorithmus.

Deshalb haben wir die Telegram-Anwendung [@NameRateBot](https://t.me/NameRateBot/namerate) gestartet, um Nutzermeinungen zu sammeln. Für uns ist dies eine **sehr wertvolle Wissensquelle**, die wir zur Überprüfung der Bewertungsqualität nutzen. Für die Nutzer ist es zudem eine gute Möglichkeit, unsere Token zu erhalten.

Aktuell wurde eine tinder-ähnliche Mechanik hinzugefügt:

- Nutzer wischen Nicknamen nach rechts (gefällt mir) oder nach links (gefällt mir nicht)
- Jeder Swipe hilft bei der Validierung der Modellgewichte
- Nutzer erhalten eine Belohnung in $NMRT

!!! annotate note ""
    Derzeit wurde nur die Swipe-Mechanik eingeführt, aber zur Verbesserung des nächsten Testmodells werden wir weitere Mechaniken einführen, beispielsweise:
    
    - Eine Mechanik mit Nutzereingabe (1)
    - Eine Mechanik mit paarweisem Vergleich (2)

1. Erfasst, was den Nutzern in den Sinn kommt  
2. Erhöht die Genauigkeit der Bewertung

??? info "Zum Schutz vor Betrug"
      - **Swipe-Limit:** Nicht mehr als 10 Swipes pro Tag, um Manipulationen zu verhindern
      - **Analyse anomaler Muster:** Wenn ein Nutzer Nicknamen zu schnell oder chaotisch bewertet, werden diese Daten ausgeschlossen
---
## Prinzipien des Algorithmus

NameRate ist ein **nicht interpretierbares** ML-Modell. Das bedeutet, dass man nicht genau sagen kann, warum der Algorithmus eine bestimmte Bewertung vergeben hat.
Im Folgenden geben wir ein **Beispiel**, das zeigt, **wie die grundlegenden Prinzipien und die einflussreichsten Merkmale funktionieren könnten**.

!!! info ""
    **Die Merkmale und ihre Gewichte ändern sich** mit jeder neuen Modellversion.
!!! info annotate ""
    Das aktuelle Modell verwendet alle unten aufgeführten Merkmale, ist jedoch nicht darauf beschränkt. **Die Interpretation der Merkmale dient nur als Referenz** (1)

1. Unser Prototyp funktionierte in ähnlicher Weise.

### Beispiel
Einige Merkmale mit großem Einfluss:

**Länge des Nicknamens** 

!!! example "Je kürzer, desto besser:" 
    `@root` oder `@final` sind wertvoller als `@longnickname123`

**Nicht-Buchstabensymbole**: wie Zahlen oder Unterstriche

!!! example "Zahlen in Nicknamen verringern den Wert:" 

    `@josephine` ist besser als `@josephine12345`

!!! note ""
    Zahlen im Nicknamen erhöhen jedoch das Gewicht, wenn sie Bedeutung hinzufügen (zum Beispiel `@peer2peer` oder `@season4`)

**Wiederholungen**
!!! example "Im Allgemeinen verringern wiederholte Zeichen den Wert:" 
    `@eeenemy` verliert an Wert aufgrund übermäßiger Wiederholungen. Ausnahme: Wiederholungen als Teil eines sinnvollen Wortes

!!! note ""
    Interessanterweise haben Wiederholungen sinnvoller Wörter nur einen geringen Einfluss auf die Bewertung

**Semantische Bedeutung**
!!! example "Reale Wörter und Phrasen werden höher bewertet" 
    `@space_jaguar` ist besser als `@qazws_jaguar`

**Beliebtheit:** Trends in der Suche, Literatur oder in sozialen Netzwerken
!!! example "Beliebter = besser" 
    `@blockchain`, `@meta_boom` oder `@music` werden aufgrund ihrer Beliebtheit höher bewertet

!!! note ""
    Trends werden in statische und dynamische unterteilt, sowie nach ihren Quellen.
   
**Thematik**: Der Wert einer Thematik wird durch Trends und Werbeauktionen in Suchmaschinen bestimmt.
!!! example "Wörterbücher" 
    Wir erstellen und aktualisieren thematische Wörterbücher, um festzustellen, zu welchen Kategorien ein Nickname gehört.
    
    Zum Beispiel: Business, Kryptowährungen, Popkultur, Namen etc. Es ist eine Verschachtelung vorgesehen – in Wörterbüchern der ersten Ebene befinden sich Wörterbücher der zweiten Ebene usw.

!!! note "Ein unpopulärer Nickname kann zu einer populären Thematik gehören und umgekehrt"
    Beispiel: `@zkevmbidge` wird fast nicht im Internet erwähnt – das mindert seinen Wert. Allerdings gehört er zu einer wertvollen Thematik – Blockchain – was seinen Wert erhöht.

**Geografische Bezüge**: Diese wirken sich sowohl positiv als auch negativ aus.
!!! example ""
    `@NYC_blah` oder `@London_example` erhalten zusätzlichen Einfluss durch Geo-Merkmale

   

Dies ist eine Liste der offensichtlichsten und verständlichsten Merkmale mit großem Einfluss. Zusätzlich gibt es schwer interpretierbare Merkmale (wie Verkaufshistorien), instabile Merkmale und solche, die wir nicht offenlegen möchten.
Die aktuelle Berechnung berücksichtigt die oben genannten Schlussfolgerungen trotz ihrer Offensichtlichkeit nicht. Ihr helft uns sehr, wenn ihr in der App ehrlich für die Namen abstimmt, die ihr gut findet. Wir geben absichtlich keine Kriterien für einen "guten" Nickname vor, damit ihr nach Gefühl bewertet.
