const loginMiddleware=(req,res,next)=>{
    console.log(Number(req.params.id))
    if(Number(req.params.id)!==0){
        res.send("NotLogin Login Again")
      
    }else{
       next();
    }
}
export default loginMiddleware;