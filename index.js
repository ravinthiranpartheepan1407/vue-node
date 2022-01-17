const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');


const dbUri = "mongodb://localhost:27017/vue";

const VueRoute = require('./route/Vuetext');

const Vue = require('./models/Textschema');

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("DB Connected")
}).catch(error => console.log(error))

app.use(bodyParser.json());
app.use('/vuetext', VueRoute);



router.post('/vuenew', async(req, res)=>{
  const vueText = new Vue(req.body);
  const savedVueText = await vueText.save()
  res.json(savedVueText);
  console.log("Posted Vue Text");
})

router.get('/get/:id', async(req,res)=>{
  const vueGet = await Vue.findById({ _id:req.params.id });
  res.json(vueGet);
})

router.get('/random', async(req,res)=>{
  const vueCount = await Vue.countDocuments();
  const vueRandom = Math.floor(Math.random() * vueCount);
  const vueGet = await Vue.findOne().skip(random);
  res.json(vueGet);
})

router.delete('/delete/:id', async(req,res)=>{
  const vueResult = await Vue.findByIdAndDelete({ _id: req.params.id });
  res.json(vueResult);
})

router.patch('/update/:id', async(req, res)=>{
  const vueGet = await Vue.updateOne({ _id: req.params.id }, {$set: req.body});
  res.json(vueGet);
})

const port = process.env.DEV || 3000;

app.listen(port, function(){
  console.log("Server connected at port:",port)
})
