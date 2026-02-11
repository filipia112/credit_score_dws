import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'
import EventPlayer from './EventPlayer.js'

const Player = sequelize.define('players', {
    player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100)
    },
    watchtower: {
        type: DataTypes.STRING(100)
    },
    march_power: {
        type: DataTypes.STRING(100)
    },
    role: {
        type: DataTypes.STRING(50)
    },
    created_at: {
        type: DataTypes.DATE
    },
    rank_alliance: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: 'players',
    timestamps: false
})

Player.hasMany(EventPlayer, { foreignKey: 'player_id' })

export default Player
