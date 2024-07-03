import "./scss/loading-ellipsis.scss";

export const LoadingEllipsis = () => {
  return (
    <div className="loading-ellipsis">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
