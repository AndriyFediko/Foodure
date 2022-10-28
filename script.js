let SpinMenuRotateDeg = 0;
let slide = 1;
let dishes = [
   pizza = {
    name: "Pizza",
    weigth: "320g",
    ingradient1: "Dough",
    ingradient1Weight: "100g",
    ingradient2: "Ham",
    ingradient2Weight: "70g",
    ingradient3: "Olive",
    ingradient1Weigth3: "30g",
    ingradient4: "Mushrooms",
    ingradient4Weight: "50g",
    ingradient5: "Tomato",
    ingradient5Weight: "60g",
    price: "60$",
   },
   sushi = {
    name: "Sushi",
    weigth: "200g",
    ingradient1: "Rise",
    ingradient1Weight: "100g",
    ingradient2: "Fish",
    ingradient2Weight: "50g",
    ingradient3: "Vegitables",
    ingradient3Weight: "50g",
    price: "30$",
   },
   brocolliSalad = {
    name: "Brocolli salad",
    weigth: "220g",
    ingradient1: "Blocolli",
    ingradient1Weight: "110g",
    ingradient2: "Cauliflower",
    ingradient2Weight: "110g",
    price: "10$",
   },
   Steak = {
    name: "Steak",
    weigth: "350g",
    ingradient1: "Steak",
    ingradient1Weight: "300g",
    ingradient2: "Vegitablees",
    ingradient2Weight: "50g",
    price: "50$",
   },
   Rice = {
    name: "Rice",
    weigth: "320g",
    ingradient1: "Rice",
    ingradient1Weight: "200g",
    ingradient2: "Vegitablees",
    ingradient2Weight: "20g",
    ingradient3: "Meat",
    ingradient3Weight: "100g",
    price: "40$",
   },
   Pasta = {
    name: "Pasta",
    weigth: "290g",
    ingradient1: "Spagetti",
    ingradient1Weight: "190g",
    ingradient2: "Sous",
    ingradient2Weight: "20g",
    ingradient3: "Meat",
    ingradient3Weight: "80g",
    price: "35$",
   },
];
function setDish(){
    if(slide == 1){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").append(`<div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[2].ingradient1);
    $("#ingradient2").text(dishes[2].ingradient2);
    $("#ingradient1Weight").text(dishes[2].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[2].ingradient2Weight);
    $("#price").text(dishes[2].price);
    $("#foodName").text(dishes[2].name);
    } else if(slide == 2){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").append(`<div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient3"></span>
        <span id="ingradient3Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[4].ingradient1);
    $("#ingradient2").text(dishes[4].ingradient2);
    $("#Ingradient3").text(dishes[4].ingradient3);
    $("#ingradient1Weight").text(dishes[4].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[4].ingradient2Weight);
    $("#ingradient3Weight").text(dishes[4].ingradient3Weight);
    $("#price").text(dishes[4].price);
    $("#foodName").text(dishes[4].name);
    $("#foodName").prepend("<span>Foodure</span>");
    } else if(slide == 3){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").append(`<div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient3"></span>
        <span id="ingradient3Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[5].ingradient1);
    $("#ingradient2").text(dishes[5].ingradient2);
    $("#Ingradient3").text(dishes[5].ingradient3);
    $("#ingradient1Weight").text(dishes[5].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[5].ingradient2Weight);
    $("#ingradient3Weight").text(dishes[5].ingradient3Weight);
    $("#price").text(dishes[5].price);
    $("#foodName").text(dishes[5].name);
    } else if(slide == 4){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").append(`<div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient3"></span>
        <span id="ingradient3Weight"></span>
    </div>
        <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient4"></span>
        <span id="ingradient4Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient5"></span>
        <span id="ingradient5Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[0].ingradient1);
    $("#ingradient2").text(dishes[0].ingradient2);
    $("#Ingradient3").text(dishes[0].ingradient3);
    $("#Ingradient4").text(dishes[0].ingradient4);
    $("#Ingradient5").text(dishes[0].ingradient5);
    $("#ingradient1Weight").text(dishes[0].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[0].ingradient2Weight);
    $("#ingradient3Weight").text(dishes[0].ingradient3Weight);
    $("#ingradient4Weight").text(dishes[0].ingradient4Weight);
    $("#ingradient5Weight").text(dishes[0].ingradient5Weight);
    $("#price").text(dishes[0].price);
    $("#foodName").text(dishes[0].name);
    $("#foodName").prepend("<span>Foodure</span>");
    } else if(slide == 5){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").append(`
    <div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient3"></span>
        <span id="ingradient3Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[1].ingradient1);
    $("#ingradient2").text(dishes[1].ingradient2);
    $("#Ingradient3").text(dishes[1].ingradient3);
    $("#ingradient1Weight").text(dishes[1].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[1].ingradient2Weight);
    $("#ingradient3Weight").text(dishes[1].ingradient3Weight);
    $("#price").text(dishes[1].price);
    $("#foodName").text(dishes[1].name);
    } else if(slide == 6){
        document.getElementById("ingragients__content").textContent = "";
        $("#ingragients__content").prepend(`
        <div class="FoodInfo">
        <span id="ingradient1"></span>
        <span id="ingradient1Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="ingradient2"></span>
        <span id="ingradient2Weight"></span>
    </div>
    <div class="border">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="FoodInfo">
        <span id="Ingradient3"></span>
        <span id="ingradient3Weight"></span>
    </div>`);
    $("#ingradient1").text(dishes[3].ingradient1);
    $("#ingradient2").text(dishes[3].ingradient2);
    $("#ingradient1Weight").text(dishes[3].ingradient1Weight);
    $("#ingradient2Weight").text(dishes[3].ingradient2Weight);
    $("#price").text(dishes[3].price);
    $("#foodName").text(dishes[3].name);
    }
}
$("#previous").click( function(){
    SpinMenuRotateDeg = SpinMenuRotateDeg-60;
    slide--;
    if(slide < 1){
        slide = 6;
    }
    setDish();
    console.log(slide)
    $("#spinMenu").css(`transform`, `rotate(${SpinMenuRotateDeg}deg)`);
});
$("#next").click( function(){
    SpinMenuRotateDeg = SpinMenuRotateDeg+60;
    slide++;
    if(slide > 6){
        slide = 1;
    }
    setDish();
    console.log(slide)
    $("#spinMenu").css(`transform`, `rotate(${SpinMenuRotateDeg}deg)`);
});