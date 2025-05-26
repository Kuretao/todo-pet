import './welcome.scss';
import {useEffect, useState} from "react";
import cookie from 'cookiejs';
import {FirstStep} from "../../ui/welcome-steps/firstStep.jsx";
import {SecondStep} from "../../ui/welcome-steps/secondStep.jsx";

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
            step
        };

        cookie.set('test', JSON.stringify(updated), 30);
    }, [step]);

    const nextStep = () => {
        setStep(last => (last < 2 ? last + 1 : last));
    };

    const backStep = () => {
        setStep(last => (last > 0 ? last - 1 : last));
    }

    return (
        <section className={`welcome-wrapper welcome-wrapper--step-${step}`}>
            {step === 0 && <FirstStep nextStep={nextStep} />}
            {step === 1 && <SecondStep step={step} nextStep={nextStep}  backStep={backStep} />}
        </section>
    );
}

export default Welcome;
