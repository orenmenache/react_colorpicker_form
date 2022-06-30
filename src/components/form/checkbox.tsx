type CheckBoxProps = {
    id: string;
    text: string;
    //value: boolean;
    //checked?: boolean;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    required?: boolean;
}

export default function FormCheckbox (props: CheckBoxProps){
    //const [checked, setChecked] = React.useState(false);

    /*const handleChecked = () => {
        setChecked(!checked);
    };*/
    
    const {id, text, ...checkProps} = props;
    return (
        <div className="checkbox-container-area">
            <div className="checkbox-element-pair">
                <input type="checkbox" id={id} {...checkProps}
                />
                <label htmlFor={id}>{text}</label>
                
            </div>
        </div>
    )
}
