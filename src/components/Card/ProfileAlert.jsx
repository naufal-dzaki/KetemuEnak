import { Banner, Button } from "flowbite-react";
// import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const ProfileAlert = () => {
  return (
    // <div className="flex px-5 py-4 items-center bg-gray-200 max-w-[620px] rounded-md">
    //   <ExclamationCircleIcon className="w-8 h-8 text-yellow-300 mr-5" />
    //   <p className="text-base mr-6 text-gray-500 grow">
    //     Profile yang menarik akan meningkatkan peluang bisnis kamu
    //   </p>
    //   <button className="bg-gray-50 px-4 py-3 rounded-md font-bold w-44">
    //     Lengkapi Profile
    //   </button>
    // </div>
    <Banner>
      <div className="flex w-full flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
        <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
          <a
            href="https://flowbite.com/"
            className="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
            <span className="self-center whitespace-nowrap text-lg font-semibold font-ke-brand dark:text-white">
              Ketemu Enak
            </span>
          </a>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Profile yang menarik akan meningkatkan peluang bisnis kamu
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <Button href="#" size="sm">
            Lengkapi Profile
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default ProfileAlert;
