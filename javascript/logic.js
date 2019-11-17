
$(document).ready(function(){
    //get current hour to display at the top of the page

    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(now);

    //save the text entered into the textarea
    function saveTask(){
        let task = $("textarea").val();
        localStorage.setItem("saved-tasks", task);
    }

    $(".saveBtn").on("click", saveTask);
    //need to compare the current hour to the hour divs on the planner, to see if the hour has passed, is the present, or has not happened yet
    let current_hour = moment().hour();
    current_hour = moment().format("hA");
    
    console.log(current_hour);
    
    //conditionals to check the hours on the planner to the current hour,and change the background color if the hour has passed already, red if it is preset, green if it is future(consider changing to a switch statement once you figure it out)
    
    let time_blocks = $(".time-block");
    console.log(time_blocks);
    for(let i = 0; i < time_blocks.length; i++){
        let hour_blocks = $(time_blocks[i]);
        let hour_blocks_text = hour_blocks.text();
        let hour_textarea = hour_blocks.children("row").children("textarea");

        if(current_hour === hour_blocks_text){
            hour_textarea.addClass("present");
        }
        
    }






});

