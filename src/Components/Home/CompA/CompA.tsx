import CompB from "../CompB/CompB";

const CompA = ({ data }: { data: string }) => {
  return (
    <div>
      CompA
      <div>
        <CompB data={data} />
      </div>
    </div>
  );
};

export default CompA;
