import React from 'react'
import axios from 'axios'

export default class AppClass extends React.Component {
    state = {
        activeSquare: 4,
        steps: 0,
        x: 2,
        y: 2,
        message: "",
        email: "lady@gaga.com"
    }
    moveUp = () => {
        if (this.state.activeSquare === 4) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 3) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 5) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 6) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 7) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 8) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y - 1
            })
        } else if (this.state.activeSquare === 0 || this.state.activeSquare === 1 || this.state.activeSquare === 2) {
            this.setState({
                message: "You can't go up"
            })
        }
    }
    moveDown = () => {
        if (this.state.activeSquare === 4) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 3) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 5) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 0) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 1) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 2) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 3,
                steps: this.state.steps + 1,
                x: this.state.x,
                y: this.state.y + 1
            })
        } else if (this.state.activeSquare === 6 || this.state.activeSquare === 7 || this.state.activeSquare === 8) {
            this.setState({
                message: "You can't go down"
            })
        }
    }
    moveLeft = () => {
        if (this.state.activeSquare === 4) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 5) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 1) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 2) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 7) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 8) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare -= 1,
                steps: this.state.steps + 1,
                x: this.state.x - 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 6 || this.state.activeSquare === 0 || this.state.activeSquare === 3) {
            this.setState({
                message: "You can't go left"
            })
        }
    }

    moveRight = () => {
        if (this.state.activeSquare === 4) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 0) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 1) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 3) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 7) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 6) {
            this.setState({
                ... this.state,
                activeSquare: this.state.activeSquare += 1,
                steps: this.state.steps + 1,
                x: this.state.x + 1,
                y: this.state.y
            })
        } else if (this.state.activeSquare === 2 || this.state.activeSquare === 5 || this.state.activeSquare === 8) {
            this.setState({
                message: "You can't go right"
            })
        }
    }



    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.email === "lady@gaga.com") {
            axios.post('http://localhost:9000/api/result', {
                steps: this.state.steps,
                x: this.state.x,
                y: this.state.y,
                email: this.state.email
            })
                .then(res => {
                    console.log(res)
                    this.setState({
                        ...this.state,
                        message: res.data.message
                    })

                }).catch(err => {
                    console.error(err)
                })
        } else {
            return (
                this.setState({
                    message: 'Ouch: email must be a valid email',
                })
            )
        }
    }

    reset = () => {
        this.setState({
            activeSquare: 4,
            steps: 0,
            x: 2,
            y: 2,
            message: "",
            email: ""
        })
    }





    render() {
        const { className } = this.props
        return (
            <div id="wrapper" className={className}>
                <div className="info">
                    <h3 id="coordinates">{`Coordinates (${this.state.x}, ${this.state.y})`}</h3>
                    <h3 id="steps">{this.state.steps <= 0 || this.state.steps > 1 ? `You moved ${this.state.steps} times` : `You moved ${this.state.steps} time`}</h3>
                </div>
                <div id="grid">
                    <div className={`square ${this.state.activeSquare === 0 ? 'active' : ''}`}>{this.state.activeSquare === 0 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 1 ? 'active' : ''}`}>{this.state.activeSquare === 1 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 2 ? 'active' : ''}`}>{this.state.activeSquare === 2 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 3 ? 'active' : ''}`}>{this.state.activeSquare === 3 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 4 ? 'active' : ''}`}>{this.state.activeSquare === 4 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 5 ? 'active' : ''}`}>{this.state.activeSquare === 5 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 6 ? 'active' : ''}`}>{this.state.activeSquare === 6 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 7 ? 'active' : ''}`}>{this.state.activeSquare === 7 ? 'B' : ''}</div>
                    <div className={`square ${this.state.activeSquare === 8 ? 'active' : ''}`}>{this.state.activeSquare === 8 ? 'B' : ''}</div>
                </div>
                <div className="info">
                    <h3 id="message">{this.state.message}</h3>
                </div>
                <div id="keypad">
                    <button onClick={this.moveLeft} id="left">LEFT</button>
                    <button onClick={this.moveUp} id="up">UP</button>
                    <button onClick={this.moveRight} id="right">RIGHT</button>
                    <button onClick={this.moveDown} id="down">DOWN</button>
                    <button onClick={this.reset} id="reset">reset</button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input id="email" type="email" placeholder="type email"></input>
                    <input id="submit" type="submit"></input>
                </form>
            </div>
        )
    }
}
