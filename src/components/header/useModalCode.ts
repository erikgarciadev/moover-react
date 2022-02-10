import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface Form {
  code: string;
}

const initForm = {
  code: "",
};

export default function UseModalCode(onClose: () => void) {
  const [form, setForm] = useState<Form>(initForm);
  const [error, setError] = useState<Form>(initForm);
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!validate()){
        return
    }
    if(!validateCode(form.code)){
        setError({
            code: 'El código es inválido'
        })
        return
    }
    navigate(`/package/${form.code}`)
    handleClose()
  }

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

  const handleClose = () => {
      setForm(initForm)
      onClose()
  }

  const validate = (): boolean => {
    let _error: any = {};
    for (const [key, value] of Object.entries(form)) {
      if (value === "") {
        _error = {
          ..._error,
          [key]: "El código es requerido",
        };
      }
    }
    setError({
      ...error,
      ..._error,
    });
    return Object.keys(_error).length > 0 ? false : true;
  };

  const validateCode= (code: string) => {
      if(code !== "PRUEBA1" && code !== "PRUEBA2" && code !== "PRUEBA3"){
        return false
      }
      return true
  }

  return {
      form,
      error,
      handleSubmit,
      handleChange,
      handleClose
  }
}
