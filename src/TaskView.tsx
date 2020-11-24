
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { initialData, TaskItem } from './initialData'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border : 1px solid lightgrey;
border-radius : 2px;
padding: 8px;
margin-bottom : 8px;
background-color :white;
`

const TaskView: React.FC<{ key: string, task: TaskItem, index: number }> =
  ({ key, task, index }) => {
    const [state, setState] = useState(initialData)

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
