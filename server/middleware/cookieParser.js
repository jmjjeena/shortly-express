const parseCookies = (req, res, next) => {
    var cookieObj = {};

    var cookies = req.headers.cookies;

    cookies.split(';').map((cookie) => {
        var piece = cookie.splt('=');
        cookieObj[piece.shift().trim()] = piece.pop().trim();
    });
    next(cookieObj);
}


module.exports = parseCookies;