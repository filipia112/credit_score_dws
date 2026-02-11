import Event from '../models/Event.js'

export const create = async (req, res) => {
    try {
        const event = await Event.create(req.body)
        res.json(event)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
export const getAll = async (req, res) => {
    const data = await Event.findAll()
    res.json(data)
}
export const updateEvent = async (req, res) => {
    const { event_id } = req.params
    const {
        name_event,
        event_date,
        team,
        tier_event,
        total_participation,
        season
    } = req.body

    try {
        const [updated] = await Event.update(
            {
                name_event,
                event_date,
                team,
                tier_event,
                total_participation,
                season
            },
            { where: { event_id } }
        )

        if (updated === 0) {
            return res.status(404).json({ error: 'Event tidak ditemukan' })
        }

        const data = await Event.findByPk(event_id)
        res.json(data)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
export const deletePlayer = async (req, res) => {
    const { player_id } = req.params

    try {
        const deleted = await Player.destroy({
            where: { player_id }
        })

        if (deleted === 0) {
            return res.status(404).json({ error: "Player tidak ditemukan" })
        }

        res.json({ message: "Player berhasil dihapus" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
export const deleteEvent = async (req, res) => {
    const { event_id } = req.params

    try {
        const deleted = await Event.destroy({
            where: { event_id }
        })

        if (deleted === 0) {
            return res.status(404).json({ error: 'Event tidak ditemukan' })
        }

        res.json({ message: 'Event berhasil dihapus' })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}