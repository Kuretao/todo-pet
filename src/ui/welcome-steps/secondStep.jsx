import {Input} from "../input.jsx";
import {useRef} from "react";
import cookie from "cookiejs";


export const SecondStep = (props) => {
    const nameRef = useRef();
    const secondNameRef = useRef();
    const otchestvoRef = useRef();
    const step = props.step || 2;
    const onSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const secondName = secondNameRef.current.value;
        const thirdName = otchestvoRef.current.value;
        const data = {step , name, secondName, thirdName };
        cookie.set('test', JSON.stringify(data), 30);

        props.nextStep();
    };
    function nextInput(e, nextRef) {
        if (e.key === "Enter" && nextRef.current && e.target.value !== "") {
            nextRef.current.focus();
        }
    }

    return (
            <form onSubmit={onSubmit}>
                <h2>Заполните анкету</h2>
                <Input labelText={'Ваше имя'}  type={'text'} onKeyDown={nextInput} nextRef={secondNameRef} ref={nameRef} placeholder={'Введите ваше имя'}/>
                <Input labelText={'Ваша фамилия'}  type={'text'} onKeyDown={nextInput} nextRef={otchestvoRef} ref={secondNameRef} placeholder={'Введите вашу фамилию'}/>
                <Input labelText={'Ваше отчество'}  type={'text'} onKeyDown={nextInput} ref={otchestvoRef} placeholder={'Введите ваше отчество'}/>
                <Input type={"checkbox"} className={'checkbox'} labelText={'Согласие на обработку персональных данных'}/>
                <div className="form-btns">
                    <button type="button" onClick={props.backStep}>Назад</button>
                    <button type="submit">Заполнить анкету</button>
                </div>
            </form>
    )
}