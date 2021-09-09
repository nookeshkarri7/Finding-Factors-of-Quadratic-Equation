let nameEl=document.getElementById("name");
let inputName=prompt("Enter your Name");
nameEl.textContent="Hi.. "+inputName.toUpperCase()

let color=["red","blue","yellow","Orange","green"]

let whatsapplinkEl=document.getElementById("whatsapplink")
whatsapplinkEl.href="whatsapp://send?text= *మీరు చేసే ప్రతీ కార్యం ఆ వినాయకుడి ఆశీస్సులతో విజయం చేకూరాలని, వినాయక చవితి రోజున మీరందరూ మనసారా గడపాలని కోరుకుంటూ-మీ శ్రేయభిలాషి..."+inputName.toUpperCase()+"....వినాయక చవితి శుభాకాంక్షలు.*"