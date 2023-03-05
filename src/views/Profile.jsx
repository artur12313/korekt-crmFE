import ProfileInformation from "../components/ProfileInformation";
import PasswordUpdate from "../components/PasswordUpdate";
import TwoFactorAuthorization from "../components/TwoFactorAuthorization";

function Profile() {
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

export default Profile;