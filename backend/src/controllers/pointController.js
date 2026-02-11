import PlayerPoint from '../models/PlayerPoint.js'

export const addPoint = async (req, res) => {
    await PlayerPoint.add(req.body)
    res.json({ status: 'point_added' })
}

export const summary = async (req, res) => {
    const [data] = await PlayerPoint.summary()
    res.json(data)
}
