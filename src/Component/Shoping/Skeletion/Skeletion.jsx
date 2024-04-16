import { Skeleton } from "@mui/material";
import "./Skelition.css";

const Skeletion = () => {
  return (
    <div className="Skeleton">
      <Skeleton variant="rectangular" width={310} height={270} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      <div className="button">
        <Skeleton
          variant="rectangular"
          width={110}
          height={60}
          className="btn1"
        />
        <Skeleton
          variant="rectangular"
          width={110}
          height={60}
          className="btn2"
        />
      </div>
    </div>
  );
};

export default Skeletion;
