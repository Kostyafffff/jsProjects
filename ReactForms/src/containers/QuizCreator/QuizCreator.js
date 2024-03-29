import React, { Component } from 'react'
import classes from './QuizCreator.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { createControl, validate, validateForm } from '../../form/formFramework';
import Auxillary from "../../hoc/Auxillary/Auxillary";
import Select from "../../components/UI/Select/Select";
import axios from "axios";

function createOptionControl(number) {
  return createControl(
  {
    label: `Вариант ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  },
  { required: true },
  )
}

function createFormControls() {
  return {
    question: createControl({
          label: 'Введите вопрос',
          errorMessage: 'Вопрос не может быть пустым'
        },
        { required: true }
    ),

    optionOne: createOptionControl(1),
    optionTwo: createOptionControl(2),
    optionThree: createOptionControl(3),
    optionFour: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    isFormValid: false,
    formControls: createFormControls(),
    rightAnswerId: 1
  }

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {

      const quiz = this.state.quiz.concat();
      const index = quiz.length + 1;

      const { optionOne, optionFour, optionThree, optionTwo } = this.state.formControls;

      const questionItem = {
          question: this.state.formControls.question.value,
          id: index,
          rightAnswerId: this.state.rightAnswerId,
          answers: [
              { text: optionOne.value, id: optionOne.id },
              { text: optionTwo.value, id: optionTwo.id },
              { text: optionThree.value, id: optionThree.id },
              { text: optionFour.value, id: optionFour.id },
          ]
      };

      quiz.push(questionItem);
      this.setState({
          quiz,
          isFormValid: false,
          formControls: createFormControls(),
          rightAnswerId: 1
      })
  }

  createQuizHandler = async (event) => {
      try {
          const response =  await axios.post(
              '/quiz.json',
              this.state.quiz
          )
          this.setState({
              quiz: [],
              isFormValid: false,
              formControls: createFormControls(),
              rightAnswerId: 1
          })

      } catch (error) {
          console.log(error)
      }
  }

  changeHandler = (value, controlName) => {
      const formControls = { ...this.state.formControls };
      const control = {...formControls[controlName]};

      control.touched = true;
      control.value = value;
      control.valid = validate(control.value, control.validation);

      formControls[controlName] = control;

      this.setState({
          formControls,
          isFormValid: validateForm(formControls)
      })
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
          <Auxillary key={controlName + index}>
            <Input
              label={control.label}
              value={control.value}
              valid={control.valid}
              shouldValidate={!!control.validation}
              touched={control.touched}
              errorMessage={control.errorMessage}
              onChange={event => this.changeHandler(event.target.value, controlName)}
            />
            {index === 0 && (<hr/>)}
          </Auxillary>
      );
    })
  }
  render() {
    const select = <Select
      label={'віберите правильный ответ'}
      value={this.state.rightAnswerId}
      onChange={this.selectChangeHandler}
      options={[
        { text: 1, value: 1 },
        { text: 2, value: 2 },
        { text: 3, value: 3 },
        { text: 4, value: 4 }
      ]}
    />

    return (
      <div className={classes.QuizCreator}>
        <h1>Создание теста</h1>
        <form onSubmit={this.submitHandler}>

          { this.renderControls() }
          { select }
          <Button
              disabled={!this.state.isFormValid}
              type={'primary'}
              onClick={this.addQuestionHandler}>
            {'Add question'}
          </Button>
          <Button
              disabled={this.state.quiz.length === 0}
              type={'success'}
              onClick={this.createQuizHandler}>
            {'Create quiz'}
          </Button>
        </form>
      </div>
    )
  }
}
