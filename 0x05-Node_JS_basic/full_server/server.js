/* eslint-disable jest/require-hook */
import express from 'express';

const app = express();
const indexRoute = require('./routes/index');

const port = 1245;

app.use('/', indexRoute);
app.use('/students', indexRoute);
app.use('/students/:major', indexRoute);
app.listen(port);

export default app;
