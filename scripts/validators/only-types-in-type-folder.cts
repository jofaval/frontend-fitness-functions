import { readFileSync } from "fs";
import { getAllFilesFromPath } from "../core/files.cjs";

export const CHECK_FILES_ENDING_IN = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".vue",
  ".astro",
  ".svelte",
];

const TYPE_REGEX = [
  new RegExp(/((?<=type\s)(.*)(?= = \{)|(?<=interface\s)(.*)(?=\s\{))/i),
];

function getLineTypes(line: string): string[] {
  const matches: string[] = [];

  TYPE_REGEX.forEach((matcher) => {
    let m: RegExpExecArray | null;
    while ((m = matcher.exec(line)) !== null) {
      if (m.index === matcher.lastIndex) {
        matcher.lastIndex++;
      }

      m.forEach((match) => matches.push(match));
    }
  });

  return matches;
}

type LinesWithFiles = {
  lineIndex: number;
  file: string;
  typeName: string;
};

// TODO: optimize search
// TODO: line may be in-line typing, this would not detect that, yet
function getLinesWithTypes(file: string): LinesWithFiles[] {
  const content = readFileSync(file).toString();
  const lines = content.split("\n");

  const linesWithTypes = lines.reduce<LinesWithFiles[]>(
    (linesWithTypes, line, index) => {
      const lineTypes = getLineTypes(line);
      if (!lineTypes) {
        return linesWithTypes;
      }

      lineTypes.forEach((lineType) =>
        linesWithTypes.push({ lineIndex: index + 1, file, typeName: lineType })
      );

      return linesWithTypes;
    },
    []
  );

  return linesWithTypes;
}

export function onlyTypesInTypeFolders(
  path: string,
  validExtensions: string[] = CHECK_FILES_ENDING_IN
): void {
  const files = getAllFilesFromPath(path, []);
  const filesWithTypes: LinesWithFiles[] = [];

  for (const file of files) {
    if (!file.endsWith(".type.ts") && !validExtensions.some(file.endsWith)) {
      continue;
    }

    const lines = getLinesWithTypes(file);
    if (lines) {
      filesWithTypes.concat(lines);
    }
  }

  if (filesWithTypes) {
    filesWithTypes.forEach;
  }

  throw new Error("Not implemented");
}
