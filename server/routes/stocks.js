import express from 'express';

import { getStocks, postStock } from '../controllers/stocks.js';

const router = express.Router();

router.get('/', getStocks);
router.post('/', postStock);

export default router;