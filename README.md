# HTTP Status Codes

This simple package provides an organized collection of meaningfully named HTTP status code constants.

## Installation

```sh
npm install http-status-codes
```

## Usage

Import the enums and use them in your code for clarity and type safety:

```js
import { HTTP_STATUS } from "http-status-codes-enum";

if (response.status === HTTP_STATUS.SUCCESSFUL.OK) {
	// handle success
}

if (response.status === HTTP_STATUS.CLIENT_ERROR.NOT_FOUND) {
	// handle 404
}
```

## Status Code Groups

- `INFORMATIONAL`: 1xx codes (e.g., CONTINUE, PROCESSING)
- `SUCCESSFUL`: 2xx codes (e.g., OK, CREATED)
- `REDIRECTION`: 3xx codes (e.g., MOVED_PERMANENTLY, FOUND)
- `CLIENT_ERROR`: 4xx codes (e.g., BAD_REQUEST, NOT_FOUND)
- `SERVER_ERROR`: 5xx codes (e.g., INTERNAL_SERVER_ERROR, SERVICE_UNAVAILABLE)

## API

All status codes are available as enums under the `HTTP_STATUS` object. Example:

```js
HTTP_STATUS.SUCCESSFUL.CREATED; // 201
HTTP_STATUS.CLIENT_ERROR.FORBIDDEN; // 403
```
