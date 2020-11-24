
import React from 'react'
import styled from '@emotion/styled'
import { ColumnItem, TaskItem } from './initialData'
import TaskView from './TaskView'
import { Droppable } from 'react-beautiful-dnd'


const Container = styled.div`
margin : 8px;
border : 1px solid lightgrey;
border-radius: 2px;
`
const Title = styled.h3`
padding: 8px;
`
const TaskList = styled.div<{ isDraggingOver: boolean }>`
padding: 8px;
background-color : ${props => props.isDraggingOver ? 'skyblue' : 'white'};
`

const ColumnView: React.FC<{ column: ColumnItem, tasks: TaskItem[] }> =
  ({ column, tasks }) => {

    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id} >
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}>
              {tasks.map((task, index) => <TaskView key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }

export default ColumnView
