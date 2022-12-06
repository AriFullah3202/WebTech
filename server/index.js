// using express js
const express = require("express")
// calling express js
const app = express();
// using cors
const cors = require("cors")
app.use(cors())
// declaring the  port
const port = process.env.Port || 5000;
const allCourseData = require("./Data/course.json")

//check the server for running the port
app.get("/", (req, res) => {
    res.send("welcome to web tech");
})
// get all course data 
app.get("/allCourse", (req, res) => {
    res.send(allCourseData);
})
// get specific data
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const course = allCourseData.find(c => c.id == id);
    //if not found the data
    if (!course) {
        res.send("product not found")
    }
    // if found 
    res.send(course);
});


app.listen(port, () => {
    console.log("server is running the ", port)
})
//Export the Expross API
module.exports = app;