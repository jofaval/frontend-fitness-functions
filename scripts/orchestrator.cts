// validators and fixers (terraformers)

export type LogLevel = "none" | "all" | "info" | "error";

export type OrchestratorCliArguments = {
  fix?: boolean;
  validate?: boolean;
  logLevel?: LogLevel;
  //   logLevel: LogLevel | LogLevel[];
  log?: boolean;
  //   throwError: boolean;
  stopOnError?: boolean;
};

export function shouldShowError(
  logLevel: OrchestratorCliArguments["logLevel"]
): boolean {
  switch (logLevel) {
    case "all":
      return true;
    case "info":
      return false;
    case "error":
      return true;
    case "none":
      return true;

    default:
      return false;
  }
}

export function shouldShowInfo(
  logLevel: OrchestratorCliArguments["logLevel"]
): boolean {
  switch (logLevel) {
    case "all":
      return true;
    case "info":
      return true;
    case "error":
      return false;
    case "none":
      return true;

    default:
      return false;
  }
}

export function logError(message: string, logLevel: LogLevel | undefined) {
  if (!logLevel || !shouldShowError(logLevel)) {
    return;
  }

  console.error(message);
}

export function orchestrate(args: OrchestratorCliArguments): void {
  if (!args) {
    logError("No clear action was provided, please specify one", undefined);
    return;
  }

  if (!args.validate || !args.fix) {
    logError("No clear action was provided, please specify one", args.logLevel);
  }
}

(function () {
  // [node, target, ...actualArgs]
  const args = process.argv.slice(2);
  orchestrate(args);
})();
