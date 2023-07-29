function skillsmember() {
    var member = document.getElementById("member").value;
    var member = parseInt(member);
    var member = member * 100;
    var member = member / 100;
    var member = member.toFixed(2);
    var member = member + "%";
    document.getElementById("member").value = member;
}