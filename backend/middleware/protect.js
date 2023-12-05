const isAuthenticated = (req, res, next)=>{
    // console.log(req.session.user);
    if (req.session.user){
        return next();
    }else{
        return res.status(401).json({message: "Kindly login to proceed."});
    }
};

// module.exports = isAuthenticated;
export default isAuthenticated;