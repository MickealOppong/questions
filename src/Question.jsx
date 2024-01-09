import { useState } from "react";
import Details from "./Details";
import MinusBtn from "./MinusBtn";
import PlusBtn from "./PlusBtn";
import Title from "./Title";


const Question = ({ question, response }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  }
  return < section >
    <article className="question">
      <div className="question-title">
        <Title className="title" title={question} />
        {
          toggle ? <MinusBtn event={handleClick} /> : <PlusBtn event={handleClick} />
        }
      </div>
      {
        toggle ? <Details response={response} /> : <div></div>
      }
    </article>
  </section >
}
export default Question;