import React, { useState } from 'react'
import axios from 'axios'

export default function AppFunctional(props) {
    
   const [state,setState] = useState({
    activeSquare: 4,
    steps: 0,
    x: 2,
    y: 2,
    message: "",
    email: "lady@gaga.com"
   })

    
    const moveUp = () => {
        if (state.activeSquare === 4) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 3) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 5) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 6) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 7) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 8) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y - 1
            })
        } else if (state.activeSquare === 0 || state.activeSquare === 1 || state.activeSquare === 2) {
            setState({
                ... state,
                message: "You can't go up"
            })
        }
    }
    const moveDown = () => {
        if (state.activeSquare === 4) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 3) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 5) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 0) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 1) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 2) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 3,
                steps: state.steps + 1,
                x: state.x,
                y: state.y + 1
            })
        } else if (state.activeSquare === 6 || state.activeSquare === 7 || state.activeSquare === 8) {
            setState({
                ... state,
                message: "You can't go down"
            })
        }
    }
    const moveLeft = () => {
        if (state.activeSquare === 4) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 5) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 1) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 2) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 7) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 8) {
            setState({
                ... state,
                activeSquare: state.activeSquare -= 1,
                steps: state.steps + 1,
                x: state.x - 1,
                y: state.y
            })
        } else if (state.activeSquare === 6 || state.activeSquare === 0 || state.activeSquare === 3) {
            setState({
                ... state,
                message: "You can't go left"
            })
        }
    }

    const moveRight = () => {
        if (state.activeSquare === 4) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 0) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 1) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 3) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 7) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 6) {
            setState({
                ... state,
                activeSquare: state.activeSquare += 1,
                steps: state.steps + 1,
                x: state.x + 1,
                y: state.y
            })
        } else if (state.activeSquare === 2 || state.activeSquare === 5 || state.activeSquare === 8) {
            setState({
                ... state,
                message: "You can't go right"
            })
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.email === "lady@gaga.com") {
            axios.post('http://localhost:9000/api/result', {
                steps: state.steps,
                x: state.x,
                y: state.y,
                email: state.email
            })
                .then(res => {
                    console.log(res)
                    setState({
                        ...state,
                        message: res.data.message
                    })

                }).catch(err => {
                    console.error(err)
                })
        } else {
            return (
                setState({
                    message: 'Ouch: email must be a valid email',
                })
            )
        }
    }

    const reset = () => {
        setState({
            activeSquare: 4,
            steps: 0,
            x: 2,
            y: 2,
            message: "",
            email: "lady@gaga.com"
        })
    }
   
    return (
        <div id="wrapper" className={props.className}>
            <div className="info">
                <h3 id="coordinates">{`Coordinates (${state.x}, ${state.y})`}</h3>
                <h3 id="steps">{state.steps <= 0 || state.steps > 1 ? `You moved ${state.steps} times` : `You moved ${state.steps} time`}</h3>
            </div>
            <div id="grid">
                <div className={`square ${state.activeSquare === 0 ? 'active' : ''}`}>{state.activeSquare === 0 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 1 ? 'active' : ''}`}>{state.activeSquare === 1 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 2 ? 'active' : ''}`}>{state.activeSquare === 2 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 3 ? 'active' : ''}`}>{state.activeSquare === 3 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 4 ? 'active' : ''}`}>{state.activeSquare === 4 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 5 ? 'active' : ''}`}>{state.activeSquare === 5 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 6 ? 'active' : ''}`}>{state.activeSquare === 6 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 7 ? 'active' : ''}`}>{state.activeSquare === 7 ? 'B' : ''}</div>
                <div className={`square ${state.activeSquare === 8 ? 'active' : ''}`}>{state.activeSquare === 8 ? 'B' : ''}</div>
            </div>
            <div className="info">
                <h3 id="message">{state.message}</h3>
            </div>
            <div id="keypad">
                <button onClick={moveLeft} id="left">LEFT</button>
                <button onClick={moveUp} id="up">UP</button>
                <button onClick={moveRight} id="right">RIGHT</button>
                <button onClick={moveDown} id="down">DOWN</button>
                <button onClick={reset} id="reset">reset</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input id="email" type="email" placeholder="type email"></input>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}
