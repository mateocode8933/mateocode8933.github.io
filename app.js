// Pobieramy ELEMENTY 

// Add Task PANEL
taskName = document.querySelector('.taskValue');
addTaskBtn = document.querySelector('.addTask');

// Tasks List +  (number, name)

const tasksList = document.querySelector('.myTasks');

const taskDoneFaceGift = document.querySelector('.doneLevel img');


// FLAG DIV to turn off animation
const flagDiv = document.querySelector('.flag')

// Main function Creating a TASK etc.
const mainFunction = function () {


    const taskValue = taskName.value;
    // Checking if input is empty or larger than 3 characters
    if (taskValue === "") {
        return alert('Write Your Task')
    } else if (taskValue.length < 3) {
        return alert('Your Task Must Have Atleast 3 Characters')
    }

    // Creating Div for Task

    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('task');
    tasksList.appendChild(newTaskDiv);

    // Creating Task Name

    const newTaskName = document.createElement('h3');
    newTaskDiv.appendChild(newTaskName)
    newTaskName.innerHTML = ` ${taskValue}`


    // Creating DONE AND DELETE BUTTONS 
    const newTaskDoneBtn = document.createElement('button');
    newTaskDoneBtn.setAttribute('id', 'done');
    newTaskDoneBtn.setAttribute('class', 'taskBtn');
    newTaskDoneBtn.innerHTML = `<i class="fas fa-check-square"></i>`

    const newTaskDeleteBtn = document.createElement('button');
    newTaskDeleteBtn.setAttribute('id', 'delete');
    newTaskDeleteBtn.setAttribute('class', 'taskBtn');
    newTaskDeleteBtn.innerHTML = `<i class="fas fa-trash-restore"></i>`

    // APPENDING BUTTONS 
    newTaskDiv.appendChild(newTaskDoneBtn)
    newTaskDiv.appendChild(newTaskDeleteBtn)

    // Reseting INPUT VALUE AFTER ADDING TASK
    taskName.value = ''
    // Add Event Listeners ON Button DONE AND DELETE

    newTaskDoneBtn.addEventListener('click', doneTask);
    newTaskDeleteBtn.addEventListener('click', deleteTask);





}


// Task is DONE FUNCTION 

const doneTask = (e) => {

    if (e.currentTarget.previousSibling.classList.contains('active')) {
        return alert('This Task is Already Done :)')

    }
    e.currentTarget.style.opacity = '.7'
    e.currentTarget.previousSibling.style.textDecoration = 'line-through 2px'
    e.currentTarget.previousSibling.style.opacity = '.7'
    e.currentTarget.previousSibling.classList.add('active');

    //console.log(e.currentTarget.previousSibling);



    // Satisfaction FUNCTION CALL WHEN MARK TASK DONE
    SatisfactionLevel()




}

// // Deleting Task Function

const deleteTask = function (e) {
    e.currentTarget.parentElement.remove();

}


// Satisfaction LEVEL Function
// 


// Array with EMOTES
const satLvlImages = [`/faces svg/1task.svg.png`, `/faces svg/2task.svg.png`, `/faces svg/3task.svg.png`, `/faces svg/4task.svg.png`, `/faces svg/5task.svg.png`, ]
const satLvlGift = [`/faces svg/6task.svg`]

let flag = 0;
let number = 70;
let taskDoneNumber = 0;
let satLevelEmoteNumber = 0;


