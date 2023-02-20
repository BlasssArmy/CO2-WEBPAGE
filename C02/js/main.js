
function transportSelection(user){
  /*Transition animation of picking one user at the beginning*/
  sessionStorage.setItem('user',user);
  document.getElementById("user_buttons").style.opacity=0;
  setTimeout(function(){document.getElementById("user_buttons").style.display="none";
  document.getElementById("transport_buttons").style.display="flex";
  document.getElementById("transport_buttons").style.opacity=1;},400);

}


function km_selection(button,emm){
  /* The main idea of the funtion is to create different animations depending on wich button is selected */
  var current = sessionStorage.getItem('select_trans');
  console.log(current);

  /* Global variable to make the code more readable*/
  var button_yellow = "km_button_container_yellow";
  var button_red = "km_button_container_red";

  if (current!= null) {
    document.getElementById(current).classList.remove("selected_button")

  }

  /* Kilometers green button */
  if (emm=='no_emission') {
    document.getElementById("km-1").classList.remove(button_yellow)
    document.getElementById("km-2").classList.remove(button_yellow)
    document.getElementById("km-3").classList.remove(button_yellow)
    document.getElementById("km-4").classList.remove(button_yellow)
    document.getElementById("km-5").classList.remove(button_yellow)
    document.getElementById("km-1").classList.remove(button_red)
    document.getElementById("km-2").classList.remove(button_red)
    document.getElementById("km-3").classList.remove(button_red)
    document.getElementById("km-4").classList.remove(button_red)
    document.getElementById("km-5").classList.remove(button_red)
    document.getElementById("km-1").innerHTML="< 250m";
    document.getElementById("km-2").innerHTML="250m-750m";
    document.getElementById("km-3").innerHTML="750m-1.25km";
    document.getElementById("km-4").innerHTML="1.25km-2km";
    document.getElementById("km-5").innerHTML="> 2km";

  }

  /* Kilometers yellow and red buttons */
  else {
    document.getElementById("km-1").innerHTML="< 10km";
    document.getElementById("km-2").innerHTML="10km-20km";
    document.getElementById("km-3").innerHTML="20km-30km";
    document.getElementById("km-4").innerHTML="30km-50km";
    document.getElementById("km-5").innerHTML="> 50km";

    if (emm=='med_emission') {
      document.getElementById("km-1").classList.add(button_yellow)
      document.getElementById("km-2").classList.add(button_yellow)
      document.getElementById("km-3").classList.add(button_yellow)
      document.getElementById("km-4").classList.add(button_yellow)
      document.getElementById("km-5").classList.add(button_yellow)

      document.getElementById("km-1").classList.remove(button_red)
      document.getElementById("km-2").classList.remove(button_red)
      document.getElementById("km-3").classList.remove(button_red)
      document.getElementById("km-4").classList.remove(button_red)
      document.getElementById("km-5").classList.remove(button_red)

    }
    else {
      document.getElementById("km-1").classList.add(button_red)
      document.getElementById("km-2").classList.add(button_red)
      document.getElementById("km-3").classList.add(button_red)
      document.getElementById("km-4").classList.add(button_red)
      document.getElementById("km-5").classList.add(button_red)

      document.getElementById("km-1").classList.remove(button_yellow)
      document.getElementById("km-2").classList.remove(button_yellow)
      document.getElementById("km-3").classList.remove(button_yellow)
      document.getElementById("km-4").classList.remove(button_yellow)
      document.getElementById("km-5").classList.remove(button_yellow)

    }
  }

  sessionStorage.setItem('select_trans',emm);
  var bg_color = document.getElementById(emm).style.background;

  document.getElementById("km-1").style.background=bg_color;
  document.getElementById("km-2").style.background=bg_color;
  document.getElementById("km-3").style.background=bg_color;
  document.getElementById("km-4").style.background=bg_color;
  document.getElementById("km-5").style.background=bg_color;


  button.classList.add("selected_button");
  document.getElementById("transport_buttons").classList.add("buttons_top-animation");
  document.getElementById("km_buttons").style.display="flex";
  document.getElementById("km_buttons").style.opacity=1;

  /*Countdown to pick a transport and the kms*/
  setTimeout(function(){reload_page();},20000);

}

