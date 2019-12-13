console.log('js working');

$(document).ready(allReady);


function allReady() {
    console.log('jquery ready');

    // click to add employee information
    $('#submitBtn').on('click', submitInfo);

    // click to delete specific employee
    $('#employeesTable').on('click', '.deleteBtn', deleteEmployee)

    // appends updated budget to the DOM
    $(`#totalMonthly`).append(updatedBudget)

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
let totalSalary = 0;
function submitInfo() {
    console.log('clicked submit');
    let getFirst = $(`#firstInput`).val();
    let getLast = $(`#lastInput`).val();
    let getId = $(`#idInput`).val();
    let getTitle = $(`#titleInput`).val();
    let getSalary = $(`#salaryInput`).val();
    console.log(getFirst);

    salary = Number(getSalary);
    theId = Number(getId);

    $(`#employeesTable`).append(`
        <tr>
        <td>${getFirst}</td>
        <td>${getLast}</td>
        <td>${getId}</td>
        <td>${getTitle}</td>
        <td>${getSalary}</td>

        <td><button class="deleteBtn">DELETE</button></td>
        </tr>
    `)
    getFirst = $(`#firstInput`).val('');
    getLast = $(`#lastInput`).val('');
    getId = $(`#idInput`).val('');
    getTitle = $(`#titleInput`).val('');
    getSalary = $(`#salaryInput`).val('');

    let addedSalary = [];
    let totalSalary = sum(addedSalary.push(salary));

}

console.log(totalSalary);


// updatedBudget Steps
// obtain values
// perform $20000 - (monthly salary)
function updatedBudget() {

}

// need a function that collects each added salary
// TEST 1
// function pushes salary into array?
    // then uses sum[]
    // then takes monthlySalary = sum[]/12months
    // then to find updatedBudget = 20000 - monthlySalary