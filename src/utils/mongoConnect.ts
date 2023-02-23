import mongoose from "mongoose";

async function connect(){
  if(!process.env.DATABASE_URL){
    return
  }

  try{
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    process.exit(1);
  }
}

export default connect;