// function Loadjson(file,callback) {
// 	var xhr = new XMLHttpRequest();
//    	xhr.overrideMimeType("application/json");
//    	xhr.open("GET",file,true);
//    	xhr.onreadystatechange = function(){
//    		if(xhr.readyState === 4 && xhr.status == "200"){
//    			callback(xhr.responseText);
//    		}
//    	};
//    	xhr.send(null);
// }   	
// Loadjson("data.json",function(text){
// 	var data=JSON.parse(text);
//  console.log(data)
//  basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	skillset(data.skills);
// 	achievements(data.achievements);
//  })
function Loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new error('error'));
			}
		})
	})
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
 	console.log(data)
 	basics(data.details);
	careerinfo(data.career);
	educationinfo(data.education);
	skillset(data.skills);
	achievements(data.achievements);
 })
var left = document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
    img.src = det.image1;
    left.appendChild(img);
    var name1 = document.createElement("h3");
    name1.textContent = det.name;
    left.appendChild(name1);
    var phoneno = document.createElement("h3");
    phoneno.textContent = det.phoneno;
    left.appendChild(phoneno);
    var email = document.createElement("a");
    email.href="mailto:jayabhargavi8@gmail.com";
    email.textContent = det.email;
    left.appendChild(email);
    var add = document.createElement("h2");
    add.textContent = "address";
    left.appendChild(add);
    var hr = document.createElement("hr");
    left.appendChild(hr);
    var par = document.createElement("p");
     par.textContent = det.address;
     left.appendChild(par);
}
var right = document.querySelector(".right");
function careerinfo(info){
	var career = document.createElement("h2");
	right.appendChild(career);
	career.textContent = "career obective";
	var hr = document.createElement("hr");
    right.appendChild(hr);
    var c = document.createElement("p");
    c.textContent = info.info;
    right.appendChild(c);
}
function educationinfo(edu){
    var qua = document.createElement("h2");
    qua.textContent = "education qualification";
    right.appendChild(qua);
     var hr = document.createElement("hr");
    right.appendChild(hr);
    var table1 = document.createElement("table");
    table1.border = "1";
    right.appendChild(table1);
    tabledata="";
    for(i=0;i<edu.length;i++){
    	tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
   }
    table1.innerHTML=tabledata;
}
function skillset(skill){
 var sk = document.createElement("h1");
 sk.textContent = "technical skills";
 right.appendChild(sk);
 var hr = document.createElement("hr");
 right.appendChild(hr);
 for(i=0;i<skill.length;i++){
 	var s = document.createElement("h3");
 	s.textContent = skill[i].title;
 	right.appendChild(s);
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  li.textContent = skill[i].info;
  ul.appendChild(li);
  right.appendChild(ul);
}
}
function achievements(achv){
	var ach = document.createElement("h1");
	ach.textContent = "achievements";
	right.appendChild(ach);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<achv.length;i++){
	var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent = achv[i].info;
    ul.appendChild(li);
    right.appendChild(ul);
}
}
function openpage(){
    window.open("resume3.html","_self",true)
}






