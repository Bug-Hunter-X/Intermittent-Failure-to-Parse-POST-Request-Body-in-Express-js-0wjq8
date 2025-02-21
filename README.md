# Intermittent POST Request Body Parsing Failure in Express.js

This repository demonstrates a bug where an Express.js server intermittently fails to parse the request body of POST requests. The issue is that the `req.body` object is sometimes empty, leading to unexpected behavior.

## Bug Description

A POST request to the `/users` endpoint sometimes results in `req.body` being an empty object, even when a valid JSON payload is sent. This occurs inconsistently.  The server might work correctly for several requests and then fail for others, seemingly randomly.

## Setup

1. Clone the repository.
2. Run `npm install` to install the required dependencies (Express.js).
3. Run `node bug.js` to start the server.
4. Use a tool like Postman or curl to send POST requests to `http://localhost:3000/users` with a JSON payload.

## Bug Solution

The solution involves explicitly setting the `content-type` header in the request to `application/json`.