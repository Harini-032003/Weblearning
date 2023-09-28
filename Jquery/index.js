//$("h1").css("color","red"); // $ refers to jQuery, jquery here replaces document.queryselector("h1")
$("h1").addClass("big-title margin-title"); // selecting html element and adding css class. adding multitple classes
/*$("h1").removeClass("big-title margin-title");
//$("h1").removeClass("big-title"); to remove a css class

//manipulating text using jquery
//$("h1").text("bye");  changing the text inside selected html element like textContent
//$("h1").html("<u>bye</u>"); //changing html too using html method like innerHTML

//$("button").html("dont click me"); //applies to all buttons. if selector is used,all elements containig that selector will be manipulated

//Attribute manipulation 
//$("a").attr("href","https://yahoo.com");  //setting attribute(attributeName,value)
//if we give only one input inside (),then it gives the value of that specified attribute name(applicable all manipulation)

//adding event listeners
$("h1").click(function (){ 
 $("h1").css("color","purple");
});

$("button").click(function (){ //need not use for loop,it iterates through each button and adds eventlistener to all buttons
  $("h1").css("color","purple");
 });

 $("input").keypress(function(event){  //passing the event occured as parameter.it returns the key that caused event(event.key)
    console.log(event.key);
 });*/

 /*$(document).keypress(function (event){
  $("h1").text(event.key);
 });*/
//the above code can be modified to use any event like
// $(document).on("mouseover",function (){ //we can specify any event inside paranthesis. ex ("click",)("keypress",)
//   $("h1").css("color","purple");
//  });


//  $("button").on("click",function(){
//    $("h1").animate({margin:"20%"});            
//  });

 $("button").on("click",function(){
  $("h1").slideDown().slideUp().animate({opacity:0.5});            
});
