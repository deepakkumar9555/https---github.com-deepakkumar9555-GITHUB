function closeMe(){
	//find the element
	x=document.getElementById("demo");
	//option 1:change the style attribute directly
	//x.style.display ="none";
	//option 2:change the class 
	x.className="closed";
}
function openMe(){
	//find the element
	x=document.getElementById("demo");
	//option 1: cange the style attribute directly
	//x.style.display="block";
	//option 2:change the class
	x.className="open";
}