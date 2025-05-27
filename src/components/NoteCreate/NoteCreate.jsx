import {Input} from "../../ui/input.jsx";
import {Textarea} from "../../ui/textarea.jsx";
import cookie from "cookiejs";
import {useRef, useState} from "react";


export const NoteCreate = ({setNote}) => {
    const [title, setTitle] = useState("");
    const [theme, setTheme] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !theme.trim() || !text.trim()) {
            alert("Пожалуйста, заполните все поля");
            return;
        }

        const newNote = {
            id: Date.now(),
            title: title.trim(),
            theme: theme.trim(),
            text: text.trim(),
        };

        setNote((prevNotes) => {
            const updatedNotes = prevNotes ? [...prevNotes, newNote] : [newNote];
            cookie.set("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });

        setTitle("");
        setTheme("");
        setText("");
    };

    const nameRef = useRef();
    const themeRef = useRef();
    const textareaRef = useRef();
    function nextInput(e, nextRef) {
        if (e.key === "Enter" && nextRef.current && e.target.value !== "") {
            nextRef.current.focus();
        }
    }
    return (
        <div className="note-create">
            <h2>Создание заметки</h2>

            <form onSubmit={handleSubmit}>
                <Input
                    labelText={"Название заметки"}
                    placeholder={"Введите название заметки"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={nameRef}
                    nextRef={themeRef}
                    onKeyDown={nextInput}
                />
                <Input
                    labelText={"Тема"}
                    placeholder={"Введите тему заметки"}
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    ref={themeRef}
                    nextRef={textareaRef}
                    onKeyDown={nextInput}
                />
                <Textarea
                    title={"Текст заметки"}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ref={textareaRef}
                    onKeyDown={nextInput}
                    placeholder={"Введите текст заметки"}
                />

                <button type="submit">Создать заметку</button>
            </form>
        </div>
    )
}