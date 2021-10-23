// NAME
let yourName = "Jena Reis" // HINT: Replace this with your own name!
document.getElementById('credit').textContent = `Created by ${yourName}`

// COOKIE VARIABLES
let gb = 0      
let cc = 0      
let sugar = 0   

// GB BUTTONS
document.getElementById('add-gb').addEventListener('click', function(){
    gb++
    document.getElementById('qty-gb').innerHTML = gb
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
})

document.getElementById('minus-gb').addEventListener('click', function(){
    if (gb > 0){
        gb--
        document.getElementById('qty-gb').innerHTML = gb
        document.getElementById('qty-total').innerHTML = gb + sugar + cc
    }
})


// CC BUTTONS
document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    document.getElementById('qty-cc').innerHTML = cc
    document.getElementById('qty-total').innerHTML = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click', function(){
    if (cc > 0) {
        cc--
        document.getElementById('qty-cc').innerHTML = cc
        document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})


// SUGAR BUTTONS
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    document.getElementById('qty-sugar').innerHTML = sugar
    document.getElementById('qty-total').innerHTML = gb + sugar + cc
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    if (sugar > 0){
        sugar--
        document.getElementById('qty-sugar').innerHTML = sugar
        document.getElementById('qty-total').innerHTML = gb + cc + sugar
    }
})
























