import { FiClipboard } from 'react-icons/fi'
import { Container } from './styles'
import Button from '../Button'

const Card = ({ title, onClick }) => {
    return (
        <Container>
            <span>
                <FiClipboard /> {title}
            </span>
            <hr />
            <Button onClick={onClick}>Concluir</Button>
        </Container>
    )
}

export default Card