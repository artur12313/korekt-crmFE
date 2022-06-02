import { Component } from "react";
import ProfileInformation from "../components/ProfileInformation";
import PasswordUpdate from "../components/PasswordUpdate";
import TwoFactorAuthorization from "../components/TwoFactorAuthorization";

class Profile extends Component
{
    render() {
        return (
            <div className="profile">
                <div>
                    <ProfileInformation />
                </div>
                <div>
                    <PasswordUpdate />
                </div>
                <div>
                    <TwoFactorAuthorization />
                </div>
            </div>

        );
    }
}

export default Profile;