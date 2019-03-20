const Hapi = require('hapi')
const Path = require('path')

const static = require('./routes/static')
const home = require('./routes/home')

const server = Hapi.server({
    port: 3000,
    host: '127.0.0.1',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
})

const init = async () => {
    await server.register(require('inert'))

    server.route([
        ...static,
        ...home,
    ])

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()