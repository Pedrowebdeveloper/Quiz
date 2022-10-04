//react, componentes, estáticos
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/welcome";
import question from "./components/Question";

import './App.css'
import Question from "./components/Question";
import { useEffect } from "react";


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"})
  },[])

  return (
    <div className="App">
     <h1>Quiz de Programação</h1>
      {quizState.gameStage == "Start" && <Welcome />}
      {quizState.gameStage == "Playing" && <Question />}
    </div>
  )
}

export default App
