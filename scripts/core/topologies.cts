// TODO: properly type it
export type KnownPluralTopology = "queries";

export function topologyAsSingular(
  topology: KnownPluralTopology | string
): KnownSingularTopology | string {
  switch (topology) {
    case "queries":
      return "query";

    default:
      return topology;
  }
}

// TODO: properly type it
export type KnownSingularTopology = "query";

export function topologyAsPlural(
  topology: KnownSingularTopology | string
): KnownPluralTopology | string {
  switch (topology) {
    case "query":
      return "queries";

    default:
      return topology;
  }
}

export const FILENAMES_WITHOUT_TOPOLOGY = [".gitignore"];
export const EXTENSIONS_WITHOUT_TOPOLOGY = ["md", "txt", "log"];

export const DEFAULT_FILENAME_EXTENSION = ".ts";

export const FILENAME_LENGTH_WITH_ONLY_EXTENSION = 2;
export const FILENAME_LENGTH_WITH_ONLY_TOPOLOGY = 3;
