// Vikas Digital — FAQ accordion + contact form confirmation note
document.querySelectorAll(".faq-q").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    var panel = btn.closest(".faq-item").querySelector(".faq-a");
    btn.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
});

// If Netlify returns the visitor to contact.html?sent=1, show the thank-you note.
if (window.location.search.indexOf("sent=1") !== -1) {
  var note = document.getElementById("form-sent");
  if (note) note.hidden = false;
}
