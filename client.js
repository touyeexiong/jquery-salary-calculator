console.log('js working');

$(document).ready(allReady);


function allReady() {
    console.log('jquery ready');

    // click to add employee information
    $('#submitBtn').on('click', submitInfo);

    // click to delete specific employee
    $('#employeesTable').on('click', '.deleteBtn', deleteEmployee)

    // appends updated budget to the DOM
    $(`#totalMonthly`).append(totalSalary);

  //  totalSalary();

};

// deleteBtn Steps
//
// 
function deleteEmployee() {
    console.log('clicked delete');
    $(this).closest('tr').remove();
}


// submitInfo Steps
// retrieve input values
// append to DOM
// clear input values
let enteredSalary = [];
function submitInfo() {
    console.log('clicked submit');
    let getFirst = $(`#firstInput`).val();
    let getLast = $(`#lastInput`).val();
    let getId = $(`#idInput`).val();
    let getTitle = $(`#titleInput`).val();
    let getSalary = $(`#salaryInput`).val();
    console.log(getFirst);

    salary = Number(getSalary);

    $(`#employeesTable`).append(`
        <tr>
        <td>${getFirst}</td>
        <td>${getLast}</td>
        <td>${getId}</td>
        <td>${getTitle}</td>
        <td>${salary}</td>

        <td><button class="deleteBtn">DELETE</button></td>
        </tr>
    `)
    getFirst = $(`#firstInput`).val('');
    getLast = $(`#lastInput`).val('');
    getId = $(`#idInput`).val('');
    getTitle = $(`#titleInput`).val('');
    getSalary = $(`#salaryInput`).val('');


    enteredSalary.push(salary);

    
}

function totalSalary() {
    let count = 0;

    for (let i = 0; i < enteredSalary.length; i++) {
        count += enteredSalary[i];

    }
    return count;
}

// let count = 0;
// function totalSalary() {
//     for (let i = 0; i < enteredSalary.length; i++) {
//         count += enteredSalary[i];
//     }
//     return count;
// }



// updatedBudget Steps
// obtain values
// perform $20000 - (monthly salary)
// function updatedBudget() {
//     let finalTotal = $(`#totalMonthly`).val(count);
// }

// need a function that collects each added salary
// TEST 1
// function pushes salary into array?
    // then find sum[] *Update* can't add sum of [].
    // then takes monthlySalary = sum[]/12months
    // then to find updatedBudget = 20000 - monthlySalary

// TEST 2
// function that adds together individual salaries as they are submitted on the DOM.