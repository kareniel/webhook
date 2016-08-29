const express = require('express')
const bodyParser = require('body-parser')
const exec = require('child_process').exec

const host = 'localhost'
const port = process.env.PORT

const app = express()
app.use(bodyParser.json())

const server = app.listen(port, host, () => {
  console.log(
    "webhook listening at http://%s:%s",
    server.address().address,
    server.address().port
  )
})

app.post("/", (req, res) => {

  console.log(req)

  switch(req.headers["x-github-event"]) {
    case "push":
      res.send("Event push trigger")

			const deploy = exec('sh ./deploy.sh' )

			deploy.stdout.on('data', res => {
			    console.log(res)
			})

			deploy.stderr.on('data', err => {
			    console.log(err)
			})
      break

    default:
      res.status(400).send("Event not supported : " + req.headers["x-github-event"])
      console.log("Event not supported : " + req.headers["x-github-event"])
  }
})