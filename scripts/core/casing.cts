export function standardize(filename: string): string[] {
  return filename.split(/[\s\-]+/).reduce((acc, word) => {
    let curatedWords: string[] = [];
    let currentWord = "";
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (char.toLocaleUpperCase() === char && currentWord.length) {
        curatedWords.push(currentWord);
        currentWord = "";
        continue;
      }

      currentWord += char;
    }

    if (currentWord) {
      curatedWords.push();
    }

    return acc.concat(curatedWords);
  }, [] as string[]);
}

export function capitalize(word: string): string {
  return (
    word.charAt(0).toLocaleUpperCase() +
    word
      .split("")
      .slice(1)
      .map((character) => character.toLocaleLowerCase())
  );
}

export function asLowercase(word: string): string {
  return word.toLocaleLowerCase();
}

export function toKebabCase(filename: string[]): string {
  return filename.map(asLowercase).join("-");
}

export function toPascalCase(filename: string[]): string {
  return filename.map(capitalize).join("");
}

export function toUpperCase(filename: string[]): string {
  return filename.map((word) => word.toLocaleUpperCase()).join("_");
}

export function toLowerCase(filename: string[]): string {
  return filename.map(asLowercase).join();
}

export function toSerpentCase(filename: string[]): string {
  return filename.map(asLowercase).join("_");
}

export function toSpaceCase(filename: string[]): string {
  return filename.map(asLowercase).join(" ");
}

export function toCamelCase(filename: string[]): string {
  return [asLowercase(filename[0])]
    .concat(filename.slice(1).map(capitalize))
    .join("");
}

export type CaseKeyword =
  | "kebab-case"
  | "lowercase"
  | "serpent_case"
  | "UPPER_CASE"
  | "camelCase"
  | "PascalCase"
  | "space case";

export function byCaseKeyword(keyword: CaseKeyword, word: string): string {
  const standardizedWord = standardize(word);

  switch (keyword) {
    case "PascalCase":
      return toPascalCase(standardizedWord);
    case "UPPER_CASE":
      return toUpperCase(standardizedWord);
    case "camelCase":
      return toCamelCase(standardizedWord);
    case "kebab-case":
      return toKebabCase(standardizedWord);
    case "lowercase":
      return toLowerCase(standardizedWord);
    case "serpent_case":
      return toSerpentCase(standardizedWord);
    case "space case":
      return toSpaceCase(standardizedWord);

    default:
      return toKebabCase(standardizedWord);
  }
}
