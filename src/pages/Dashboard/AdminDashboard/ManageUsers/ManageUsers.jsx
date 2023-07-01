import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleRoleUpdate = (user, role) => {
    const updatedUser = {
      role: role,
    };

    axiosSecure.patch(`/users/role/${user._id}`, updatedUser).then((data) => {
      if (data.data.modifiedCount > 0) {
        refetch();
        Swal.fire(
          "Done!",
          `The role of ${user.name} has been updated`,
          "success"
        );
      }
    });
  };
  return (
    <div className="w-full xl:w-11/12 mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Total Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="text-gray-500 font-semibold table-sm md:table-md lg:table-lg w-full mt-5 rounded-lg">
          <thead className="border-b-2">
            <tr>
              <th className="text-start uppercase">No.</th>
              <th className="text-start uppercase">Name</th>
              <th className="text-start uppercase">Email</th>
              <th className="text-start uppercase">Role</th>
              <th className="text-start uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b-2">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex gap-2">
                  <button
                    disabled={user.role === "user" ? true : false}
                    onClick={() => handleRoleUpdate(user, "user")}
                    className="btn btn-accent text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0"
                  >
                    Make User
                  </button>
                  <button
                    disabled={user.role === "admin" ? true : false}
                    onClick={() => handleRoleUpdate(user, "admin")}
                    className="btn btn-accent text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
