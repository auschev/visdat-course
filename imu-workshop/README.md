# Visualisierung & Datenaufbereitung — IMU - Workshop

## 1 Einleitung
```
In dieser Übung wird mithilfe von phyphox und Handy eine räumliche Bewegung aufgezeichnet. Die Aufgezeichneten Daten sind translatorische Beschleuningungen in alle Koordinatenrichtungen und Drehungen um alle Kordinatenachsen.  
```

## 2 Struktur
- `imu-workshop/` — Ordner wo die Übung stattfindet 
- `data/` — alle Rohdaten
- `figures/` — alle erzeugten Diagramme
- `auschev_imu_tracking.py/` — alle Codes
- `README.md/` — Bericht

## 3 Student

### Ruslan Auschev
- **GitHub:** [@auschev](https://github.com/auschev)
- **Program:** Master Mechanical Engineering
- **Interests:** creating documents, creating structures, optimizing workflows, visualizing data
- **Background:** First and Second semester VBA and C++, also Raspberry Pi and Arduino
``
## 4 Kurze Beschreibung des Projekts 200-400 Wörter

Die durchgeführte Bewegung war eine linerae translatorische Bewegung entlang eines Tisches. Dabei wurde das Handy auf ein Tisch gelegt, die Messung gestartet und bis 3 gezählt anschließend wurde eine zügige Beschleuningung auf das Handy eingebracht. Nach etwa 60 cm, abgebremst und bis 3 gezählt. Anschließend wurde die Messung gestoppt und als CVS-Datei exportiert und in VS-Code eingelesen.

Die tatsächliche Distanz wurde nicht exakt gemessen sonder nach gefühl geschätzt und beträgt ca. 60 cm.

Die Analyse mit VS-Code ergab eine Euklidische Distanz von 70 cm. Das zeigt auf eine mäßig gute Messung. Es wurde auch die Differenz zwische Messung und Auswertung errechnet im code als "error" bezeichnet. Warum die errechnete Distanz etwas größer ist als die gemessenen 60 cm wird weiter unten im 
"Kapitel 5: Herausforderungen und Lösungsansätze" und "Kapitel 6: Interpretation der Rohdaten" erklärt.

Was Drift und Messgenauigkeit betrifft kann man sagen, dass durch eine sehr langsame bewegung fast schon konstante Bewegung des Handys eine große Abweichung der Position durch das Integrireren ergeben hat. Das kommt daher, weil die Messung mithilfe Beschleuningungssensor durchgeführt wurde und eine konstante Bewegung eben keine oder nur sehr geringe Beschleunigungskomponenten aufweist. Aus diesem Grund ergab für diese Messung eine euklidische Distanz von 4 m obwohl die Bewegung beim ersten Versuch nur 30 cm lang war.

Weiters ist zu erwähnen, dass die gemessenen Rohdaten in Ordnung waren und vernünftige Achsenskalierungen hatten. Erst durch die Integration verschlimmerte sich das Ergebnis exponentiell.

Das heißt, kleine Fehler bei den Messwerten können große Auswirkungen bei der Integration auf Geschwindigkeit und Position haben. Das nennt man Drift, obwohl die Werte sich nicht ändern, die Ergebnisse der Integration immer weiter wegdriften.

Eine weitere Messung mit ausreichender Beschleuningung/Verzögerung hat das Problem gelöst.

Ein weiterer Fehler war, dass der Sensor obwohl das Handy nicht bewegt wurde ein geringfügiges Signal eine kleine Beschleiningung gemessen hat (Bias/Offset) auch das führt zum Drift des Ergebnisses bei der Integration. 

Auch das Rauschen des Sensors kann das Ergebnis verschlechtern, dazu haben wir die Rohdaten durch ein LowPassFilter geschickt um das hochfrequente Rauschen zu minimieren und den wahren Wert hervorzuheben.

Auch eine unregelmäßige Abtastzeit kann das Ergebnis beeinflussen. Dazu haben wir mit dem entsprechenden code den Zeitvektor richitg aufbereitet. Die Zeitabstände zwischen einzelnen Messwerten normiert.

## 5 Herausforderungen und Lösungsansätze

Beim 2D Plot wurde eine konstante Bewegung in X - Richtung ertwartet. Die Bewegung war zwar hautsächlich in X - Richtung doch zum Schluss gab es eine leichte Abweichung in positiv Y - Richtung und Z - Richtung. Die Vermutung ist, dass ich bei der Ausführung der Bewegung das Handy leicht gedreht haben könnte. Dadurch entsteht folgende Situation, wenn der Momentanpol der Drehung nicht  mit der Position des Sensors zusammenfällt, so kann der Sensor auch Beschleuningungen in Y,Z - Richtungen erfassen. Das heißt, obwohl das Handy translatorisch in X - Richtung bewegt wird, sieht der Sensor auch eine Beschleuningung in Y,Z - Richtung. Eine Drehung um jede Achse wurde durch den Gyroskopen erfasst und die Winkel z.B. für YAW Betrugen ca. -1° bis +2°, ab der dritten Sekunde also eher am Ende der Bewegung, dies ist auch im Plot [02_device_orientation_over_time.png] ersichtlich. Das kann später bei der Integration als eine Bewegung in die jeweilige Richtung Abbgebildet werden. Das wird der Fehler im Plot: [05_reconstructed_2D_trajectory.png] und [06_reconstructed_3D_trajectory.png]  sein.

Dieser Fehler wurde durch eine geeignete Skalierung der betroffenen Achsen entfernt Plot: ![05.1_scaled_2D_trajectory.png]. Achtung die Distanz im skaliertem Plot ist etwa 67 cm während die berechnete euklidische Distanz 70 cm ist. Liegt daran, dass euklidische Distanz einfach der Betrag des Vektors vom Startpunkt bis zum Endpunkt ist. Da eine Bewegung in Y,Z - Richtungen vorhanden ist, ist die Distanz aus dem Plot: [06_reconstructed_3D_trajectory.png] größer 
als im Plot: [05.1_scaled_2D_trajectory.png].

## 6 Interpretation der Rohdaten

Man sieht in Rohdaten bei den Beschleunigungen in X , Y und Z folgende Verläufe.

In Z - Richtung ist die Beschleuningung annähernd konstant 9,81 das entspricht der Erdbeschleunigung. Erst bei der Bewegung des Handys erfasst er noch zusätzliche Beschleunigungen in Z.

In Y - Richtung ist eine geringfügige Beschleunigung in positive als auch negative Richtung zu erkennen, das liegt wie oben schon erklärt daran, dass Sensorposition und der Momentanpol der Drehung des Handys nicht zusammenfallen. Weiters erkennt man auch einen geringfügigen Gleichanteil, bedeutet der Sensor misst eine Beschleunigung ca. 0,1 m/s^2 obwohl das Handy nicht bewegt wird. Mögliche Ursache nicht kalibriert.

In X - Richtung wird ab ca. 2,5 Sekunden "konstant" beschleunigt und kurz nach der dritten Sekunde wieder "konstant" verzögert. Das dass Signal ins negative überschwingt liegt daran, dass durch das abrupte abbremsen, ich das Handy kurz zurückgezogen habe. Weiters erkennt man auch einen geringfügigen Gleichanteil, bedeutet der Sensor misst eine Beschleunigung ca. 0,4 m/s^2 obwohl das Handy nicht bewegt wird. Mögliche Ursache nicht kalibriert. Das wird auch ein Grund sein, warum der Fehler also Error 10 cm beträgt. Also etwas mehr gemessen als tatsächlich abgefahren. 

Also zwei Ursachen für einen Error von 10 cm:
1. Sensor nicht kalibriert
2. euklidische Distanz durch Y,Z - Beschleunigungen verfälschten Signals