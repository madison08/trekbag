import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function SideBar({
  handleAddItem,
  handleAllRemove,
  handleResetToInitial,
  handleMarkAllCompleted,
  handleMarkAllIncompleted,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} onAllRemove={handleAllRemove} />

      <ButtonGroup
        onAllRemove={handleAllRemove}
        onResetToInitial={handleResetToInitial}
        onMarkAllCompleted={handleMarkAllCompleted}
        onMarkAllIncompleted={handleMarkAllIncompleted}
      />
    </div>
  );
}
