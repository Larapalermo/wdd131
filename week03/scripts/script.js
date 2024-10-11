function fullName(first, last) {
    return `${first} ${last}`;   // string concatenation first + ' ' + last (not preferred)
  }

  const fullName = function (first, last) {
    return `${first} ${last}`;
  }
  const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
  document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);