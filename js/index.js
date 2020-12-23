
// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById("myImg1");
let img2 = document.getElementById("myImg2");
let img3 = document.getElementById("myImg3");
let img4 = document.getElementById("myImg4");
let img5 = document.getElementById("myImg5");
let img6 = document.getElementById("myImg6");
let img7 = document.getElementById("myImg7");

let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// 2
img2.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// 3
img3.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// 4
img4.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// 5
img5.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// 6
img6.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// 7
img7.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// Get the <a> element that close the modal in area empaty
let areaempaty = document.getElementsByClassName("popup__area")[0];

areaempaty.onclick = function() {
	modal.style.display = "none";
}