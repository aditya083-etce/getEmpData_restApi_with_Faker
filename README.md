# JSON Server

Install using npm i -g json-server

create a json file -- db.json

now run it -- json-server --watch db.json

now this all APIs are exposed:

- http://localhost:3000/
- http://localhost:3000/employees
- http://localhost:3000/employees/1
- http://localhost:3000/employees?country=UK
- http://localhost:3000/employees?q=UK

you can make GET, POST, PUT, PATCH, DELETE to all the endpoints but POST, PUT, DELETE req should include a Content-Type: application/json
