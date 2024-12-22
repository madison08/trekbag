import Button from './Button';
import { useItemStore } from '../stores/itemStore';

export default function ButtonGroup() {
  const onAllRemove = useItemStore((state) => state.removeAllItems);
  const onMarkAllCompleted = useItemStore((state) => state.markAllCompleted);
  const onMarkAllIncompleted = useItemStore(
    (state) => state.markAllIncompleted
  );
  const onResetToInitial = useItemStore((state) => state.resetToInitial);

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
