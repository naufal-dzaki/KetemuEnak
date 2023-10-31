import { Card, Avatar, Button } from "flowbite-react";
import { CustomTheme } from "../../themes/theme";
import { useState } from "react";
import ModalDetailSeller from "../Modals/ModalDetailSeller";

const SellerCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Card theme={CustomTheme.card}>
      <div className="flex items-center">
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
      <p className="text-base text-gray-700 line-clamp-4 text-justify mb-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sint
        praesentium, corrupti tempore molestiae, fuga officia sit est a, eveniet
        repellat! Incidunt, quidem. Explicabo, dolorem, culpa quis a nobis
        ducimus veritatis dolores atque sequi natus exercitationem voluptatem,
        eligendi illo labore minima pariatur eveniet ab perspiciatis dignissimos
        ad tempore qui animi tenetur! Nihil officiis adipisci nesciunt! Aliquid
        maxime, mollitia debitis in temporibus labore numquam quis consequuntur
        error deleniti laudantium voluptatem nemo non perspiciatis porro
        necessitatibus soluta doloribus voluptate, quidem eos. Consequatur atque
        officiis necessitatibus. Maiores optio esse velit aperiam repudiandae
        ducimus? Reprehenderit odio, quod quia aliquam asperiores iusto ipsum
        pariatur vel nobis harum. Aspernatur facilis ducimus deleniti minima
        distinctio voluptates delectus necessitatibus. Excepturi optio aliquid
        quisquam nisi aliquam omnis aperiam suscipit molestiae possimus,
        consectetur, enim, hic inventore veniam reprehenderit sunt! Quo eius
        laborum, adipisci natus id assumenda quae cum inventore ipsum. Veritatis
        expedita, illo dicta neque quia reprehenderit vel accusamus est!
      </p>
      <div className="grid grid-cols-3 gap-x-3">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        <Button color="failure">Tolak</Button>
        <Button color="success">Terima</Button>
      </div>
      <ModalDetailSeller openModal={openModal} setOpenModal={setOpenModal} />
    </Card>
  );
};

export default SellerCard;
