import express from 'express'
import { create, getAll, updateEvent, deleteEvent } from '../controllers/eventController.js'

const router = express.Router()

router.post('/create', create)
router.get('/getAll', getAll)
router.put('/update/:event_id', updateEvent)
router.delete('/delete/:event_id', deleteEvent)

export default router
