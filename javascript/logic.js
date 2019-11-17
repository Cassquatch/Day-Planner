
$(document).ready(function(){
    //get current hour to display at the top of the page

    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(now);

    let time_blocks = $(".time-block");
    let current_hour = moment().hour();
    let planned_tasks = [];

   
 
    //save the text entered into the textarea
    function saveTask(){
        let target = event.target;
        let task = $(this).siblings("textarea").val();
        console.log(task);
        planned_tasks.push({task: task});
        console.log(planned_tasks);
        
        localStorage.setItem("saved-tasks", JSON.stringify(planned_tasks));
        console.log(planned_tasks);

         
        
        // console.log(target);
        // console.log(target.value);
        // console.log(target.parentNode.parentNode.id);
        
        // for(let i = 0; i<time_blocks.length; i++){
        //     let hour_blocks = $(time_blocks[i]);
        //     let hour_blocks_id = hour_blocks.attr("id");
        //     console.log(hour_blocks_id);
        //     // if(target.value === hour_blocks_id[i]){
        //     //     $
        //     // }
             
        // }
    }
    displayTasks();

    function displayTasks(){
        /*
        alright, try to work with the ideas from above here, need to get each time's textarea value that we save, and store it, and now get it and display it
        */
       //ask questions about this, the storing is happening, but it is appending to the last on the list
        
        planned_tasks = JSON.parse(localStorage.getItem("saved-tasks"));
        
        if(planned_tasks === null){
            planned_tasks = [];
        }

       for(let i = 0; i < planned_tasks.length; i++){
        let hour_blocks = $(time_blocks[i]);
        let hour_blocks_id = hour_blocks.attr("id");
        
        let hour_textarea = hour_blocks.children(".row").children("textarea");
        hour_textarea.text(planned_tasks[i].task);
        if(i === planned_tasks.length){
            return;
        }

       }
    }

    $(".saveBtn").on("click", saveTask);
    //need to compare the current hour to the hour divs on the planner, to see if the hour has passed, is the present, or has not happened yet
    current_hour = moment().format("hA");
    
    console.log(current_hour);
    
    //conditionals to check the hours on the planner to the current hour,and change the background color if the hour has passed already, red if it is preset, green if it is future(consider changing to a switch statement once you figure it out)
    
    console.log(time_blocks);
    for(let i = 0; i < time_blocks.length; i++){
        let hour_blocks = $(time_blocks[i]);
        let hour_blocks_id = hour_blocks.attr("id");
        console.log(hour_blocks_id);
        let hour_textarea = hour_blocks.children(".row").children("textarea");

        if(current_hour === hour_blocks_id){
            hour_textarea.addClass("present");
        }else if(moment(hour_blocks_id, "hA").isBefore()){
            hour_textarea.addClass("past");
        }else if(moment(hour_blocks_id, "hA").isAfter()){
            hour_textarea.addClass("future");
        }

        
    }






});

