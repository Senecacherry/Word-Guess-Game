// // (function(window, undefined){

// //     Hangman = {
// //         init: function(words){
// //             this.words = words;
// //             this.hm = document.getElementById("hangman");
// //             this.msg = document.getElementById("message");
// //             this.msgTitle = document.getElementById("title");
// //             this.msgText = document.getElementById("text");
// //             this.restart = document.getElementById("restart");
// //             this.wrd = this.randomWord();
// //             this.correct = 0;
// //             this.guess = document.getElementById("guess");
// //             this.wrong = document.getElementById("wrong");
// //             this.wrongGuesses = [];
// //             this.rightGuesses = [];
// //             this.guessForm = document.getElementById("guessForm");
// //             this.guessLetterInput = document.getElementById("guessLetter");
// //             this.setup();
// //         };
    
// //     setup: function(){
// //         this.binding();
// //         this.showGuess(this.wrongGuesses);
// //         this.showWrong();
        
// //         };

// //     binding: function(){
// //         this.guessForm.on("submit", binding(this.theGuess, this));
// //         this.restart.on("click", binding(this.theRestart, this));
// //     };

// //     theRestart: function(e){
// //         e.preventDefault();
// //         this.reset();
// //     };

// //     theGuess: function(e) {
// //         e.preventDefault();
// //         var guess = this.guessLetterInput.val();
// //         if (guess.match(/[a-zA-Z]/)) && guess.lenth === 1){
// //             if (array.indexOf(guess, this.wrongGuesses) > -1 || array.indexOf(guess, this.rightGuesses) > -1) {
// //                 this.guessLetterInput.val("").focus();
// //             }
// //          else if(guess) {
// //              var foundLetters = this.checkGuess(guess);
// //              if (foundLetters.lenth > 0){
// //                  this.setLetters(foundLetters);
// //                  this.guessLetterInput.val("").focus();    
// //              } else {
// //                  this.wrongGuesses.push(guess);
// //                  if(this.wrongGuesses.lenth == 10) {
// //                      this.lose();
// //                  } else {
// //                      this.showWrong(this.wrongGuesses);
// //                  }
// //                  this.guessLetterInput.val("").focus();
// //              }
// //          }   
// //         } else {
// //             this.guessLetterInput.val("").focus();
// //         }
// //     };

// //     randomWord: function(){
// //         return this._wordData(this.words[ Math.floor(Math.random() * this.words.length)] );
// //     };

// //     showGuess: function (){
// //         var frag = document.createElement("ul", class="word");
// //         document.getElementById("word", wrd.letters, function(key,val){
// //             frag += document.createElement("li", data-pos='' + key + class="letter");
// //         }
// //     }
// //     }
// // })




// window.onload = function () {

//     var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//           'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//           't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
//     var categories;         // Array of topics
//     var chosenCategory;     // Selected catagory
//     var getHint ;          // Word getHint
//     var word ;              // Selected word
//     var guess ;             // Geuss
//     var guesses = [ ];      // Stored geusses
//     var lives ;             // Lives
//     var counter ;           // Count correct geusses
//     var space;              // Number of spaces in word '-'
  
    
//     var showLives = document.getElementById("mylives");
//     var showCatagory = document.getElementById("scatagory");
//     var getHint = document.getElementById("hint");
//     var showClue = document.getElementById("clue");
    
    
//     var buttons = function () {
//       myButtons = document.getElementById('buttons');
//       letters = document.createElement('ul');
  
//       for (var i = 0; i < alphabet.length; i++) {
//         letters.id = 'alphabet';
//         list = document.createElement('li');
//         list.id = 'letter';
//         list.innerHTML = alphabet[i];
//         check();
//         myButtons.appendChild(letters);
//         letters.appendChild(list);
//       }
//     }
      
//     var selectCat = function () {
//       if (chosenCategory === categories[0]) {
//         catagoryName.innerHTML = "The Chosen Category Is Music";
//       } else if (chosenCategory === categories[1]) {
//         catagoryName.innerHTML = "The Chosen Category Is Food";
//       } else if (chosenCategory === categories[2]); 

  
    
//      result = function () {
//       wordHolder = document.getElementById('hold');
//       correct = document.createElement('ul');
  
//       for (var i = 0; i < word.length; i++) {
//         correct.setAttribute('id', 'my-word');
//         guess = document.createElement('li');
//         guess.setAttribute('class', 'guess');
//         if (word[i] === "-") {
//           guess.innerHTML = "-";
//           space = 1;
//         } else {
//           guess.innerHTML = "_";
//         }
  
//         guesses.push(guess);
//         wordHolder.appendChild(correct);
//         correct.appendChild(guess);
//       }
//     }
    
//      comments = function () {
//       showLives.innerHTML = "You have " + lives + " lives";
//       if (lives < 1) {
//         showLives.innerHTML = "Game Over";
//       }
//       for (var i = 0; i < guesses.length; i++) {
//         if (counter + space === guesses.length) {
//           showLives.innerHTML = "You Win!";
//         }
//       }
//     }

//     check = function () {
//         list.onclick = function () {
//           var guess = (this.innerHTML);
//           this.setAttribute("class", "active");
//           this.onclick = null;
//           for (var i = 0; i < word.length; i++) {
//             if (word[i] === guess) {
//               guesses[i].innerHTML = geuss;
//               counter += 1;
//             } 
//           }
//           var j = (word.indexOf(guess));
//           if (j === -1) {
//             lives -= 1;
//             comments();
//           } else {
//             comments();
//           }
//         }
//       }
//       check = function () {
//         list.onclick = function () {
//           var geuss = (this.innerHTML);
//           this.setAttribute("class", "active");
//           this.onclick = null;
//           for (var i = 0; i < word.length; i++) {
//             if (word[i] === geuss) {
//               geusses[i].innerHTML = geuss;
//               counter += 1;
//             } 
//           }
//           var j = (word.indexOf(geuss));
//           if (j === -1) {
//             lives -= 1;
//             comments();
//             animate();
//           } else {
//             comments();
//           }
//         }
//       }
      
//       play = function () {
//         categories = [
//             ["music", "food"]
//         ];
    
//             chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//             word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//             word = word.replace(/\s/g, "-");
//             console.log(word);
//             buttons();
        
//             guesses = [ ];
//             lives = 10;
//             counter = 0;
//             space = 0;
//             result();
//             comments();
//             selectCat();
//             canvas();
//           };

//           play();

//           hint.onclick = function() {

//             hints = ["not treble but...", "lower pitch singer", "what you listen to"], ["sweet but cold", "mexican food dish", "the best starch"];
        
        
//         var catagoryIndex = categories.indexOf(chosenCategory);
//             var hintIndex = chosenCategory.indexOf(word);
//              showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];

//       document.getElementById('reset').onclick = function() {
//          correct.parentNode.removeChild(correct);
//             letters.parentNode.removeChild(letters);
//              showClue.innerHTML = "";
//                 context.clearRect(0, 0, 400, 400);
//                 play()}


