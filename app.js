const bodyParser = require("body-parser")
const express=require("express")
const request = require("request")
// bfe4f87420cc679c7d96e2e4652d92cb-us9
const app=express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/signup.html')

})


app.post('/',(req,res)=>{
    let fname=req.body.fname
    let lname=req.body.lname
    let email=req.body.email


    const data={

        members: [
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FN
            }


        ]
    }
    
});

app.listen(3000,()=>{
    console.log('Listening');
})
