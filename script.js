import links from "/links.js";
setTimeout(function(){
  

// import { topNavLink, sideNavLink } from "./S8ZO1O_A2XV4GF3W.js"


//Link command center
//nav link
function links_command(){ //inject all info into link
  injectLinksIntoTargets(getTargets())
}
  function getTargets() {//get <a> that is in nav
    var topNavLink = document.getElementsByClassName("top_nav-link")
    var sideNavLink = document.getElementsByClassName("side_nav-link")
    console.log("-----------------------------------------------------")
    console.log(topNavLink + " " + sideNavLink)

    
    
    var links_top = topNavLink;
    var links_side = sideNavLink;
    console.log("TOP: " + links_top + "\n" + "SIDE: " + links_side);
    return [ links_top, links_side ];
  }

  function injectLinksIntoTargets(targets){
    //console.log("hi")
//top nav
    for (var i = 0; i < links.TopNav.length; i++) {//input link
      console.log(i  )
      var link = links.TopNav[i].href;
      console.log(targets[0][i] + "---------_-_--")
      targets[0][i].href = link;
      console.log(targets[0][i])
    }

    for (var i = 0; i < links.TopNav.length; i++) {//input content
      var link = links.TopNav[i].content;
      targets[0][i].innerHTML = link;
    }
    for (var i = 0; i < links.TopNav.length; i++) {//input id
      var link = links.TopNav[i].id;
      targets[0][i].setAttribute('id', link);
    }
  //side nav
  //  /*
    for (var i = 0; i < links.SideNav.length; i++) {//input link
      var link = links.SideNav[i].href;
      console.log(targets[1][i])
      targets[1][i].href = link;
      console.log(targets[1][i])
    }

    for (var i = 0; i < links.SideNav.length; i++) {//input content
      var link = links.SideNav[i].content;
      targets[1][i].innerHTML = link;
    }
    for (var i = 0; i < links.SideNav.length; i++) {//input id
      var link = links.SideNav[i].id;
      targets[1][i].setAttribute('id', link);
    }
//*/
  }


function autoRun(boolean){
  if(boolean){
    //Links
    links_command()

  }else{

  }
}


autoRun(true)
  
}, 440)
