
   /*Below declared is the use of session storage for storing each slide values*/

   sessionStorage.one =6;
    sessionStorage.two =0;
    sessionStorage.three =0;
    sessionStorage.four =0;
    
 /*function which gets invoked when ondragstart event is fired*/    

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
   console.log(ev.target.parentElement.id);
    if(ev.target.parentElement.id=="Backlog")
    {
    document.getElementById("firstp").innerHTML ='Backlog-'+(sessionStorage.one-1);
    sessionStorage.one=sessionStorage.one-1;
    }
    if(ev.target.parentElement.id=="Selectedfordevelopment")
    {
    document.getElementById("secondp").innerHTML ='Selected For Dev-'+(Number(sessionStorage.two)-1);
    sessionStorage.two=Number(sessionStorage.two)-1;
    }
    
    if(ev.target.parentElement.id=="Inprogress")
    {
    document.getElementById("thirdp").innerHTML ='In Progress-'+(Number(sessionStorage.three)-1);
    sessionStorage.three=Number(sessionStorage.three)-1;
    }

    if(ev.target.parentElement.id=="Done")
    {
    document.getElementById("fourp").innerHTML ='Done-'+(Number(sessionStorage.four)-1);
    sessionStorage.four=Number(sessionStorage.four)-1;
    }
}

function allowDrop(ev) {
  ev.preventDefault();
  
  
}
/*Function which gets invoked when ondrop event is fired*/

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(ev.target.id);
  if(ev.target.id=="Selectedfordevelopment")
    {
    document.getElementById("secondp").innerHTML ='Selected For Dev-'+(Number(sessionStorage.two)+1);
    sessionStorage.two=Number(sessionStorage.two)+1;
    }
    if(ev.target.id=="Backlog")
    {
    document.getElementById("firstp").innerHTML ='Backlog-'+(Number(sessionStorage.one)+1);
    sessionStorage.one=Number(sessionStorage.one)+1;
    }

    if(ev.target.id=="Inprogress")
    {
    document.getElementById("thirdp").innerHTML ='In Progress-'+(Number(sessionStorage.three)+1);
    sessionStorage.three=Number(sessionStorage.three)+1;
    }

    if(ev.target.id=="Done")
    {
    document.getElementById("fourp").innerHTML ='Done-'+(Number(sessionStorage.four)+1);
    sessionStorage.four=Number(sessionStorage.four)+1;
    }

    
}
/*Function which directs to invoke the getlocation() function when complete webpage gets loaded*/

window.onload
{
  getLocation();
}

/*Functions for getting location using geolocation API*/


function getLocation() {
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } 
}

function showPosition(position) {
  let lat=position.coords.latitude;
  let lon=position.coords.longitude;
  lat<0?lat=lat+'S':lat=lat+'N'
  lon<0?lat=lon=lon+'W':lon=lon+'E';
  document.getElementById('head2').innerHTML ="Location Details:"+"Latitude:" +lat +
  " Longitude:" + lon;
}