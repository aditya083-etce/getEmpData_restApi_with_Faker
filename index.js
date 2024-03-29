const generateEmployees = require("./employees");
const fs = require("fs");

const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')

fs.writeFileSync(
  "./db.json",
  JSON.stringify({ employees: generateEmployees(107001, 107045) })
);

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})





