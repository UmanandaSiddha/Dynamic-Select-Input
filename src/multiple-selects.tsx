import React, { useState } from 'react';

interface SelectState {
    [key: string]: string;
}

interface OtherState {
    [key: string]: string;
}

interface ShowOtherState {
    [key: string]: boolean;
}

const SelectWithOtherOption: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectState>({});
    const [otherValues, setOtherValues] = useState<OtherState>({});
    const [showOtherInputs, setShowOtherInputs] = useState<ShowOtherState>({});

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, inputName: string) => {
        const { value } = event.target;
        setSelectedOptions({ ...selectedOptions, [inputName]: value });
        setShowOtherInputs({ ...showOtherInputs, [inputName]: value === 'other' });
    };

    const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
        const value = event.target.value;
        setOtherValues({ ...otherValues, [inputName]: value });
        setSelectedOptions({ ...selectedOptions, [inputName]: value });
    };

    const handleCaptureInputs = () => {
        console.log('Selected Options:', selectedOptions);
        console.log('Other Values:', otherValues);
    };

    const renderSelectInputs = () => {
        const selectInputs = [];
        for (let i = 1; i <= 10; i++) {
            const inputName = `input${i}`;
            selectInputs.push(
                <div key={inputName}>
                    <label htmlFor={inputName}>Select an option {i}:</label>
                    <select id={inputName} value={selectedOptions[inputName] || ''} onChange={(e) => handleSelectChange(e, inputName)}>
                        <option value="">Select...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="other">Other</option>
                    </select>
                    {showOtherInputs[inputName] && (
                        <div>
                            <label htmlFor={`${inputName}-other`}>Other:</label>
                            <input id={`${inputName}-other`} type="text" value={otherValues[inputName] || ''} onChange={(e) => handleOtherInputChange(e, inputName)} />
                        </div>
                    )}
                </div>
            );
        }
        return selectInputs;
    };

    return (
        <div>
            {renderSelectInputs()}
            <button onClick={handleCaptureInputs}>Capture Inputs</button>
        </div>
    );
};

export default SelectWithOtherOption;
