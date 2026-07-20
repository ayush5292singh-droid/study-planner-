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
