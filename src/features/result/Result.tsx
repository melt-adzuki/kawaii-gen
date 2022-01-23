import { CSSProperties, useCallback, useEffect, useRef, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import back from "./back.svg"
import copy from "./copy.svg"
import styles from "./Result.module.css"
import "./transitions.css"
import qs from "qs"

const Result = (): JSX.Element => {
    const [buttonStyle, setButtonStyle] = useState<CSSProperties>()
    const [buttonStatus, setButtonStatus] = useState<"fixed" | "floating" | "clicked">("fixed")
    const [screenStatus, setScreenStatus] = useState<"prompt" | "result">("prompt")
    const selector = useSelector((state: RootState) => state)
    const nodeRef = useRef(null)
    const navigate = useNavigate()

    const navigateToRootPage = useCallback(() => navigate("/"), [navigate])

    const copyToClipboard = () => {
        const url = window.location.href + qs.stringify(selector.config, { addQueryPrefix: true })

        navigator.clipboard.writeText(url)
            .then(() => alert("クリップボードにコピーしました。"))
            .catch(() => alert("クリップボードへの書き込みに失敗しました。"))
    }

    const moveRandom = () => {
        setButtonStyle({
            left: Math.random() * (document.body.clientWidth - 64) + "px",
            top: Math.random() * (document.body.clientHeight - 64) + "px",
        })
    }

    useEffect(() => moveRandom(), [])

    const contexts = {
        forced: selector.config.forceNegative ? `${selector.config.friendlyName}かわいくない` : `${selector.config.friendlyName}かわいい`,
        neverPushed: selector.config.forceNegative ? `${selector.config.friendlyName}かわいい` : `${selector.config.friendlyName}かわいくない`,
    } as const

    const NegativeButton = (): JSX.Element => {
        switch (buttonStatus) {
            case "fixed":
                return <button onMouseEnter={() => setButtonStatus("floating")}>{contexts.neverPushed}</button>
            
            default:
                return <button className={styles.dummyButton}>{contexts.neverPushed}</button>
        }
    }

    return (
        <main className={styles.wrapper}>
            <h1 className={styles.title}>
                <span className={styles.friendlyName}>{selector.config.friendlyName}</span>
                <span>かわいい？</span>
            </h1>

            <section className={`${styles.result}${selector.config.forceNegative ? " " + styles.result_reversed : ""}`}>
                <SwitchTransition>
                    <CSSTransition key={screenStatus} timeout={1000} classNames="fade" nodeRef={nodeRef}>
                        {
                            (screenStatus === "prompt" && 
                                <div ref={nodeRef}>
                                    <button onClick={() => setScreenStatus("result")}>{contexts.forced}</button>
                                    <NegativeButton />
                                </div>
                            ) || (
                                <div className={styles.survey} ref={nodeRef}>
                                    <div>
                                        <div className="surveyBar_full">
                                            <span>{contexts.forced}</span>
                                        </div>
                                        <span>100%</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>{contexts.neverPushed}</span>
                                        </div>
                                        <span>0%</span>
                                    </div>
                                </div>
                            )
                        }
                    </CSSTransition>
                </SwitchTransition>
            </section>

            {
                !(buttonStatus === "fixed") && screenStatus === "prompt" &&
                <button
                    className={styles.floatingButton}
                    style={{...buttonStyle, ...{ transform: buttonStatus === "clicked" ? "scale(0)" : "scale(1)" }}}
                    onMouseEnter={() => moveRandom()}
                    onClick={() => setButtonStatus("clicked")}
                >
                    {contexts.neverPushed}
                </button>
            }

            <div className={styles.control} style={screenStatus === "result" ? { top: "64px" } : {}}>
                <img src={back} alt="戻る" onClick={() => navigateToRootPage()} className={styles.controlButton} />
                <img src={copy} alt="リンクをコピーする" onClick={() => copyToClipboard()} className={styles.controlButton} />
            </div>
        </main>
    )
}

export default Result
