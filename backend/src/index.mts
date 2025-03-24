import express from 'express'
import cors from 'cors'
import { createServer} from 'node:http'
import { Server } from 'socket.io'


const app = express()

app.use(cors())

const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

app.get("/", (_,res) => {
    res.status(200).json({message: "Server is live"})
})

io.on("connection", (socket) => {
    console.log("A new user connected")

})

server.listen(3000, () => {
    console.log("Server is live @ http://localhost:3000")
})
