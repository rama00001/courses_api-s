const express = require('express');
const router = express();
router.use(express.json())
const courses = require('./courses.controller.js')


router.get('/getAllPrograms', courses.getAllCourses);
router.get('/getCourse', courses.getCourse);
router.post('/createCourse', courses.createCourse);
router.put('/updateCourse', courses.updateCourse);
router.delete('/deleteCourse', courses.deleteCourse);


router.listen(3000, () => {
  console.log('server up and running')
})
