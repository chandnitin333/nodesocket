import http from 'http'
import socketIO from 'socket.io'

const port: number = 5000

class App {
    private server: http.Server
    private port: number

    constructor(port: number) {
        this.port = port

        this.server = new http.Server()
        const io = new socketIO.Server(this.server)
    }

    public Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on Port ${this.port}.`)
        })

    }
    
}

new App(port).Start()