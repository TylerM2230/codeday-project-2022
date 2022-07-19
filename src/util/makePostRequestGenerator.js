const makePostRequestGenerator = (allRequests) => {
    return (url, callback) => {
    allRequests.push(function (req, res) {
        if (url === req.url && req.method === 'POST'){
            callback(req, res);
        }
    })
}}

module.exports = makePostRequestGenerator