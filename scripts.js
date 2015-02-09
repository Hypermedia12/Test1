		

		
		function showMessage() {
			//alert(document.getElementById('text').value.length);
			document.getElementById('length').innerHTML = document.getElementById('text').value.length;
			//alert("Hello, World!"); 
		}
		function addBorder() {
			document.getElementById('wasted').style.border="solid 50px red"
		}
		function removeBorder() {
			document.getElementById('wasted').style.border="0px"
		}
		
		function addition(x,y) {
			var x = +document.getElementById('xval').value;
			var y = +document.getElementById('yval').value;
			document.getElementById('result').innerHTML = x+y;
		}