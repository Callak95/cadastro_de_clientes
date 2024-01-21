import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Container } from "./styles";

interface StatusApplicationProps {
    errors?: string[];
    messages?: string[]
    setApiResults?: Dispatch<SetStateAction<{ errors?: string[]; messages?: string[] }>>;
}

export const StatusApplication: FC<StatusApplicationProps> = ({
    errors,
    messages,
    setApiResults
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleHide = () => {
        setIsVisible(false);
        setApiResults && setApiResults({ errors: [], messages: [] });
    };


    useEffect(() => {
        if (errors?.length !== 0 || messages?.length !== 0) {
            setIsVisible(true);
        }
    }, [errors, messages]);

    return isVisible && (
        <Container>
            <div>
                {errors && (
                    <ul className="error">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                )}

                {messages && (
                    <ul className="success">
                        {messages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={handleHide}>x</button>
        </Container>
    );
};