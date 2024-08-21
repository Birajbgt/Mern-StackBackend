const router = require('express').Router();
const noteController = require('../controller/noteControllers');
const { authGuard } = require('../middleware/auth');

router.post('/create',authGuard, noteController.createNote)

// fetch all products
router.get('/get_all_notes',authGuard, noteController.getAllNotes)

// single product 
router.get('/get_single_note/:id',authGuard, noteController.getSingleNote)

//delete_product
router.delete('/delete_note/:id',authGuard, noteController.deleteNote);+

// update_product
router.put('/get_single_note/:id',authGuard, noteController.updateNote);

module.exports = router 