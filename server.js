const express = require("express")
const app = express()
const port = 3000;
const router = require("./router")
const methodOverride = require("method-override")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      
      return method
    }
  }))
  
app.set("view engine","ejs")
app.use(router)

app.listen(port, () => console.log("Server ashiap"))