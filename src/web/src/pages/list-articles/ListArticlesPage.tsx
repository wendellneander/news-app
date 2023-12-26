import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import ArticlesGrid from "../../components/articles-grid";
import Article from "../../types/article";

const articles: Article[] = [
  {
    id: 1,
    title: "Pesquisadores descobrem nova espécie de borboleta na Amazônia",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    url: "exemplo-de-slug",
    author: "Ana Silva",
    category: "Ciência",
    createdAt: "2023-12-01T08:00:00Z",
  },
  {
    id: 2,
    title: "Avanços na medicina podem revolucionar o tratamento do câncer",
    content: "Nulla facilisi. Proin viverra justo eget vestibulum...",
    url: "exemplo-de-slug",
    author: "Carlos Oliveira",
    category: "Saúde",
    createdAt: "2023-12-02T10:15:00Z",
  },
  {
    id: 3,
    title: "Novo estudo revela impactos das mudanças climáticas nos oceanos",
    content: "Sed ac enim euismod, malesuada ex eget, fermentum metus...",
    url: "exemplo-de-slug",
    author: "Mariana Santos",
    category: "Meio Ambiente",
    createdAt: "2023-12-03T12:30:00Z",
  },
  {
    id: 4,
    title:
      "Startup inovadora lança aplicativo para ajudar na organização financeira",
    content: "Vestibulum consectetur lectus ac turpis viverra...",
    url: "exemplo-de-slug",
    author: "Pedro Lima",
    category: "Negócios",
    createdAt: "2023-12-04T14:45:00Z",
  },
  {
    id: 5,
    title:
      "Especialistas alertam para os perigos do uso excessivo de redes sociais",
    content: "Donec non urna facilisis, pharetra tortor sed, posuere nisi...",
    url: "exemplo-de-slug",
    author: "Laura Mendes",
    category: "Tecnologia",
    createdAt: "2023-12-05T16:00:00Z",
  },
  {
    id: 6,
    title:
      "Descoberta arqueológica revela novas informações sobre civilização antiga",
    content: "Pellentesque habitant morbi tristique senectus et netus et...",
    url: "exemplo-de-slug",
    author: "Rodrigo Fernandes",
    category: "História",
    createdAt: "2023-12-06T18:15:00Z",
  },
  {
    id: 7,
    title: "Cientistas anunciam avanços na busca por vida extraterrestre",
    content: "Quisque nec libero vitae magna dictum lobortis vel eu lorem...",
    url: "exemplo-de-slug",
    author: "Ana Oliveira",
    category: "Ciência",
    createdAt: "2023-12-07T20:30:00Z",
  },
  {
    id: 8,
    title:
      "Companhia aérea lança novas rotas para destinos turísticos populares",
    content: "Fusce condimentum lacus sit amet purus malesuada...",
    url: "exemplo-de-slug",
    author: "Gustavo Almeida",
    category: "Viagens",
    createdAt: "2023-12-08T22:45:00Z",
  },
  {
    id: 9,
    title: "Educação a distância ganha destaque como alternativa de ensino",
    content: "Curabitur sodales dolor at nunc hendrerit, a ultrices leo...",
    url: "exemplo-de-slug",
    author: "Fernanda Costa",
    category: "Educação",
    createdAt: "2023-12-09T00:00:00Z",
  },
  {
    id: 10,
    title:
      "Artistas locais se unem para revitalizar espaços urbanos abandonados",
    content: "Nunc sed risus tincidunt, commodo dui non, volutpat arcu...",
    url: "exemplo-de-slug",
    author: "Rafael Pereira",
    category: "Arte",
    createdAt: "2023-12-10T02:15:00Z",
  },
  {
    id: 11,
    title: "Estudo aponta aumento da procura por alimentos orgânicos",
    content: "Vestibulum nec nulla vel purus mattis tincidunt...",
    url: "exemplo-de-slug",
    author: "Juliana Carvalho",
    category: "Agricultura",
    createdAt: "2023-12-11T04:30:00Z",
  },
  {
    id: 12,
    title: "Novas políticas públicas visam a preservação de áreas naturais",
    content: "Praesent a magna sit amet sapien convallis scelerisque...",
    url: "exemplo-de-slug",
    author: "Daniel Santos",
    category: "Meio Ambiente",
    createdAt: "2023-12-12T06:45:00Z",
  },
  {
    id: 13,
    title: "Empresa anuncia lançamento de carro elétrico com autonomia recorde",
    content: "Fusce non mi eget libero ultrices euismod vitae sit amet quam...",
    url: "exemplo-de-slug",
    author: "Carolina Martins",
    category: "Tecnologia",
    createdAt: "2023-12-13T09:00:00Z",
  },
  {
    id: 14,
    title: "Cresce o número de startups dedicadas à sustentabilidade",
    content: "Sed convallis libero sed est iaculis rhoncus...",
    url: "exemplo-de-slug",
    author: "Lucas Oliveira",
    category: "Negócios",
    createdAt: "2023-12-14T11:15:00Z",
  },
  {
    id: 15,
    title: "Estudo revela hábitos de consumo da geração Z",
    content: "Maecenas et justo vitae nunc accumsan tincidunt...",
    url: "exemplo-de-slug",
    author: "Patrícia Costa",
    category: "Tendências",
    createdAt: "2023-12-15T13:30:00Z",
  },
];

const ListArticlesPage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
      <ArticlesGrid articles={articles} />
    </>
  );
};

export default ListArticlesPage;
