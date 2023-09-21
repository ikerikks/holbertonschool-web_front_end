const user = {
  hobby: "Caligraphy",
  favoriteSports: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  ocupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${user.firstName}. Your ocupation is: ${user.ocupation}`
  );
}

const bindLogWelcomeUser = logWelcomeUser.bind(logWelcomeUser);
bindLogWelcomeUser("Welcome");
