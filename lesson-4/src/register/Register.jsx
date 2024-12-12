import Form from "../common/Form"


const Register = () => {

    const formItems = [
        {
            name: "firstname",
            label: "Firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            name: "lastname",
            label: "Lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter a password"
        },

    ]

    const formButtons = [
        {
            title: "Register",
            style: "bg-[blue] text-white py-3",
            action: () => {}
        },
        {
            title: "Already have an account?",
            style: "text-[black]",
            action: () => {}
        },
    ]

    return (
        <Form formItems={formItems} formButtons={formButtons}/>
    )
}

export default Register