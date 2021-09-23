function calculateCalorie()
{
    
    var age = document.getElementById("demo").textContent;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;



    if(document.getElementById("male").checked)
    {
        document.getElementById("result").innerHTML = Math.round(calculateResult(age, height, weight) + 5);
    }
    else if(document.getElementById("female").checked)
    {
        document.getElementById("result").innerHTML = Math.round(calculateResult(age, height, weight) - 161);
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