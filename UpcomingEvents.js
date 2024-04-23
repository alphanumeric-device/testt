var inSpot = document.getElementById("eventData");
var table;
table = document.createElement("table")
var it = ["Title", "Date", "Time", "Location", "Description"]
//alert("yoooooooooooooooooooooooooo")
fetch('/UpcomingEvents/UpcomingEvents.txt')
.then(response => response.text())
.then(data => {
  var string = data;
  //edit string and make line breaks where reasonable
  //string = string.replace(/(?<!<!--.*)\n/g, "<br>")
 
  var arrString = string.split("~")
  var al = 0;
  for(var r = 0; r < arrString.length; r++){
  var sepStr = arrString[r].split("/?/")// individual info
   console.log(arrString)
  console.log(sepStr)
  //create table
 //
  
  for(var i = 0; i < 5; i++){
    if(al > 0){}else {
    al += 1;
    var row = document.createElement("tr")
    for(var e = 0; e < 5; e++){ // create headers
       var h = document.createElement("th")
      var cellText = document.createTextNode(it[e])
      h.appendChild(cellText)
      row.appendChild(h)
    }
   
    
   
    }
  } // titles
  
  table.appendChild(row)
  for(var i = 0; i < 1; i++){
    var row = document.createElement("tr")
    for(var e = 0; e < 5; e++){
    var cell = document.createElement("td")
    
    var cellText = document.createTextNode(sepStr[e])// text on individual cells on same row.
    cell.appendChild(cellText)
    row.appendChild(cell)
      cell.style.border = "1px solid black"


    }
table.appendChild(row)
     

  } // data
  }
   inSpot.appendChild(table)
   table.style.border = "1px solid black"
  /*
  inSpot.innerHTML = string
  */
  
})
.catch(error => {
  console.error('Error:', error);
});
