 // function that capture input fields
function catpureInputs(){  // An arbitrary function so define it in any way you want  
// javascripts object
var PizzaOrder = {
      cname: $('#cName').val(),
      uid: userID,
      cEmail: $('#cEmail').val(),
      cPhone: $('#cPhone').val(),
      cOrder: $('#orderDetails').val(),
      orderStatus: '1'
  };
 AddPizzaToLcalStorage(PizzaOrder);  
}



function AddPizzaToLcalStorage(PizzaOrder){
    
 
 
    var check =  localStorage.getItem('orderArray');
    // check if the localSotage has any DB been created with a key 'orderArray'
      if(check === null){
         
          var orderList = [];
          
      orderList.push(pizzaObject);
       // Converting the javascripts object to a JSON object
    var x = JSON.stringify(orderList);
    localStorage.setItem('orderArray', x); 
        
      }else{/*-----------------------------------------*/  
       /* check if the array in the localStorage has 'orderArray' key already if so then bring it */
      var order = JSON.parse(localStorage.getItem('orderArray'));
   
      //adding a new order to the list
      order.push(pizzaObject);

       // Converting the javascripts object to a JSON object
       var x = JSON.stringify(order);
    // saving the array again with the same key ('orderArray')
    localStorage.setItem('orderArray', x); 
        
  }
    
}
 





function getPizzafromLS(){
    /*-----------------------------------------*/
// Converting JSON object to a javascripts object
      var order = JSON.parse(localStorage.getItem('orderArray'));
    console.log('array after parsing json:' + order);
          $('#localS').val(' '); 
     $.each(order, function(index, item){
      // loop through - for instance    
   var personName = item.name;  
  
var toTextArea = `<p>${pName}</p>`;  //backticks
     
$('#localS').append(toTextArea);
        
     });  /*----end $.each() ---*/
/*-----------------------------------------*/                  
}

getPizzafromLS();
