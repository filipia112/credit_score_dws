import Player from '../models/Player.js'

export const create = async (req, res) => {
    try {
        const player = await Player.create(req.body)
        res.json(player)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export const getAll = async (req, res) => {
    const data = await Player.findAll()
    res.json(data)
}

export const updatePlayer = async (req, res) => {
    const { player_id } = req.params
    const { name, watchtower, march_power, role, rank_alliance } = req.body

    try {
        const [updated] = await Player.update(
            { name, watchtower, march_power, role, rank_alliance },
            { where: { player_id } }
        )

        if (updated === 0) {
            return res.status(404).json({ error: "Player tidak ditemukan" })
        }

        const data = await Player.findByPk(player_id)
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
