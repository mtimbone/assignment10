//STEP 1

// function alphabeticalOrder (string){
// 			string = string.toString();
// 			console.log(string.toLowerCase().split("").sort().join(""));
		
// 		}
// 		alphabeticalOrder ("Mark,abcddsaf ihjko#w qlerr4795 jpdog");
		


//STEP 2

// function upperCaseWords(string){
// 			let words  = string.split(" ");
// 			for (let i=0; i < words.length; i++){
// 				let wordSplit = words[i].split("");
// 				wordSplit[0] = wordSplit[0].toUpperCase();
				
// 				words[i] = wordSplit.join("");
// 			}
// 			console.log(words.join(" "));
// 		}
// 		upperCaseWords('the quick brown fox');



//STEP 3

// function count(str)
// {
//   let list = 'aeiouAEIOU';
//   let count2 = 0;
  
//   for(let x = 0; x < str.length ; x++)
//   {
//     if (list.indexOf(str[x]) !== -1)
//     {
//       count2 += 1;
//     }
  
//   }
//   return count2;
// }
// console.log(count("The quick brown fox"));



//STEP 4

// function id(l) {
// let text = "";
// let  list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {  
// text += list.charAt(Math.floor(Math.random() * list.length));
// }
// return text;
// }
// console.log(id(8));


//STEP 5


// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

