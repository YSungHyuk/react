import GuestView from "./GuestView";
import UserInfoView from "./UserInfoView";
import UserView from "./UserView";

export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return null;
    // return (
    //   <>
    //     <UserView />
    //     <UserInfoView />
    //   </>
    // );
  } else {
    return <GuestView />;
  }
}
