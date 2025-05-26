


export const Input = (props) =>{

    return (
        <label className={props.className}>
            {props.labelText}
            <input type={props.type} required ref={props.ref} onKeyDown={(e) => props.onKeyDown(e, props.nextRef)} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </label>
    )
}