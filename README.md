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

// Blogs referred:
* https://itnext.io/how-to-generate-mock-data-using-faker-js-and-json-server-1d17007a08e4
* https://chrisdevcode.hashnode.dev/how-to-create-and-deploy-a-json-server
* https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

// more reference:
* https://fakerjs.dev/
* https://www.npmjs.com/package/json-server
