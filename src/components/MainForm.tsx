import FormRadio from "./form/radio";
import { FormRadioProps } from "./form/types";
import { SketchPicker } from "react-color";

const logoOrientation: FormRadioProps = {
    name: 'logoOrientation',
    options: [
        {id: 'Horizontal', text: 'Horizontal'},
        {id: 'Vertical', text: 'Vertical'},
        {id: 'Square', text: 'Square'}
    ]
}

// react-color https://www.youtube.com/watch?v=eaLkOHms9x8

export default function MainForm(){
    return (
        <div className="main-form">
            <h1>MainForm</h1>
            <FormRadio name={logoOrientation.name} options={logoOrientation.options}/>
            <SketchPicker/>
        </div>
        
    );
}