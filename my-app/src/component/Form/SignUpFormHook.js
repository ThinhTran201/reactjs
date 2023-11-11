import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// using react hook form
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const StyledTotal = styled.form`
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  .name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
  .loading {
    width: 20px;
    height: 20px;
    border: 2px solid white;
    /* border-left: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 2px solid white; */
    border-top: transparent;
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
    margin: 0 auto;
  }
  input {
    padding: 16px;
    border: 1px solid gray;
    border-radius: 6px;
  }
  .form-button {
    width: 100%;
    padding: 20px;
    font-size: 15px;
    font-weight: bold;
    background-color: blue;
    color: white;
    cursor: pointer;
    border-radius: 8px;
  }
  .last-name {
    display: flex;
    flex-direction: column;
    gap: 8px; // khoản trống giữa
    margin-bottom: 20px;
  }
`;
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; // khoản trống giữa
  margin-bottom: 20px;
  .error {
    color: #ef4444;
    font-size: 0.875rem;
  }
  .errors {
    color: #ef4444;
    font-size: 0.875rem;
  }
`;
const schemaValidation = Yup.object({
  firstName: Yup.string().required().max(10),
});
const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields }, // là detructering của formState gọi là detructering hay viết là: formState.errors
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
    // setFocus: nó sẽ focus vào 1 input nào đó mà ta setup
    // resetField: đôi khi ta không muốn reset hết tất cả mà chỉ 1 trường nào đó thôi thì ta dùng resetField
    // reset: sau khi submit thàng công thì ta reset, sẽ được gọi trong isValid(không có lỗi nào) trong onSubmit
    // isSubmitTing: đang submit . nó sẽ chạy trong onSubmit nên ta sẽ set up nó trong onSubmit
    // isValid: là trạng thái không có lỗi nào(đôi khi ta truyền vào value rồi nhưng isValid vẫn false nên ta phải truyền mode)
    // isDirty: khi ta chưa chạm vào bất kỳ trường nào trong form thì sẽ false còn khi ta nhập value vào bất kỳ 1 trường sẽ chuyển sang true
    // dirtyField: trả về 1 object các trường mà ta đã chạm vào( ví dụ: firstName:true khi đã input vào firstName)
    // watch: để kiểm tra xem trường đó có thay đổi giá trị hay không
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  }); // object forms -> {register, handleSubmit}
  console.log("formState ~ dirtyField", dirtyFields);
  // console.log("formState ~ isSubmitting", isSubmitting); // ban đầu sẽ ở trạng thái false, khi submit sẽ chuyển sang true và sang false lại ngay(chỉ true khi đang load submit)
  const watchShowAge = watch("showAge", false);
  console.log("formState ~ watchShowAge", watchShowAge);
  const onSubmit = (values) => {
    if (isValid) {
      console.log("Send data to backend");
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    return new Promise((resolve) => {
      // sau khi nhập value vào input và nhấn submit thì trong 5s sẽ là isSubmitting(true) sẽ hiện loading và 5s resolve
      // bắt buộc phải có new promise((resolve)) thì mới setTimeout được, nếu không thì sẽ submit ngay khi ta nhấn
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 5000);
    });
    // tạo function onsubmit
  };
  useEffect(() => {
    setFocus("lastName"); // khi ta vào sẽ thấy nó tự động focus ở input lastName
  });
  const handleSetDemoData = () => {
    setValue("firstName", "tran");
    setValue("lastName", "thinh");
    setValue("email", "thinh@gmail.com");
  };
  return (
    <StyledTotal onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <StyledForm>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          // name="firstName"
          placeholder="Enter your first name"
          // defaultValue="Evondev" // giá trị mặc định của values trong input khi ta chưua nhập gì vào
          {...register("firstName")}
          // {...register("firstName", {
          //   // tạo các bắt lỗi trong input
          //   required: true, // có nghĩa là bắt buộc phải nhập
          //   maxLength: 10, // max là 10 ký tự
          // })} // register bắt buộc điền name:firstName, lastName,...
        />
        {errors?.firstName && ( // nếu có errors và có firstName và có type = `required` thì hiện div errors ở dưới
          <div className="error">{errors.firstName?.message}</div>
        )}
        {/* {errors.firstName && errors.firstName.type === `maxLength` && (
          <div className="error">Must be 10 character or less</div>
        )} */}
      </StyledForm>

      <div className="last-name">
        <label htmlFor="lastName">Lastname</label>
        {/* <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          {...register("lastName")}
        /> */}
        <MyInput
          name="lastName"
          id="lastName"
          placeholder="Please enter your last name"
          control={control}
        ></MyInput>
      </div>
      <div className="name">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
        <div className="">
          <input type="checkbox" {...register("showAge")} />
          {watchShowAge && (
            <input
              type="number"
              name=""
              id=""
              placeholder="Please enter your age"
            />
          )}
        </div>
      </div>

      <button type="submit" className="form-button">
        {isSubmitting ? <div className="loading"></div> : "Submit"}
      </button>
      <div>
        {/* khi ta nhấn vào button này thì nó sẽ tự động điền vào các trường để demo cho người dùng biết */}
        <button className="button" onClick={handleSetDemoData}>
          Demo data
        </button>
      </div>
    </StyledTotal>
  );
};
// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (  // khi dùng control sẽ render ra 1 cái gì đó mà ở đây là input
//         <input className="input" type="text" {...field} {...props}></input>
//       )}
//     ></Controller>
//   );
// };
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defauldValue: "",
  }); // phải cso defaultValue: "" để không bị lỗi
  console.log(field);
  return <input className="input" type="text" {...field} {...props}></input>; // ...props là những cái props ta điền vào(control, name)
};
export default SignUpFormHook;
