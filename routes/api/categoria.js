const routerx = require('express-promise-router');
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth');

const router = routerx();

router.get('/list', auth.verifyAdministrador, categoriaController.list);
router.post('/add', auth.verifyAdministrador, categoriaController.add);
router.put('/update', auth.verifyAdministrador, categoriaController.update);
router.put('/activate', auth.verifyAdministrador, categoriaController.activate);
router.put('/deactivate', auth.verifyAdministrador, categoriaController.deactivate);
router.delete('/remove', auth.verifyAdministrador, categoriaController.remove);

module.exports = router;