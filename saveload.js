function exportPlate(){
	const adventurerplate = {
		title: document.getElementById("title").value,
		titlecolor: document.getElementById("titlecolor").value,
		name: document.getElementById("name").value,
		namecolor: document.getElementById("namecolor").value,
		world: document.getElementById("world").value,
		dc: document.getElementById("dc").value,
		servercolor: document.getElementById("servercolor").value,
		serverglow: document.getElementById("serverglow").value,
		classjob: document.getElementById("classjob").value,
		classjobcolor: document.getElementById("classjobcolor").value,
		level: document.getElementById("level").value,
		gc: document.getElementById("gc").value,
		gccolor: document.getElementById("gccolor").value,
		charinfo: document.getElementById("charinfo").value,
		charinfocolor: document.getElementById("charinfocolor").value,
		headingcolor: document.getElementById("headingcolor").value,
		platetopcolor: document.getElementById("platetopcolor").value,
		platebtmcolor: document.getElementById("platebtmcolor").value,
		portrait: document.getElementById("portrait").value,
		alttext: document.getElementById("alttext").value 
	}
	
	//Convert information to a JSON file and download
	var a = document.createElement("a");
	a.href = window.URL.createObjectURL(new Blob([JSON.stringify(adventurerplate)], {type: "text/plain"}));
	//Name the file after the character if a name has been entered
	if(!!adventurerplate.name){
		a.download = adventurerplate.name + ".json";
	}
	else{
		a.download = "adventurer-plate.json";
	}
	a.click(); 
}

function importPlate(files){
	var fr=new FileReader();
	fr.readAsText(files[0]);
	fr.onload = function(){
		const adventurerplate = JSON.parse(fr.result);
		//Populate the form
		for(key in adventurerplate){
			document.getElementById(key).value = adventurerplate[key];
		}
		generateCSS();
	}
}