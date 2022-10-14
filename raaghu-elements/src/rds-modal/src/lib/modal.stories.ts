import { Story, Meta } from '@storybook/angular'
import { RdsModalComponent } from './rds-modal.component';

export default {

  title: 'Elements/Modal',
  component: RdsModalComponent,
  argTypes: {
    modalBackdrop: {
      options: [false, 'static'],
      control: 'radio'
    },
  },
} as Meta;
export const Default: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `<button type="button"  class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#modalId">
  show  Modal
</button>
  <rds-modal  [showModalHeader]="showModalHeader" [showModalFooter]="showModalFooter" [modalBackdrop]="modalBackdrop">
    <div modalheader class="d-flex align-items-center">
      <h5 class="modal-title" id="storybookModal">Title</h5>
      <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
    </div>
    <div modalbody>
      <p>Modal Body
      </p>
    </div>
    <div modalfooter >
      <button type="button"  class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </rds-modal>
`,
});
Default.parameters = { controls: { include: ['showModalFooter', 'showModalHeader', 'modalBackdrop'] } };
Default.args = {
  showModalFooter: true,
  showModalHeader: true,
  modalBackdrop: false
};
export const verticallyCenterd: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `<button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
          Show Centered Modal
        </button>
          <rds-modal  [showModalHeader]="showModalHeader" [verticallyCenterd]="verticallyCenterd" [modalBackdrop]="'static'" [showModalFooter]="showModalFooter">
            <div modalheader class="d-flex align-items-center">
              <h5 class="modal-title" id="storybookModal">Title</h5>
              <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div modalbody>
              <p>Modal Content</p>
            </div>
            <div modalfooter >
              <button type="button"  class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
              <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
            </div>
          </rds-modal>
      `,
});
verticallyCenterd.parameters = { controls: { include: ['showModalFooter', 'showModalHeader', 'verticallyCenterd'] } };
verticallyCenterd.args = {
  showModalFooter: true,
  showModalHeader: true,
  verticallyCenterd: true
};
export const staticBackdropModal: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `<button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
          Backdrop Modal
        </button>
          <rds-modal [showModalHeader]="showModalHeader" [modalBackdrop]="modalBackdrop" [showModalFooter]="showModalFooter">
            <div modalheader class="d-flex align-items-center">
              <h5 class="modal-title" id="storybookModal">Title</h5>
              <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div modalbody>
              <p>Modal Content</p>
            </div>
            <div modalfooter >
              <button type="button"  class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
              <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
            </div>
          </rds-modal>
      `,
});
staticBackdropModal.parameters = { controls: { include: ['showModalFooter', 'showModalHeader', 'modalBackdrop'] } };
staticBackdropModal.args = {
  showModalFooter: true,
  showModalHeader: true,
  modalBackdrop: 'static',
};
export const longContentModal: Story<RdsModalComponent> = (args) => ({
  props: args,
  template:
    `<button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalId">
Long Content Modal
</button>
<rds-modal [showModalHeader]="showModalHeader" [modalBackdrop]="modalBackdrop" [showModalFooter]="showModalFooter" [scrollable]="scrollable">
  <div modalheader class="d-flex align-items-center">
    
    <h5 class="modal-title" id="storybookModal">Title</h5>
    <button style="float:right" type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
  </div>
  <div modalbody>
  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal
  </p>  </div>
  <div modalfooter >
    <button type="button"  class="btn btn-secondary m-1" data-bs-dismiss="modal">Close</button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">Save changes</button>
  </div>
</rds-modal>
`,
});
longContentModal.parameters = { controls: { include: ['showModalFooter', 'showModalHeader', 'scrollable', 'modalBackdrop'] } };
longContentModal.args = {
  showModalFooter: true,
  showModalHeader: true,
  scrollable: true,
  modalBackdrop: 'static',

};
