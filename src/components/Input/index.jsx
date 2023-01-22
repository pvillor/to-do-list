import { Container, InputContainer } from './styles'

const Input = ({ icon: Icon, register, name, ...rest }) => {
    return (
        <Container>
            <InputContainer>
                {Icon && <Icon size={20} />}
                <input {...register(name)} {...rest} />
            </InputContainer>
        </Container>
    )
}

export default Input