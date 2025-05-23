document.getElementById('close-btn').addEventListener('click', function () {
      document.getElementById('cookie-box').style.display = 'none';
    });

document.getElementById('submit-cookie').addEventListener('click', function(){
    document.getElementById('cookie-box').style.display = 'none';
    localStorage.setItem("cookie","cookie set");
});

window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem("cookie")) {
    document.getElementById('cookie-box').style.display = 'none';
  }
});