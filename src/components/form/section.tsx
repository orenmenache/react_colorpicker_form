type FormSectionProps = {
    children: React.ReactNode
}

const FormSection: React.FC<FormSectionProps> = ({children}) => {
    return (
        <div className='form-section'>
            {children}
        </div>
    )
}

export default FormSection;