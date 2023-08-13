export enum Routes {
    Credit = "/Credit",
    Debit = "/Debit",
    Rollback = "/Rollback",
    CloseSession = "/CloseSession",
    GetBalance = "/GetBalance"
}

export enum HttpErrorCodeEnum {
    ok,
    hashMismatch,
    internalError,
    validationError,
    gameNotfound,
    authorizationError,
    invalidToken,
    insufficientBalance,
    userBlocked,
    sessionEnded,
    sessionNotFound,
}