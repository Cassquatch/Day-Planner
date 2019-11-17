
$(document).ready(function(){
    //get current hour to display at the top of the page

    let now = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(now);

    //need to compare the current hour to the hour divs on the planner, to see if the hour has passed, is the present, or has not happened yet
    let current_hour = moment().hour();
    current_hour = moment().format("h A");
    
    console.log(current_hour);
    
    //conditionals to check the hours on the planner to the current hour,and change the background color if the hour has passed already, red if it is preset, green if it is future(consider changing to a switch statement once you figure it out)
    if(current_hour === $(".hour").text()){
        $("textarea").addClass("present");
    }else if($(".hour").text() > current_hour){
        $("textarea").addClass("past");
    }







})

