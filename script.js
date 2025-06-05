function firstWord(s) {
  // your code here
	s = s.trim();
	if(s === "" || !s.includes("")){
		return s;
	}
	return s.split(/\s+/)[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
