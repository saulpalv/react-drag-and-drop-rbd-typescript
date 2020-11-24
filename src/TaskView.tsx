
import React from 'react'
import styled from '@emotion/styled'
import { TaskItem } from './initialData'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border : 1px solid lightgrey;
border-radius : 2px;
padding: 8px;
margin-bottom : 8px;
background-color :white;
`

const TaskView: React.FC<{ task: TaskItem, index: number }> =
  ({ task, index }) => {

    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            {task.content}
          </Container>
        )}
      </Draggable>
    )
  }

export default TaskView
