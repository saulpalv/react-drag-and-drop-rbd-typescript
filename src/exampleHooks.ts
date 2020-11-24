import { DragStart, DragUpdate, DropResult } from "react-beautiful-dnd"

const start: DragStart = {
    draggableId: 'task-1',
    type: 'TYPE',
    mode: 'FLUID',
    source: {
        droppableId: 'column-1',
        index: 0
    }
}

const update: DragUpdate = {
    ...start,
    destination: {
        droppableId: 'column-1',
        index: 1
    }
}

const result: DropResult = {
    ...update,
    reason: 'DROP'
} 