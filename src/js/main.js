import $ from "jquery" 

 $.getJSON('http://json-data.herokuapp.com/forms').then(


   function(x){

console.log(x);
x.forEach(n) { n.forEach(y){console.log(y)}}
  
  
   if ( n.type !== "select" || n.type !== "textarea") {

   var textfield = ` <div class="text_field_template">
       <input type="text" name="" class="textfield" placeholder="${n.label}">

    </div>`;

 

$(".mainform_div").append(textfield);
   }


}
   , function (error) {
   	console.log(error);
   }


	);