//source for creating modal images from W3Schools.com/howto/howto_css_modal_images.asp
var prologIdeasModal = document.getElementById("prologIdeasModal");
var semanticNetworkModal = document.getElementById("semanticNetworkModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("prologIdeas");
var img2 = document.getElementById("semanticNetwork");

var prologIdeasModalImg = document.getElementById("img01");
var semanticNetworkModalImg = document.getElementById("img02");

var prologIdeasCaptionText = document.getElementById("prologIdeasCaption");
var semanticNetworkCaptionText = document.getElementById("semanticNetworkCaption");

img.onclick = function(){
	prologIdeasModal.style.display = "block";
	prologIdeasModalImg.src = this.src;
	prologIdeasCaptionText.innerHTML = this.alt;
}

img2.onclick = function(){
	semanticNetworkModal.style.display = "block"
	semanticNetworkModalImg.src = this.src;
	semanticNetworkCaptionText.innerHTML = this.alt
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	prologIdeasModal.style.display = "none";
}

span2.onclick = function(){
	semanticNetworkModal.style.display = "none";
}
