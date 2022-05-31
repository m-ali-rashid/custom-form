import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import { clr } from "../globals/theme";

interface FormInput {
  name: string;
  email: string;
  password: string;
  user_type: string;
}

const userTypeList = [
  {
    id: 0,
    title: "Developer",
  },
  {
    id: 1,
    title: "Marketer",
  },
];

const RegisterPage = () => {
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });
  const [data, setData] = useState<FormInput>({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });

  const handleValidation = () => {
    // let data: any = { ...data };
    let errors: any = {};
    let formIsValid = true;

    //Name
    if (data["name"].length === 0) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty";
    }
    //Email
    if (data["email"].length === 0) {
      formIsValid = false;
      errors["email"] = "Email cannot be empty";
      // eslint-disable-next-line
    } else if (!data.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      formIsValid = false;
      errors["email"] = "Enter Valid Email";
    }
    //Password
    if (data["password"].length < 8) {
      formIsValid = false;
      errors["password"] = "Password must be atleast 8 characters long";
    }
    //User Type
    if (data["user_type"].length === 0) {
      formIsValid = false;
      errors["user_type"] = "Please select a user type";
    }
    setError(errors);
    return formIsValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Wunderbar");
    }
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:min-h-[100vh] w-full">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="mx-auto w-full h-full mb-10 flex justify-center items-center max-w-xl flex-col sm:w-2/3 py-16 px-9"
      >
        <h3
          className={`w-full text-[32px] leading-[38px] tracking-[0.26px] text-[${clr.black}] font-bold mb-10`}
        >
          Let's setup your account
        </h3>
        <h4
          className={`w-full text-[15px] leading-[30px] tracking-[0.26px] text-[${clr.black}] mb-10`}
        >
          Already have an account?{" "}
          <span
            className="cursor-pointer font-bold"
            style={{ color: clr.blue }}
          >
            Sign in
          </span>
        </h4>
        <Input
          placeholder="Your Name"
          value={data}
          setValue={setData}
          name="name"
          err={error.name}
          setError={setError}
        />
        <Input
          placeholder="Email address"
          value={data}
          setValue={setData}
          name="email"
          err={error.email}
          setError={setError}
        />
        <Select
          list={userTypeList}
          name="user_type"
          data={data}
          setData={setData}
          placeHolder="I would describe my user type as:"
          err={error.user_type}
          setError={setError}
        />
        <Input
          placeholder="Password"
          type="password"
          value={data}
          setValue={setData}
          name="password"
          desc="Minimum 8 Characters"
          err={error.password}
          setError={setError}
        />
        <button
          type="submit"
          className={`w-full h-[50px] p-1 flex justify-center items-center rounded text-white`}
          style={{ backgroundColor: clr.blue }}
        >
          Next
        </button>
      </form>
      <div
        className="w-full sm:w-1/3 flex py-16 sm:px-6 justify-center items-center"
        style={{ backgroundColor: clr.blue }}
      >
        <div className="md:w-[70%]">
          <h1 className="text-white text-[32px] leading-[38px] tracking-[0.26px] text-center font-bold mb-20">
            Dummy Heading
          </h1>
          <p className="text-white text-lg leading-[30px] tracking-[0.26px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit
            ducimus architecto nesciunt nihil corrupti dolorum est enim libero
            minus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
