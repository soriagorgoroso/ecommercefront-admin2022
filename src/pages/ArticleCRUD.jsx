import React from "react";
import NavBarAdmin from "../components/NavBarAdmin";
import axios from "axios";
import { Table } from "react-bootstrap";

function ArticleCRUD() {
  const [articles, setArticles] = React.useState(null);

  React.useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("http://localhost:8000/articles");
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    articles && (
      <>
        <NavBarAdmin />
        <h1>Articulos</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>tamaño en cc</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr>
                <td>{article.id}</td>
                <td>{article.name}</td>
                <td>{article.category}</td>
                <td>{article.sizecc}</td>
                <td>{article.stock}</td>
                <td>
                  <a className="btn btn-success" rel="stylesheet" href="">
                    Editar
                  </a>
                </td>
                <td>
                  <a className="btn btn-danger" rel="stylesheet" href="">
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  );
}

export default ArticleCRUD;