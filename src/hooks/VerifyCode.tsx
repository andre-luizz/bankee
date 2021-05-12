import React, { createContext, useContext, useState } from 'react';

interface RandomContextData {
    randomVerificationCode(): string;
    verificationCode: string;
}

const RandomContext = createContext<RandomContextData>({} as RandomContextData);

const RandomProvider: React.FC = ({ children }) => {
    const [verificationCode, setVerificationCode] = useState('');

    function randomVerificationCode() {
        const randomCode = Math.floor(1000 + Math.random() * 9000)
            .toString()
            .substring(0, 4);

        setVerificationCode(randomCode);

        return randomCode;
    }

    return (
        <RandomContext.Provider
            value={{
                randomVerificationCode,
                verificationCode,
            }}
        >
            {children}
        </RandomContext.Provider>
    );
};

function useRandomCode(): RandomContextData {
    const context = useContext(RandomContext);

    if (!context) {
        throw new Error('useRandomCode must be used within an RandomProvider');
    }

    return context;
}

export { RandomProvider, useRandomCode };
