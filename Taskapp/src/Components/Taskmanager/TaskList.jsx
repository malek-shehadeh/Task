import React, { useState } from "react";
import { useTaskContext } from "../../hooks/useTaskContext";
import { Button } from "../../ui/index";
import { Edit2, Trash2 } from "lucide-react";
import Alert from "../../ui/Alert";

const TaskList = () => {
  const { tasks, setEditingTask, deleteTask } = useTaskContext();
  const [deleteDialog, setDeleteDialog] = useState({
    isOpen: false,
    taskId: null,
  });

  const handleDelete = (taskId) => {
    setDeleteDialog({ isOpen: true, taskId });
  };

  const handleConfirmDelete = () => {
    if (deleteDialog.taskId) {
      deleteTask(deleteDialog.taskId);
    }
  };

  const handleCloseDialog = () => {
    setDeleteDialog({ isOpen: false, taskId: null });
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <h3 className="font-medium">{task.name}</h3>
            <p className="text-sm text-gray-600">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">Priority: {task.priority}</p>
            {task.description && (
              <p className="text-sm mt-2">{task.description}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setEditingTask(task)}>
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button variant="danger" onClick={() => handleDelete(task.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}

      <Alert
        isOpen={deleteDialog.isOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default TaskList;
