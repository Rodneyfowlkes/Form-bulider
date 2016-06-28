import $ from "jquery" 

 $.getJSON('http://json-data.herokuapp.com/forms').then ( function(x){
 

  x.forEach(function(y) {

  
  
   if ( y.type === "text" || y.type === "email" || y.type === "tel")  {

      var textfield = `  <form class="forms"> <div class="text_field_template">
       <i class="fa ${y.icon}"></i>
       <input type="text" name="" class="textfield" placeholder="${y.label}">

      </div> </form>` ;

      console.log(y.type);

      $(".mainform_div").append(textfield);}

   else if (y.type === "textarea"){

    var comment_html = `<div class="text_comment_template">
       <input type="text" name="" class="commentfield"placeholder="${y.label}">

    </div>	`;

    $(".mainform_div").append(comment_html);}

   else if (y.type === "select"){
   	var optionhtml;  

    y.options.forEach(function (n){
    	var options_temp = `<option value="${n.value}">${n.label}</option> `
    	optionhtml += options_temp
    console.log(options_temp);
  console.log(n);
  })


    var select_html = `<select class="text_comment_template">
     
     <option value="select">Select language...</option>
     ${optionhtml}


    </select>	`;

    $(".mainform_div").append(select_html);}





   })
 





});
   // , function (error) {
   // 	console.log(error);
   // };


