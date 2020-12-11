// Write your JavaScript code here!
window.addEventListener("load", function() {
	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		event.preventDefault();
		event.stopPropagation();

		let items = document.getElementById('faultyItems');
		let launchStatus = document.getElementById('launchStatus');
		let fuelStatus = document.getElementById('fuelStatus');
		let cargoStatus = document.getElementById('cargoStatus')
		let ready = true;

		let pilotName = document.querySelector("input[name=pilotName]").value;
		let copilotName = document.querySelector("input[name=copilotName]").value;
		let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
		let cargoMass = document.querySelector("input[name=cargoMass]").value;

		if (pilotName === "" || copilotName === "" || fuelLevel === '' || isNaN(fuelLevel) || cargoMass === '' || isNaN(cargoMass) ) {

			alert("All fields are required!");
			items.style.visibility = 'hidden';

			launchStatus.style.color = 'black';
			launchStatus.innerHTML = 'Awaiting Information Before Launch';

		} else {

			items.style.visibility = 'visible';

			document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' ' }Ready`
			document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' ' }Ready`

			if (fuelLevel < 10000) {
				ready = false;
				fuelStatus.innerHTML = 'Not enough fuel for launch';
			} else {
				fuelStatus.innerHTML = 'Fuel level high enough for launch';
			}

			if (cargoMass > 10000) {
				ready = false;
				cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
			} else {
				cargoStatus.innerHTML = 'Cargo mass low enough for launch';
			}

			if (ready) {
				launchStatus.style.color = 'green';
				launchStatus.innerHTML = 'Shuttle is ready for launch';
				retrieveData();
			} else {
				items.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle not ready for launch';
			}

		}

	});
});


function preventDefault() {

	fetch('https://handlers.education.launchcode.org/static/planets.json').then( function (response) {
		response.json().then(function (data) {
			let targets = document.getElementById('missionTarget');
			let random = Math.round(Math.random() * data.length);
			let target = data[random];

			targets.innerHTML =
				[
    {
       "name": "Tatooine",
       "diameter": "10465 km",
       "star": "Tatoo I & Tatoo II",
       "distance": "43000 light years from galactic core",
       "image": "https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg",
       "moons": 3
    },
    {
        "name": "Pern",
        "diameter": "measurement is under dispute",
        "star": "Alpha Sagittarius (a.k.a. Rukbat)",
        "distance": "Varies - find a library",
        "image": "https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg",
        "moons": 2
    },
    {
        "name": "Saturn/Titan",
        "diameter": "5149.5 km",
        "star": "Sol",
        "distance": "1.4 billion km from Earth",
        "image": "https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg",
        "moons": 0
    },
    {
        "name": "Mars",
        "diameter": "6779 km",
        "star": "Sol",
        "distance": "225 million km from Earth",
        "image": "https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg",
        "moons": 2
    },
    {
        "name": "K2-18b",
        "diameter": "34500 km",
        "star": "K2-18",
        "distance": "110 light years from Earth",
        "image": "https://www.nasa.gov/sites/default/files/thumbnails/image/heic1916a.jpg",
        "moons": "unknown"
    },
    {
        "name": "Jupiter/Europa",
        "diameter": "3,121.6 km",
        "star": "Sol",
        "distance": "628.3 million km from Earth",
        "image": "https://apod.nasa.gov/apod/image/1609/Europa_Galileo_960.jpg",
        "moons": 0
    }
]


		});
	})

}