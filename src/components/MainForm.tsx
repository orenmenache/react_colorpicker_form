import ColorPicker from "./form/colorPicker";
import FormRadio from "./form/radio";
import { FormRadioProps } from "./form/types";

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
            <div className="generic-row">
                <div className="user-input">
                    <label htmlFor="client-name">Client Name</label>
                    <input type="text" name="client-name" id="client-name" required/>
                </div>
            </div>
            <div className="generic-row">
                <div className="file-select">
                    <label htmlFor="file-selector">Logo Path</label>
                    <input className="file-selector-input" type="file" name="file-selector" id="file-selector" required/>
                </div>
            </div>
            
            <div className="generic-col">
                    <FormRadio name={logoOrientation.name} options={logoOrientation.options}/>
                    <h2>Select the color pallete</h2>
                        <div className="generic-row">
                        <ColorPicker id="color-picker-input"/>
                        <label className="color-picker-label" htmlFor="colorB">Color B:</label>
                        <input className="color-picker-input" type="color" name="colorB" id="colorB"></input>
                    </div>
            </div>
            
            
        </div>
        
    );
}