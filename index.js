window.onload = () => {
	setTimeout ("breakLoading()", 2000);
};

function breakLoading() {
	var loader = document.getElementById ("loader");
	loader.classList.add ("loaded");
};
