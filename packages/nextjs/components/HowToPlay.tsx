export const HowToPlayComponent: React.FC = ({}) => {
  return (
    <div className="flex-1 flex flex-col h-full p-mono">
      <div className="w-full marquee bg-secondary text-center">
        Sign up and get your avatar in{" "}
        <a
          href="https://biome1.biomes.aw"
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: "underline", fontWeight: "bolder", color: "white" }}
        >
          Biome-1
        </a>{" "}
        before playing this experience!
      </div>
      <div className="p-12 flex flex-col justify-between gap-4">
        <h2 className="text-xl pb-2" style={{ borderBottom: "0.5px solid white", textAlign: "center" }}>
          How to get Biocash
        </h2>
        <h3>Find a chest</h3>

        <img src="/FindAChest.png"></img>
        <h3>Move your character next to the chest</h3>
        <img src="/NextToTheChest.png"></img>
        <h3>Press F on the chest to open it</h3>

        <img src="/Inventory.png"></img>
        <h3>Drag Dirt into it</h3>
        <h3>Now you have Biocash!</h3>
      </div>
    </div>
  );
};
