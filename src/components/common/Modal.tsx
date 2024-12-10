import { Button, Modal } from 'react-bootstrap';
import { InlineWidget } from 'react-calendly';

type Props = {
  isOpen: boolean;
  onToggleModal: () => void;
};

export default function PopUpModal({ isOpen, onToggleModal }: Props) {
  return (
    <Modal
      show={isOpen}
      onHide={onToggleModal}
      backdrop='static'
      centered={true}
      keyboard={false}
      size='xl'
      // className='modal-dialog modal-lg'
      onBackdropClick={onToggleModal}>
      <Modal.Header closeButton>
        <Modal.Title className='text-primary font-monospace display-6'>
          Schedule a meeting with us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-primary'>
        <InlineWidget url='https://calendly.com/finnoaq/30min' />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onToggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
