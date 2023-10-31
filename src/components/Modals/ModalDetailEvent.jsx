import { Button, Modal, Tooltip } from "flowbite-react";
import { BsEnvelopePaper, BsCalendar3 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const ModalDetailEvent = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      dismissible
      show={openModal === true}
      onClose={() => setOpenModal(false)}>
      <Modal.Header>This is the title</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col px-10 w-full">
          <img
            src="https://www.flowbite-react.com/images/blog/image-1.jpg"
            alt=""
            className="w-96 mb-5 self-center rounded-lg"
          />
          <div className="flex flex-wrap gap-x-5 mb-7 justify-center">
            <Tooltip content="Batas Tanggal Pendaftaran" placement="bottom">
              <div className="flex gap-x-1 items-center content-center">
                <BsEnvelopePaper />
                <p className="font-normal text-gray-700">2 Nov 2023</p>
              </div>
            </Tooltip>
            <Tooltip content="Waktu Pelaksanaan" placement="bottom">
              <div className="flex gap-x-1 items-center content-center">
                <BsCalendar3 />
                <p className="font-normal text-gray-700">3 Nov 2023</p>
              </div>
            </Tooltip>
            <Tooltip content="Lokasi" placement="bottom">
              <div className="flex gap-x-1 items-center content-center">
                <IoLocationOutline />
                <p className="font-normal text-gray-700">
                  Summarecon Mall Serpong
                </p>
              </div>
            </Tooltip>
          </div>
          <p className="font-normal text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            dolorem cum, at cupiditate beatae nihil dolore, delectus, dolores
            quam nisi cumque rem officiis nesciunt dolor architecto dignissimos
            excepturi. Distinctio aliquid quidem, nulla repellendus ut
            voluptates. Cumque vero repudiandae molestias odit esse laboriosam
            sint dolorem labore, nulla harum architecto consectetur dignissimos
            praesentium natus. Facilis voluptatem error nostrum ipsam ullam quas
            tenetur, asperiores dolorem laborum aperiam ad aspernatur id
            voluptate, qui enim architecto in et minus deserunt! Corrupti quasi
            molestias, ad perferendis voluptatibus nisi deserunt quibusdam sequi
            totam nesciunt modi! Magni corporis ad aliquam neque numquam in
            praesentium velit aspernatur quae aliquid?
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Daftar</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Batal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDetailEvent;
