const errorHandler = (err,req,res,next) => {
    // Grabs statusCode, if any. Else, assumes 500 Internal Server Error
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        /* ====== Client Error (4xx) ====== */
        case 400:
            res.json({
                error: "400 Bad Request",   
                msg: err.message,
                stackTrace: err.stack
            });
        case 401:
            res.json({
                error: "401 Unauthorized",   
                msg: err.message,
                stackTrace: err.stack
            });
        case 403:
            res.json({
                error: "403 Forbidden",   
                msg: err.message,
                stackTrace: err.stack
            });
        case 404:
            res.json({
                error: "404 Not Found",   
                msg: err.message,
                stackTrace: err.stack
            });

        /* ====== Server Error (5xx) ====== */
        case 500:
            res.json({
                error: "500 Internal Server Error",   
                msg: err.message,
                stackTrace: err.stack
            });
        case 503:
            res.json({
                error: "503 Service Unavailable",   
                msg: err.message,
                stackTrace: err.stack
            });
        default:
            res.json({ msg: "No Error Was Detected!" });
            break;
    };
}

module.exports = errorHandler;