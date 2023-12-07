import { Container, Header, ListContainer } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <string>3 contatos</string>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>
    </Container>
  );
}
