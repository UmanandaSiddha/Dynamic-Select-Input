import { useState } from 'react';

const SelectDemo = () => {

    const [selectedFruit, setSelectedFruit] = useState('orange');
    const [other, setOther] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            selected: (selectedFruit === "other") ? other : selectedFruit
        }
        console.log(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select
                    value={selectedFruit}
                    onChange={(e) => setSelectedFruit(e.target.value)}
                >
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="other">Other</option>
                </select>
                {(selectedFruit === "other") && (
                    <input type='text' placeholder='enter other' value={other} onChange={(e) => setOther(e.target.value)} />
                )}
                
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default SelectDemo;