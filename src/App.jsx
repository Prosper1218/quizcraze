import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const Questions = [
   {
      question: "Which one of these is a JavaScript package manager?",
      answers: ["node.js", "Typescript", "npm"],
      correctAnswer: "npm",
   },
   {
      question: "Which one of these is the opposite of white?",
      answers: ["black", "red", "orange"],
      correctAnswer: "black",
   },
];

function App() {
   const [Question, setQuestion] = useState(0);
   const [Score, setScore] = useState(0);
   const [Showscore, setShowscore] = useState(false);
   const handleanswer = (item) => {
      // if (item === Questions[Question].correctAnswer) {
      //    setScore(Score + 1);

      //    let next_question = Question + 1;
      //    if (next_question < Questions.length) {
      //       setQuestion(next_question);
      //    } else {
      //       setShowscore(true);
      //    }
      // } else {
      //    console.log("wrong");
      //   //  setQuestion(Question + 1 < Questions.length ? setScore(true) : setQuestion(Question + 1));
      // }
      item === Questions[Question].correctAnswer && setScore(Score + 1);
      const nextQ = Question + 1;

      if (nextQ < Questions.length) {
         setQuestion(nextQ);
      } else {
         setShowscore(true);
      }
   };
   return (
      <div className=" text-red-500">
         {Showscore ? (
            "score"
         ) : (
            <div className="flex items-center justify-center h-[100vh]">
               <div className="min-w-[23rem] m-auto border min-h-[15rem] box bg-[#e6e4e4] p-2 rounded-[4px]">
                  <p>{Questions[Question].question}</p>
                  <ol>
                     {Questions[Question].answers.map((item, index) => {
                        return (
                           <li key={index} onClick={() => handleanswer(item)}>
                              {item}
                           </li>
                        );
                     })}
                  </ol>
               </div>
            </div>
         )}
      </div>
   );
}

export default App;
