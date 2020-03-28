//
let patients = [];

function getPatientsList() {
    let patientsString = '';
    for(let i=0; i<patients.length; i++) {
        patientsString += `<tr><td>${i+1}</td><td>${patients[i].FullName}</td><td>${patients[i].Severity}</td></tr>`;
    }
    return patientsString;
}


function getPatientsByName() {


}

function  displayPatients(displayValue) {
    $('#tbPatients').html(displayValue);

    // clear input fields
    ClearFields();
}

function ClearFields() {
    $('#txtFullName').val("");
}

function createPatientObject() {
    // grab values of fullname and severity
    const fullName = $('#txtFullName').val();
    const severity = $('#slSeverity option:selected').text();
    
    // build patient object
    const patientObject = {
        FullName: fullName,
        Severity: severity
    };

    // update patients array-[]
    updatePatientsList(patientObject);

    // load patient list
    loadPage();
}

function updatePatientsList(patientObject) {
    // add patient object to patients array
    patients.push(patientObject);
}

function loadPage() {
    const patientsString = getPatientsList();
    displayPatients(patientsString);
}

$(document).ready(function() {
    loadPage();
});

$('#btnAdd').click(function() {
    createPatientObject();
});