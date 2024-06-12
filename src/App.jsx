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
   {
      question: "Which one of these is used to wash clothes?",
      answers: ["Dishwasher", "refrigerator", "washing-machine"],
      correctAnswer: "washing-machine",
   },
   {
      question: "What do bees produce?",
      answers: ["bread", "cheese", "honey"],
      correctAnswer: "honey",
   },
   {
      question: "Which of these instruments is used to measure temperature?",
      answers: ["Barometer", "thermometer", "Altimeter"],
      correctAnswer: "thermometer",
   },
   {
      question: "What is H2O commonly know as?",
      answers: ["water", "air", "sugar"],
      correctAnswer: "water",
   },
   {
      question: "Which of these sense is used to hear?",
      answers: ["eyes", "ear", "nose"],
      correctAnswer: "ear",
   },
   {
      question: "What is these seasons is known for snow?",
      answers: ["winter", "summer", "spring"],
      correctAnswer: "winter",
   },
   {
      question: "Which of these is used to call someone?",
      answers: ["radio", "TV", "telephone"],
      correctAnswer: "telephone",
   },
   {
      question: "Which of these animals can fly?",
      answers: ["Dolphin", "eagle", "tiger"],
      correctAnswer: "eagle",
   },
   {
      question: "What color are bananas?",
      answers: ["green", "red", "yellow"],
      correctAnswer: "yellow",
   },
   {
      question: "What day comes after sunday?",
      answers: ["wednesday", "moday", "friday"],
      correctAnswer: "monday",
   },
   {
      question: "Which of these is used to write?",
      answers: ["pen", "chair", "spoon"],
      correctAnswer: "pen",
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
      item === Questions[Question].correctAnswer.toLocaleLowerCase() && setScore(Score + 1);
      const nextQ = Question + 1;

      if (nextQ < Questions.length) {
         setQuestion(nextQ);
      } else {
         setShowscore(true);
         Score === Questions.length - 1 && setShowscore(true);
      }
   };
   return (
      <div className="">
         {Showscore ? (
            <YScore yourscore={Score} />
         ) : (
            <div className="flex items-center justify-center p-0 h-[100vh] text-[#040a1c]">
               <section className="min-w-[18rem] w-[18rem] m-auto border h-[15rem] min-h-[15rem] pt-2 box bg-[#e6e4e4] rounded-[4px] p-0 flex flex-col">
                  <div className=" border-blue- border-solid border-[2px] h-[5rem] rounded-bl-[16px] px-2">
                     <h3 className="font-bold sora text-1xl text-left">
                        Question {Question + 1}/{Questions.length}{" "}
                     </h3>
                     <p className="sora text-xs pt-2 capitalize">.{Questions[Question].question}</p>
                  </div>
                  {/* answers */}
                  <ol className="flex flex-col text-left border-red- border-solid p-2 justify-center space-y-1 border-[2px] flex-grow h-inherit w-full rounded-t-[16px] bg-cyan-500">
                     {Questions[Question].answers.map((item, index) => {
                        return (
                           <li className=" border-solid capitalize border-2 py-2 rounded-lg pl-2 sora text-xs hover:bg-cyan-600" key={index} onClick={() => handleanswer(item)}>
                              {item}
                           </li>
                        );
                     })}
                  </ol>
               </section>
            </div>
         )}
      </div>
   );
}

export const YScore = ({yourscore}) => {
   return <div>{yourscore}</div>;
};

export default App;
