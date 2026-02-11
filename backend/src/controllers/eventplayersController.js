import Event from '../models/Event.js'
import EventPlayer from '../models/EventPlayer.js'
import Player from '../models/Player.js'
export const create = async (req, res) => {
    try {
        const eventPlayer = await EventPlayer.create(req.body)
        res.json(eventPlayer)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
export const getEventWithPlayers = async (req, res) => {
    const { event_id } = req.params

    try {
        const data = await Event.findOne({
            where: { event_id },
            attributes: [
                'event_id',
                'name_event',
                'event_date',
                'team',
                'tier_event',
                'total_participation',
                'season',
                'created_at'
            ],
            include: [
                {
                    model: EventPlayer,
                    attributes: [
                        'id',
                        'event_id',
                        'player_id',
                        'active_participation',
                        'rally_type',
                        'score_event',
                        'total_points',
                        'ismvp',
                        'created_at',
                        'mvp_of'
                    ],
                    include: [
                        {
                            model: Player,
                            attributes: [
                                'player_id',
                                'name',
                                'watchtower',
                                'march_power',
                                'role',
                                'rank_alliance',
                                'created_at'
                            ]
                        }
                    ]
                }
            ]
        })

        if (!data) {
            return res.status(404).json({ message: 'Event not found' })
        }

        res.json(data)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


// READ SINGLE
export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const eventPlayer = await EventPlayer.findByPk(id)
        if (!eventPlayer) return res.status(404).json({ message: 'EventPlayer not found' })
        res.json(eventPlayer)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// UPDATE
export const updateEventPlayer = async (req, res) => {
    const { id } = req.params
    try {
        const eventPlayer = await EventPlayer.findByPk(id)
        if (!eventPlayer) return res.status(404).json({ message: 'EventPlayer not found' })
        await eventPlayer.update(req.body)
        res.json(eventPlayer)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// DELETE
export const deleteEventPlayer = async (req, res) => {
    const { id } = req.params
    try {
        const eventPlayer = await EventPlayer.findByPk(id)
        if (!eventPlayer) return res.status(404).json({ message: 'EventPlayer not found' })
        await eventPlayer.destroy()
        res.json({ message: 'EventPlayer deleted successfully' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
