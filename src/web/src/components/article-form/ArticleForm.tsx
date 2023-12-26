import React, { useState } from "react";
import "./ArticleForm.css";
import { useCategoriesContext } from "../../contexts/categories";

type ChangeEvents = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface ArticleFormProps {
  isLoading: boolean;
  error: TypeError;
  onSubmit: (data: ArticleFormState) => void;
}

interface ArticleFormState {
  title: string;
  content: string;
  categoryId: number | null;
  authorId: number | null;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  console.log("error", error);
  const {
    categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useCategoriesContext();

  const [formData, setFormData] = useState<ArticleFormState>({
    title: "",
    content: "",
    categoryId: null,
    authorId: 1,
  });

  const handleChange = (e: React.ChangeEvent<ChangeEvents>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // setFormData({
    //   title: "",
    //   content: "",
    //   categoryId: null,
    //   authorId: 1,
    // });
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      {error && <p>{error.message}</p>}
      {categoriesError && <p>{categoriesError.message}</p>}

      <select
        name="categoryId"
        value={formData.categoryId || ""}
        onChange={handleChange}
        required
      >
        <option value="">
          {isLoadingCategories ? "Loading..." : "Selecione uma categoria"}
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Título"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        value={formData.content}
        placeholder="Conteúdo"
        onChange={handleChange}
        required
      ></textarea>
      <button disabled={isLoading} type="submit">
        {isLoading ? "Publicando..." : "Publicar Notícia"}
      </button>
    </form>
  );
};

export default ArticleForm;
