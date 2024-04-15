import { useUIStore } from "@/common/infrastructure/store";
import { useMemo, useState } from "react";

const initialValues = {
  username: "",
  password: "",
  code: "",
};

export const useLoginForm = () => {
  const [form, setForm] = useState(initialValues);
  const { configPages } = useUIStore();

  const onChangeForm = (value, key) => {
    setForm({ ...form, [key]: value });
  };

  const authMethod = useMemo(() => {
    const method = configPages?.auth?.login?.authMethod;
    return method;
  }, [configPages]);

  return {
    authMethod,
    form,
    onChangeForm,
  };
};
