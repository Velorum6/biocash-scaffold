import { useReducer } from "react";
import { Abi, AbiFunction } from "abitype";
import { useAccount } from "wagmi";
import { DisplayVariable, displayTxResult } from "~~/app/debug/_components/contract";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const Game: React.FC = ({ }) => {
  const { address: connectedAddress } = useAccount();
  const [refreshDisplayVariables] = useReducer(value => !value, false);
  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo("Game");

  if (connectedAddress === undefined) {
    return <div>Connect your wallet to continue</div>;
  }

  if (deployedContractData === undefined || deployedContractLoading) {
    return <div>Loading...</div>;
  }

  const viewFunctions = ((deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[])
    .filter(fn => {
      const isQueryableWithNoParams =
        (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length === 0;
      return isQueryableWithNoParams;
    })
    .map(fn => {
      return {
        fn,
        inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
      };
    })
    .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));

  const basicGetterFn = viewFunctions.find(({ fn }) => fn.name === "basicGetter");

  return (
    <div className="flex-1 flex flex-col h-full p-mono">
      <div className="w-full marquee bg-secondary text-center flex justify-between px-12 items-center">
        <div>
          Play in{" "}
          <a
            href="https://biome1.biomes.aw/"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "underline", fontWeight: "bolder", color: "white" }}
          >
            Biomes
          </a>{" "}
        </div>
        <div>
          <a
            href="/how-to-play"
            className="flex items-center bg-white/10 border border-white/20 px-2 py-1.5 font-mono uppercase text-sm leading-none transition hover:border-white"
          >
            How To Play
          </a>
        </div>
      </div>

      <div className="grid grid-cols-12 flex flex-1">
        <div className="col-span-12 lg:col-span-9 p-12 flex flex-col justify-between items-center">
          <div style={{ width: "80%" }} className="flex flex-col gap-12">
            <div>
              <h1 className="text-3xl font-bold text-left mt-4">Play Game</h1>
              <h1 className="text-left mt-4" style={{ lineHeight: "normal", margin: "0", marginBottom: "20px", wordWrap: "break-word" }}>
                Welcome to the BioCash Extension and thanks for trying out our project
              </h1>
              <h1 className="text-left mt-4" style={{ lineHeight: "normal", margin: "0", marginBottom: "20px", wordWrap: "break-word" }}>
                Right now you should be registered and be able to receive Biocash for depositing items inside the chests, press the "How To Play" button at the top-left of this page to see how to do it and start receiving BioCash
              </h1>
              <h1 className="text-left mt-4" style={{ lineHeight: "normal", margin: "0", marginBottom: "20px", wordWrap: "break-word" }}>
                You can also check your balance of BioCash at the right of this page inside a green rectangle
              </h1>
            </div>
            <div></div>
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-3 p-12"
          style={{ backgroundColor: "#160b21", borderLeft: "1px solid #0e0715" }}
        >
          {basicGetterFn && (
            <DisplayVariable
              abi={deployedContractData.abi as Abi}
              abiFunction={basicGetterFn.fn}
              contractAddress={deployedContractData.address}
              key={"getter"}
              refreshDisplayVariables={refreshDisplayVariables}
              inheritedFrom={basicGetterFn.inheritedFrom}
              poll={10000}
            >
              {({ result, RefreshButton }) => {
                return (
                  <div
                    className="p-6 text-white text-center border border- border-white w-full"
                    style={{ backgroundColor: "#42a232" }}
                  >
                    <div className="text-sm font-bold flex justify-center items-center">
                      <span>YOUR BALANCE</span> <span>{RefreshButton}</span>
                    </div>
                    <div className="text-4xl mt-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {displayTxResult(result)}
                      <img src="/Biocash.png" style={{ marginLeft: '10px', width: '45px' }} />
                    </div>
                  </div>
                );
              }}
            </DisplayVariable>
          )}
        </div>
      </div>
    </div>
  );
};
