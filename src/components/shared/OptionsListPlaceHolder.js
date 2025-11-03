import OptionPlaceHolder from "./OptionPlaceHolder";

function OptionsListPlaceHolder() {
  return (
    <div className="space-y-4">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <OptionPlaceHolder key={index} />
        ))}
    </div>
  );
}

export default OptionsListPlaceHolder;
