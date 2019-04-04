// Changing letters

/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"
*/

function swap(st){
  let split = st.split('');
  for (var i = 0; i < split.length; i++) {
    let regex = /[aeiouAEIOU]/;
    if (split[i].match(regex)) {
      split[i] = split[i].toUpperCase('')
    }
  }
  return split.join('');
}

console.log(swap("HealloWorld!"))
