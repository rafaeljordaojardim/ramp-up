import mongoose from 'mongoose';

export default (bd:string="") => {
    mongoose.connect(`mongodb://localhost:27017/${bd}`,
    { 
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
        useCreateIndex:false 
    });
}
