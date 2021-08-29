const LogLevels = {
    Trace: 0,
    Debug: 1,
    Warn: 2,
    Error: 3
}

let CurrentLogLevel = LogLevels.Warn;

function logDebug(message) {
    smartLog(message, LogLevels.Debug);
}

function logWarn(message) {
    smartLog(message, LogLevels.Warn);
}

function logError(message) {
    smartLog(message, LogLevels.Error);
}

function logTrace(message) {
    smartLog(message, LogLevels.Trace);
}

function smartLog(message, logLevel) {
    if (logLevel >= CurrentLogLevel) {
        log(message);
    }
}
