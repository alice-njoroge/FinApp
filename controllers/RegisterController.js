const register = (req, res)=>{
    res.json({
        message:"SignUp successfully",
        user:req.user
    })

};

module.exports = {
    register:register
};