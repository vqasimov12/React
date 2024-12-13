import { useEffect, useState } from "react"
import FormInput from "./FormInput";
const Form = ({ formItems, formButtons }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (name, value) => {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    
    useEffect(()=>{
        console.log(formData)
    },[formData])
  return (
    <div>
      {
        <form className="flex flex-col gap-5 max-w-[400px] mx-auto border p-5 mt-12 " action="">
        {
            formItems.map(item => <FormInput handleInputChange={handleInputChange} name={item.name} label={item.label} type={item.type} placeholder={item.placeholder} />)
        }

        {
            formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
        }
    </form>
      }
    </div>
  );
};

export default Form;
