
function welcome (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  const displayFullName = () => window.alert(`Welcome ${fullName}!`);
  firstName && lastName ? displayFullName() : console.error('fullName is not defined');
}

welcome('Holberton', 'School');
