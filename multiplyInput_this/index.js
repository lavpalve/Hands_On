var multiplyBtn;
var multiplyObj;
multiplyBtn = document.getElementById("multiplyBtn");

multiplyBtn.addEventListener('click', function(){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;

    console.log(input1);

    multiplyObj = {
        input_1: input1,
        input_2: input2,
        input_3: input3,
        multiply: function(){
            var multResult = this.input_1 * this.input_2 * this.input_3;
            //console.log(multResult);
            document.getElementById("ansDiv").innerHTML = multResult;
        }
    }

    multiplyObj.multiply();
});


