import { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { User } from "../../types";
import { updateUser } from "../../api";
import { useNavigate } from "react-router";

const MyPage: React.FC = () => {
  const { data, isLoading, isError } = useUser();
  const [formData, setFormData] = useState<User | null>(null);

  let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, files, value } = e.target;

    setFormData((prevData) => {
      if (prevData) {
        if (type === "file" && files) {
          return { ...prevData, [name]: URL.createObjectURL(files[0]) }; // 파일일 경우 첫 번째 파일을 상태에 저장
        } else if (type !== "file") {
          return { ...prevData, [name]: value }; // 파일이 아닐 경우 일반적인 input 값 처리
        }
      }
      return prevData;
    });
  };

  const handleUpdate = async (data: User) => {
    try {
      const successMessage = await updateUser(data);
      alert(successMessage);
      navigate("/");
    } catch (error) {
      alert(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.");
      navigate("/");
    }
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
        {formData?.avatar ? (
          <img src={formData.avatar} alt="avatar" className="w-20 h-20 rounded-full" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        )}
        <input type="file" name="avatar" onChange={handleChange} className="p-2 border-[1px] border-black" />
        <p className="text-2xl font-bold">{formData?.id}</p>
        <input
          name="nickname"
          type="text"
          value={formData?.nickname || ""}
          onChange={handleChange}
          className="p-2 border-[1px] border-black"
        />
        <button onClick={() => handleUpdate} className="p-2 bg-black text-white font-bold">
          설정하기
        </button>
      </div>
    </div>
  );
};

export default MyPage;
