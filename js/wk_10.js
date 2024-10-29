let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant"
console.log(my_other_var);
my_other_var += "!"

alert("this is an alert")

// how to add interaction

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function() {
    alert("Heading clicked!");
    document.getElementById("paragraph").innerHTML = "this is the new and exciting"
    document.getElementById("paragraph").style.color = "Pink"
});


