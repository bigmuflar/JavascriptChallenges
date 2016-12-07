function loopPalindrome(str){ 
	str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
	for (var i = 0; i < str.length/2;i++){
		if(str[i] !== str[str.length - 1 - i]){
			return false;
		} 
		return true;
	}
}

loopPalindrome('A car, a man, a maraca.') //should evaluate to True.
			
			
