import { getAllFilesFromPath } from "../core/files.cjs";

export function allFilesHaveTopology(path: string): void {
  const files = getAllFilesFromPath(path, []);
  throw new Error("Not implemented");
}
