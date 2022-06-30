import { FormRadioProps } from "./types";

export default function FormRadio({name, options}: FormRadioProps){ //https://youtu.be/5llXA0RTYIU?t=283
    return (
        <div className='radio-container-area'>
            {options.map(({id, text}) => {
                //console.log(id);
                console.log(name);
                return (
                    <div className="radio-element-pair">
                        <input type="radio" id={id} name={name}/>
                        <label htmlFor={id}>{text}</label>
                    </div>
                );
            })}
        </div>
    )
}