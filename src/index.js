require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const router = require('./routes/router');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

<<<<<<< HEAD
app.use(router);
=======
// app.use('/', router);
app.use('/', userRouter);
>>>>>>> d6250b0ea5c9cab2a9aad6b1da9ab9ffc133de01

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
