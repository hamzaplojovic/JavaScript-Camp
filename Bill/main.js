bill = document.getElementById("bill")
tip = document.getElementById("tip")
submit = document.getElementById("submit")

var myFunc = submit.addEventListener("click", () => {
        var bill_value = document.getElementById("bill").value;
        var tip_value = document.getElementById("tip").value
        console.log(parseInt(bill_value) + parseInt(tip_value))
})
