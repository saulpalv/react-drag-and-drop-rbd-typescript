
import React from 'react'
import styled from '@emotion/styled'
import { TaskItem } from './initialData'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div<{ isDragging: boolean }>`
border : 1px solid lightgrey;
border-radius : 2px;
padding: 8px;
margin-bottom : 8px;
background-color : ${props => props.isDragging ? 'lightgreen' : 'white'};
`

const TaskView: React.FC<{ task: TaskItem, index: number }> =
  ({ task, index }) => {
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}>
            {task.content}
          </Container>
        )}
      </Draggable>
    )
  }

export default TaskView
