module.exports.homePage = function(req,res) {
    return res.render('homePage', {title: "Home"});
}