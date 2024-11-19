var container = document.getElementById("container");

var row = document.createElement("div");
row.setAttribute("class", "row mb-4");
container.appendChild(row);

var array = [{ title: "Product 1", p: "Lorem perfume one dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images.jpeg" },
{ title: "Product 2", p: "Lorem perfume two dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (2).jpeg" },
{ title: "Product 3", p: "Lorem perfume three dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (3).jpeg" },
{ title: "Product 4", p: "Lorem perfume four dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (4).jpeg" },
{ title: "Product 5", p: "Lorem perfume five dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (5).jpeg" },
{ title: "Product 6", p: "Lorem perfume six dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (6).jpeg" },
{ title: "Product 7", p: "Lorem perfume seven dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images (7).jpeg" },
{ title: "Product 8", p: "Lorem perfume eight dolor sit amet consectetur adipisicing elit. Rem quae omnis provident commodi.", img: "images/images.jpeg" },]

for (var i = 0; i < 8; i++) {
  var col = document.createElement("div");
  col.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-12");
  row.appendChild(col);

  var card = document.createElement("div");
  card.setAttribute("class", "card mb-4");
  col.appendChild(card);

  var image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", array[i].img)
  card.appendChild(image);

  var cardbody = document.createElement("div")
  cardbody.setAttribute("class","card-body")
  card.appendChild(cardbody)

  var h3 = document.createElement("h3");
  h3.setAttribute("class", "card-title");
  h3.innerHTML = array[i].title;
  cardbody.appendChild(h3);

  var p = document.createElement("p");
  p.setAttribute("class", "card-text");
  p.innerHTML = array[i].p;
  cardbody.appendChild(p);

  var addbtn = document.createElement("a");
  addbtn.setAttribute("class", "btn btn-primary")
  addbtn.innerHTML = "Add to Cart"
  cardbody.appendChild(addbtn)
}