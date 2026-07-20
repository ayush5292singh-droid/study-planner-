let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
        ${task}
        <button onclick="deleteTask(${index})">❌</button>
        `;

        list.appendChild(li);

    });

    document.getElementById("tasks").innerHTML = tasks.length;
}


function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value.trim() !== ""){

        tasks.push(input.value);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        input.value="";

        showTasks();
    }

}


function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();

}


showTasks();
let time = 1500;
let timer;


function startTimer(){

    clearInterval(timer);

    timer = setInterval(function(){

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerHTML =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;


        time--;


        if(time < 0){

            clearInterval(timer);

            alert("🎉 Study session completed!");

            time = 1500;

        }

    },1000);

}



function resetTimer(){

    clearInterval(timer);

    time = 1500;

    document.getElementById("timer").innerHTML = "25:00";

}
let notes = JSON.parse(localStorage.getItem("notes")) || [];


function showNotes(){

    let list = document.getElementById("noteList");

    list.innerHTML = "";


    notes.forEach((note,index)=>{

        let li = document.createElement("li");

        li.innerHTML =
        note + 
        ` <button onclick="deleteNote(${index})">❌</button>`;

        list.appendChild(li);

    });

}



function addNote(){

    let input = document.getElementById("noteInput");


    if(input.value.trim() !== ""){

        notes.push(input.value);


        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );


        input.value="";

        showNotes();

    }

}



function deleteNote(index){

    notes.splice(index,1);


    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


    showNotes();

}


showNotes();
let exams = JSON.parse(localStorage.getItem("exams")) || [];

let goals = JSON.parse(localStorage.getItem("goals")) || [];


// EXAMS

function showExams(){

let list = document.getElementById("examList");

list.innerHTML="";


exams.forEach((exam,index)=>{

let li=document.createElement("li");

let today=new Date();

let date=new Date(exam.date);

let days=Math.ceil(
(date-today)/(1000*60*60*24)
);


li.innerHTML =
exam.name + " - " + days + " days left " +
`<button onclick="deleteExam(${index})">❌</button>`;


list.appendChild(li);

});

}



function addExam(){

let name=document.getElementById("examName").value;

let date=document.getElementById("examDate").value;


if(name && date){

exams.push({
name:name,
date:date
});


localStorage.setItem(
"exams",
JSON.stringify(exams)
);


showExams();

}

}



function deleteExam(index){

exams.splice(index,1);

localStorage.setItem(
"exams",
JSON.stringify(exams)
);

showExams();

}



// GOALS

function showGoals(){

let list=document.getElementById("goalList");

list.innerHTML="";


goals.forEach((goal,index)=>{

let li=document.createElement("li");

li.innerHTML=
goal+
` <button onclick="deleteGoal(${index})">❌</button>`;

list.appendChild(li);

});

}



function addGoal(){

let input=document.getElementById("goalInput");


if(input.value){

goals.push(input.value);


localStorage.setItem(
"goals",
JSON.stringify(goals)
);


input.value="";

showGoals();

}

}



function deleteGoal(index){

goals.splice(index,1);


localStorage.setItem(
"goals",
JSON.stringify(goals)
);


showGoals();

}


showExams();

showGoals();
let tips = [

"📚 Revise your notes every day for better memory.",

"⏱️ Use short study sessions with small breaks.",

"📝 Practice questions after learning a topic.",

"🎯 Set a clear goal before starting study.",

"💡 Teach someone else to understand concepts better.",

"🌙 Sleep properly because rest improves learning."

];


function getAdvice(){

let random =
Math.floor(Math.random()*tips.length);


document.getElementById("advice").innerHTML =
tips[random];

}
function darkMode(){

document.body.classList.toggle("dark");

}
