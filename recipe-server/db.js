const mongoose= require('mongoose');
const uri= `mongodb+srv://yingjie123:gnzSNSGhUuK53LEJ@cluster0.wfurxqe.mongodb.net/recipeApp?retryWrites=true&w=majority`;

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('connected')}).catch(error=>console.log(error))