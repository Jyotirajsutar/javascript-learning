

const studentData = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address":{
        "street": "32, Laham st.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;
console.log('==================Convert JSON to Object==================');
const studentDataUpdate = JSON.parse(studentData);
console.log(studentDataUpdate);

console.log('==================Employee Role==================');
console.log(studentDataUpdate.role[0]);

console.log('==================Last Name==================');
console.log(studentDataUpdate.name.split(" ")[1]);

console.log('==================Joining Year==================');
console.log(studentDataUpdate.doj.split("-")[2]);
