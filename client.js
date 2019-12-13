console.log('js working');

$(document).ready(allReady);


function allReady() {
    console.log('jquery ready');

    $('#submitBtn').on('click', submitInfo);



};

function submitInfo() {
    console.log('clicked submit');
    let getFirst = $(`#firstInput`).val();
    let getLast = $(`#lastInput`).val();
    let getId = $(`#idInput`).val();
    let getSalary = $(`#salaryInput`).val();
    console.log(getFirst);

    salary=Number(getSalary);

    $(`#employeesTable`).append(`
        <tr>
        <td>${getFirst}</td>
        <td>${getLast}</td>
        <td>${getId}</td>
        <td>${getSalary}</td>
        <td><button>DELETE</button></td>
        </tr>
    `)
    getFirst = $(`#firstInput`).val('');
    getLast = $(`#lastInput`).val('');
    getId = $(`#idInput`).val('');
    getSalary = $(`#salaryInput`).val('');

}