window.onload = function ()
{
	if(window.location.hash == "#enviado")
    {
        var $pl = $("#cont");
        $pl.find("form:first-child").detach();
        $('html,body').animate({scrollTop: $("#footer").offset().top},'slow');
    }
        
    else
        $("#cont>form:last-child").detach();
}

function expand(e)
{
	var x = document.getElementsByClassName("chidden");
	
	for(var i = 0; i < x.length;i++)
		x[i].style.display='block';
	
	e.style.display='none';
}