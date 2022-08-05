const makePutRequestGenerator = (allRequests) => {
    return (url, callback) => {
    allRequests.push(function (req, res) {
        if (url === req.url && req.method === 'PUT'){
            callback(req, res);
        }
    })
}}

module.exports = makePutRequestGenerator