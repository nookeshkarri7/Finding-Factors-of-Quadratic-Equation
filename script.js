let nameEl=document.getElementById("name");
let inputName=prompt("Enter your Name");
nameEl.textContent="Hi.. "+inputName.toUpperCase()

let color=["red","blue","yellow","Orange","green"]
if (inputName==undefined){
    inputName=""
}
let sendmsg='గణనాథుడు మిమ్మల్ని అన్నివేళలా దీవించాలి. మీరు ఏ పని మొదలుపెట్టినా ఎలాంటి విఘ్నాలు లేకుండా పూర్తయ్యేటట్లు చూడాలని ఆ మహాగణపతిని మనస్ఫూర్తిగా కోరుకుంటూ..ూ %20%20%20 *మీ%20'+inputName.toUpperCase()+'*%20%20%20👇%20 https://bit.ly/3zWYkwV'
let whatsapplinkEl=document.getElementById("whatsapplink")
whatsapplinkEl.href=`whatsapp://send?text=${sendmsg}`
