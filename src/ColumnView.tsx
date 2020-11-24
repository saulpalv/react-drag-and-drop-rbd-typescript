
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
const TaskList = styled.div`
padding: 8px;
`

const ColumnView: React.FC<{ column: ColumnItem, tasks: TaskItem[] }> =
  ({ column, tasks }) => {

    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id} >
          {(provided) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {tasks.map((task, index) => <TaskView key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }

export default ColumnView
