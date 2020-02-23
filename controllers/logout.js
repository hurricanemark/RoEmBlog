// destroy all session data including userId
module.exports = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}