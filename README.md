[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/sGjc3mYF)
**Toto je základní kód k úkolu 2 z BSDE (Základy softwarového vývoje) pro distanční studium v češtině.**

Zadání úkolu je [zde](https://github.com/UnicornUniversity/BSDE-DS-Assignment2/blob/master/BSDE%202025%20Summer%20Zad%C3%A1n%C3%AD%20dom%C3%A1c%C3%AD%20%C3%BAkol%20_%20homework%20assignment%2002.pdf).

**Pro odevzdání je nutné úkol odevzdat**: 
1) Kód sem na GitHub
2) Na Plus4U přes tlačítko odevzdat

**Poznámky k úkolu:**
- Můžete zvolit konverzi mezi libovolnými 2 číselnými soustavami, jen nesmí být totožné (např. není povoleno z binární do binární, protože v takovém případě k převodu fakticky nedochází).
- Kvůli použití automatických testů je možné implementovat pouze konverzi mezi číselnými soustavami používající poziční systém (včetně nuly, jak definováno Brahmaguptou 628 AD - tzn. třeba římské nebo babylonské číslice vám neprojdou). Navíc současné automatické testy omezují čiselné soustavy na základ 2-36 (v budoucnu možná rozšířím).
- Můžete povolit konverzi více různých soustav, ale není to nutné. Pokud bude chyba jen v některém z převodů, budu hodnotit ten z převodů, který je dobře. Jinak k tomu ovšem nebude přihlíženo.
- **JE ZAKÁZÁNO POUŽÍVAT FUNKCE, KTERÉ KONVERZI ČÍSELNÝCH SOUSTAV ŘEŠÍ ZA VÁS!**
  - Jmenovitě jde o _Number.parseInt(number, numberSystem)_ a _.toString(numberSystem)_.
  - Pokud k tomu dojde, úkol může být hodnocený 0 body (nebo bude zisk bodů alespoň výrazně redukován).
  - Výjmkou je případ, kdy je konverze prováděna pouze nad jednotlivými číslicemi.

**Jak postupovat v úkolu:**

1) Editujete hlavně soubor main.js.
2) Zde zvolte a upravte permittedInputSystems() a permittedOutputSystems() - výběr říká z jaké a do jaké soustavy se konveruje. Stačí v obou zvolit jen jedno číslo.
3) Samotnou koverzi číselných soustav implementujete ve funkci main(inputNumber, inputNumberSystem, outputNumberSystem).
4) Pokud chcete, můžete importovat funkce z jiných souborů (naznačeno na druhém řádku). Použijte pro to složku src.
5) Kód je automaticky otestován po každé operaci Push. Pokud chcete, můžete si spustit testování lokálně - je třeba pro to nainstalovat NPM. Následně v příkazovém řádku ve složce projektu nainstalujete moduly přes "npm install" a spustíte testování přes "npm test".
6) Přepisování testů a nebo způsobu spouštění aplikace (složka test, .get nebo soubor package.json) není povoleno. Pokud k tomu dojde, neznamená to, že úkol nebude hodnocen. Ale přiděláte mi tím práci.
