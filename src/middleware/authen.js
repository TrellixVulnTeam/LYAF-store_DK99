module.exports = {
    authen: (req, res, next) => {
        req.params.boss = 0;
        if(req.user){
            if(req.user.role == 'user'){
                next();
            }
            else{
              req.params.boss = 1;
              next();
            }
        }else
        next()
    },

    apiAuthenLogin: (req, res, next)=>{
        if (req.user){
            res.status(200).json({code: 200, message:"Ok"})
        }else{
            res.status(401).json({code: 401, message:"Bạn chưa đăng nhập. Vui lòng đăng nhập để sử dụng chức năng này"})
        }
    }
}