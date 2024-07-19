  var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
</script>


<!-- JavaScript for Review Submission -->
<script>
function submitReview() {
var review = document.getElementById('review').value;
var name = document.getElementById('name').value;
// For demonstration, you can replace this with actual backend logic to store reviews
var reviewHtml = '<div class="testimonial">' +
                 '<p>' + review + '</p>' +
                 '<p>- ' + name + '</p>' +
                 '</div>';
document.getElementById('reviewList').innerHTML += reviewHtml;
document.getElementById('reviewForm').reset(); // Clear form
}
