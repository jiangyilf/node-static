module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.file('index.html')
    }
},{
    method: 'GET',
    path: '/favicon.ico',
    handler: (request, h) => {
        return h.file('../favicon.ico')
    }
}]