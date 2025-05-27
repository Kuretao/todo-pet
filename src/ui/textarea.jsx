


export const Textarea = (props) => (
    <div className={'textarea-container'}>
        <h5>{props.title}</h5>
        <textarea
            required
            ref={props.ref}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} ></textarea>
    </div>
)