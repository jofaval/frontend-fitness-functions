import { getAllFilesFromPath } from "../core/files.cjs";

export function isFlatStructureNestedLevel(path: string): void {
  const files = getAllFilesFromPath(path, []);
  throw new Error("Not implemented");
}
