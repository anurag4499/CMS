const mongoose=require("mongoose")

const connectToMongo =async ()=>{
    try {
        // await mongoose.connect('mongodb://0.0.0.0:27017/College-management',{useNewUrlParser : true , useUnifiedTopology : true })  
        await mongoose.connect('mongodb+srv://anuragmishra9152:1OiTv9AjQaqJldyx@college-management.zpx6f.mongodb.net/?retryWrites=true&w=majority&appName=College-management')  
        console.log("database is connected...")
       
    } catch (error) {
        console.log("some error in connecting database")
    }
}
module.exports =connectToMongo;
