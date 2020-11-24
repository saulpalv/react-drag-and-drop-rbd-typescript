import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnView from './ColumnView'
import { initialData } from './initialData'

const App: React.FC = () => {
  const [state, setState] = useState(initialData)

  return (
    <DragDropContext
      onDragEnd={(result, provided) => {
        const { destination, source, draggableId } = result
        //Case drop outside DragDropContext
        if (!destination) return
        //Check if destination is diferent
        if (destination.droppableId === source.droppableId &&
          destination.index === source.index) {
          return
        }
        const column = state.columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
          ...column,
          taskIds: newTaskIds
        }

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn
          }
        }

        setState(newState)
      }}
    >
      {state.columnOrder.map(columnId => {
        const column = state.columns[columnId]
        const tasks = column.taskIds.map(taskId => state.tasks[taskId])
        return <ColumnView key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

export default App
