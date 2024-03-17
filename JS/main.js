var ingredItem = ['Choose your ingredient', 'pizza', "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumbergreen", "pepper", "lettuce", "mushrooms", "onion"
    , "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato"
    , "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano"
    , "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant"
    , "blueberry", "boysenberry", "cherry", "coconut", 'fig', 'grape', "grapefruit", 'kiwifruit', 'lemon', 'lime', 'lychee', 'mandarin'
    , 'mango', 'melon', 'nectarine', 'orange', 'papaya', 'passion fruit', 'peach', 'pear', 'pineapple', 'plum', 'quince'
    , 'raspberry', 'strawberry', 'watermelon', 'salad', 'pasta', 'popcorn', 'lobster', 'steak', 'bbq', 'pudding'
    , 'hamburger', 'pie', 'cake', 'sausage', 'tacos', 'kebab', 'poutine', 'seafood', 'chips', 'fries', 'masala', 'paella'
    , 'som tam', 'chicken', 'toast', 'marzipan', 'tofu', 'ketchup', 'hummus', 'chili', 'maple syrup', 'fajitas'
    , 'champ', 'lasagna', 'chocolate', 'croissant', 'arepas', 'bunny chow', 'pierogi', 'donuts', 'rendang', 'sushi'
    , ' ice cream', 'duck', 'curry', 'beef', 'goat', 'lamb', 'turkey', 'fish', 'crab', 'ribs']

// add ingredient to the select menu
function addIngregient() {
    var cartona = ``;
    for (let i = 0; i < ingredItem.length; i++) {
        cartona += `
    
    <option value="${ingredItem[i]}">${ingredItem[i]}</option>
    
    `

    }
    document.getElementById("selectIng").innerHTML = cartona;

}

addIngregient()



// get the recepie when the ingredient is changed

document.getElementById("selectIng").addEventListener("change", async function getRecipie(e) {
    var cartona2 = ``;
    var ingredient = e.target.value;
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${ingredient}`);
    const data = await response.json();
    const realData = await data.recipes

    for (var i = 0; i < realData.length; i++) {
        cartona2 += `
     
     <div class="col-3">
     <img src=${realData[i].image_url} class="w-100 rounded-circle" alt="" id=${realData[i].recipe_id}>
     <h6 class="">${realData[i].title}</h6>
     <a href="${realData[i].source_url}" class="badge rounded-pill text-bg-secondary p-3" target="_blank">How to cook it</a>
     </div>
     
     `

    }

    document.getElementById('display').innerHTML = cartona2;
    var img = Array.from(document.getElementsByTagName("img"));
    img.forEach(element => {
        element.addEventListener("click", async function () {
            var response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${element.id}`)
            var data = await response.json();
            var ingredients = await data.recipe.ingredients;
            var lista = ``;
            var ingrdList=document.getElementById("recipe")

            for (let i = 0; i < ingredients.length;i++ ) {

                lista += `
                <li> ${ingredients[i]}</li>
                `

            }

           ingrdList.innerHTML = lista;
           document.getElementById("overlay").style.display="flex";           
        })
    });
    document.getElementById("holder").style.display = "none"
})

document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
        document.getElementById("overlay").style.display="none";
    }
})
var closeMark = document.getElementById("xmark");
closeMark.addEventListener("click", function () {
    document.getElementById("overlay").style.display="none";
});



// https://forkify-api.herokuapp.com/api/get?rId=47746


// async function getpram() {
//     var response = await fetch('https://forkify-api.herokuapp.com/api/get?rId=47746')
//     var data = await response.json();

//     console.log(data.recipe.ingredients)
// }

// getpram()



// var boxContainer = document.getElementById("boxContainer");
// var closeMark = document.getElementById("xmark");

// // closeMark.addEventListener("click", function () {
// //     boxContainer.classList.add("disapear");
// // });



