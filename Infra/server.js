const express = require('express')
const app = express()


app.listen({ port: '4002' },  _ => console.log(`API running on port 4002...`))
