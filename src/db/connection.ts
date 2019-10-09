import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/rump_up',
    { 
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
        useCreateIndex:false 
    });