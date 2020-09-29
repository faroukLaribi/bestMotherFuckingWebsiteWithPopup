setTimeout(confirmPop,10000);
function confirmPop(){
  let pop = confirm ("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please. Clic sur OK pour y acceder");
    if (pop == null || pop == ""){}

    else {document.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';}
}
document.getElementById("MP").onclick = function() {changeStyle()};
function changeStyle(){

  document.body.style.backgroundColor = "magenta";
  for (let e of document.getElementsByTagName("p")){e.style.color = "blue";}
  for (let e of document.getElementsByTagName("h1")){e.style.color = "green";}
  for (let e of document.getElementsByTagName("h2")){e.style.color = "green";}

  for (let e of document.getElementsByTagName("p")){e.style.fontFamily = "courier";}
  for (let e of document.getElementsByTagName("h1")){e.style.fontFamily = "comic sans";}
  for (let e of document.getElementsByTagName("h2")){e.style.fontFamily = "comic sans";}

 }
