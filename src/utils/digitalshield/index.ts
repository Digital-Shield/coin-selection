import { composeTxPlan } from './transaction';
import { signTransaction, signTx } from './signTx';
import { dAppUtils } from './dapp';
import { txToDigitalShield } from './txToDigitalShield';
import { hasSetTagWithBody } from './hasSetTag';

const digitalshieldUtils = {
  composeTxPlan,
  signTransaction,
  signTx,
  txToDigitalShield,
  hasSetTagWithBody,
};

export { digitalshieldUtils, dAppUtils };
