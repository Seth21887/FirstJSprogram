let userName="Seth";
let email="seth.d.lafountain@gmail.com";
let password="1234";
let age=35
let country="United States";
let salaryMonthly= 5000
const taxes=0.08;

console.log(`Name: ${userName} email: ${email} salary: ${salaryMonthly*12}`);

function hello(){
    let name;
    console.log(name);
}

document.write(`
<div class="student">
    <p><b>Name:</b> ${userName}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Salary:</b>${salaryMonthly*12}</p>
`)