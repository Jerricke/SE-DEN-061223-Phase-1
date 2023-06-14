//Objects
let flatironSchool = {
    west: {
        location: "",
        address: "",
        hours: "7am-6pm",
        courses: ["Software Engineering", "Data Science", "CyberSecurity", "Product Design"]
    }
}
console.log(flatironSchool);

//modify the object to have the correct location of denver
flatironSchool.west.location = "Denver"
console.log(flatironSchool.west.location)
//modify the object to have the address 2228 Blake St
flatironSchool.west.address = "2228 Blake St"
console.log(flatironSchool.west.address)
//modify the object to have the hours from 7am = 6:15pm
flatironSchool.west.hours = "7am-6:15pm"
console.log(flatironSchool.west.hours)
//add a new course to the west object
flatironSchool.west.courses.push("New Course Yessssirrr")
console.log(flatironSchool.west.courses);
//add a new object to flatiron school, the key of this object should be east, the object should have the same keys of location, address, hours, and course
//The values should then be "New York", "11 Broadway 2nd floor, New York, NY 10004", "9am - 6pm", courses should be "Software Engineering", "Data Science", "CyberSecurity", "Product Design"
flatironSchool.east = {
    location: "New York",
    address: "11 Broadway 2nd floor, New York, NY 10004",
    hours: "9am-6pm",
    courses: [...flatironSchool.west.courses]
}

console.log(flatironSchool);
