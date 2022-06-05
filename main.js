const contractAddress = "0xf0268a46ee1da9ffeb21815a03170393d708525a";
const contractAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "ApprovalToCurrentOwner", type: "error" },
  { inputs: [], name: "ApproveToCaller", type: "error" },
  { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
  { inputs: [], name: "MintToZeroAddress", type: "error" },
  { inputs: [], name: "MintZeroQuantity", type: "error" },
  { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
  { inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
  { inputs: [], name: "TransferToZeroAddress", type: "error" },
  { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "CONTRACT_URI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PUBLIC_MINT_LIMIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PUBLIC_MINT_LIMIT_TXN",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TEAM_MINT_MAX",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY_TEAM",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
    name: "freeMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hiddenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "quantity", type: "uint256" },
      { internalType: "address", name: "receiver", type: "address" },
    ],
    name: "mintToUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "numUserMints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
    name: "publicMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "publicPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bool", name: "_revealed", type: "bool" },
      { internalType: "string", name: "_baseUri", type: "string" },
    ],
    name: "revealCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "revealedURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_baseUri", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_contractURI", type: "string" }],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_hiddenMetadataUri", type: "string" },
    ],
    name: "setHiddenMetadataUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_publicPrice", type: "uint256" },
    ],
    name: "setPublicPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_state", type: "bool" }],
    name: "setRevealed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_teamMintMax", type: "uint256" },
    ],
    name: "setTeamMintMax",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_teamWallet", type: "address" }],
    name: "setTeamWalletAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "quantity", type: "uint256" }],
    name: "teamMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "teamWallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userMintedFree",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "walletOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const mintPrice = 0.005;
let freeMinted = false;

window.onload = function () {
  let provider;
  let contract;
  let address;

  ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  const input = document.getElementById("total-to-mint");
  const mintButton = document.getElementById("mint-button");
  const freeMintButton = document.getElementById("free-mint-button");
  const metamaskConnectButton = document.getElementById("metamask-connect");

  function calculateTotal() {
    const count = parseInt(input.innerHTML);
    mintButton.innerHTML = `Mint ${count} for ${count * mintPrice} ETH`;
    mintButton.onclick = function (e) {
      e.preventDefault();
      startMint(mint);
    };
  }

  function userFreeMinted(val) {
    freeMinted = val;
    if (!freeMinted) {
      freeMintButton.classList.remove("hide");
      freeMintButton.onclick = function (e) {
        e.preventDefault();
        startMint(freeMint);
      };
    }
  }

  function connectWallet() {
    if (!window.ethereum || !window.ethereum.enable) {
      return alert("Metamask not found. Please install Metamask");
    }

    return window.ethereum.enable().then(async function (connectedAddress) {
      address = connectedAddress[0];
      metamaskConnectButton.classList.add("hide");
      mintButton.onclick = function (e) {
        e.preventDefault();
        startMint(mint);
      };

      provider = new ethers.providers.Web3Provider(window.ethereum);
      contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider.getSigner()
      );

      const network = await provider.getNetwork();
      if (network.chainId !== 4) {
        return alert("Please connect to the Ethereum Mainnet");
      }

      contract.userMintedFree(address).then(userFreeMinted);

      //read contract total supply
      contract.totalSupply().then((val) => {
        document.getElementById("total-minted").innerHTML = `${val}/5000`;
      });

      mintButton.classList.remove("hide");
    });
  }

  async function mint() {
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider.getSigner()
    );

    const count = parseInt(input.innerHTML);
    const value = mintPrice * count;

    mintButton.onclick = () => {};
    mintButton.innerHTML = "Minting...";

    const tx = await contract
      .publicMint(count, {
        value: ethers.utils.parseEther(value.toString()),
      })
      .catch((err) => {
        mintButton.disabled = false;
        calculateTotal();
        alert(
          "There was an error trying to mint your Brawlers, please try again later!"
        );
      });

    tx.wait().then(function (tx) {
      alert("Brawlers minted successfully!");
      mintButton.disabled = false;
      mintButton.onclick = function (e) {
        e.preventDefault();
        startMint(mint);
      };
      calculateTotal();
    });
  }

  async function freeMint() {
    const userMintedOneFree = await contract.userMintedFree(address);

    userFreeMinted(userMintedOneFree);

    if (freeMinted)
      alert(
        "Caution: You've already minted your free Brawler, proceeding may cause unexpectedly high gas fees and a failed tx!"
      );

    const count = 1;

    freeMintButton.disabled = true;
    freeMintButton.onclick = () => {};
    freeMintButton.innerHTML = "Minting...";

    const tx = await contract.freeMint(count).catch((err) => {
      freeMintButton.disabled = false;
      freeMintButton.onclick = function (e) {
        e.preventDefault();
        startMint(freeMint);
      };
      freeMintButton.innerHTML = "Free Mint 1";
      alert(
        "There was an error trying to mint your Brawlers, please try again later!"
      );
    });

    tx.wait().then(function (tx) {
      freeMintButton.disabled = true;
      alert("Brawler minted successfully! You can now public mint!");
      userFreeMinted(true);
      freeMintButton.classList.add("hide");
    });
  }

  function startMint(mintFunc) {
    if (provider) {
      mintFunc();
    } else {
      connectWallet().then(mint);
    }
  }

  document.getElementById("mecha-max").onclick = function (e) {
    input.innerHTML = 10;
    event = new Event("input");
    input.dispatchEvent(event);
    calculateTotal();
  };

  document.getElementById("pluson").onclick = function (e) {
    const count = parseInt(input.innerHTML);
    if (count < 10) {
      input.innerHTML = count + 1;
      event = new Event("input");
      input.dispatchEvent(event);
    }
    calculateTotal();
  };

  document.getElementById("minuson").onclick = function (e) {
    const count = parseInt(input.innerHTML);
    if (count > 1) {
      input.innerHTML = count - 1;
      event = new Event("input");
      input.dispatchEvent(event);
    }
    calculateTotal();
  };

  if (ethereum.isMetaMask) {
    metamaskConnectButton.onclick = function (e) {
      e.preventDefault();
      connectWallet();
    };
  }
};
