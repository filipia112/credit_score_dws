import Event from './Event.js'
import EventPlayer from './EventPlayer.js'
import Player from './Player.js'

Event.hasMany(EventPlayer, { foreignKey: 'event_id' })
EventPlayer.belongsTo(Event, { foreignKey: 'event_id' })
EventPlayer.belongsTo(Player, { foreignKey: 'player_id' })
