module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/')  // if valid, redirect to homepage
    }
    next()
}