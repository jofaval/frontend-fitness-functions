export type LogLevel = "none" | "all" | "info" | "error";

export function shouldShowError(logLevel: LogLevel): boolean {
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

export function shouldShowInfo(logLevel: LogLevel): boolean {
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

export function logInfo(message: string, logLevel: LogLevel | undefined) {
  if (!logLevel || !shouldShowInfo(logLevel)) {
    return;
  }

  console.info(message);
}

export function shouldLogToFile(
  log: boolean,
  logLevel: LogLevel,
  allowedLogLevel: LogLevel
): boolean {
  if (!log || allowedLogLevel === "none") {
    return false;
  }

  if (allowedLogLevel === "all") {
    return true;
  }

  return logLevel === allowedLogLevel;
}

// TODO: implement a write-to-file logging system
