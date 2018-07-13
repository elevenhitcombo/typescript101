class Student {
    fullName : string;
    luckyNumber: number;
    isPresent: boolean;
    teams: string[];
}

// C# like comments :)
function greeter(whoToGreet : Student){
    let dictionary = {
        "Greeting": "Hello",
        "Farewell": "Leave the premises immediately, sir"
    };

    return `${dictionary["Greeting"]} ${whoToGreet.fullName}`;
}

function showLuckyNumber(student: Student){
    return `Lucky number is ${student.luckyNumber}`;
}

function showTeams(student: Student){
    let teamList : string = "";

    for (let t = 0; t < student.teams.length; t++ ){
        teamList += `<br/> ${student.teams[t]}`;  
    }

    return teamList;
}

let me = new Student();



me.fullName = "Paul Taylor";
me.isPresent = true;
me.luckyNumber = 7;
me.teams = [ "Southampton", "Hampshire" ];

document.body.innerHTML =
    `<h1>${greeter(me)}</h1>` + 
    `<h2>${showLuckyNumber(me)}</h2>` +
    `<p>${showTeams(me)}</p>`;


