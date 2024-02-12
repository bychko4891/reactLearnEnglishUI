export const LoginButton = () => {

    return (
        <li>
            <form action="/login" target="_parent">
                <button className="btn_main" type="submit">Вхід</button>
            </form>
        </li>
    )
}

export default LoginButton;