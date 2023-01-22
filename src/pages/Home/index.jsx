import { useForm } from "react-hook-form"
import { CloseModal, Container, InputContainer, TasksContainer } from "./styles"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FiEdit2, FiEdit3, FiX } from 'react-icons/fi'
import Card from "../../components/Card"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import api from '../../services/api'
import Modal from "../../components/Modal"

const Home = () => {
    const [tasks, setTasks] = useState([])
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit } = useForm()

    const loadTasks = () => {
        api.get('/tasks').then(response => setTasks(response.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        loadTasks()
    }, [])

    const onSubmit = ({ task }) => {
        if(!task) {
            return toast.error('Adicione uma descrição à tarefa')
        }

        api.post('/tasks', {
            description: task
        }).then(response => {
            loadTasks()
            toast.success('Tarefa adicionada!')
        }).catch(err => toast.error('Tarefa já existe'))
    }

    const completedTask = (id) => {
        api.patch(`/tasks/${id}`, { completed: true }).then(response => {
            toast.success('Você concluiu uma tarefa!')
            loadTasks()
        })
    }

    const updateTask = (id, description) => {
        api.patch(`/tasks/${id}`, { description: description }).then(response => {
            toast.success('Tarefa atualizada!')
            loadTasks()
        })
    }

    return edit ? (
        <>
        <Modal icon={FiEdit3} register={register} name='task' setEdit={setEdit}/>
        </>
    ) : (
        <Container>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input icon={FiEdit2} placeholder='O que precisa ser feito?' register={register} name='task'/>
                    <Button type='submit'>Adicionar</Button>
                </section>
            </InputContainer>
            <TasksContainer>
                {tasks.map(task => <Card key={task.id} title={task.description} edit={() => setEdit(true)} onClick={() => completedTask(task.id)} isCompleted={task.completed}/>)}
            </TasksContainer>
        </Container>
        )

}

export default Home