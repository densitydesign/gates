function setCluster() {
    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}
document.getElementById("clusters").onchange = setCluster;