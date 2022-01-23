import { ConfigState, configuration } from "./configSlice"
import styles from "./Config.module.css"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Config = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm<ConfigState>()

    const navigateToResultPage = useCallback(() => navigate("result"), [navigate])

    const onSubmit: SubmitHandler<ConfigState> = data => {
        dispatch(configuration(data))
        navigateToResultPage()
    }

    return (
        <div className={styles.config}>
            <header>はじめよう</header>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.name}>
                    <input type="text" placeholder="なまえ" {...register("friendlyName")} />
                </div>
                <div className={styles.forceNegative}>
                    <input type="checkbox" {...register("forceNegative")} />
                    <label htmlFor="force-negative">かわいくないを強制する</label>
                </div>
                <div className={styles.generateButton}>
                    <input type="submit" value="生成する" />
                </div>
            </form>
        </div>
    )
}

export default Config
