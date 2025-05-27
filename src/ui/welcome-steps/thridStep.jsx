import { useState } from "react";
import cookie from "cookiejs";
import testImg from './../../assets/cards/test.jpg';

export const ThridStep = (props) => {
    const dataString = cookie.get('test');
    let data = {};
    try {
        data = dataString ? JSON.parse(dataString) : {};
    } catch (e) {
        console.error('Error', e);
    }
    const themes = [
        { title: "Записывать ежедневные задачи", description: "Подходит вам, если вы часто забываете что планировали сделать дома", src: testImg },
        { title: "Планировать учебу и подготовку к экзаменам", description: "Организуйте расписание занятий и контрольные точки для успешной подготовки", src: testImg },
        { title: "Управлять рабочими проектами", description: "Следите за задачами и сроками на работе, чтобы ничего не упустить", src: testImg },
        { title: "Вести список покупок", description: "Быстро записывайте необходимые продукты и товары, чтобы не забыть в магазине", src: testImg },
        { title: "Планировать личные цели и хобби", description: "Отслеживайте прогресс в достижении своих увлечений и целей", src: testImg },
        { title: "Организовывать мероприятия и встречи", description: "Создавайте списки дел для подготовки к праздникам, встречам и поездкам", src: testImg },
        { title: "Следить за здоровьем и спортом", description: "Записывайте тренировки, приёмы лекарств и планы по здоровому образу жизни", src: testImg },
        { title: "Управлять семейными делами", description: "Координируйте задачи и обязанности между членами семьи", src: testImg }
    ];
    const [selectedIndex, setSelectedIndex] = useState(null);
    function onSaveCard(item, index) {
        setSelectedIndex(index);
        props.setRegistration(true);
        const selectedCard = { title: item.title };
        cookie.set('CategoryUse', JSON.stringify(selectedCard));
    }

    return (
        <section className="last-step">
            <h2>Здравствуйте {data.name}</h2>
            <p>Для каких целей вы планируете использовать наш ToDoList?</p>

            <div className="cards">
                {themes.map((item, index) => (
                    <div
                        className={`card ${selectedIndex === index ? "card--selected" : ""}`}
                        key={index}
                        onClick={() => onSaveCard(item, index)}
                    >
                        <img src={item.src} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
