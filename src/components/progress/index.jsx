const Progress = (props) => {
  const { value, color, width } = props;
  return (
    <div
      className={`h-2 ${
        width ? width : "w-full"
      } rounded-full bg-gray-200 dark:bg-navy-700`}
    >
      <div
        className={`flex h-full items-center justify-center rounded-full ${
          color === "red"
            ? "bg-red-500 dark:bg-red-400"
            : color === "blue"
            ? "bg-blue-500 dark:bg-blue-400"
            : color === "green"
            ? "bg-green-500 dark:bg-green-400"
            : color === "yellow"
            ? "bg-yellow-500 dark:bg-yellow-400"
            : color === "orange"
            ? "bg-orange-500 dark:bg-orange-400"
            : color === "teal"
            ? "bg-teal-500 dark:bg-teal-400"
            : color === "navy"
            ? "bg-navy-500 dark:bg-navy-400"
            : color === "lime"
            ? "bg-lime-500 dark:bg-lime-400"
            : color === "cyan"
            ? "bg-cyan-500 dark:bg-cyan-400"
            : color === "pink"
            ? "bg-pink-500 dark:bg-pink-400"
            : color === "purple"
            ? "bg-purple-500 dark:bg-purple-400"
            : color === "amber"
            ? "bg-amber-500 dark:bg-amber-400"
            : color === "indigo"
            ? "bg-indigo-500 dark:bg-indigo-400"
            : color === "gray"
            ? "bg-gray-500 dark:bg-gray-400"
            : "bg-brand-500 dark:bg-brand-400"
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
