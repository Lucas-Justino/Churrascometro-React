interface IProps {
    register: any;
    name: string;
    type: string;
    error: any;
    
}

const Input = ({register, name, ...rest}:IProps) =>{
    return(
        <input 
        {...rest}
        {...register(name)}/>
    );
}

export {Input};