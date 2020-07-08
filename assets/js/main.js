console.log("Javascript Started...");

let selected_color;
let old_box;

// get all the box
const box = document.getElementsByClassName("color-box");


// insert background to all color box depending on their attribute color
for (i = 0; i < box.length; i++) {
    let el = box.item(i);
    let color = el.getAttribute('color');
    el.style.backgroundColor = color;
    el.style.border = "2px solid black";



 
    el.addEventListener('click', function(){

        let el_color = this.getAttribute('color');
        el.style.border = "2px solid white";
        selected_color = el_color;
        this.classList.add("selected-" + el_color);

        if(old_box !== undefined && old_box !== ".selected-" + el_color){
            document.querySelector(old_box).style.border = "2px solid black";
        }
        old_box = ".selected-" + el_color;
     

        
    });

}

document.querySelector('.color-the-box').addEventListener('click', function(){

    if(selected_color !== undefined){
        let text_colorbox = document.querySelector('.mybox');
        text_colorbox.textContent = "Box Color is : " + selected_color.toUpperCase();
        this.style.backgroundColor = selected_color;
    } else {
        alert("Please Select a color on choices!");
    }
    
});



