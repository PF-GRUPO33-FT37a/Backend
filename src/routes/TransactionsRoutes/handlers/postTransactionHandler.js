

const postTransactionHandler = async(req, res) =>{
    try{
        let data = req.body;
        let info = await post
    }catch(err){
        res.status(400).json({error:err.message})
    }
}