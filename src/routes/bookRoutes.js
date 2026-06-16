import { Router } from 'express';
import {
    getBooks, getBookById, createBook, updateBook, deleteBook
} from '../controllers/bookController.js';
import { validateBook, validateBookId } from '../validators/bookValidator.js';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';

const router = Router();

router.route('/')
    .get(getBooks)
    .post(validateBook, handleValidationErrors, createBook);

router.route('/:id')
    .get(validateBookId, handleValidationErrors, getBookById)
    .put(validateBookId, validateBook, handleValidationErrors, updateBook)
    .delete(validateBookId, handleValidationErrors, deleteBook);

export default router;