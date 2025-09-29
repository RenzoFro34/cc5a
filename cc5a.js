let employees = [{
    name: "Alice",
    hourlyRate: 17,
    hoursWorked: 40
},
{name: "Sam",
 hourlyRate: 20,
 hoursWorked: 40
},
{name: "Cesar",
 hourlyRate: 25,
 hoursWorked: 40
},
{name: "Brutus",
 hourlyRate: 25,
 hoursWorked: 41
},
{name: "Athena",
 hourlyRate: 30,
 hoursWorked: 50
},
{name: "Apollo",
 hourlyRate: 45,
 hoursWorked: 40
}];

function calculateBasePay(rate, hours) {
if (hours <= 40)
    return (hours * rate)
else null
;}
employees.forEach(employee => {employee.basePay = calculateBasePay});

function calculateOvertimePay(rate, hours)
{if (hours > 40) 
    return (hours - 40) * rate * 1.5};
employees.forEach(employee => {employee.overtimePay = calculateOvertimePay});

function calculateTaxes(grossPay) {
let taxRate = 0.15;
return grossPay * taxRate;
}

function processPayroll(employee) {
    let name = employee.name;
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let taxes = calculateTaxes(grossPay);
    let netPay = grossPay - taxes;
    return {
    name, basePay, overtimePay, grossPay, netPay
};}

 employees.forEach(employee => {
    let payroll = processPayroll(employee);
    console.log(payroll);
 });