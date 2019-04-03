// Thinking & Testing: A * B?

/*
No Story

No Description

Only by Thinking and Testing

Look at the result of testcase, guess the code!

//Hmm.. 0 * 1 = 0
Test.assertEquals(testIt(0,1), 0)

//Yes, 1 * 2 = 2
Test.assertEquals(testIt(1,2), 2)

//I know, 5 * 6 = 30
Test.assertEquals(testIt(5,6), 30)

//What? 10 * 10 = 1 ?
Test.assertEquals(testIt(10,10), 1)

//Damn.. 200 * 200 = 4, 0 was omitted ?
Test.assertEquals(testIt(200,200), 4)

//Discover the mysteries of it ;-)
Test.assertEquals(testIt(12,34), 21)

//You can solve it
Test.assertEquals(testIt(123,45),54)

//And click ATTEMPT for more challenge..
*/

function testIt(a,b){
 let answer = 0;
 let firstNum = a.toString().split('');
 let secondNum = b.toString().split('');
  for (var i = 0; i < firstNum.length; i++) {
    for (var j = 0; j < secondNum.length; j++) {

      answer+= firstNum[i] * secondNum[j];
    }
  }
  return answer;
}

testIt(12,34)
