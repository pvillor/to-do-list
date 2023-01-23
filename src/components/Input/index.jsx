import { Container, InputContainer } from './styles'

const Input = ({ icon: Icon, register, name, setUpdatedDescription, ...rest }) => {
    return (
        <Container>
            <InputContainer>
                {Icon && <Icon size={20} />}
                <input {...register(name)} onChange={(e) => setUpdatedDescription(e.target.value)} {...rest} />
            </InputContainer>
        </Container>
    )
}

export default Input