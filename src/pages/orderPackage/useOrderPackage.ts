import { ChangeEvent, FormEvent, useState } from "react";
import generateRandomCode from "../../utils/generateRandomCode";
import { Order } from "./interfaces";

const initOrder: Order = {
  client_name: "",
  client_address: "",
  recipient_address: "",
  recipient_name: "",
  order_detail: "",
};

export default function useOrderPackage() {
  const [form, setForm] = useState<Order>(initOrder);
  const [error, setError] = useState<Order>(initOrder);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [code, setCode] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!validate()) {
      setLoading(false);
      return;
    }
    setLoading(false);
    setForm(initOrder);
    setOpenModal(true)
    setCode(generateRandomCode())
    
  };

  const validate = (): boolean => {
    let _error: any = {};
    for (const [key, value] of Object.entries(form)) {
      if (value === "") {
        _error = {
          ..._error,
          [key]: "error",
        };
      }
    }
    setError({
      ...error,
      ..._error,
    });
    return Object.keys(_error).length > 0 ? false : true;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  return {
    form,
    error,
    loading,
    handleSubmit,
    handleChange,
    openModal,
    setOpenModal,
    code
  };
}
