import { Card, Button, Tooltip } from "flowbite-react";
import { useState } from "react";
import { BsCalendar3, BsEnvelopePaper } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import ModalDetailEvent from "../Modals/ModalDetailEvent";
import ConvertDate from "../../utils/ConvertDate";

const EventCard = ({
  img,
  title,
  applyBefore,
  eventDate,
  location,
  desc,
  isApplied,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Card imgSrc={img}>
      <div className="flex flex-col mb-1">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h5>
        <div className="flex flex-wrap gap-y-1 gap-x-5">
          <Tooltip content="Batas Tanggal Pendaftaran" placement="bottom">
            <div className="flex gap-x-2 items-center content-center">
              <BsEnvelopePaper />
              <p className="font-normal text-gray-700">
                {ConvertDate(applyBefore)}
              </p>
            </div>
          </Tooltip>
          <Tooltip content="Waktu Pelaksanaan" placement="bottom">
            <div className="flex gap-x-2 items-center content-center">
              <BsCalendar3 />
              <p className="font-normal text-gray-700">
                {ConvertDate(eventDate)}
              </p>
            </div>
          </Tooltip>
          <Tooltip content="Lokasi" placement="bottom" className="col-span-2">
            <div className="flex gap-x-2 items-center content-center">
              <IoLocationOutline />
              <p className="font-normal text-gray-700">{location}</p>
            </div>
          </Tooltip>
        </div>
      </div>

      <p className="line-clamp-3 text-justify">{desc}</p>

      <div className="grid grid-cols-2 gap-x-3 justify-start">
        <Button color="light" onClick={() => setOpenModal(true)}>
          Detail
        </Button>
        <Button>{isApplied ? "Terdaftar" : "Daftar"}</Button>
      </div>
      <ModalDetailEvent openModal={openModal} setOpenModal={setOpenModal} />
    </Card>
  );
};

export default EventCard;
