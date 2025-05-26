


export const FirstStep = (props) => {
    return (
        <>
            <h1>Добро пожаловать!</h1>
            <p>Пожалуйста, заполните анкету. <br/> Ваши персональные данные необходимы нам для корректной работы</p>
            <button onClick={props.nextStep}>Заполнить анкету</button>
        </>
    )
}