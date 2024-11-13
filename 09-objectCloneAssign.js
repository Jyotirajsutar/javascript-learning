
console.log("=====bankSbi Object=====");
let bankSbi = {
    bankName: "SBI",
    accountNuber: 35566144363,
    ifscCode: "SBIN0009831",
    accountType: "Saving Account"
}
console.log(bankSbi);

console.log("=====bankLocation Object=====");
let bankLocation = {
    street: "Korua",
    city: "Kendrapara",
    pin: 754204
}
console.log(bankLocation);

console.log("=====clone bankSbi and bankLocation Objects=====");
const mergeBankDetails = Object.assign({}, bankSbi, bankLocation)
console.log(mergeBankDetails);
const refVariable = { ...bankSbi, ...bankLocation };

let rateOfInterest = {
    homeLoanInterest:"15%",
    personalLoanInterest:"25%",
    dueInterest:"5%"
}

console.log("=====Merge bankSbi, bankLocation and rateOfInterest Objects=====");
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.log(sbiDetails);
const refeVariable = { ...bankSbi, ...bankLocation, ...rateOfInterest };


console.log(`======== Traversing this merged Object ============`);
for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log( `${key} => ${element}`);
    }
}
