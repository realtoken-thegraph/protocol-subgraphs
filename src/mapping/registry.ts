import {
  Address,
  Bytes,
  BigInt,
} from "@graphprotocol/graph-ts";

import { ethereum } from "@graphprotocol/graph-ts/chain/ethereum";

import { OwnershipTransferred } from "../../generated/AdminUpgradeabilityProxy/AdminUpgradeabilityProxy";
import { AddressesProviderRegistered } from "../../generated/LendingPoolAddressesProviderRegistry/LendingPoolAddressesProviderRegistry";

import { handleAddressesProviderRegistered } from "./address-provider-registry/address-provider-registry";

export function initRegistry(event: OwnershipTransferred): void {
  const zeroBytes = Bytes.empty();
  const zeroAddress = Address.zero();
  const zeroBigInt = BigInt.zero();
  const number = BigInt.fromI32(23727055);
  const timestamp = BigInt.fromI32(1660657110);

  const newAddress = ethereum.Value.fromAddress(Address.fromString("0x0ade75f269a054673883319baa50e5e0360a775f"))
  
  const block = new ethereum.Block(
    zeroBytes,
    zeroBytes,
    zeroBytes,
    zeroAddress,
    zeroBytes,
    zeroBytes,
    zeroBytes,
    number,
    zeroBigInt,
    zeroBigInt,
    timestamp,
    zeroBigInt,
    zeroBigInt,
    zeroBigInt,
    zeroBigInt
  );
  const tx = new ethereum.Transaction(
    zeroBytes,
    zeroBigInt,
    zeroAddress,
    zeroAddress,
    zeroBigInt,
    zeroBigInt,
    zeroBigInt,
    zeroBytes,
    zeroBigInt
  );
  const params = new ethereum.EventParam("newAddress", newAddress);
  const eventPayload = new AddressesProviderRegistered(
    zeroAddress,
    zeroBigInt,
    zeroBigInt,
    null,
    block,
    tx,
    [params]
  );
  handleAddressesProviderRegistered(eventPayload);
}
