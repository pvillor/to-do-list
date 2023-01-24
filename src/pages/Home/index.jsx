import { useForm } from "react-hook-form"
import { Container, InputContainer, TasksContainer } from "./styles"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FiEdit2, FiEdit3 } from 'react-icons/fi'
import Card from "../../components/Card"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import api from '../../services/api'
import Modal from "../../components/Modal"

const Home = () => {
    const [tasks, setTasks] = useState([])
    const [edit, setEdit] = useState(false)
    const [task, setTask] = useState({})
    const [updatedDescription, setUpdatedDescription] = useState([])
    const { register, handleSubmit } = useForm()

    const loadTasks = () => {
        api.get('/tasks').then(response => setTasks(response.data)).catch(err => console.log(err))
    }

    const loadTask = (id) => {
        api.get(`/tasks/${id}`).then(response => setTask(response.data)).catch(err => console.log(err))
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

    const updateTask = (id) => {
        api.patch(`/tasks/${id}`, { description: updatedDescription }).then(response => {
            toast.success('Tarefa atualizada!')
            setEdit(false)
            loadTasks()
        }).catch(err => toast.error('Adicione uma descrição à tarefa'))
    }

    const getTaskToEdit = (e) => {
        const taskCard = e.target.id
        const verifyTag = e.target.type

        if(verifyTag === 'button') {
            loadTasks()
        } else {
            loadTask(taskCard)
            setEdit(true)
        }
    }

    return edit ? (
        <>
        <Modal icon={FiEdit3} register={register} name='description' setEdit={setEdit} onSubmit={handleSubmit(() => updateTask(task.id))} setUpdatedDescription={setUpdatedDescription}/>
        </>
    ) : (
        <Container>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <Input icon={FiEdit2} placeholder='O que precisa ser feito?' register={register} name='task' setUpdatedDescription={setUpdatedDescription}/>
                    <Button type='submit'>Adicionar</Button>
                </section>
            </InputContainer>
            <TasksContainer data-testid='tasks-container'>
                {tasks.map(task => <Card key={task.id} title={task.description} edit={(e) => getTaskToEdit(e)} onClick={() => completedTask(task.id)} isCompleted={task.completed} id={task.id}/>)}
            </TasksContainer>
        </Container>
        )

}

export default Home