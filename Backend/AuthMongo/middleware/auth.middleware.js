import jwt from "jsonwebtoken"

export const isLoggedIn = async (req, res, next) => {
       try {
        console.log(req.cookies)
      let token =  req.cookies?.test

      console.log('Token Found', token ? "YES" : "NO")

      if(!token){
        console.log("No Token")
        return res.status(401).json({
            success : false,
            message: "Authentication Failed"
        })
      }

     const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

     console.log("Decoded Data", decodeToken)
      req.user = decodeToken


      next()

       } catch (error) {
        console.log("Auth middleware failure")
        return res.status(500).json({
            success: false,
            message: "internal server Error"
        })
       }
    next()
}