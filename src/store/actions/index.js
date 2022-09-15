import axios from "axios";
import Swal from "sweetalert2";

export function addUser(input) {
  return (dispatch, getState) => {
    dispatch({
      type: "AddUser",
      payload: input,
    });
  };
}

export function clearUsers() {
    return (dispatch, getState) => {
      dispatch({
        type: "ClearUsers",
        payload: [],
      });
    };
  }

export function getUsers() {
  return (dispatch, getState) => {
    Swal.showLoading();
    axios({
      url: "https://randomuser.me/api",
      method: "get",
    })
      .then(({ data }) => {
        let res = data.results.map((e) => {
          return {
            img: e.picture?.medium ?? "-",
            fullname: `${e.name.title} ${e.name.first} ${e.name.last}`,
            email: e.email ?? "-",
            dob: e.dob?.date ?? null,
            address: e.location?.city ?? "-",
            phone: e.phone ?? "-",
            password: e.login?.password ?? "-",
          };
        });
        dispatch({
          type: "AddUser",
          payload: res[0],
        });
        Swal.close();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Server Error",
        });
      });
  };
}
