import { FiClipboard } from 'react-icons/fi'
import { Container } from './styles'
import Button from '../Button'

const Card = ({ title, onClick, isCompleted = false, edit = false }) => {
    return isCompleted ? (
        <Container isCompleted={isCompleted}>
            <span>
                <FiClipboard /> {title}
            </span>
        </Container>
        ) : (
        <Container isCompleted={isCompleted} onClick={edit}>
            <span>
                <FiClipboard /> {title}
            </span>
            <hr />
            <Button onClick={onClick}>Concluir</Button>
        </Container>
        )
    }

export default Card