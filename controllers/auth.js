import jwt from "jsonwebtoken"

const users = [
    {
        userName:'admin',
        password:'userPassword'
    }
]

const accessTokenKey = "thisismyveryfirsttokencreation";

export const login = (req,res) =>{
    const {userName, password} = req.body;
    const user = users.find(u=>{return u.userName === userName && u.password === password})

    if(user){
        const accessToken = jwt.sign({userName:user.userName},accessTokenKey);
        res.json({accessToken})
    }else {
        res.send('userid and password is incorrect');
    }
}

export const authenticateJwt = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('')[1];
        jwt.verify(token,accessTokenKey,(err,users)=>{
            if(err){
              return res.sendStatus(403)
            }
            req.user = users;
            next();
        });
    }else{
        res.sendStatus(401)
    }
}


