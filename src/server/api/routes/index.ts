import * as Express from 'express';

const router = Express.Router();

/** GET /api/health-check - Check service health */
router.get('/health-check', (req, res) => res.send('API Health: OK 👌'));

export default router;
