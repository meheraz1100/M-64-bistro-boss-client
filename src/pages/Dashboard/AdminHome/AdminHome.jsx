import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {

    const { user } = useAuth();

    return (
        <div>
            <h2 className="text-3xl">
                <span>HI, Welcome</span>
                <div className="font-bold">
                    {
                        user?.displayName ? user?.displayName : "Back"
                    }
                </div>
            </h2>
        </div>
    );
};

export default AdminHome;