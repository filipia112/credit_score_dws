import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Event = sequelize.define('events', {
    event_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name_event: { type: DataTypes.STRING(100) },
    event_date: { type: DataTypes.DATEONLY },
    team: { type: DataTypes.STRING(10) },
    tier_event: { type: DataTypes.ENUM('Urgent', 'Normal', 'Special') },
    total_participation: { type: DataTypes.INTEGER },
    season: { type: DataTypes.INTEGER },
    created_at: { type: DataTypes.DATE }
}, {
    tableName: 'events',
    timestamps: false
})

export default Event
