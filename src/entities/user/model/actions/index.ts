import { AppThunk } from "box/app/store";
import { $authHost } from "box/shared";
import { setUsers } from "box/entities";

export const getGroupUsers: AppThunk =
  (groupId: number) => async (dispatch) => {
    try {
      const { data } = await $authHost.get("/group/users", {
        params: {
          groupid: groupId,
        },
      });
      dispatch(setUsers(data.data));
    } catch (e) {}
  };
