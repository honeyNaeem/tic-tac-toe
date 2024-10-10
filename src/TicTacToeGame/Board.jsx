import React, { useEffect, useState } from "react";
import Square from "./Square";
import { Link, useNavigate } from "react-router-dom";



const Board = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [isWinner, setIsWinner] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);

    const checkWinner = () => {
        console.log('checkWinner');

        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            // console.log(state[a]);
            // console.log('state[b]', state[b]);
            // console.log('state[c]', state[c]);

            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                console.log('hello');
                // return (state[a]);
                setTimeout(() => {
                    // navigate('/')
                    setIsWinner(state[a])
                }, 200);
            }

        }
        if (!state.includes(null)) {
            setIsGameOver(true)
        }

        return false;

    };

    // const isWinner = checkWinner();

    useEffect(() => {
        checkWinner()
        console.log('use effect');

    })


    const handleClick = (index) => {
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "o";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        console.log('clicked');
        
        setState(Array(9).fill(null));
        setIsWinner('')
        setIsGameOver(false)
    };



    return (
        <div className="board-container bg-black w-full h-screen flex justify-center items-center">

            {isWinner ?
                (<>
                    <div className="  flex justify-center items-center relative w-64 h-70 m-2 bg-gray-900 rounded-3xl "
                        style={{
                            boxShadow: '0 0 20px #fae500, 0 0 30px #fae500, 0 0 40px #ff00ff, 0 0 50px #ff00ff',
                        }}>
                        <div className="w-[50%] h-[200px] text-white shadow-md flex justify-center items-center flex-col">
                            <h2 className={isWinner == 'X' ? 'text-yellow-400 text-1xl' : 'text-pink-400 text-1xl'} style={{ textShadow: isWinner == 'X' ? '0 0 2px #ffff00, 0 0 3px #ffff00' : '0 0 2px #ff00ff, 0 0 3px #ff00ff' }}>{isWinner} Won The Game</h2>
                            {/* <Link to='/'><button style=  "--clr:#FF44CC" ><span>Play Again</span><i></i></button></Link> */}
                            
                            {isWinner != 'X'
                                ?
                                <div className="x-btn">
                                    <button onClick={handleReset}><span>Play Again</span><i></i></button>
                                </div>
                                :
                                <div className="o-btn">
                                    <button onClick={handleReset}><span>Play Again</span><i></i></button>
                                </div>
                            }


                        </div>
                    </div>
                </>

                ) :
                (isGameOver
                    ?
                    <>
                        <div className=" flex justify-center items-center relative w-64 h-70 m-2 bg-gray-900 rounded-3xl"
                            style={{
                                boxShadow: '0 0 20px #fae500, 0 0 30px #fae500, 0 0 40px #ff00ff, 0 0 50px #ff00ff',
                            }}>
                            <div className="w-[50%] h-[200px] text-white shadow-md flex justify-center items-center flex-col">
                                <div className="o-btn">
                                <h3 className="text-yellow-400 text-3xl font-bold text-center" style={{textShadow: '0 0 2px #ff00ff, 0 0 3px #ff00ff'}}>Draw Game</h3>
                                    <button style={{boxShadow: '0 0 2px #ff00ff, 0 0 3px #ff00ff'}} onClick={handleReset}><span>Play Again</span><i></i></button>
                                </div>
                                {/* <Link to='/'>Go back</Link> */}
                                {/* <Link to='/'>Play Again</Link> */}

                            </div>
                        </div>
                    </>
                    :
                    (
                        <>
                            <div className="relative w-64 h-70 m-2 bg-gray-900 rounded-3xl"
                                style={{
                                    boxShadow: '0 0 20px #fae500, 0 0 30px #fae500, 0 0 40px #ff00ff, 0 0 50px #ff00ff',
                                }}>
                                <div className="board-row1 flex justify-center " >
                                    <Square onClick={() => handleClick(0)} value={state[0]} />
                                    <Square onClick={() => handleClick(1)} value={state[1]} />
                                    <Square onClick={() => handleClick(2)} value={state[2]} />
                                </div>
                                <div className="board-row2 flex justify-center" >
                                    <Square onClick={() => handleClick(3)} value={state[3]} />
                                    <Square onClick={() => handleClick(4)} value={state[4]} />
                                    <Square onClick={() => handleClick(5)} value={state[5]} />
                                </div>
                                <div className="board-row3 flex justify-center" >
                                    <Square onClick={() => handleClick(6)} value={state[6]} />
                                    <Square onClick={() => handleClick(7)} value={state[7]} />
                                    <Square onClick={() => handleClick(8)} value={state[8]} />
                                </div>
                            </div>
                        </>)
                )


            }
        </div>
    );
};

export default Board;