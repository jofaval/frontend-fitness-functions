import { getAllFilesFromPath, renameFile } from "../core/files.cjs";
import {
  DEFAULT_FILENAME_EXTENSION,
  FILENAMES_WITHOUT_TOPOLOGY,
  FILENAME_LENGTH_WITH_ONLY_EXTENSION,
  FILENAME_LENGTH_WITH_ONLY_TOPOLOGY,
  topologyAsSingular,
} from "../core/topologies.cjs";

export function forceTopologyToFilename(
  filename: string,
  topology: string
): string {
  const splittedFile = filename.split(".");

  const extension =
    splittedFile.length >= FILENAME_LENGTH_WITH_ONLY_EXTENSION
      ? splittedFile[splittedFile.length - 1]
      : DEFAULT_FILENAME_EXTENSION;

  const filenameWithoutTopology =
    splittedFile.length >= FILENAME_LENGTH_WITH_ONLY_TOPOLOGY
      ? splittedFile.slice(0, -2)
      : splittedFile.slice(0, -1);

  return [filenameWithoutTopology.join("-"), topology, extension].join(".");
}

export function getTopologyFromFlatFile(path: string): string {
  const splittedPath = path.split(/\/+/);
  const topology = topologyAsSingular(splittedPath[splittedPath.length - 2]);

  return forceTopologyToFilename(
    splittedPath[splittedPath.length - 1],
    topology
  );
}

export function getTopologyFromDeeplyNestedFile(path: string): string {
  const splittedPath = path.split(/\/+/);
  const topology = topologyAsSingular(splittedPath[splittedPath.length - 2]);

  return forceTopologyToFilename(
    splittedPath[splittedPath.length - 1],
    topology
  );
}

export function addTopologyForFiles(
  path: string,
  isFlatStructure: boolean
): void {
  const files = getAllFilesFromPath(path, []);
  const getTopologyParserFunction = isFlatStructure
    ? getTopologyFromFlatFile
    : getTopologyFromDeeplyNestedFile;

  files.forEach((file, index) => {
    if (FILENAMES_WITHOUT_TOPOLOGY.some(file.endsWith)) {
      return;
    }

    const previous = files[index];
    const fileWithTopology = getTopologyParserFunction(file);
    renameFile(previous, fileWithTopology);
  });
}
