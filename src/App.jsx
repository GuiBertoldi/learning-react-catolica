import {Container} from 'react-bootstrap'
import Header from './components/Header';

export default function App() {
  const posts = [
    {
      id:1,
      texto:"Olá mundo!",
      tempo:"1 minuto atrás",
      autor: {
        usuario:"Paulo",
        apelido:"Penadinho",
      },
    },
    {
      id:2,
      texto:"Salve galera!",
      tempo:"2 minutos atrás",
      autor: {
        usuario:"Xunda",
        apelido:"Legalzão",
      },
    }
  ];

  return (
    <Container fluid >
      <Header/>
      <h1>Microblog do Manseira</h1>
      {posts.length === 0 ?
        <p>Nenhuma postagem foi feita até o momento</p>
      :
        posts.map(post => {
          return (
            <p key={post.id}>
              <b>{post.autor.usuario}</b> - {post.tempo}
              <br/>
              {post.texto}
            </p>
          );
        })
      }
    </Container>
  )
}