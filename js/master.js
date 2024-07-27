// setting up varible 
let container = document.querySelector(".todo-container")
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content")
let taskCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus on input filed
window.onload = function (){
    theInput.focus();
}

// adding the task 
theAddButton.onclick = function (){

    // if input is empty
    if (theInput.value === ''){

        // add aleart to window
        window.alert('Please add something')

    }

    // if input is empty
    if (theInput.value === ''){

        console.log ("nno")

    }else{

        // cheek number of tasks inside the container 
        let noTaskasg = document.querySelector(".no");

        if (document.body.contains(document.querySelector(".no"))){
            
         // remove "no task massge "
        noTaskasg.remove();

        }

        // creat span element 
        let mainSpan = document.createElement("span");

        // creat button delete
        let deleteButton = document.createElement("span")

        // create the span text 
        let text = document.createTextNode(theInput.value)

        // create the delete button
        let textDelete = document.createTextNode("Delete")

        // add text to mainspan 
        mainSpan.appendChild(text)

        // add claslist to main span 
        mainSpan.classList.add("task-box")

        //add delete button to span 
        deleteButton.appendChild(textDelete)

        // add classlist to delete button
        deleteButton.classList.add("delete")

        // add delete to span 
        mainSpan.appendChild(deleteButton) 

        // add maiSpan to body
        tasksContainer.appendChild(mainSpan)

        // EMPTY the input 
        theInput.value = '';

        theInput.focus();

        // add function claulutor 
        calculte()

        
    };

};


document.addEventListener ('click' , (e) =>{
    
    // delte task 
    if (e.target.className == "delete"){
        
        // remove element form dom 
        e.target.parentNode.remove()


        // cheek number of tasks inside the container 
        if (tasksContainer.childElementCount == 0){

            createNoTasks()

        }

        
        // add function claulutor 
        calculte()  

        
    }
    // finished task 
    if (e.target.classList.contains("task-box")){
        
        // add finished to task 
        e.target.classList.toggle("finished")
        
    }

    
        // add function claulutor 
        calculte()
})

// function to create no tasks masge
function createNoTasks(){

    // create masg span element 
    let msgSpan = document.createElement("span");

    // create text masg 
    let textMsg = document.createTextNode("No Tasks To Show");

    // add textMsg to msgSpan 
    msgSpan.appendChild(textMsg)

    // add class to mmsgSPAN 
    msgSpan.classList.add("no");

    // append the massgge to tasks-content
    tasksContainer.appendChild(msgSpan)

}

// function to calculte tasks
function calculte(){

    // calculte all tasks 
    taskCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;

}