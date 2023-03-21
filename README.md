# Js-biglietto-treno-form
---
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
---
## Informazioni in possesso 
- Prezzo al km.:  `€ 0.21`
- Sconto Under 18: `20 %`
- Sconto Over 65 : `40 %`
---
## Informazioni mancanti
- N. km da percorrere
- Età del passeggero
- Prezzo finale del biglietto
---
## Procedimento : 
1. Creo `input` e `bottoni` in HTML per poter "ricevere" i dati.
1. Aggiungo un `"eventListener"` ai bottoni per richiamare delle funzioni.
1. Salvo in una `variabile` l'età del passeggero controllando la `VALUE` dell'input.`text` compilato dall'utente.
1. In base alla fascia d'età dichiarata tramite una `select` recupero il `value della option` e decido la percentuale di sconto da dover applicare al biglietto; inoltre nella categoria "OFFERTA" mostro la tipologia di offerta applicata.
1. Recupero i `km da percorrere` dal `VALUE` di un input.`number`.
1. Moltiplico il n. di `km` da percorrere al "prezzo per Km" (`€ 0.21`) per ottenere il prezzo totale del biglietto.
1. Arrotondo la cifra ottenuta con un massimo di due decimali.
1. Creo due generatori randomici di numeri per assegnare casualmente il `n. di carrozza` e il `Codice CP`.
```
- IF fascia d'età === minorenne --> Sconto 20%
- ELSE IF         === over65 --> Sconto 40%
- Else            --> Prezzo non scontato
```