import { Router } from 'express';
import {
    getLoans, getLoanById, createLoan, updateLoanStatus
} from '../controllers/loanController.js';
import {
    validateLoan, validateLoanStatus, validateLoanId
} from '../validators/loanValidator.js';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';

const router = Router();

router.route('/')
    .get(getLoans)
    .post(validateLoan, handleValidationErrors, createLoan);

router.route('/:id')
    .get(validateLoanId, handleValidationErrors, getLoanById);

router.route('/:id/status')
    .patch(validateLoanId, validateLoanStatus, handleValidationErrors, updateLoanStatus);

export default router;