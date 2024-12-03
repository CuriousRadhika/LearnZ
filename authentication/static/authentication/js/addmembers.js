
//Person Name - Key, tool - 0 index, github - 1 index,, linkdin - 2 index,, imagepath - 3 index

const Peoples = {
  "Aditi Pandey": ["Jenkins, Frontend, Backend", "https://github.com/aditipandey16", "http://www.linkedin.com/in/-aditi-pandey", "/static/authentication/images/creator/aditi.jpeg"],
  "Vanshika Jain": ["AWS, Frontend, Backend", "", "", "/static/authentication/images/creator/vanshika.jpeg"],
  "Soujit Das": ["Github, Backend", "", "", "/static/authentication/images/creator/shoujit.jpeg"],
  "Radhika Kedia": ["Docker, Backend", "", "", "/static/authentication/images/creator/radhika.jpeg"],
  "Samadrita Shaw": ["Github, Frontend", "", "", "/static/authentication/images/creator/samadrita.jpeg"],
  "Samarth Agarwal": ["Snyk, Frontend", "", "", "/static/authentication/images/creator/samarth.jpeg"]
};


const CardContainer = document.getElementById("CardContainer");
//For Every person insert card 
Object.keys(Peoples).forEach(People => {
  //Creted div with class div;
  var div = document.createElement('div');
  div.classList.add("card");
  CardContainer.appendChild(div);
  //Creted div with class content and make card as parent;
  var div1 = document.createElement('div');
  div1.classList.add("content");
  div.appendChild(div1);
  //Creted div with class imgbx and make content as parent;
  var div2 = document.createElement('div');
  div2.classList.add("imgBx");
  div1.appendChild(div2);
  //create img with imgbx as parent
  var img = document.createElement('img');
  img.setAttribute("src", Peoples[People][3]);
  div2.appendChild(img);
  //Creted div with class contentBx and make content as parent
  var div4 = document.createElement('div');
  div4.classList.add("contentBx");
  div4.innerHTML = "<h3><b>" + People + "</b><br /></h3>";
  // div4.innerHTML = "<h3>" + People + "<br /><span>" + Peoples[People][0] + "</span></h3>";
  div1.appendChild(div4);
  //added git and likdin to card as parent
  var ul = document.createElement('ul');
  ul.classList.add("sci");
  div.appendChild(ul);
  var li = document.createElement('li');
  li.setAttribute("style", "\"--i: 1\"")
  li.innerHTML = "<a href=\"" + Peoples[People][1] + "\" target=\"_blank\"><i class=\"fa-brands fa-github\"></i></a>";
  ul.appendChild(li);
  var li1 = document.createElement('li');
  li1.setAttribute("style", "\"--i: 1\"")
  li1.innerHTML = "<a href=\"" + Peoples[People][2] + "\" target=\"_blank\"><i class=\"fa-brands fa-linkedin\"></i></a>";
  ul.appendChild(li1);

});