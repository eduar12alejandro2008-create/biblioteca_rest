import { Router } from 'express';
import {
    getReaders, getReaderById, createReader, updateReader, deleteReader
} from '../controllers/readerController.js';
import { validateReader, validateReaderId } from '../validators/readerValidator.js';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';

const router = Router();

router.route('/')
    .get(getReaders)
    .post(validateReader, handleValidationErrors, createReader);

router.route('/:id')
    .get(validateReaderId, handleValidationErrors, getReaderById)
    .put(validateReaderId, validateReader, handleValidationErrors, updateReader)
    .delete(validateReaderId, handleValidationErrors, deleteReader);

export default router;