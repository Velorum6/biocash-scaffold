/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  690: {
    Game: {
      address: "0xcCF3DD4D55c03B7fE19d598E1E05548Ab3792e92",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_biomeWorldAddress",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord",
              name: "lowerSouthwestCorner",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord",
              name: "size",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "_gameStarter",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "start",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "end",
              type: "uint256",
            },
          ],
          name: "Slice_OutOfBounds",
          type: "error",
        },
        {
          inputs: [],
          name: "biomeWorldAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "claimRewardPool",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "gameEndBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "gameStarter",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAlivePlayers",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDeadPlayers",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDisqualifiedPlayers",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getKillsLeaderboard",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "isAlive",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "kills",
                  type: "uint256",
                },
              ],
              internalType: "struct LeaderboardEntry[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMatchArea",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "int16",
                      name: "x",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "y",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "z",
                      type: "int16",
                    },
                  ],
                  internalType: "struct VoxelCoord",
                  name: "lowerSouthwestCorner",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int16",
                      name: "x",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "y",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "z",
                      type: "int16",
                    },
                  ],
                  internalType: "struct VoxelCoord",
                  name: "size",
                  type: "tuple",
                },
              ],
              internalType: "struct Area",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegisteredPlayerEntityIds",
          outputs: [
            {
              internalType: "bytes32[]",
              name: "",
              type: "bytes32[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRewardPool",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "isGameStarted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onAfterCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onBeforeCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onRegisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onUnregisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registerPlayer",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord",
              name: "lowerSouthwestCorner",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord",
              name: "size",
              type: "tuple",
            },
          ],
          name: "setMatchArea",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "numBlocksToEnd",
              type: "uint256",
            },
          ],
          name: "startGame",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        onAfterCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onBeforeCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onRegisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onUnregisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        supportsInterface: "@latticexyz/world/src/IOptionalSystemHook.sol",
      },
    },
  },
  17069: {
    Game: {
      address: "0xae60eCEFf66A56771965817456190AF11D89357f",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_biomeWorldAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "start",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "end",
              type: "uint256",
            },
          ],
          name: "Slice_OutOfBounds",
          type: "error",
        },
        {
          inputs: [],
          name: "biomeWorldAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "buildingId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "n",
              type: "uint256",
            },
          ],
          name: "challengeBuilding",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "coordHashToBuilder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[]",
              name: "objectTypeIds",
              type: "uint8[]",
            },
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord[]",
              name: "relativePositions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "submissionPrice",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "create",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllBlueprints",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "uint8[]",
                      name: "objectTypeIds",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "int16",
                          name: "x",
                          type: "int16",
                        },
                        {
                          internalType: "int16",
                          name: "y",
                          type: "int16",
                        },
                        {
                          internalType: "int16",
                          name: "z",
                          type: "int16",
                        },
                      ],
                      internalType: "struct VoxelCoord[]",
                      name: "relativePositions",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct Build",
                  name: "blueprint",
                  type: "tuple",
                },
              ],
              internalType: "struct BlueprintPair[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllBuilders",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "builderAddresses",
                  type: "address[]",
                },
              ],
              internalType: "struct BuilderList[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllLocations",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "int16",
                      name: "x",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "y",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "z",
                      type: "int16",
                    },
                  ],
                  internalType: "struct VoxelCoord[]",
                  name: "location",
                  type: "tuple[]",
                },
              ],
              internalType: "struct LocationPair[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllNames",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              internalType: "struct NamePair[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllSubmissionPrices",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
              ],
              internalType: "struct SubmissionPricePair[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getEarned",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getList",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "price",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "builders",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "uint8[]",
                      name: "objectTypeIds",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "int16",
                          name: "x",
                          type: "int16",
                        },
                        {
                          internalType: "int16",
                          name: "y",
                          type: "int16",
                        },
                        {
                          internalType: "int16",
                          name: "z",
                          type: "int16",
                        },
                      ],
                      internalType: "struct VoxelCoord[]",
                      name: "relativePositions",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct Build",
                  name: "blueprint",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "int16",
                      name: "x",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "y",
                      type: "int16",
                    },
                    {
                      internalType: "int16",
                      name: "z",
                      type: "int16",
                    },
                  ],
                  internalType: "struct VoxelCoord[]",
                  name: "locations",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ListEntry[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onAfterCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onBeforeCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onRegisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onUnregisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "buildingId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "int16",
                  name: "x",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "y",
                  type: "int16",
                },
                {
                  internalType: "int16",
                  name: "z",
                  type: "int16",
                },
              ],
              internalType: "struct VoxelCoord",
              name: "baseWorldCoord",
              type: "tuple",
            },
          ],
          name: "submitBuilding",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        onAfterCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onBeforeCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onRegisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onUnregisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        supportsInterface: "@latticexyz/world/src/IOptionalSystemHook.sol",
      },
    },
  },
  31337: {
    Game: {
      address: "0x927b167526bAbB9be047421db732C663a0b77B11",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_biomeWorldAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "start",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "end",
              type: "uint256",
            },
          ],
          name: "Slice_OutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "balance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "biomeWorldAddress",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllBalances",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              internalType: "struct PlayerBalance[]",
              name: "playerBalances",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllLastHitters",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "lastHitter",
                  type: "address",
                },
              ],
              internalType: "struct PlayerHitter[]",
              name: "playerLastHitters",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllLastWithdrawals",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "lastWithdrawal",
                  type: "uint256",
                },
              ],
              internalType: "struct PlayerWithdrawal[]",
              name: "playerWithdrawals",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getBalancesLeaderboard",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "balance",
                  type: "uint256",
                },
              ],
              internalType: "struct LeaderboardEntry[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegisteredPlayerEntityIds",
          outputs: [
            {
              internalType: "bytes32[]",
              name: "",
              type: "bytes32[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getRegisteredPlayers",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "player",
              type: "address",
            },
          ],
          name: "isPlayerRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "lastHitter",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "lastWithdrawal",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onAfterCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
          ],
          name: "onBeforeCallSystem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onRegisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              internalType: "ResourceId",
              name: "systemId",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "enabledHooksBitmap",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "callDataHash",
              type: "bytes32",
            },
          ],
          name: "onUnregisterHook",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "players",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "registerPlayer",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        onAfterCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onBeforeCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onRegisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onUnregisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        supportsInterface: "@latticexyz/world/src/IOptionalSystemHook.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
