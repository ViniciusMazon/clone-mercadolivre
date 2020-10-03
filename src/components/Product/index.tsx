import React from 'react';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

import tshirtImage from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus,
      lectus vel pharetra suscipit, libero purus posuere augue, pulvinar
      venenatis nunc massa at ipsum. Suspendisse ut tincidunt leo, vel luctus
      sapien. Praesent auctor iaculis arcu, ac fermentum est luctus sed.
      Praesent auctor facilisis ullamcorper. Cras volutpat vel nisl vitae
      eleifend. Phasellus tortor lorem, gravida ut sagittis sed, convallis
      tincidunt mi. Curabitur lobortis rhoncus est, sed venenatis tellus aliquet
      id. Etiam sollicitudin, nisl ut tincidunt hendrerit, enim orci viverra
      elit, vitae finibus mauris ante nec eros. Cras sed lectus ligula. Integer
      vitae feugiat ante, ut ultrices magna. Donec gravida pulvinar vestibulum.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus,
      lectus vel pharetra suscipit, libero purus posuere augue, pulvinar
      venenatis nunc massa at ipsum. Suspendisse ut tincidunt leo, vel luctus
      sapien.
    </p>
  </Description>
);

export default Product;
