import React, {Component} from 'react'
import classes from './QuizList.css'
import { NavLink } from 'react-router-dom'
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component {

  state = {
    isLoading: true,
    quizList: [],
  }


 async componentDidMount() {
   try {
     const response = await axios.get('https://testproject-b91b0-default-rtdb.firebaseio.com/quiz.json')
         .then(response => response.data);

     const quizes = [];

     Object.keys(response).forEach((key, index) => {
       quizes.push({
         id: key,
         name: `Тест №: ${index + 1}`
       })
     });

     this.setState({
       quizList: quizes,
       isLoading: false
     })
   } catch (error) {
      console.log(error);
   }
 }

  renderQuizes() {
    return this.state.quizList.map((quiz) => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            Тест {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  render() {

      return (
        <div className={classes.QuizList}>
          <div>
              <h1>Список тестов</h1>
              { this.state.isLoading ? (<Loader />) :
                  <ul>
                      {this.renderQuizes()}
                  </ul>
              }
          </div>
        </div>
    )
  }
}
