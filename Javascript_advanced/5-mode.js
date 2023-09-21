
function changeMode (size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  const spookyButton = document.createElement('button');
  const darkModeButton = document.createElement('button');
  const screamModeButton = document.createElement('button');

  const text = document.createTextNode('Welcome Holberton!');
  const spookyText = document.createTextNode('Spooky');
  const darkModeText = document.createTextNode('Dark mode');
  const screamModeText = document.createTextNode('Scream mode');

  paragraph.appendChild(text);
  spookyButton.appendChild(spookyText);
  darkModeButton.appendChild(darkModeText);
  screamModeButton.appendChild(screamModeText);

  document.body.append(paragraph);
  document.body.append(spookyButton);
  document.body.append(darkModeButton);
  document.body.append(screamModeButton);

  spookyButton.addEventListener('click', () => spooky());
  darkModeButton.addEventListener('click', () => darkMode());
  screamModeButton.addEventListener('click', () => screamMode());
}

main();
