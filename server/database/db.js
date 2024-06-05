import mongoose from "mongoose";


export const Connection = async (username,password) => {
    const URL ='mongodb+srv://Debasmita:<password>@flipkart-clone.yrjlo2z.mongodb.net/?retryWrites=true&w=majority&appName=Flipkart-clone';
   try {
      await mongoose.connect(URL,{serverSelectionTimeoutMS: 30000,   
      socketTimeoutMS: 45000 ,  useUnifiedTopology: true,});
      console.log('Database connected Successfully');
   }catch(error){
    console.log('Error while connecting with the database',error.message);
   }

}


export default Connection;