import SearchButton from "../atoms/SearchButton";
import { useForm } from "react-hook-form";
import { BookName } from "../pages/BookList";
import { useContext } from "react";

type Input = {
  searchName: string;
};

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const setBookNameFunc = useContext(BookName);

  return (
    <>
      <form onSubmit={handleSubmit((data) => setBookNameFunc(data.searchName))}>
        <input
          id="searchName"
          {...register("searchName", { required: "入力してください" })}
        />
        <SearchButton />
        {errors.searchName && <p>{errors.searchName.message}</p>}
      </form>
    </>
  );
};

export default SearchForm;
