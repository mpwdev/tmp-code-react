import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="title here"
              description="description text"
              image={componentsImg}
            ></CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
          <ul>
            <TestCoreConcept
              title="test title"
              description="test description"
              image="test-image.png"
            ></TestCoreConcept>
          </ul>
          <ul>
            <TestCoreConcept2 concept={CORE_CONCEPTS[0]}></TestCoreConcept2>
          </ul>
        </section>
      </main>
    </div>
  );
}

function TestCoreConcept({ title, description, image }) {
  return (
    <li>
      <p>{title}</p>
      <p>{description}</p>
      <p>{image}</p>
    </li>
  );
}

function TestCoreConcept2({ concept }) {
  return (
    <li>
      <p>{concept.title}</p>
      <p>{concept.description}</p>
      <p>{concept.image}</p>
    </li>
  );
}

export default App;
