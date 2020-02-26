import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Moment from "react-moment";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {" "}
              {mission_name}{" "}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 
NOTES:
({ launch: { flight_number, mission_name, launch_date_local, launch_success} } and {mission_name}) is the same as using (props) and {props.launch.mission_name}
This is the destructured version so you don't have to use props.launch every time
*/
