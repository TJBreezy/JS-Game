##

In this code, there are several variables and functions being defined.

There are several elements being selected from the DOM (Document Object Model) using getElementById and querySelector methods. These elements are being stored in variables such as startGameBtn, newCardBtn, p1, sumEl, and cardEl.

There is a player object with two properties: chipsAssigned and name Assigned. The value of the name and chips elements in the DOM are being updated with the corresponding values from the player object.

There are two event listeners being added to the startGameBtn and newCardBtn elements: onclick with the value of the startGame and newCard functions, respectively.

The startGame function sets the value of sum to 0 and empties the allCards array. It then calls the renderGame function.

The renderGame function updates the text content of the sumEl and cardEl elements with the current value of sum and allCards, respectively. It then checks the value of sum and updates the text content of the p1 element with a message from the message array based on the value of sum. If sum is less than 21, the message "Do you want to draw a new card?" is displayed. If sum is equal to 21, the message "Woohoo! You got BlackJack." is displayed and the hasBlackJack variable is set to true. If sum is greater than 21, the message "You are out! Press 'START GAME' to play again." is displayed and the isAlive variable is set to false. In all cases, the startGame function is called.

The newCard function calls the specialCards function.
