let usersAdmin = ["Ada", "Greta", "Vim", "Tim"];

const adminMiddleware = (req, res, next) => {
    if(usersAdmin.includes(req.query.user)){
        next();
    }else{
        res.send("No tienes privilegios para ingresar")
    }
}

module.exports = adminMiddleware;