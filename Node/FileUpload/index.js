const express=require("express");
const app=express();
const port=8080;
const multer=require("multer");
const path=require("path")

app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({storage});


app.get('/',(req,res)=>{
    res.render('homepage.ejs');
})

app.post('/upload', upload.single('profileImage'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    res.redirect('/');
})

app.listen(port,()=>{
    console.log("Listening on port :"+port)
})