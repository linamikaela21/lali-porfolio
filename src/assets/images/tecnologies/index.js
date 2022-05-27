import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import bootstrapImage from '../../../assets/images/tecnologies/bootstrap.svg';
import cssImage from '../../../assets/images/tecnologies/css.svg';
import expressImage from '../../../assets/images/tecnologies/express.svg';
import figmaImage from '../../../assets/images/tecnologies/figma.svg';
import htmlImage from '../../../assets/images/tecnologies/html.png';
import javaScriptImage from '../../../assets/images/tecnologies/javascript.svg';
import lessImage from '../../../assets/images/tecnologies/less.svg';
import mongoImage from '../../../assets/images/tecnologies/mongo.png';
import mysqlImage from '../../../assets/images/tecnologies/mysql.svg';
import nextJsImage from '../../../assets/images/tecnologies/nextJs.svg';
import postmanImage from '../../../assets/images/tecnologies/postman.svg';
import reduxImage from '../../../assets/images/tecnologies/redux.svg';
import sassImage from '../../../assets/images/tecnologies/sass.svg';
import nodeJsImage from '../../../assets/images/tecnologies/nodeJs.svg';
import reactImage from '../../../assets/images/tecnologies/react.svg';
import reactNativeImage from '../../../assets/images/tecnologies/reactNative.svg';
import herokuImage from '../../../assets/images/tecnologies/heroku.svg';
import typescriptImage from '../../../assets/images/tecnologies/typescript.svg';
import vscImage from '../../assets/../images/tecnologies/vsc.svg';
import materialUiImage from '../../../assets/images/tecnologies/materialUi.svg';
import pythonImage from '../../../assets/images/tecnologies/python.png';

export const Tecnologies = () => {
  const tecnologies = [
    {
      Languages: [
        { title: 'Python', image: pythonImage },
        { title: 'TypeScript', image: typescriptImage },
        { title: 'JavaScript', image: javaScriptImage },
      ],
    },
    {
      Frontend: [
        { title: 'Html', image: htmlImage },
        { title: 'nextJs', image: nextJsImage },
        { title: 'redux', image: reduxImage },
        { title: 'React', image: reactImage },
      ],
    },
    {
      'Desing Libraries': [
        { title: 'Material', image: materialUiImage },
        { title: 'Bootstrap', image: bootstrapImage },
        { title: 'Less', image: lessImage },
        { title: 'sass', image: sassImage },
        { title: 'Css', image: cssImage },
      ],
    },
    {
      'Backend And DataBases': [
        { title: 'ExpressJs', image: expressImage },
        { title: 'Mongo', image: mongoImage },
        { title: 'MySQL', image: mysqlImage },
        { title: 'nodeJs', image: nodeJsImage },
      ],
    },
    { Mobile: [{ title: 'Native', image: reactNativeImage }] },
    { Deployment: [{ title: 'Heroku', image: herokuImage }] },
    {
      Tools: [
        { title: 'postman', image: postmanImage },
        { title: 'VSC', image: vscImage },
        { title: 'Figma', image: figmaImage },
      ],
    },
  ];

  // { title: 'postgres', image: postgresImage },
  // { title: 'Sequelize', image: sequelizeImage },

  return (
    <Container className="d-flex justify-content-start my-3">
      <Row className="d-flex justify-content-between">
        {tecnologies.map((cat) => (
          <Row
            key={Object.entries(cat).flat()[0]}
            className="d-flex justify-content-between"
          >
            <h1 className="d-block text-center py-3 bg-light">
              {Object.entries(cat).flat()[0]}
            </h1>
            {Object.values(cat)
              .flat()
              .map((tec) => (
                <Col key={tec.title} className="d-block">
                  <div className="d-flex justify-content-center">
                    <Image
                      height={50}
                      width={50}
                      className="my-2"
                      src={tec.image}
                      alt={tec.title}
                      title={tec.title}
                    />
                  </div>
                  <span className="d-flex justify-content-center h-100 m-2 px-4 fs-5 fw-800">
                    {tec.title}
                  </span>
                </Col>
              ))}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
