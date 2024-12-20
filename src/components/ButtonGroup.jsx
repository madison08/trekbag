import Button from './Button';

export default function ButtonGroup({
  onAllRemove,
  onResetToInitial,
  onMarkAllCompleted,
  onMarkAllIncompleted,
}) {
  const handleAllRemove = () => {
    onAllRemove();
  };

  const handleResetToInitial = () => {
    onResetToInitial();
  };
  return (
    <section className="button-group">
      <Button handleFunction={onMarkAllCompleted} type={'secondary'}>
        Mark all as complete
      </Button>
      <Button handleFunction={onMarkAllIncompleted} type={'secondary'}>
        Mark all as incomplete
      </Button>
      <Button handleFunction={handleResetToInitial} type={'secondary'}>
        Reset to initial
      </Button>
      <Button handleFunction={handleAllRemove} type={'secondary'}>
        Remove all items
      </Button>
    </section>
  );
}
