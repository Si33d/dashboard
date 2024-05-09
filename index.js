const exp=require("express")
const app=exp()
app.listen(4000,()=>
{
    console.log("working")
})
app.use(exp.static("public"))
app.get("/sid",(req,res)=>
{
    
})