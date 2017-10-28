/**
 * Created by sahaque on 10/23/2017.
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: []});
});

export default router;
