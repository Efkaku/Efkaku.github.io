$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    updateActiveSection();
  });

  $(".header ul li a").click(function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    if (target === "#home") {
      $("html, body").animate({ scrollTop: 0 }, 500);
    } else {
      var offset = $(target).offset().top - 40;
      $("html, body").animate({ scrollTop: offset }, 500);
    }

    $(".header ul li a").removeClass("active");
    $(this).addClass("active");

    if (window.innerWidth <= 767) {
      closeMobileMenu();
    }
  });

  ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal(
    ".header a, .profile-photo, .about-content, .education",
    { origin: "left" }
  );

  ScrollReveal().reveal(
    ".header ul, .profile-text, .about-skills, .internship",
    { origin: "right" }
  );

  ScrollReveal().reveal(
    ".project-title, .contact-title",
    { origin: "top" }
  );

  ScrollReveal().reveal(
    ".projects, .contact",
    { origin: "bottom" }
  );

  if ($(".nav-backdrop").length === 0) {
    $("body").append('<div class="nav-backdrop"></div>');
  }

  $(".menu_icon").click(function () {
    $(".navbar").toggleClass("show");
    $(".nav-backdrop").toggleClass("active");
    $("body").toggleClass("nav-open");
    $(this).toggleClass("active");
  });

  $(document).on("click", ".nav-backdrop", function () {
    closeMobileMenu();
  });

});

function updateActiveSection() {
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition === 0) {
    $(".header ul li a").removeClass("active");
    $(".header ul li a[href='#home']").addClass("active");
    return;
  }

  $("section").each(function () {
    var target = $(this).attr("id");
    var offset = $(this).offset().top;
    var height = $(this).outerHeight();

    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#" + target + "']").addClass("active");
    }
  });
}

function closeMobileMenu() {
  $(".navbar").removeClass("show");
  $(".menu_icon").removeClass("active");
  $(".nav-backdrop").removeClass("active");
  $("body").removeClass("nav-open");
}

new Typed(".typed", {
  strings: [
    "Web Developer",
    "System Analyst",
    "Project Manager",
    "IT Specialist"
  ],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});