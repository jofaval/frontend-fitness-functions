// validators and fixers (terraformers)

import { LogLevel, logError } from "./core/logging.cjs";

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
];

export function orchestrate(args: OrchestratorCliArguments): void {
  if (!args) {
    logError("No clear action was provided, please specify one", undefined);
    return;
  }

  if (!args.validate || !args.fix) {
    logError("No clear action was provided, please specify one", args.logLevel);
  }

  // TODO: allow for modular selection
  // TODO: allow for path filtering, only apply in ... file
  // TODO: implement allow on everything
}

(function () {
  // [node, target, ...actualArgs]
  const args = process.argv.slice(2);
  orchestrate(args);
})();
