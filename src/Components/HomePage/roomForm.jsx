import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="Room"
        {...register("Room", { required: true, max: 4, min: 0 })}
      />
      <input
        type="number"
        placeholder="Adults"
        {...register("Adults", { required: true, max: 4, min: 1 })}
      />
      <input
        type="number"
        placeholder="Kids"
        {...register("Kids", { required: true, max: 5, min: 1 })}
      />

      <input type="submit" />
    </form>
  );
}
