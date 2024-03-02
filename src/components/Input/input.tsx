interface IProps {
    register: any;
    name: string;
}

const Input = ({register, name, ...rest}:IProps) =>{
    return(
        <input 
        {...rest}
        {...register(name)}/>
    );
}