/** source/routes/business-hours.ts */
import express from 'express';
import controller from '../controllers/business-hours';
const router = express.Router();

router.get('/business-hours', controller.checkBusinessHours);
router.get('/business-hours/:country/:city/:openHour/:closeHour', controller.checkBusinessHours);

router.post('/business-hours', controller.checkBusinessHoursPOST);

export = router;