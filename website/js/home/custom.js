
// back to top js start
window.onscroll = function() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopButton.style.display = "block";
  } else {
      backToTopButton.style.display = "none";
  }
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// back to top js end




$('.cetagory_slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: 'linear',
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.popup_bg');
  const popup = document.querySelector('.seminer_popup');
  const closeBtn = document.querySelector('.close-btn');
  overlay.addEventListener('click', closePopup);
  // Show popup on load
  overlay.style.display = 'block';
  popup.style.display = 'block';

  // Close popup function
  function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }

  // Close when clicking the close button
  closeBtn.addEventListener('click', closePopup);

  // Close when clicking outside the popup
  overlay.addEventListener('click', closePopup);
});





              