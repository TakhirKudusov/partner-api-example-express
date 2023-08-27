import {HttpErrorCodeEnum} from "../enums/index.js";

type TGeneralResBody = {
    Error: HttpErrorCodeEnum;
    Msg: string;
};

type TPartnerCreditResBody = TGeneralResBody & {
    Balance: number;
    ExtSession: string;
    ExtTransactionId: string;
};

type TPartnerDebitResBody = TGeneralResBody & {
    Balance: number;
    ExtSession: string;
    ExtTransactionId: string;
};

type TPartnerGetBalanceResBody = TGeneralResBody & {
    Balance: number;
};

type TPartnerRollbackResBody = TGeneralResBody & {
    ExtSession: string;
    ExtTransactionId: string;
};

type TPartnerCloseSessionResBody = TGeneralResBody

export type { TPartnerCreditResBody, TPartnerCloseSessionResBody, TPartnerDebitResBody, TPartnerRollbackResBody, TPartnerGetBalanceResBody}