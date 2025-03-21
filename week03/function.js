let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last) {
    return `${first} ${last}`;
};

// function expression
const fullName = function (first, last) {
    return `${first} ${last}`;
};

//arrow function

const fullName = (first, last) => `${firstName} ${lastName}`;

document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);