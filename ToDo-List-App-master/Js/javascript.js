//this is an anonymous function and run without calling 
(function (evt) {
        //Send AJAX call to get the  json data
        var newStickyRequest = new XMLHttpRequest();
        newStickyRequest.open('GET', './JSON data/data.json', true);//path to json file
        newStickyRequest.onload = function (e) {
            if (this.readyState == 4 && this.status == 200) {
              toDoListener(this.responseText);//invokes the function after receiving the response 
            }
        };
        newStickyRequest.send();//sends the request to server
    })();


function toDoListener(responseText){
	
  var json=JSON.parse(responseText);//to parse json data from response text
  var div=document.getElementById("divToDoItems");//get div element where we need to add data
    for(var i=0; i<json.length; i++){
    var details=document.createElement("details");//creating details element
    details.setAttribute("class",'d')
    var summary=document.createElement("summary");//creating summary element
    var p=document.createElement("p");//creating p element
    var summaryText=document.createTextNode(json[i].name); //creating text for summary
    var pText=document.createTextNode("Item: " +json[i].description );//creating text for p
    summary.appendChild(summaryText);//Appending summary text to summary
    var span = document.createElement("SPAN");//creating span element
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt); //appending span text
    p.appendChild(pText);
    var br=document.createElement("br");
    p.appendChild(br);
    var br1=document.createElement("br");
    p.appendChild(br1);
    pText=document.createTextNode("Author: " + json[i].author);//appending json data to p element text
    p.appendChild(pText);
    var br=document.createElement("br");
    p.appendChild(br);
    var br1=document.createElement("br");
    p.appendChild(br1);
    var date=new Date();  //getting current date
    pText=document.createTextNode("Date created: " + date.toDateString());//adding to p element
    p.appendChild(pText);
	//appending all elements to details
    details.appendChild(span);
    details.appendChild(summary);
    details.appendChild(p);
    div.appendChild(details);
	
	//Adding event listeners to each details element
	    for (j = 0; j < close1.length; j++) {
    close1[j].onclick= function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
}

};
var close1 = document.getElementsByClassName("close");

//Adding event listener to add button on load
window.onload=function(){
  var addBtn=document.getElementById("but");
  addBtn.addEventListener('click',addToDOListener);
};

var htm1=document.getElementById("todoItems");
var div1=document.getElementById("divToDoItems");
var addToDOListener=function (){
  var title=document.getElementById("title").value;
  var item=document.getElementById("item").value;
  var author=document.getElementById("author").value;
  if(title===""){
    alert("Please add title");
    return;
  }
  if(item===""){
    alert("Please add description");
    return;
  }
  if(author===""){
    alert("Please add author");
    return;
  }
  var details=document.createElement("details");//creating details element
  var summary=document.createElement("summary");//creating summary element
  var p=document.createElement("p");//creating p element
  var summaryText=document.createTextNode(title);
  var pText=document.createTextNode("Item: " +item);//creating text node
  summary.appendChild(summaryText); //appending text node.... This is same for all p elements as well
  p.appendChild(pText);
  var br=document.createElement("br");
  p.appendChild(br);
  var br1=document.createElement("br");
  p.appendChild(br1);
  pText=document.createTextNode("Author: " + author);
  p.appendChild(pText);
  var br=document.createElement("br");
  p.appendChild(br);
  var br1=document.createElement("br");
  p.appendChild(br1);
  var date=new Date();
  pText=document.createTextNode("Date created: " + date.toDateString());//adding current date
  p.appendChild(pText);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  //appending all elements to details tag 
  details.appendChild(span);
  details.appendChild(summary);
  details.appendChild(p);
  div1.appendChild(details);
  document.getElementById("title").value="";
  document.getElementById("item").value="";
  document.getElementById("author").value="";
  //Adding event listeners to each details element
   for (j = 0; j < close1.length; j++) {
  close1[j].onclick= function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

};