console.log('hi');
$('.btn').click(function(){

//retrieve live data asynchronously
$.ajax({
    url: 'https://www.food2fork.com/api/search?key=82387f5b512d882e4a82239373b5fee5&q=rice&page=2',
    dataType: 'json',
    type : 'GET',
    success: function(dataFromJSON){
    	console.log(dataFromJSON);
    for(var i =0 ; i< dataFromJSON.recipes.length; i++){
    	document.getElementById('display').innerHTML += dataFromJSON.recipes[i].title + "<br>";

    }



    }, //success
    error : function(error){
    	console.log("error")
    }//error
});//ajax



});//button