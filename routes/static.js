const PATH_NAME = 'public'

module.exports = [{
    method: 'GET',
    path: `/${PATH_NAME}/{param*}`,
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true,
        }
    }
}]