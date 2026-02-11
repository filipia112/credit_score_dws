import db from '../config/database.js'

const PlayerPoint = {
    add(data) {
        return db.promise().query(
            'INSERT INTO player_points (player_id, event_id, points) VALUES (?,?,?)',
            [data.player_id, data.event_id, data.points]
        )
    },
    summary() {
        return db.promise().query(`
            SELECT 
                p.player_id,
                p.name,
                SUM(pp.points) total_points
            FROM player_points pp
            JOIN players p ON p.player_id = pp.player_id
            GROUP BY p.player_id
        `)
    }
}

export default PlayerPoint
