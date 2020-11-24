import styled from '@emotion/styled'
import React, { useState } from 'react'
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd'
import ColumnView from './ColumnView'
import { initialData } from './initialData'

const Container = styled.div``

const App: React.FC = () => {
  const [state, setState] = useState(initialData)

  return (
    <DragDropContext
      onDragEnd={(result, provided) => onDragEnd(result, provided, state, setState)}>
      <Container>
        {state.columnOrder.map(columnId => {
          const column = state.columns[columnId]
          const tasks = column.taskIds.map(taskId => state.tasks[taskId])
          return <ColumnView key={column.id} column={column} tasks={tasks} />
        })}
      </Container>
    </DragDropContext>
  )
}

export default App


const onDragEnd = (result: DropResult, provided: ResponderProvided, state: any, setState: (val: any) => void): void => {
  const { destination, source, draggableId } = result
  console.log(`dragged draggableId\n` +
    `from ${source.droppableId}(${source.index})\n ` +
    `to ${destination?.droppableId}(${destination?.index})`)

  //Case drop outside DragDropContext
  if (!destination) return
  //Check if column destination is the same
  if (destination.droppableId === source.droppableId &&
    destination.index === source.index) {
    return
  }
  const startColumn = state.columns[source.droppableId]
  const finishColumn = state.columns[destination.droppableId]

  if (startColumn === finishColumn) {
    console.log('on same column')
    const newTaskIdsColumn = Array.from(startColumn.taskIds)
    newTaskIdsColumn.splice(source.index, 1)
    newTaskIdsColumn.splice(destination.index, 0, draggableId)
    const newColumn = {
      ...startColumn,
      taskIds: newTaskIdsColumn
    }
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }
    setState(newState)
  }
  else {
    console.log('on other column')
    const startTaskIds = Array.from(startColumn.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds
    }
    const finishTaskIds = Array.from(finishColumn.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds
    }
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn
      }
    }
    console.log(JSON.stringify(newFinishColumn, null, 4))
    setState(newState)
  }
}

