const toggle = document.getElementById("checkbox");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("title").classList.toggle("dark");
  document.getElementById("container").classList.toggle("dark");
  document.getElementById("bill").classList.toggle("dark");
  document.getElementById("people").classList.toggle("dark");
  document.getElementById("serviceQual").classList.toggle("dark");
  document.getElementById("formSubmit").classList.toggle("dark");
  document.getElementById("totalTip").classList.toggle("dark");
  
});