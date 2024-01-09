import Question from './Question';
import Title from './Title';
import myQuestions from './data';
import './index.css';


const Questions = () => {

  return <main className='questions'>
    <Title title="questions" className="header" />
    {
      myQuestions.map((myQuestion) => {
        const { id, question, response } = myQuestion;
        return <Question key={id} question={question} response={response} event={() => handleClick(id)} />
      })
    }
  </main>
}
export default Questions;