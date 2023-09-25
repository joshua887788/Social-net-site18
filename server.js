const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CHALLENGE18', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.set('debug', true);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
