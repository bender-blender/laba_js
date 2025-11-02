import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit", // ✅ проверка только при нажатии на кнопку "Отправить"
  });

  // Функция обработки данных формы
  const onSubmit = (data) => {
    console.log("Form data:", JSON.stringify(data));

    // ✅ Сброс с новыми значениями
    reset({
      login: "",
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* LOGIN */}
        <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Логін повинен містити лише латинські літери!",
              },
            })}
            placeholder="Введіть логін"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors.login.message}</p>}
        </div>

        {/* FIRST NAME */}
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів — 5",
              },
            })}
            placeholder="Введіть ім’я"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        {/* LAST NAME */}
        <label>
          Last Name:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів — 5",
              },
              maxLength: {
                value: 25,
                message: "Максимальна кількість символів — 25",
              },
            })}
            placeholder="Введіть прізвище"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <input type="submit" value="Відправити" />
      </form>
    </div>
  );
}

export default App;
