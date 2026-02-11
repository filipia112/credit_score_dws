import express from 'express'
import {
  create,
  getEventWithPlayers,
  deleteEventPlayer
} from '../controllers/eventplayersController.js'

const router = express.Router()

router.post('/', create)
router.get('/event/:event_id/detail', getEventWithPlayers)
router.delete('/:id', deleteEventPlayer)

export default router