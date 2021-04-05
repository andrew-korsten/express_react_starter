// 1. Init the app
const express = require('express');
const app = express();

// 4. Create the route
app.get('/api/customers', (req, res) => {
    // 5. Create the hard-coded db-faker with 3 customers
    const customers = [
        {id: 1, firstName: "Andrew", lastName: "Korsten"},
        {id: 2, firstName: "Jim", lastName: "Henderson"},
        {id: 3, firstName: "Santa", lastName: "Clause"},               
    ]

    // 6. Jsonify the customers into the res
    res.json(customers);
})


// 2. Define the port. The port should be anything but not 3000 since CRA runs on port 3000.
const port = 5000;

// 3. Create the listener
app.listen(port, () => console.log(`Server started on port ${port}`))