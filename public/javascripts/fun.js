
function selectBox()
{
    input_box_selected = true;
}
function deSelectBox()
{
    input_box_selected = false;
}
function keyInput()
{
    var x;
    if(window.event) // IE8 以及更早版本
    {
        x=event.keyCode;
    }
    else if(event.which) // IE9/Firefox/Chrome/Opera/Safari
    {
        x=event.which;
    }
    text_so_far += String.fromCharCode(x);
    console.log(text_so_far);
    alert("HAHA");
}
