import Logo from "@/components/custom/Logo";

export default function Footer() {
  return (
    <div className="bg-card border-border flex h-20 w-full items-center justify-between border border-t p-4 md:px-8">
      <Logo linkId="hero"></Logo>
      <p className="p3">
        Made with <a href="https://react.dev/">React</a>,
        <a href="https://spring.io/"> Spring</a> and
        <a href="https://threejs.org/"> Three.js</a>
      </p>
    </div>
  );
}
