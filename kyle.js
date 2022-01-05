

document.addEventListener('DOMContentLoaded', ()=>{
	document.querySelector('#header-h1-div').onclick = ()=>{
		document.querySelector('#nav-div1').style.display = 'block';
		document.querySelector('#nav-div1').style.width = '100%';
	}

	document.querySelector('#times').onclick = ()=>{
		document.querySelector('#nav-div1').style.display = 'none';
		document.querySelector('#nav-div1').style.width = '0px';
	}
})