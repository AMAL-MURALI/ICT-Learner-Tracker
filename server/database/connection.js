const mongoose=require('mongoose');

const connectDB= async()=>{
    try {
        //mongodb connection string

        const con =await mongoose.connect("mongodb+srv://amal:crow009@cluster0.kctau19.mongodb.net/students?retryWrites=true&w=majority",{
          
            
        })
        
        console.log(`MongoDB connected:${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB