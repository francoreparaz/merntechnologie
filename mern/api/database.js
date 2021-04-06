const mongoose=require ("mongoose")
const URI= "mongodb://localhost/stackmern"
mongoose.connect(URI)
.then(db=> console.log("db connected"))
.catch(err=>console.log(err))

module.exports = mongoose