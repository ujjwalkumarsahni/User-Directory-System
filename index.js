const express = require('express');
const path = require('path');
const UserModel = require('./model/userModel');

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/read', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.render('read', { users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Render update form
app.get('/edit/:userid', async (req, res) => {
    const user = await UserModel.findOne({_id: req.params.userid});
    res.render('edit', { user });
});

// Handle update form submission
app.post('/new/:id', async (req, res) => {
    const { name, email, imageURL } = req.body;
    const user = await UserModel.findOneAndUpdate({_id: req.params.id},{name,email,imageURL},{new:true});
    res.redirect('/read');
});

// Delete user
app.get('/delete/:id', async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.redirect('/read');
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new user
app.post('/create', async (req, res) => {
    const { name, email, imageURL } = req.body;
    try {
        const user = new UserModel({ name, email, imageURL });
        await user.save();
        res.redirect('/read');
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
