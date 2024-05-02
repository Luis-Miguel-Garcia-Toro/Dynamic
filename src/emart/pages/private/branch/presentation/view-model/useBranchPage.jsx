import { useAuthStore } from "@/common/infrastructure/store/auth.store";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchGetBranches } from "../../infrastructure/branch-repository";

export const useBranchPage = () => {
  const [branchList, setBranchList] = useState([]);
  const [isLoadingBranches, setIsLoadingBranches] = useState(true);

  const { user } = useAuthStore();
  const location = useLocation();
  const { business } = location.state || {};
  const { business: businessUnit } = useParams();

  const getBranchList = useCallback(async () => {
    if (!user || !user.nit) return;
    try {
      setIsLoadingBranches(true);
      const response = await fetchGetBranches({
        nit: user.nit,
        business: businessUnit,
      });
      setBranchList(response);
      setIsLoadingBranches(false);
    } catch (error) {
      setBranchList([]);
      setIsLoadingBranches(false);
    }
  }, [businessUnit, user]);

  useEffect(() => {
    getBranchList();
  }, [getBranchList]);

  return {
    branchList,
    business,
    isLoadingBranches,
  };
};
