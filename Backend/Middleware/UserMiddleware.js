

const authenticate=(req,res,next)=>{
    console.log('running auth middleware');
    
    
    next()
}
const authorisation=(req,res,next)=>{
    console.log('autherisation is running ');
    next()
    
}
export default {authenticate,authorisation}