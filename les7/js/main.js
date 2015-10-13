// window.addEventListener("load", function(){

//  var users = ["Kevin","Robin","Stijn","MY NINJA"];

//  users.forEach(function(user){
//      console.log(user);
//  })
// });

window.addEventListener("load", function(){

    var imageGallery = new ImageGallery('#imageGallery');

    // wat mogen jullie mogelijk maken:
    imageGallery.loadData("load.php");




});

function startApp(){
    console.log(7);
}

HTTP.loadJSON("http://jsonplaceholder.typicode.com/posts",startApp);
