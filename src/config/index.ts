import dotevn from 'dotenv'
import  path  from 'path'
dotevn.config({ path: path.join(process.cwd(), '.env') })

export default {
    port: process.env.PORT,
    database: process.env.DATABASE_URL
}