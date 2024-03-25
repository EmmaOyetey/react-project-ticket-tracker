import "./Button.scss";

type ButtonProps = {
    label : string;
    style : "inc" | "Dec" | "login";
    onClick: () => void; 
};

const Button = ({label, style} : ButtonProps) => {
    //console.log(props.label)
    //const {label, style} = props;
    const buttonStyles = `button button--${style}`
    return <button className ={buttonStyles}>{label}</button>;
};

export default Button;