import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;

  constructor(public prevHash: string, public height: number, public data: string) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = prevHash + height + data;
    const createdHash = crypto.createHash("sha256").update(toHash).digest("hex");
    return createdHash;
  }
}

class Blockchain {
  private blocks: Block[];

  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) {
      return "";
    }
    return this.blocks[this.blocks.length - 1].hash;
  }

  public getBlocks() {
    return [...this.blocks];
  }

  public addBlock(data: string) {
    const prevHash = this.getPrevHash();
    const height = this.blocks.length + 1;
    const newBlock = new Block(prevHash, height, data);
    this.blocks.push(newBlock);
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("first");
blockchain.addBlock("second");
blockchain.addBlock("third");

console.log(blockchain.getBlocks());