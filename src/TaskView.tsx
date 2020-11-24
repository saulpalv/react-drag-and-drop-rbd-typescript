
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
display: flex;
`

const Handle = styled.div`
width : 20px;
height: 20px;
background-color : orange;
border-radius: 4px;
margin-right: 8px;
`

const TaskView: React.FC<{ task: TaskItem, index: number }> =
  ({ task, index }) => {
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}>
            <Handle {...provided.dragHandleProps}>≡</Handle>
            {task.content}
          </Container>
        )}
      </Draggable>
    )
  }

export default TaskView
