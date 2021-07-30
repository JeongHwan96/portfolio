const content = "어떻게 하면 좀 더 이쁘고 쓰기편한 서비스를 만들 수 있을까?"
	const text = document.querySelector(".typingContents") 
	let index = 0;
	
	function typing (){
		text.textContent += content[index++];
		
		if(index > content.length) {
			
			text.textContent = "";
			index = 0;
			
		}
		
	}
	
	 setInterval(typing,100);	
	
