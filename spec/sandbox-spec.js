"use strict";

describe("Sandbox", function() {
  var data;

  beforeEach(function() {
      data = {field1: '1'};
  });

    it("demo", function() {
          expect(data.field1).toEqual('1');
      });
});