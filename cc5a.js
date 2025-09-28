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
console.log(employees)

function calculateBasePay(rate, hours) {
if (hoursWorked <= 40)
    return (hours * rate)
;}
employees.forEach(employee => {employee.basePay = calculateBasePay});

function calculateOvertimePay(rate ,hours)
{if (hoursWorked > 40) 
    return (hours - 40) * rate * 1.5};
employees.forEach(employee => {employee.overtimePay = calculateOvertimePay});

function calculateTaxes(grossPay) {
let taxRate = 0.15;
return grossPay * taxRate;
}

