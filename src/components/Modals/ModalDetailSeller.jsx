import { Button, Modal, Avatar } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";

const ModalDetailSeller = ({ openModal, setOpenModal }) => {
  return (
    <Modal
      dismissible
      show={openModal === true}
      onClose={() => setOpenModal(false)}>
      <Modal.Header>Detail</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col px-10 w-full ">
          <img
            src="https://www.flowbite-react.com/images/blog/image-1.jpg"
            alt=""
            className="w-96 mb-5 self-center rounded-lg"
          />
          <div className="flex items-center py-4 border-y border-solid border-gray-100 mb-5">
            <Avatar
              img={
                "https://www.flowbite-react.com/images/people/profile-picture-5.jpg"
              }
              theme={CustomTheme.avatar}
              size={"base"}
              rounded
            />
            <div className="flex flex-col ml-4">
              <h3 className="font-medium text-base">Ayam Geprek Mercon</h3>
              <p className="text-gray-500 text-sm">Tanggerang</p>
            </div>
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

export default ModalDetailSeller;
