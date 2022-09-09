import { Fragment } from "react";
import useGetRandomUserData from "../../hooks/useRandomUser";

const Profile = (props: any) => {
  const { data } = props;
  console.log(data);

  //   const res = useGetRandomUserData("https://randomuser.me/api");
  //   console.log(res);

  return (
    <div>
      {data != undefined &&
        data.length > 0 &&
        data.map((item: any, index: any) => {
          return (
            <Fragment key={index}>
              <h2>{`Name: ${item.name.title} ${item.name.first} ${item.name.last}`}</h2>
              <h2>{`Gender: ${item.gender}`}</h2>
              <h2>{`Phone Number: ${item.phone}`}</h2>
              <img
                src={item.picture.medium}
                alt=""
                style={{
                  borderRadius: "50%",
                }}
              />
            </Fragment>
          );
        })}
    </div>
  );
};
export default Profile;
