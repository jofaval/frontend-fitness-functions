// validators and fixers (terraformers)

import { LogLevel, logError } from "./core/logging.cjs";
import { onlyTypesInTypeFolders } from "./validators/only-types-in-type-folder.cjs";

export type OrchestratorCliArguments = {
  fix?: boolean;
  validate?: boolean;
  logLevel?: LogLevel;
  // logLevel: LogLevel | LogLevel[];
  log?: boolean;
  // throwError: boolean;
  stopOnError?: boolean;
};

export const TERRAFORMERS = [
  // flatify structure
  // move types to types folder
  // add topology
];

export const VALIDATORS = [
  // flatify structure
  // all files have topology
  // types only in types folder
  onlyTypesInTypeFolders,
];

export const SOURCE_DIR = "";

export function orchestrate(args: OrchestratorCliArguments): void {
  if (!args) {
    logError("No clear action was provided, please specify one", undefined);
    return;
  }

  if (!args.validate || !args.fix) {
    logError("No clear action was provided, please specify one", args.logLevel);
  }

  if (args.validate) {
    VALIDATORS.forEach((validate) => validate(SOURCE_DIR));
  }

  if (args.fix) {
    TERRAFORMERS.forEach((terraform) => terraform(SOURCE_DIR));
  }

  // TODO: allow for modular selection
  // TODO: allow for path filtering, only apply in ... file
  // TODO: implement allow on everything
}

(function () {
  // [node, target, ...actualArgs]
  // args should be passed as, key=value, `npm run script fix=true`
  const args = process.argv.slice(2).reduce((accumulator, arg) => {
    const [key, value] = arg.split("=");
    accumulator[key] = JSON.parse(value);
    return accumulator;
  }, {} as any);

  orchestrate(args);
})();
