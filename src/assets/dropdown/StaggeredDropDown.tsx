import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
  } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { IconUser, IconUserFilled } from '@tabler/icons-react';
  import { Dispatch, SetStateAction, useState } from "react";
  import { IconType } from "react-icons";
  
  const StaggeredDropDown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="p-8 pb-56 flex items-center justify-center absolute right-0 top-0 z-40">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md dark:text-white cursor-pointer hover:text-yellow-300"
          >
            <span className="font-medium text-sm"><IconUserFilled/></span>
            
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-90%",background: '#0f1012' }}
            className="flex flex-col gap-2 p-2 rounded-lg  shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
            <Option setOpen={setOpen} Icon={FiShare} text="Share" />
            <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
          </motion.ul>
        </motion.div>
      </div>
    );
  };
  
  const Option = ({
    text,
    Icon,
    setOpen,
  }: {
    text: string;
    Icon: IconType;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-gray-800 text-slate-400 hover:text-yellow-300 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default StaggeredDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };