/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  17069: {
    Game: {
      address: "0x60c1aebb9150690Ff9F0025d603041E83141eD9a",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_biomeWorldAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "_delegatorAddress",
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
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "allowedItemDrops",
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
          inputs: [
            {
              internalType: "address",
              name: "delegator",
              type: "address",
            },
          ],
          name: "canUnregister",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
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
          inputs: [],
          name: "delegatorAddress",
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
              internalType: "bytes32",
              name: "toolEntityId",
              type: "bytes32",
            },
          ],
          name: "dropItem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAllowedItemDrops",
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
          name: "getBuild",
          outputs: [
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
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
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
              name: "baseWorldCoord",
              type: "tuple",
            },
          ],
          name: "matchBuild",
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
          name: "setBuild",
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
        canUnregister: "@latticexyz/world/src/ICustomUnregisterDelegation.sol",
        supportsInterface: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onAfterCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onBeforeCallSystem: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onRegisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
        onUnregisterHook: "@latticexyz/world/src/IOptionalSystemHook.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
