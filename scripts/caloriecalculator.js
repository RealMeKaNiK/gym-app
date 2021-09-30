
function calculateCalorie()
{
    if(!checkParameters())
    {
        swal("Please choose Gender");
        return;
    }
    
    var age = document.getElementById("demo").textContent;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if(height.length == 0 || weight.length == 0)
    {
        swal("Please fill all data")
        return;
    }



    if(document.getElementById("male").checked)
    {
        displayResults(calculateResult(age, height, weight) + 5);
    }
    else if(document.getElementById("female").checked)
    {
        displayResults(Math.round(calculateResult(age, height, weight) -161));
    }
}

function calculateResult(age, height, weight)
{
    var exerice =document.getElementById("exercise");
    var value = exerice.options[exerice.selectedIndex].value;

    var calorieResult;
    if(value=="low")
    {
        calorieResult = (10*weight+6.25*height - 5*age) * 1.2;
    }
    else if(value=="medium")
    {
        calorieResult = (10*weight+6.25*height - 5*age) * 1.55;
    }
    else if(value=="high")
    {
        calorieResult = (10*weight+6.25*height - 5*age) * 1.725;
    }

    return calorieResult;
}

function displayResults(calories)
{
    document.getElementById("result-maintain").innerHTML = Math.round(calories) + " Calories/Per Day";
    document.getElementById("result-bulk").innerHTML = Math.round(calories + 200) + " Calories/Per Day";
    document.getElementById("result-cut").innerHTML = Math.round(calories - 200) + " Calories/Per Day";
    document.getElementById("result-table").style.display = "table";
}

function checkParameters()
{
    if(document.getElementById("male").checked == false && document.getElementById("female").checked == false)
        return false;
    return true;
}

function uncheckFemale(obj)
{
    if(obj.checked == true)
    {
        document.getElementById("female").checked = false;
    }
}

function uncheckMale(obj)
{
    if(obj.checked == true)
    {
        document.getElementById("male").checked = false;
    }
}