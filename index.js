window.onload=function(){
    document.getElementById('closebtn').onclick = function () {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    return false;
};
};

function req()
{
    alert("Request Accepted");
}
