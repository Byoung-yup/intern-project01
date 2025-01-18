import { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { User } from "../../types";
import { useForm } from "react-hook-form";

const MyPage: React.FC = () => {
  const { data, isLoading, isError } = useUser();
  const [formData, setFormData] = useState<User | null>(null);

  const { register, handleSubmit } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => {
      if (prevData) {
        return { ...prevData, [e.target.name]: e.target.value };
      }
      return prevData;
    });
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-[1px] border-black h-screen flex flex-col gap-6 justify-center items-center px-5 py-4">
        {/* {data.avatar ? (
          <img src={data.avatar} alt="avatar" className="w-20 h-20 rounded-full" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        )} */}
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        <p className="text-2xl font-bold">테스트유저1</p>
        <input
          {...register("nickname")}
          type="text"
          value={formData?.nickname || ""}
          className="p-2 border-[1px] border-black"
        />
      </div>
    </div>
  );
};

export default MyPage;