const SatisfactionLevel = function () {


    const taskDoneText = document.querySelector('.taskDoneText');
    const taskDoneFace = document.querySelector('.doneLevel img').src = `${satLvlImages[satLevelEmoteNumber]}`


    taskDoneText.innerHTML = `<i class="fas fa-long-arrow-alt-left"></i> ${taskDoneNumber += 1} Task done`

    const doneLevel = document.querySelector('.doneLevel');
    doneLevel.style.transform = `translateY(${flag -=number}px )`


    satLevelEmoteNumber++

    if (flag === -420) {
        number = 0;
        const taskDoneFace = document.querySelector('.doneLevel img').src = `${satLvlGift[0]}`
        if (flagDiv.classList.contains('active')) {

            taskDoneFaceGift.className = '';

        } else {
            taskDoneFaceGift.classList.add('satImg')
        }

    }

    if (taskDoneNumber > 1) {
        taskDoneText.innerHTML = `<i class="fas fa-long-arrow-alt-left"></i> ${taskDoneNumber} Tasks done`
    }
    if (taskDoneNumber === 6) {
        alert(`CONGRATULATIONS!! This Day Was Very Productive :) Click The Gift Icon for Your Reward`)
        const rewardClick = document.querySelector('.doneLevel img');
        const modalPop = document.querySelector('.modal');
        rewardClick.addEventListener('click', () => {
            modalPop.classList.add('active');
            const form = document.querySelector('.form').style.filter = 'blur(6px)'
            const rightColumn = document.querySelector('.satisfactionLevel').style.filter = 'blur(6px)'
            rewardDraw()

        })
    }



}

// GIFT MODAL FUNCTION 

const rewardDraw = () => {

    const rewards = [`“The way get started is to quit talking and begin doing.” – Walt Disney`, `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” – Winston Churchill`, `“Don’t let yesterday take up too much of today.” – Will Rogers`, `“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” – Unknown`, `“It’s not whether you get knocked down, it’s whether you get up.” –  Vince Lombardi`, `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” – Steve Jobs`, `“People who are crazy enough to think they can change the world, are the ones who do.” – Rob Siltanen`, `“Failure will never overtake me if my determination to succeed is strong enough.” – Og Mandino`, ` “Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.” – Mohnish Pabrai`, ` “We may encounter many defeats but we must not be defeated.” – Maya Angelou`, `“Knowing is not enough; we must apply. Wishing is not enough; we must do.” – Johann Wolfgang Von Goethe`, ` “We generate fears while we sit. We overcome them by action.” – Dr. Henry Link`, `“Whether you think you can or think you can’t, you’re right.” – Quote by Henry Ford`, `“Security is mostly a superstition. Life is either a daring adventure or nothing.” – Life Quote by Helen Keller`, `“The only limit to our realization of tomorrow will be our doubts of today.” –Franklin D. Roosevelt`, ]


    const rewardModal = document.querySelector('.modal');
    rewardModal.classList.add('active');
    const rewardDrawSpan = document.querySelector('.modal h1');

    rewardDrawSpan.innerHTML = rewards[Math.floor(Math.random() * rewards.length)]

    // MODAL CLOSE 
    const closeModal = document.querySelector('.closeModal');
    closeModal.addEventListener('click', () => {
        flagDiv.classList.add('active');
        rewardModal.classList.remove('active');
        const form = document.querySelector('.form').style.filter = 'none';
        const rightColumn = document.querySelector('.satisfactionLevel').style.filter = 'none'
        taskDoneFaceGift.classList.remove('satImg')
        taskDoneFaceGift.style.opacity = '0.5'
        taskDoneFaceGift.style.pointerEvents = 'none'
        document.querySelector('.taskDoneText').innerHTML = `${taskDoneNumber} Tasks done`
        console.log(flagDiv);

    })

}



// Clearing List FUNCTION 
const clearListBtn = document.querySelector('.clear');
const clearList = function () {


    location.reload();
    // // Bottom BTN for CLEARING TASK
    // let flag2 = flag;
    // taskName.value = ''
    // tasksList.innerHTML = ''

    // const taskDoneFace = document.querySelector('.doneLevel img').src = "/faces svg/0task.svg.png"
    // const doneLevel = document.querySelector('.doneLevel');
    // doneLevel.style.transform = `translateY(${flag -= flag2}px)`
    // const taskDoneText = document.querySelector('.taskDoneText');
    // taskDoneText.innerHTML = `<i class="fas fa-long-arrow-alt-left"></i> 0 Tasks done`
    // taskNumber = 1;
    // satLevelEmoteNumber = 0;
    // taskDoneNumber = 0;
    // number = 70;

    // taskDoneFaceGift.classList.remove('satImg')


}



// add task btn LISTENER

addTaskBtn.addEventListener('click', mainFunction, false);


// // clear list BTN 

clearListBtn.addEventListener('click', clearList)