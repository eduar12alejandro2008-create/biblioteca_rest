import { Router } from 'express';
import {
    getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor
} from '../controllers/authorController.js';
import {
    validateAuthor, validateAuthorId, handleValidationErrors
} from '../validators/authorValidator.js';

const router = Router();

router.route('/')
    .get(getAuthors)
    .post(validateAuthor, handleValidationErrors, createAuthor);

router.route('/:id')
    .get(validateAuthorId, handleValidationErrors, getAuthorById)
    .put(validateAuthorId, validateAuthor, handleValidationErrors, updateAuthor)
    .delete(validateAuthorId, handleValidationErrors, deleteAuthor);

export default router;