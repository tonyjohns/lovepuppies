let btn = document.getElementById('button');

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