var input = document.getElementById("display");

function addItem() {
    if (input.value.trim() === "") {
        alert("Enter your TO-DO!")
    } else {
        document.getElementById("list").innerHTML += "<li>" + input.value + "<button id='clearBtn' onclick='this.parentElement.remove()'>X</button></li>";
        input.value = "";
    }
}


//USING createElement()
// var btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     if(input.value.trim() === "") {
//         alert("Please enter To-DO!");
//     }

//     else {
//         var list = document.createElement("li");
//         list.innerHTML = input.value;

//         var btn = document.createElement("button");
//         btn.innerHTML = "X";
//         btn.id = "clearBtn";
//         btn.onclick = function() {
//             list.remove();
//         }

//         list.appendChild(btn);
//         document.getElementById("list").appendChild(list);
//         input.value = "";
//     }
// });











