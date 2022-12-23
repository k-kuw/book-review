import ClickButton from "../atoms/ClickButton";
import { useForm } from "react-hook-form";
import { BookName } from "../pages/BookList";
import { useContext } from "react";

// 検索form入力の型定義
type Input = {
  searchName: string;
};

// 検索フォームコンポーネント
const SearchForm = () => {
  // react-hook-form使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  // 本検索関数取得
  const setBookNameFunc = useContext(BookName);

  return (
    <>
      <form
        onSubmit={handleSubmit((data: Input) => {
          // 本の名前のset関数が存在する場合
          if (setBookNameFunc) {
            setBookNameFunc(data.searchName);
          }
        })}
        className="p-3 flex-col"
      >
        <div>
        <label htmlFor="searchName" className="font-bold text-amber-500 shadow m-5">本を検索してみよう！</label>
        </div>
        <input
          id="searchName"
          {...register("searchName", { required: "入力してください" })}
          className="shadow border-2 rounded w-1/3 h-10 text-gray-700d focus:outline-none focus:border-amber-500 mx-3"
        />
        <ClickButton>検索</ClickButton>
        {errors.searchName && <p>{errors.searchName.message}</p>}
      </form>
    </>
  );
};

export default SearchForm;
