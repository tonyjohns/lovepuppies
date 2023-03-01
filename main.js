let btn = document.getElementById('generatorBtn');
let lBtn = document.getElementById('leftRotation');
let rBtn = document.getElementById('rightRotation');
let rotationImage = document.getElementById('rotationImage');

const names = [
    "Max",
    "Buddy",
    "Bailey",
    "Charlie",
    "Rocky",
    "Cooper",
    "Bear",
    "Duke",
    "Murphy",
    "Jack",
    "Zeus",
    "Gus",
    "Tucker",
    "Oliver",
    "Winston",
    "Sam",
    "Rufus",
    "Henry",
    "Milo",
    "Loki",
    "Apollo",
    "Odin",
    "Thor",
    "Finn",
    "Riley",
    "Leo",
    "Boomer",
    "Sunny",
    "Sasha",
    "Bella",
    "Luna",
    "Daisy",
    "Lucy",
    "Molly",
    "Sadie",
    "Zoe",
    "Roxy",
    "Maggie",
    "Coco",
    "Sophie",
    "Chloe",
    "Lola",
    "Penny",
    "Stella",
    "Gracie",
    "Ruby",
    "Rosie",
    "Abby",
    "Ginger"
  ];

const randomName = (names) => {return names[Math.floor(Math.random()*names.length)]};

btn.onclick = () => {
  document.getElementById('name').innerHTML = randomName(names);
}

rBtn.onclick = () => {
  rotationImage.style.transform = 'rotate(15deg)';
}

lBtn.onclick = () => {
  rotationImage.style.transform = 'rotate(-15deg)'
}