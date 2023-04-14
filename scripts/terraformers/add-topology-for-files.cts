import { getAllFilesFromPath } from "../core/files.cjs";

export function addTopologyForFiles(path: string): void {
  const files = getAllFilesFromPath(path, []);
}
