import {Router} from "express";
import {Routes} from "../utils/enums/index.js";
import {credit} from "../utils/constants/credit.constant.js";
import {debit} from "../utils/constants/debit.constant.js";
import {getBalance} from "../utils/constants/getBalance.constant.js";
import {rollback} from "../utils/constants/rollback.constant.js";
import {closeSession} from "../utils/constants/closeSession.constant.js";

const router = Router()

router.post(Routes.Credit, (req, res) => {
    console.log("CREDIT", req.body)
    res.status(200).json(credit)
})
router.post(Routes.Debit, (req, res) => {
    console.log("DEBIT", req.body)
    res.status(200).json(debit)
})
router.post(Routes.GetBalance, (req, res) => {
    console.log("GET BALANCE", req.body)
    res.status(200).json(getBalance)

})
router.post(Routes.Rollback, (req, res) => {
    console.log("ROLLBACK", req.body)
    res.status(200).json(rollback)
})
router.post(Routes.CloseSession, (req, res) => {
    console.log("CLOSE SESSION", req.body)
    res.status(200).json(closeSession)
})

export default router