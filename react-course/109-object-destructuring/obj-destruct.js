// borrub is an object representing a video game avatar
const borrub = {
  race: "Orc",
  gender: "male",
  name: "Borrub",
  className: "Hunter",
  level: 14
};

// avatars is an array of video game avatar objects
let avatars = [
  {
    race: "Undead",
    gender: "female",
    name: "Tameli",
    className: "Rogue",
    level: 33
  },
  {
    race: "Human",
    gender: "female",
    name: "Fiana",
    className: "Mage",
    level: 10
  }
];

// Function uses object rest to append the new avatar to the array
const addAvatar = avatar => [...avatars, avatar];

const greet = avatar => {
  // Use object destructuring to access the avatar object properties
  const {race, name, level, gender, className} = avatar;
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Can also destructure function parameters
const greet2 = ({race, name, level, gender, className}) => {
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Use default parameters
const greet3 = ({race = "N/A", name = "N/A", level = 0, gender = "N/A", className = "N/A"} = {}) => {
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Adds borrub to the list of avatars
avatars = addAvatar(borrub);

// For each avatar, call the greet function and pass in the avatar as an argument
avatars.forEach(greet);
