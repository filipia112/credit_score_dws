import express from 'express'
import playerRoutes from './routes/playerRoutes.js'
import eventRoutes from './routes/eventRoutes.js'
import eventPlayerRoutes from './routes/eventplayerRoutes.js'
import './models/associations.js'
const app = express()

app.use(express.json())

app.use('/players', playerRoutes)
app.use('/events', eventRoutes)
app.use('/event-players', eventPlayerRoutes)

export default app
