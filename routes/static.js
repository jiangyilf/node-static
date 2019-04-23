const PATH_NAME = 'public'

module.exports = [{
    method: 'GET',
    path: `/${PATH_NAME}/{filename}`,
    handler: {
        file: function (request) {
            return request.params.filename;
        }
    }
}]