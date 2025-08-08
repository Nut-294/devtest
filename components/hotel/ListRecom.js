import CardRecom from "./CardRecom";

const ListRecom = () => {
  return (
    <div className="w-10 sm:w-full grid grid-rows-1  grid-flow-col gap-4 sm:grid-cols-1 sm:auto-cols-auto sm:grid-flow-row sm:overflow-x-visible">
      <CardRecom />
      <CardRecom />
      <CardRecom />
      <CardRecom />
      <CardRecom />
      <CardRecom />
    </div>
  );
};
export default ListRecom;
