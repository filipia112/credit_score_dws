import express from 'express'
import { addPoint, summary } from '../controllers/pointController.js'

const router = express.Router()

router.post('/point', addPoint)
router.get('/summary', summary)

export default router
