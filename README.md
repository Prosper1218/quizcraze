# React + Vite

for the question and answers, i just created a questionarray, with fields "correctAnswer", "question", and "answersArray".

had issues, but i conquered🙂.

*so using usestate(0), i just displayed the question who's position in the array matches with the current state. I did the same for the answers.
*onsubmit, i checked if the chosen answer matches the "correctAnswer" in my array, and if it does, then i added +1 to my "score" and increased my usestate +1 which means that the current question on screen will move to the second question in my questionArray.
*and to check when the questions have finished and display score: i did if the current state +1 is stil less than the length of the quiz questions, then move to the next question, else if it's not ( i.e if it's greater than the quiz questions length) then show score cause questions don finish.
