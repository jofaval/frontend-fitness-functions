import { getAllFilesFromPath } from "../core/files.cjs";

export function flatifyStructureNestedLevel(path: string): void {
  const files = getAllFilesFromPath(path, []);
  throw new Error("Not implemented");
}
