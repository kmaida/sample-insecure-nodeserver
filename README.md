# sample-insecure-nodeserver

This is a sample Node.js server that sends some falsified "sensitive" data. This is for demonstrative purposes only. You would _never_ want to create a real server with this type of data in it and leave it unsecured.

**Always protect your back end if it contains non-public information!**

> All data in this repo has been falsified using this [Credit Card Generator](http://credit-card-generator.2-ee.com/).

## Dependencies

* [Node.js](https://nodejs.org)
* A package manager: suggest [npm](https://npmjs.com) (which comes with Node) or [Yarn](https://yarnpkg.com)

## Setup

Clone the repo:

```bash
$ git clone https://github.com/kmaida/sample-insecure-nodeserver.git
```

Install dependencies:

```bash
$ cd sample-insecure-nodeserver
$ npm install
# or yarn install
```

## Endpoints

* GET `/api`: simply echoes "API works!"
* GET `/api/customers`: returns fake credit card information for imaginary customers

## Serve

To start the server, run the following command from the root of the folder containing your `server.js` file:

```bash
$ node server
```

Alternatively, you could install [nodemon](https://nodemon.io/), which monitors the server for changes and restarts it automatically:

```bash
$ npm install -g nodemon
$ nodemon server
```

### Production

This demo API is live at [https://fakeapi.kmaida.net/api](https://fakeapi.kmaida.net/api).

## License

[MIT](LICENSE) © Kim Maida 2018
