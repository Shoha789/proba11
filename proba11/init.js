
window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.god;
    document.getElementById('nameFatherOutput').innerText = initPerson.father;
    document.getElementById('jobOutput').innerText = initPerson.job;
};

