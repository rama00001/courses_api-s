const db = require('./db.js').connection

const createCourse = (req, res) => {
    console.log(req.body)
    let name = req.body.name;
    let imageUrl = req.body.imageUrl;
    let universityName = req.body.universityName;
    let facultyProfile = req.body.facultyProfile;
    let learningHours = req.body.learningHours;
    let duration = req.body.duration;
    let price = req.body.price;
    let certificate = req.body.certificate;
    let eligibilityCriteria = req.body.eligibilityCriteria;


    const query = `INSERT INTO courses( name,imageUrl,universityName,facultyProfile,learningHours,duration,price,certificate,eligibilityCriteria) VALUES (?,?,?,?,?,?,?,?,?)`;
    db.query(query, [name, imageUrl, universityName, facultyProfile, learningHours, duration,price,certificate,eligibilityCriteria], function (err, data) {
        if (err) {
  console.log(err)
        }
        else {
        res.json({message:"Course created successfully"})
        }
    })
}

const getAllCourses = (req, res) => {
    const query = "select * from courses"
    db.query(query, (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}

const updateCourse = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const id = req.body.id;
    const query = "update users set name=?,email=?,password=?,role=? where id=? "
    db.query(query, [name, email, password, role, id], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "successfully updated" });
        }
    })
}


const deleteCourse = (req, res) => {
    const id = req.body.id;
    const query = "DELETE FROM courses WHERE id= ?";
    db.query(query, [id], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json({ message: "deleted successfully" });
        }
    })
}

const getCourse = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = "select * from courses where id = ?"
    console.log(query);
    db.query(query, [id], (error, result) => {
        console.log(result)
        if (error) {
            res.json({ error });
        }
        else {
            res.json(result);
        }
    })

}

module.exports.getAllCourses = getAllCourses;
module.exports.updateCourse = updateCourse;
module.exports.deleteCourse = deleteCourse;
module.exports.getCourse = getCourse;
module.exports.createCourse = createCourse;
