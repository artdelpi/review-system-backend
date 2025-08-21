const errorHandler = (err,req,res,next) => {
    // Grabs statusCode, if any. Else, assumes 500 Internal Server Error
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        /* ====== Client Error (4xx) ====== */
        case 400:
            res.json({
                msg: "400 Bad Request",
                stackTrace: err.stack
            });
        case 401:
            res.json({
                msg: "401 Unauthorized",   
                stackTrace: err.stack
            });
        case 403:
            res.json({
                msg: "403 Forbidden",   
                stackTrace: err.stack
            });
        case 404:
            res.json({
                msg: "404 Not Found",   
                stackTrace: err.stack
            });

        /* ====== Server Error (5xx) ====== */
        case 500:
            res.json({
                msg: "500 Internal Server Error",   
                stackTrace: err.stack
            });
        case 503:
            res.json({
                msg: "503 Service Unavailable",   
                stackTrace: err.stack
            });
        default:
            res.json({ msg: "No Error Was Detected!" });
            break;
    };
}

module.exports = errorHandler;