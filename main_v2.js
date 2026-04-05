// Domácí úkol 2 – Převod čísel mezi číselnými soustavami
// Implementace bez vestavěných konverzních funkcí (parseInt, toString)
// Využívá Hornerovo schéma pro převod vstupu do desítkové soustavy
// a opakované dělení pro převod z desítkové do cílové soustavy.

const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";

/**
 * Povolené vstupní číselné soustavy.
 * @returns {number[]} Pole povolených základů vstupní soustavy.
 */
export function permittedInputSystems() {
  return [2, 8, 10, 16];
}

/**
 * Povolené výstupní číselné soustavy.
 * @returns {number[]} Pole povolených základů výstupní soustavy.
 */
export function permittedOutputSystems() {
  return [2, 8, 10, 16];
}

/**
 * Převede hodnotu jedné číslice (znak) na její číselnou hodnotu.
 * Nepoužívá parseInt – pouze ruční mapování.
 * @param {string} ch - Znak představující číslici (0-9, a-z).
 * @returns {number} Číselná hodnota znaku.
 */
function digitToValue(ch) {
  const lower = ch.toLowerCase();
  const index = DIGITS.indexOf(lower);
  if (index === -1) {
    throw new Error(`Neplatná číslice: '${ch}'`);
  }
  return index;
}

/**
 * Převede číselnou hodnotu na odpovídající znak číslice.
 * @param {number} val - Číselná hodnota (0–35).
 * @returns {string} Znak představující danou číslici.
 */
function valueToDigit(val) {
  if (val < 0 || val >= DIGITS.length) {
    throw new Error(`Hodnota mimo rozsah: ${val}`);
  }
  return DIGITS[val];
}

/**
 * Převede číslo zadané jako řetězec ze vstupní soustavy do desítkové
 * pomocí Hornerova schématu.
 * @param {string} numberStr - Řetězec představující číslo ve vstupní soustavě.
 * @param {number} base - Základ vstupní číselné soustavy.
 * @returns {number} Číslo převedené do desítkové soustavy.
 */
function toDecimal(numberStr, base) {
  let result = 0;
  for (let i = 0; i < numberStr.length; i++) {
    const val = digitToValue(numberStr[i]);
    if (val >= base) {
      throw new Error(
        `Číslice '${numberStr[i]}' (hodnota ${val}) není platná v soustavě o základu ${base}.`
      );
    }
    result = result * base + val;
  }
  return result;
}

/**
 * Převede desítkové číslo do cílové soustavy opakovaným dělením.
 * @param {number} decimalNumber - Nezáporné celé číslo v desítkové soustavě.
 * @param {number} base - Základ cílové číselné soustavy.
 * @returns {string} Řetězec představující číslo v cílové soustavě.
 */
function fromDecimal(decimalNumber, base) {
  if (decimalNumber === 0) {
    return "0";
  }

  let digits = "";
  let num = decimalNumber;

  while (num > 0) {
    const remainder = num % base;
    digits = valueToDigit(remainder) + digits;
    num = Math.floor(num / base);
  }

  return digits;
}

/**
 * Hlavní funkce pro převod čísla mezi číselnými soustavami.
 * @param {string} inputNumber - Číslo jako řetězec ve vstupní soustavě.
 * @param {number} inputNumberSystem - Základ vstupní číselné soustavy.
 * @param {number} outputNumberSystem - Základ výstupní číselné soustavy.
 * @returns {string} Převedené číslo jako řetězec v cílové soustavě.
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // Krok 1: Převod ze vstupní soustavy do desítkové (Hornerovo schéma)
  const decimalValue = toDecimal(inputNumber, inputNumberSystem);

  // Krok 2: Převod z desítkové do výstupní soustavy (opakované dělení)
  const result = fromDecimal(decimalValue, outputNumberSystem);

  return result;
}
