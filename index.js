const server = require('./server')

// Set up your new Port
const PORT = process.env.PORT || 3000

// Initiate Server to start running!
server.listen(PORT, function () {
    console.log('Listening on port', PORT)
})