import reactImage from '../assets/react-core-concepts.png';

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header({ 
    title = "React Essentials",
    descriptions = ['Fundamental', 'Core', 'Crucial'],
    imageSrc = reactImage,
  }) {
    const description = descriptions[genRandomInt(descriptions.length)];
    
    return (
      <header>
        <img src={imageSrc} alt="Stylized atom" />
        <h1>{title}</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }

export default Header;