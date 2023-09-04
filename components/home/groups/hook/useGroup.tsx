import { useState } from "react";
import { GroupData } from "../GroupsState";

const useGroup = (groupsProp: GroupData[]) => {
  const [groups, setGroups] = useState(groupsProp);

  const checkCopied = (text: string, result: boolean, id: string) => {
    if (result) {
      const groupsNew = groups.map((group) => {
        if (group.id === id) {
          group.isCopied = true;
        } else {
          group.isCopied = false;
        }

        return group;
      });

      setGroups(groupsNew);
    }
  };

  return { groups, checkCopied };
};

export default useGroup;
