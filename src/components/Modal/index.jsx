import { CloseModal, Container, EditContainer } from './styles'
import Input from '../Input'
import Button from '../Button'

const Modal = ({ icon: Icon, register, name, setEdit, onSubmit, setUpdatedDescription, ...rest }) => {
    return (
        <Container>
            <EditContainer onSubmit={onSubmit}>
                <CloseModal onClick={() => setEdit(false)}>X</CloseModal>
                <section>
                    <Input icon={Icon} placeholder='Novo nome de tarefa' setUpdatedDescription={setUpdatedDescription} register={register} name={name}/>
                    <Button type='submit'>Editar</Button>
                </section>
            </EditContainer>
        </Container>
    )
}

export default Modal