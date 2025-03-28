import expressData from '../data.js'

const expressDatas =(req,res)=>{
        console.log(expressData);
        res.json(expressData);
        
    }

const expressDataId=(req,res)=>{

        const uniqueData=expressData.filter((data)=>{
            if (data.id==parseInt(req.params.id)) {
                return data;
            }
        })
        res.send(uniqueData)
    }

const expressDataDeleteId=(req,res)=>{

        const deletedData=expressData.filter((data)=>{
            if (data.id!==parseInt(req.params.id)) {
                return data;
            }
        })
        res.send(deletedData)
    }
export default {expressDatas, expressDataId,expressDataDeleteId}

// app.get('/expressData',(req,res)=>{
//     console.log(expressData);
//     res.json(expressData);
    
// })
// app.get('/expressData/delete/:id',(req,res)=>{

//     const deletedData=expressData.filter((data)=>{
//         if (data.id!==parseInt(req.params.id)) {
//             return data;
//         }
//     })
//     res.send(deletedData)
// })
// app.get('/expressData/:id',(req,res)=>{

//     const uniqueData=expressData.filter((data)=>{
//         if (data.id==parseInt(req.params.id)) {
//             return data;
//         }
//     })
//     res.send(uniqueData)
// })