function km_selected(km){
  /* Animation of having picked a km */
  var current = sessionStorage.getItem('select_km');
  var transport = sessionStorage.getItem('select_trans');
  console.log(current);

  if (current!= null) {

    document.getElementById(current).style.transform = "scale(1)";
  }

  sessionStorage.setItem('select_km',km);
  document.getElementById(km).style.transform = "scale(1.2)";
  document.getElementById("save_button").style.display="flex";

}

function load_final(){
  /* Once you press the "save" button, it shows you a different messages depending on the transport and km you've chosen*/
  document.getElementById("km_buttons").style.display="None";
  document.getElementById("save_button").style.display="None";
  document.getElementById("transport_buttons").style.display="None";
  document.getElementById("final_text_div").style.display="block";

   /* All the necessary data is stored in these variables  */
  var transport = sessionStorage.getItem('select_trans');
  var km = sessionStorage.getItem('select_km');
  var user = sessionStorage.getItem('user');

  if (transport=='no_emission') {

    /* It's the same message in all the kms, so we create a text variable */

    var message = "Congratulations you have 0 emissions";

    if (km == "km-1"){
      document.getElementById("final_text").innerHTML=message
    }
    if (km == "km-2"){
      document.getElementById("final_text").innerHTML=message
    }
    if (km == "km-3"){
      document.getElementById("final_text").innerHTML=message
    }
    if (km == "km-4"){
      document.getElementById("final_text").innerHTML=message
    }
    if (km == "km-5"){
      document.getElementById("final_text").innerHTML=message
    }

    document.body.style.background="#3C8A2E";

  }

  else if (transport=='med_emission') {

    /* We decide to create for each km different texts because of the CO2 emission */

    if (km == "km-1"){
      document.getElementById("final_text").innerHTML="You have emitted around 80 g CO2e. by using public transport or an hybrid vehicle. You saved around 0'7kg CO2e compared to using a conventional car  "
    }
    if (km == "km-2"){
      document.getElementById("final_text").innerHTML="You have emitted around 160 g CO2e. by using public transport or an hybrid vehicle. You saved around 1'4g CO2e compared to using a conventional car  "
    }
    if (km == "km-3"){
      document.getElementById("final_text").innerHTML="You have emitted around 350g CO2e. by using public transport or an hybrid vehicle. You saved around 3'5g CO2e compared to using a conventional car  "
    }
    if (km == "km-4"){
      document.getElementById("final_text").innerHTML="You have emitted around 0'64 kg CO2e. by using public transport or an hybrid vehicle. You saved around 6 kg CO2e compared to using a conventional car  "
    }
    if (km == "km-5"){
      document.getElementById("final_text").innerHTML="You have emitted minimum 0'8 kg CO2e. by using public transport or an hybrid vehicle. You saved minimum around 7 kg CO2e compared to using a conventional car  "
    }

    document.body.style.background="#ffa700";
  }

  else {

    /* The same, different texts because of the CO2 emission */

    if (km == "km-1"){
      document.getElementById("final_text").innerHTML="By using a combustion vehicle you have emitted around 1'5kg CO2e!! <br> Please consider using other alternatives"
    }
    if (km == "km-2"){
      document.getElementById("final_text").innerHTML="By using a combustion vehicle you have emitted around 3kg g CO2e!! <br> Please consider using other alternatives"
    }
    if (km == "km-3"){
      document.getElementById("final_text").innerHTML="By using a combustion vehicle you have emitted around 7 kg CO2e!! <br> Please consider using other alternatives"
    }
    if (km == "km-4"){
      document.getElementById("final_text").innerHTML="By using a combustion vehicle you have emitted around 12 kg CO2e!! <br> Please consider using other alternatives "
    }
    if (km == "km-5"){
      document.getElementById("final_text").innerHTML="By using a combustion vehicle you have emitted minimum 15 kg CO2e!! <br> Please consider using other alternatives"
    }

    document.body.style.background="#D2492A";

  }

  /* Countdown to reload the website */

  setTimeout(function(){reload_page();},5000);
}

function reload_page(){

  location.reload();

}

