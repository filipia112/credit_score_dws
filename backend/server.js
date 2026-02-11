import 'dotenv/config'
import app from './src/app.js'

app.listen(3000)
console.log(process.env.DB_USER, process.env.DB_PASS)
