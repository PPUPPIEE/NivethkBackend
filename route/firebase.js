const admin = require("firebase-admin");
const serviceAccount = require("../firebaseAdmin.json");
const multer = require("multer");
const router = require("express").Router();
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'where-cd188.appspot.com'
});
const Multer = multer({
  storage: multer.memoryStorage(),
});

const storage = firebaseApp.storage();
const bucket = storage.bucket();

router.post("/upload", Multer.single("file"), (req, res) => {
  const fileName = `img_${Date.now()}`;
  const fileUpload = bucket.file(fileName);
  const blobStream = fileUpload.createWriteStream({
      metadata:{
          contentType : req.file.mimetype
      }
  });


  blobStream.on('error', err =>{
      res.status(405).json(err);
  });

  blobStream.on('finish' , ()=>{
    var url = `https://firebasestorage.googleapis.com/v0/b/where-cd188.appspot.com/o/${fileName}?alt=media`
    res.status(200).send(url)
  })

  blobStream.end(req.file.buffer);
});

router.post("/delete", (req,res) =>{
  try{
    admin.storage().bucket().file(req.body.name).delete();
    res.status(200).send(`Delete ${req.body.name} complete`)
  } catch (err){
    res.status(405).send("หาไฟล์ไม่เจอหรือชื่่อไฟล์ผิด")
  }
  
})

module.exports = router;