import { DropResult } from "react-beautiful-dnd"

const resultExample: DropResult = {
    draggableId: 'task-1',
    type: 'TYPE',
    reason: 'DROP',
    mode: 'FLUID',
    source: {
        droppableId: 'column-1',
        index: 0
    },
    destination: {
        droppableId: 'column-1',
        index: 1
    }
}