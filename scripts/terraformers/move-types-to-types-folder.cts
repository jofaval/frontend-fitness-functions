import { getAllFilesFromPath } from "../core/files.cjs";

export function moveTypesToTypeFolder(path: string): void {
  const files = getAllFilesFromPath(path, []);
  throw new Error("Not implemented");
}
