function validateForm() {
    const x = document.forms["formx"]["mail"].value;
    const atpos = x.indexOf("@");
    const dotpos = x.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Gecerli email adresi girin")
        return true
    } else {
        alert("Email adresi geçerli")
        return false
    }

}