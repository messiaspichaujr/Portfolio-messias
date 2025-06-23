import GooeyNav from '../effects/GooeyNav'; 

const items = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function Navbar() {
  return (
    <div style={{ height: '100px', position: 'relative' }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default Navbar;