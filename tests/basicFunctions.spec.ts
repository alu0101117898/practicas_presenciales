import 'mocha';
import {expect} from 'chai';
import { FilterList } from '../src/PE103-P09/FilterListBase';
import { FilterMapAddReduce } from '../src/PE103-P09/FilterMapAddReduce';
import { FilterMapSubReduce } from '../src/PE103-P09/FilterMapSubReduce';
import { FilterMapProdReduce } from '../src/PE103-P09/FilterMapProdReduce';
import { FilterMapDivReduce } from '../src/PE103-P09/FilterMapDivReduce';


describe("---Filter, Map and Reduce tests---", () => {
  it("add(1, 8) returns value 9", () => {
    expect(add(1, 8)).to.be.equal(9);
  });

  it("add(-1, 8) returns value 7", () => {
    expect(add(-1, 8)).to.be.equal(7);
  });
});