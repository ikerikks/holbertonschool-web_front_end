
const globalVariable = 'Welcome';
function outer () {
  window.alert(globalVariable);
  const course = 'Holberton';
  const inner = () => {
    window.alert(globalVariable + ' ' + course);
    const exclamation = '!';
    const inception = () => window.alert(globalVariable + ' ' + course + ' ' + exclamation);
    inception();
  };
  inner();
}

outer();
