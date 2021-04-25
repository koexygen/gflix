import "./Loading.scss";

const Loading = ({ profileImg }) => {
  return (
    <div className="spinner">
      <div>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default Loading;
