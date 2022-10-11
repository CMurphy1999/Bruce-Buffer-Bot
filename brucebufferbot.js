const fighters = ['Deiveson Figueiredo', 'Brandon Moreno', 'Alexandre Pantoja', 'Kai Kara France', 'Askar Askarov', 'Brandon Royval', 'Aljamain Sterling', 'Petr Yan', 'TJ Dillashaw', 'Merab Dvalishvili', 'Cory Sandhagen', 'Marlon Vera', 'Alexander Volkanovski', 'Yair Rodriguez', 'Brian Ortega', 'Josh Emmett', 'Calvin Kattar', 'Charles Oliveira', 'Dustin Poirier', 'Justin Gaethje', 'Islam Makhachev', 'Michael Chandler', 'Leon Edwards', 'Kamaru Usman', 'Colby Covington', 'Khamzat Chimaev', 'Gilbert Burns', 'Belal Muhammad', 'Israel Adesanya', 'Robert Whittaker', 'Jared Cannonier', 'Marvin Vettori', 'Alex Pereira', 'Derek Brunson', 'Jiri Prochazka', 'Glover Teixeira', 'Jan Blachowicz', 'Magomed Ankalaev', 'Aleksandar Rakic', 'Anthony Smith', 'Francis Ngannou', 'Stipe Miocic', 'Curtis Blaydes', 'Tai Tuivasa', 'Sergei Pavlovich', 'Carla Esparza', 'Rose Namajunas', 'Zhang Weili', 'Marina Rodriguez', 'Jessica Andrade', 'Valentina Schevchenko', 'Katlyn Chookagian', 'Taila Santos', 'Lauren Murphy', 'Alexa Grasso', 'Amanda Nunes', 'Juliana Pena', 'Ketlen Vieira', 'Holly Holm', 'Irene Aldana'];

const location = ['New Orleans, United States', 'Malaga, Spain', 'Dallas, United States', 'Panama City, Panama', 'Addis Ababa, Ethiopia', 'Jaipur, India', 'Ashgabat, Turkmenistan', 'Tromso, Norway', 'Accra, Ghana', 'Kingston, Jamaica', 'Thimphu, Bhutan', 'Auckland, New Zealand', 'Bilbao, Spain', 'Columbus, United States', 'Vancouver, Canada', 'Madrid, Spain', 'Monaco, Monaco', 'Belgrade, Serbia', 'Damascus, Syria', 'Valletta, Malta', 'Mexico City, Mexico', 'San Francisco, United States', 'Tehran, Iran', 'Budapest, Hungary', 'Stockholm, Sweden', 'Salt Lake City, United States', 'Lima, Peru', 'Santiago, Chile', 'New Delhi, India', 'Sau Paulo, Brazil'];

const feet = [5, 6, 7];

const inches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 

const pound = [155, 135, 145, 170, 115, 185, 265, 125, 135, 205, 125];

function bruceBufferBot() {
    championshipBoutChance = Math.floor(Math.random() *100) + 1;
    if (championshipBoutChance <= 7) {
        return `It's TIME for our main event of the evening. Introducing first, the champion, representing ${location[Math.floor(Math.random()*location.length)]}, they stand ${feet[Math.floor(Math.random()*feet.length)]} feet, ${inches[Math.floor(Math.random()*inches.length)]} inches tall. Weighing in at ${pound[Math.floor(Math.random()*pound.length)]} pounds, ${fighters[Math.floor(Math.random()*fighters.length)]}! 
        Now, introducing the challenger! Fighting out of ${location[Math.floor(Math.random()*location.length)]}, they stand ${feet[Math.floor(Math.random()*feet.length)]} feet, ${inches[Math.floor(Math.random()*inches.length)]} inches tall. Weighing in at ${pound[Math.floor(Math.random()*pound.length)]} pounds, ${fighters[Math.floor(Math.random()*fighters.length)]}!`
        
    } else {
        return `It's TIME for our main event of the evening. Introducing first, fighting out of ${location[Math.floor(Math.random()*location.length)]}, they stand ${feet[Math.floor(Math.random()*feet.length)]} feet, ${inches[Math.floor(Math.random()*inches.length)]} inches tall. Weighing in at ${pound[Math.floor(Math.random()*pound.length)]} pounds, ${fighters[Math.floor(Math.random()*fighters.length)]}! 
        Now, introducing their opponent! Fighting out of ${location[Math.floor(Math.random()*location.length)]}, they stand ${feet[Math.floor(Math.random()*feet.length)]} feet, ${inches[Math.floor(Math.random()*inches.length)]} inches tall. Weighing in at ${pound[Math.floor(Math.random()*pound.length)]} pounds, ${fighters[Math.floor(Math.random()*fighters.length)]}!`
    }
}

console.log(bruceBufferBot())