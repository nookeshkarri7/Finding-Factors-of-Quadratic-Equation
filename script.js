let nameEl=document.getElementById("name");
let inputName=prompt("Enter your Name");
nameEl.textContent="Hi.. "+inputName.toUpperCase()

let color=["red","blue","yellow","Orange","green"]
if (inputName==undefined){
    inputName=""
}
let sendmsg='*మీరు చేసే ప్రతీ కార్యం ఆ వినాయకుడి ఆశీస్సులతో విజయం చేకూరాలని, వినాయక చవితి రోజున మీరందరూ మనసారా గడపాలని కోరుకుంటూ %20%20 మీ శ్రేయభిలాషి.-%20'+inputName.toUpperCase()+'*%20%20👇%20 https://bit.ly/3zWYkwV'
let whatsapplinkEl=document.getElementById("whatsapplink")
whatsapplinkEl.href=`whatsapp://send?text=${sendmsg}`
