$(document).ready(function () {
    $('#example').DataTable({
        pagingType: 'full_numbers',
    });
});

function toggle(ele){
    const divs = document.querySelectorAll('.query');
    for(let i = 0;i<divs.length;i++){
        divs[i].style.display = "none";
    }
    ele.style.display = "block";
}

function myFunction(ele1,ele2) {
    var x = document.getElementById(ele1), y=document.getElementById(ele2);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
  }