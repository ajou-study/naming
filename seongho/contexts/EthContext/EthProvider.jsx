import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { ethState } from '../../recoil/Eth.js';
import { initWeb3, fetchERC1155TokenIfNotExist } from "../../datas/contract.js";
import EthContext from './EthContext.js';

function EthProvider({ children }) {
  const [eth, setEthState] = useRecoilState(ethState);

  const init = useCallback(
    () => {
      let { web3, networkID, contract } = initWeb3();

      const data = {
        web3: web3,
        networkID: networkID,
        contracts: [contract]
      };
      fetchERC1155TokenIfNotExist(web3, data, "Lack of sleep lama");
      setEthState(data);

    }, [setEthState]);

  useEffect(() => {
    const tryInit = () => {
      init();
    };

    tryInit();
  }, [init]);

  return (
    <EthContext.Provider value={{
      eth,
      setEthState
    }}>
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
