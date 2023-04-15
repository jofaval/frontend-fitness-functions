import { getAllFilesFromPath } from "../core/files.cjs";

export function onlyTypesInTypeFolder(path: string): void {
  const files = getAllFilesFromPath(path, []);
  throw new Error("Not implemented");
}
