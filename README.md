# express-requested-url #

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) 
[![GitHub issues](https://img.shields.io/github/issues/matthewbill/express-requested-url/shields.svg)](https://github.com/matthewbill/express-requested-url/issues)
 ![Travis (.org)](https://img.shields.io/travis/matthewbill/express-requested-url.svg)
![npm](https://img.shields.io/npm/v/express-requested-url.svg) ![npm](https://img.shields.io/npm/dt/express-requested-url.svg)

Express middleware for extracting the requested url.

## Install ##

``` bash

npm install express-requested-url

```

or

``` bash

npm install express-requested-url --save

```

## Middleware ##

The library contains three bits of middle ware to populate different types of request urls. If port 80 or port 443 is provided and matches the correct protocol, then the port is not included.

| Component         | Description                                                                           |
| ----------------- | ------------------------------------------------------------------------------------- |
| baseUrl | `${protocol}://${hostname}:${port}` |
| srippedUrl | `${protocol}://${hostname}:${port}/${path}` |
| requestedUrl | `${protocol}://${hostname}:${port}/${path}${queryParameters}` |

## Usage ##

First include the module.

``` js
const {requestedUrl} = require('express-requested-url');
```

Add the middleware to the express app.

``` js
const express = require('express');
const app = express();
const port = 3000;

app.use(requestedUrl.baseUrl(port));
app.use(requestedUrl.strippedUrl(port));
app.use(requestedUrl.requestedUrl(port));
```
You can access the urls on any request.

``` js
app.get('/', (req, res) => {
  const baseUrl = req.baseUrl;
  const strippedUrl = req.strippedUrl;
  const requestedUrl = req.requestedUrl;
});
```
