import { DraggableStateSnapshot, DroppableStateSnapshot } from "react-beautiful-dnd"

const draggableSnapshot: DraggableStateSnapshot = {
    isDragging: true,
    draggingOver: 'column-1',
    isDropAnimating: true
}

const droppableSnapshot: DroppableStateSnapshot = {
    isDraggingOver: true,
    draggingOverWith: 'task-1',
    isUsingPlaceholder: true
}
