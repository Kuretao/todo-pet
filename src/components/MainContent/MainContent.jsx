import './MainContent.scss';
import {useEffect, useState} from "react";
import cookie from 'cookiejs';
import {FirstStep} from "../../ui/welcome-steps/firstStep.jsx";
import {SecondStep} from "../../ui/welcome-steps/secondStep.jsx";
import {ThridStep} from "../../ui/welcome-steps/thridStep.jsx";
import Note from "../Note/NoteMain/Note.jsx";

function MainContent() {
    const [step, setStep] = useState(() => {
        const cookieValue = cookie.get('test');
        if (cookieValue) {
            try {
                const parsed = JSON.parse(cookieValue);
                return parsed.step || 0;
            } catch {
                return 0;
            }
        }
        return 0;
    });

    const [registration, setRegistration] = useState(() => {
        const cookieValue = cookie.get('test');
        if (cookieValue) {
            try {
                const parsed = JSON.parse(cookieValue);
                return parsed.registration || false;
            } catch {
                return false;
            }
        }
        return false;
    });

    useEffect(() => {
        const existing = cookie.get('test');
        let parsed = {};
        try {
            parsed = existing ? JSON.parse(existing) : {};
        } catch {
            parsed = {};
        }

        const updated = {
            ...parsed,
            step,
            registration
        };

        cookie.set('test', JSON.stringify(updated), 30);
    }, [step, registration]);

    const nextStep = () => {
        setStep(last => (last < 3 ? last + 1 : last));
    };

    const backStep = () => {
        setStep(last => (last > 0 ? last - 1 : last));
    }

    return (
        <section className={`welcome-wrapper welcome-wrapper--step-${step}`}>
            {step === 0 && <FirstStep nextStep={nextStep} />}
            {step === 1 && <SecondStep step={step} nextStep={nextStep}  backStep={backStep} />}
            {step === 2 && registration === false && <ThridStep registration={registration} setRegistration={setRegistration} step={step} nextStep={nextStep}  backStep={backStep} />}
            {registration && <Note/>}
        </section>
    );
}

export default MainContent;
