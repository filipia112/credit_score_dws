import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const EventPlayer = sequelize.define('event_players', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    event_id: { type: DataTypes.INTEGER, allowNull: false },
    player_id: { type: DataTypes.INTEGER, allowNull: false },
    active_participation: { type: DataTypes.TINYINT(1) },
    rally_type: { type: DataTypes.STRING(20) },
    score_event: { type: DataTypes.STRING(50) },
    ismvp: { type: DataTypes.TINYINT(1) },
    total_points: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE },
    mvp_of: { type: DataTypes.STRING(50) }
}, {
    tableName: 'event_players',
    timestamps: false
})

export default EventPlayer
