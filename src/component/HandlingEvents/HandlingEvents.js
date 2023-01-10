import React, { Component } from 'react';
import './HandlingEvents.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultStr: 'Введите текст...',
            buttonStr: 'Отправить'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const input = document.querySelector('input'),
              res = document.querySelector('.res');
        if (!input.value) {
            this.setState({
                defaultStr: 'Вы не ввели текст...',
                buttonStr: 'Сообщение не отправлено'
            });
            return false;
        } else {
            this.setState({
                defaultStr: 'Вы ввели текст...',
                buttonStr: 'Сообщение отправлено',
            });
            res.innerHTML += input.value + '<br>';
        };
        input.value = '';
        setTimeout(() => {
            this.setState({
                defaultStr: 'Введите текст снова...',
                buttonStr: 'Отправить'
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.state.defaultStr} />
                    <button>{this.state.buttonStr}</button>
                </form>
                <p className="res"></p>
            </div>
        )
    }
}

export default Form;
