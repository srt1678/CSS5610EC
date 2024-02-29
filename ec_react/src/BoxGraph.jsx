import "./BoxGraph.css";
import { useState } from "react";
export default function BoxGraph() {
    const [boxArray, setBoxArray] = useState(Array(9).fill("box"));

    const clickBox = (i) => {
        let tempArray = [];
        tempArray.push(i);
        let row = Math.floor(i / 3);
        if (row == 0) {
            tempArray.push(i + 3);
        } else if (row == 1) {
            tempArray.push(i + 3);
            tempArray.push(i - 3);
        } else {
            tempArray.push(i - 3);
        }
        let column = Math.floor(i % 3);
        if (column == 0) {
            tempArray.push(i + 1);
        } else if (column == 1) {
            tempArray.push(i + 1);
            tempArray.push(i - 1);
        } else {
            tempArray.push(i - 1);
        }
        changeBox(tempArray);
    };

    const changeBox = (changeBoxArray) => {
        let tempArray = [...boxArray];
        for (let i = 0; i < changeBoxArray.length; i++) {
            if (boxArray[changeBoxArray[i]] === "box") {
                tempArray[changeBoxArray[i]] = "box selected";
            } else {
                tempArray[changeBoxArray[i]] = "box";
            }
        }
        setBoxArray(tempArray);
    };

    return (
        <div className="container">
            <div className={boxArray[0]} onClick={() => clickBox(0)}></div>
            <div className={boxArray[1]} onClick={() => clickBox(1)}></div>
            <div className={boxArray[2]} onClick={() => clickBox(2)}></div>
            <div className={boxArray[3]} onClick={() => clickBox(3)}></div>
            <div className={boxArray[4]} onClick={() => clickBox(4)}></div>
            <div className={boxArray[5]} onClick={() => clickBox(5)}></div>
            <div className={boxArray[6]} onClick={() => clickBox(6)}></div>
            <div className={boxArray[7]} onClick={() => clickBox(7)}></div>
            <div className={boxArray[8]} onClick={() => clickBox(8)}></div>
        </div>
    );
}
