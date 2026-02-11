import { Router } from 'express'
import { create, getAll ,updatePlayer, deletePlayer } from '../controllers/playerController.js'

const router = Router()

router.post('/create', create)
router.get('/getAll', getAll)
router.put('/Update/:player_id', updatePlayer)
router.delete('/delete/:player_id', deletePlayer)

export default router
