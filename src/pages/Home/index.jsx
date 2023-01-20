import { useForm } from "react-hook-form"
import { Container, InputContainer, TasksContainer } from "./styles"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FiEdit2 } from 'react-icons/fi'
import Card from "../../components/Card"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import api from '../../services/api'

const Home = () => {
    const [tasks, setTasks] = useState([])
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

    return (
        <Container>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input icon={FiEdit2} placeholder='What needs to be done?' register={register} name='task'/>
                    <Button type='submit'>Adicionar</Button>
                </section>
            </InputContainer>
            <TasksContainer>
                {tasks.map(task => <Card key={task.id} title={task.description} onClick={() => {}}/>)}
            </TasksContainer>
        </Container>
    )
}

export default Home