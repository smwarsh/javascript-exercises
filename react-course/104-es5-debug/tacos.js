const classmates = ["Christian", "CJ", "Tammer"];

const wrapper = document.getElementById("wrapper");

for (let i = 0; i < classmates.length; i++) {
  // can use const for classmate and button because the scope is only this iteration of the for loop
  const classmate = classmates[i];

  // doesn't work with var because button is used with the global value of the last item passed through in the for loop
  const button = document.createElement("button");
  button.innerHTML = `How many tacos did ${classmate} eat?`;

  button.addEventListener("click", function() {
    const tacoCount = i * 2;

    alert(`${classmate} ate ${tacoCount} tacos.`);

    if (tacoCount > 3) {
      alert(`That's a lot of tacos, ${classmate}.\nTaco 'Bout Hungry!`);
    }
  });

  wrapper.appendChild(button);
}
