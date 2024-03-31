import { createElement, useState } from 'react';

const Greeting = ({ value, setValue }: any) => {
    return createElement(
        'inpput',
        { 
            type: "text",
            value,
            setValue
         },
    );
}

const AddMore = () => {

    const [label, setLabel] = useState<string>();
    const [field, setField] = useState<string>();

    const setValue = (field: any) => (
        setField(field)
    )

    const handleAdd = () => {

    }

    return (
        <div>
            <input type="text" placeholder='enter label' value={label} onChange={(e) => setLabel(e.target.value)} />
            <input type="text" placeholder='enter field' value={field} onChange={(e) => setField(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default AddMore;