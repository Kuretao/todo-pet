import './welcome.scss';
import { useState} from "react";
import cookie from 'cookiejs';
import {FirstStep} from "../../ui/welcome-steps/firstStep.jsx";

function Welcome() {
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

    const cookieValue = { step, name: '', secondName: '' };
    cookie.set('test', JSON.stringify(cookieValue), 30);

    const nextStep = () => {
        setStep(last => (last < 3 ? last + 1 : last));
    };

    return (
        <section className={`welcome-wrapper welcome-wrapper--step-${step}`}>
            {step === 0 && <FirstStep nextStep={nextStep} />}
        </section>
    );
}

export default Welcome;
