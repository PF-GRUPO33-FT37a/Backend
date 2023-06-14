const loginController = require('../controllers/loginControlleer')

const loginHandler = async(req, res) =>{
    try{
        const {password, userName} = req.query
        let info = await loginController(password, userName)
        res.status(200).json(info)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = loginHandler