
let professor = {
    fullName : "Dr. Vivekananda",
    email: "vivek@gmail.com",
    age: 35,
    isMarried: false,
    city:"Bhubaneswar",
    university:"Utkal University",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
    },
    certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"]
}
console.log("====Create object and add minimum 5 properties====");
console.log(professor);

console.log("====add new property====");
professor.totalExperience = "14 years";
console.log(professor);
console.log("Total Experience is: ", professor.totalExperience);

console.log("====Modify any existing property====");
professor.isMarried = true;
console.log(professor);

console.log("====add new one 2nd index of array====");
 const  certificates = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"];
 const index = 1;
 const value = "Oracle Certified";
 certificates.splice(1,0,value);
 console.log(certificates);

 console.log("====last element of the array====");
 console.log(certificates[certificates.length-1]);
 
 console.log("====Traverse the array using for of loop====");
 const  traverseCertificates = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"];
 const index1 = 1;
 const result = "Oracle Certified";
 certificates.splice(index1,result);
 for (const element of certificates) {
    console.log(element);
}