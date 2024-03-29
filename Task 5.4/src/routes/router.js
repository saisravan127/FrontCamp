import { Router } from 'express';
import controller from '../controller/controller.js';
import { validateUser } from '../middleware/validateUser.js';

export const router = Router();

router.get('/getUser/:id', controller.getUser);
router.post('/createUser', validateUser, controller.createUser);
router.delete('/removeUser/:id', controller.removeUser);
router.put('/updateUser/:id', validateUser, controller.updateUser);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', controller.autoSuggest);
router.get('/getAllUsers', controller.getAllUsers);
router.use('*', (req, res) => {
    res.status(404).send({
        message: 'Page not found'
    });
});