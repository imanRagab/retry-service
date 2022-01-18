import { equal } from "assert";
import retry from './retry-service';
import { arithmaticGen, geometricGen } from "./generators";
import { expect } from 'chai';


let successRequest: () => Promise<{ data: Array<string> }>;
let failRequest: () => Promise<{ data: Array<string> }>;
let data: { data: Array<string> };

describe("Retry service tests", () => {

  before(() => {

    data = { data: ["user1", "user2", "user3"] }

    failRequest = () => {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject("Request timeout");
        }, 1000);
      });
    }

    let i = 0;
    successRequest = () => {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {          
          if (i > 0) {
            resolve(data);
          } else {
            i++;
            reject("Request timeout");
          }
        }, 1000);
      });
    }

  });

  it("should success", async () => {
    const result =  await retry(successRequest, 2, arithmaticGen(1, 1));
    expect(result).to.eql(data);

  }).timeout(10000);

  it("should fail", async () => {
    try {
      await retry(failRequest, 2, geometricGen(1, 2));
    } catch (err) {
      equal(err, "Request timeout");
    }
  }).timeout(10000);
});
