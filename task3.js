// call a function
function dividesInteger(integer){
  let integers = [];

  // iteration and conditional statements
  for (let i=1; i<=integer; i++){
    if (i % 2 === 0 ){
    	integers.push("yu");
    }
		    else if(i % 3 === 0){
		    	integers.push("gi");
		    }

		    else if( i % 5 ===0){
		    	integers.push("oh");
		    }
		    else if(i % 2 === 0 && i % 3 === 0){
		    	integers.push("yu-gi");
		    }
		    else if( i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
		    	 integers.push("yu-gi-oh");

				    }else{
				      integers.push(i);
				    }
    }
   return integers;
}

 // call any integer
console.log (dividesInteger (10));
