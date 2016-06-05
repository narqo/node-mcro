# node-mcro

*This is a prototype project.*

---

A toolkit for building [microservices][] with Node.js.

**node-mcro** is completely inspired by [go-kit][] project.

It allows developers to focus on writing business logic while left solving
common problems of distributed systems to the toolkit.

## Usage

*The project assumes you are using node.js>=6.*

~~~
› node --version
v6.0.0

› npm install
› env PORT=8000 npm start
~~~

~~~
› curl -XPOST "http://localhost:8000/uppercase" -H "Content-Type: application/json" -d '{"s": "my string"}'
{"result":"MY STRING","error":null}

› curl -XPOST "http://localhost:8000/len" -H "Content-Type: application/json" -d '{"s": "my string"}'
{"result":"9","error":null}

› curl -XPOST "http://localhost:8000/padstart" -H "Content-Type: application/json" -d '{"s": "my string", "len": 30, "sample": "x"}'
{"result":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxmy string","error":null}
~~~

## License

WTFPL

[microservices]: https://en.wikipedia.org/wiki/Microservices
[go-kit]: https://github.com/go-kit/kit
