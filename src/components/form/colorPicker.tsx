import { useState } from 'react';

type ColorProps = {
    id: string,
    initValue?: string //hex
}

export default function ColorPicker({id,initValue="#ff0000"}: ColorProps){
    const [colorValue, setColorValue] = useState(initValue);
    
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        setColorValue(event.currentTarget.value);
    }

    return (
        <div className="color-picker">
            <label className="color-picker-label" htmlFor={id}>Color A:</label>
            <input 
                className="color-picker-input" 
                type="color" 
                name={id} 
                id={id} 
                style={{backgroundColor: colorValue}}
                onChange={handleChange}>
            </input>
        </div>
        
    );
}