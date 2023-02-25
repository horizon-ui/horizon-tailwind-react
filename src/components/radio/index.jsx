const Radio = (props) => {
  const { color, id, name, ...rest } = props;
  return (
    <input
      id={id}
      name={name}
      type="radio"
      className={`before:contet[""] relative h-5 w-5 cursor-pointer appearance-none rounded-full
       border !border-gray-300 transition-all duration-[0.2s] before:absolute before:top-[3px]
       before:left-[50%] before:h-3 before:w-3 before:translate-x-[-50%] before:rounded-full before:transition-all before:duration-[0.2s] dark:!border-gray-800
       ${
         color === "red"
           ? "checked:!border-red-500 checked:before:!bg-red-500 dark:checked:!border-red-400 dark:checked:before:!bg-red-400"
           : color === "blue"
           ? "checked:!border-blue-500 checked:before:!bg-blue-500 dark:checked:!border-blue-400 dark:checked:before:!bg-blue-400"
           : color === "green"
           ? "checked:!border-green-500 checked:before:!bg-green-500 dark:checked:!border-green-400 dark:checked:before:!bg-green-400"
           : color === "yellow"
           ? "checked:!border-yellow-500 checked:before:!bg-yellow-500 dark:checked:!border-yellow-400 dark:checked:before:!bg-yellow-400"
           : color === "orange"
           ? "checked:!border-orange-500 checked:before:!bg-orange-500 dark:checked:!border-orange-400 dark:checked:before:!bg-orange-400"
           : color === "teal"
           ? "checked:!border-teal-500 checked:before:!bg-teal-500 dark:checked:!border-teal-400 dark:checked:before:!bg-teal-400"
           : color === "navy"
           ? "checked:!border-navy-500 checked:before:!bg-navy-500 dark:checked:!border-navy-400 dark:checked:before:!bg-navy-400"
           : color === "lime"
           ? "checked:!border-lime-500 checked:before:!bg-lime-500 dark:checked:!border-lime-400 dark:checked:before:!bg-lime-400"
           : color === "cyan"
           ? "checked:!border-cyan-500 checked:before:!bg-cyan-500 dark:checked:!border-cyan-400 dark:checked:before:!bg-cyan-400"
           : color === "pink"
           ? "checked:!border-pink-500 checked:before:!bg-pink-500 dark:checked:!border-pink-400 dark:checked:before:!bg-pink-400"
           : color === "purple"
           ? "checked:!border-purple-500 checked:before:!bg-purple-500 dark:checked:!border-purple-400 dark:checked:before:!bg-purple-400"
           : color === "amber"
           ? "checked:!border-amber-500 checked:before:!bg-amber-500 dark:checked:!border-amber-400 dark:checked:before:!bg-amber-400"
           : color === "indigo"
           ? "checked:!border-indigo-500 checked:before:!bg-indigo-500 dark:checked:!border-indigo-400 dark:checked:before:!bg-indigo-400"
           : color === "gray"
           ? "checked:!border-gray-500 checked:before:!bg-gray-500 dark:checked:!border-gray-400 dark:checked:before:!bg-gray-400"
           : "checked:!border-brand-500 checked:before:!bg-brand-500 dark:checked:!border-brand-400 dark:checked:before:!bg-brand-400"
       } `}
      {...rest}
    />
  );
};

export default Radio;
