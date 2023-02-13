import "./quiz.css"
import {useEffect, useState} from "react";
import {getRequest} from "../commons/requests.js";

const Quiz = () => {

    const [question, setQuestion] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [propOk, setPropOk] = useState(null);
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        getRequest("http://saminthedark.ddns.net:1478/api/v1/quiz?limit=10")
            .then(json => {
                if (json.length > 0) {
                    let reponses = [];
                    let rands = [];
                    for (let i = 1; i <= 4; i++) {
                        let rand = Math.floor((Math.random() * 4) + 1)
                        if (rands.includes(rand)) {
                            i--;
                            continue
                        }
                        rands.push(rand);
                        reponses.push(json[0]['prop' + rand])
                    }
                    json[0]['reponses'] = reponses;
                    setQuestion(json[0]);
                }
            })
    }, [])

    const handleCheck = (e) => {
        setIsChecked(true)
        const el = e.currentTarget
        setIsClicked(true);
        el.parentElement
            .querySelector('div.active')?.classList.remove('active');

        el.classList.add('active');
        let t = el.innerText
        if (t === question['prop1']) {
            setPropOk(t)
            console.log("ok")
        } else {
            setPropOk(null)
        }
    }

    const handleVerify = () => {
        const el = document
            .querySelector('.quiz__content__prop > div.active')
        if (propOk) {
            el.classList.add('ok')
        } else {
            el.classList.add("ko")
            el
                .parentElement
                .querySelectorAll(`.quiz__content__prop > div:not(.active)`)
                .forEach(d => {
                    if (d.innerText === question['prop1']) {
                        d.classList.add('resp-ok')
                    }
                })
        }
    }

    return (
        <main className="quiz">
            <h1>Quiz</h1>

            <div className="quiz__content">
                <div className="quiz__content__question">
                    {question['question']}
                </div>
                <div className="quiz__content__prop">
                    {question['reponses'] &&
                        question['reponses'].map((rep, i) => <div key={i} onClick={!isClicked ? handleCheck : null}>{rep}</div>)
                    }
                </div>
                <div
                    className={`quiz__content__checking ${isChecked ? "active" : ""}`}
                    onClick={handleVerify}
                >
                    Vérifier
                </div>
            </div>
        </main>
    )
}

export default Quiz;