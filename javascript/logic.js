
$(document).ready(function(){
    //get current hour to display at the top of the page

    let now = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(now);
    
    let time_blocks = $(".time-block");
    let current_hour = moment().hour();
    current_hour = moment().format("hA");
    
    
    
    
    
    function saveTask(){
        
        let target = event.target;
        let hour = $(this).parent().parent().attr("id");
        let task = $(this).siblings("textarea").val();
        console.log(task);
        console.log(hour);
        
        localStorage.setItem(hour, task);
        
        
    }
     displayTasks();

     function displayTasks(){
         let nine_am = $("#9AM").children(".row").children("textarea");
         let ten_am = $("#10AM").children(".row").children("textarea");
         let eleven_am = $("#11AM").children(".row").children("textarea");
         let twelve_pm = $("#12PM").children(".row").children("textarea");
         let one_pm = $("#1PM").children(".row").children("textarea");
         let two_pm = $("#2PM").children(".row").children("textarea");
         let three_pm = $("#3PM").children(".row").children("textarea");
         let four_pm = $("#4PM").children(".row").children("textarea");
         let five_pm = $("#5PM").children(".row").children("textarea");

         
        nine_am.text(localStorage.getItem("9AM"));
        ten_am.text(localStorage.getItem("10AM"));
        eleven_am.text(localStorage.getItem("11AM"));
        twelve_pm.text(localStorage.getItem("12PM"));
        one_pm.text(localStorage.getItem("1PM"));
        two_pm.text(localStorage.getItem("2PM"));
        three_pm.text(localStorage.getItem("3PM"));
        four_pm.text(localStorage.getItem("4PM"));
        five_pm.text(localStorage.getItem("5PM"));
       
       
 
     }

    $(".saveBtn").on("click", saveTask);
    //need to compare the current hour to the hour divs on the planner, to see if the hour has passed, is the present, or has not happened yet
    
   
    //conditionals to check the hours on the planner to the current hour,and change the background color if the hour has passed already, red if it is preset, green if it is future(consider changing to a switch statement once you figure it out)
    
    
    for(let i = 0; i < time_blocks.length; i++){
        let hour_blocks = $(time_blocks[i]);
        let hour_blocks_id = hour_blocks.attr("id");
        
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

