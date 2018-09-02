import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const mediaCardData = {
  title: 'Some Title',
  body: 'Some body text.',
  imageUrl: 'https://via.placeholder.com/350x150'
};

const Hi = props => {
  return (
    <div>
      Hello <strong>{props.name}</strong>!
    </div>
  );
};

const MediaCardII = ({ props }) => {
  return (
    <MediaCard
      title={`Function Media Card II: ${props.title}`}
      body={props.body}
      imageUrl={props.imageUrl}
    />
  );
};

const MediaCard = ({ title, body, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img alt="Some cool imageUrl" src={imageUrl} />
    </div>
  );
};

const Gate = ({ isOpen }) => {
  return <h3>{isOpen ? 'open' : 'clossed'}</h3>;
};

ReactDOM.render(
  <div>
    <Hi name="Anibal" />
    <Gate isOpen={new Date().getSeconds() % 2 === 0} />
    <MediaCard
      title={`Function Media Card I: ${mediaCardData.title}`}
      body={mediaCardData.body}
      imageUrl={mediaCardData.imageUrl}
    />
    <strong>
      <MediaCardII props={mediaCardData} />
    </strong>
  </div>,
  document.querySelector('#root')
);
