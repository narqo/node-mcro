# node-mcro

*This is a prototype project.*

---

A toolkit for building [microservices][] with Node.js.

**node-mcro** is totally inspired by [go-kit][] project.
It allows developers to focus on writing business logic while left solving
common problems of distributed systems to the toolkit.

## Usage

*The project assumes you are using node.js>=6.*

~~~
› npm install
› npm start
~~~

~~~
› curl -XPOST "http://localhost:8000/uppercase" -H "Content-Type: application/json" -d '{"s": "my string"}'
{"result":"MY STRING","error":null}

› curl -XPOST "http://localhost:8000/uppercase" -H "Content-Type: application/json" -d '{"s": "my string"}'
{"result":"9","error":null}
~~~

## License

WTFPL

[microservices]: https://en.wikipedia.org/wiki/Microservices
[go-kit]: https://github.com/go-kit/kit
