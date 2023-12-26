import React, { useState } from "react";
import "./ArticleForm.css";

interface ArticleFormProps {
  onSubmit: (data: {
    title: string;
    content: string;
    category: string;
  }) => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", content: "", category: "" });
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Selecione uma categoria</option>
        <option value="Ciência">Ciência</option>
        <option value="Tecnologia">Tecnologia</option>
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
      <button type="submit">Publicar Notícia</button>
    </form>
  );
};

export default ArticleForm;
