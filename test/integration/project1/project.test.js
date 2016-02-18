var assert = require('assert'),
  project1 = require('../../fixtures/project1');

describe('project1', function() {
  describe("handler", function() {

    it("should fail if event object is empty", function(cb) {
      var context = {
        done: function(err) {
          assert(err);
          cb();
        }
      };
      project1.handler({},context);
    });

    it("should fail without requestType", function() {
      var event = {
        resourceType: "resource1"
      };

      var context = {
        done: function(err) {
          assert(err);
        }
      };
      assert.throws(
        () => {
          project1.handler(event,context);
        }
      );
    });

    describe("resource1", function() {

      describe("create", function() {

        it("should run without error", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "create"
          };

          var context = {
            done: function(err,data,id) {
              assert.ifError(err);
              assert(id,"Create must return a unique ID");
              cb();
            }
          };
          project1.handler(event,context);
        });
      });

      describe("update", function() {

        it("should fail if no PhysicalResourceId is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "update"
          };

          var context = {
            done: function(err) {
              assert(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (PhysicalResourceId) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "update",
            PhysicalResourceId: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (physicalResourceId) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "update",
            physicalResourceId: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (id) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "update",
            id: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });
      });


      describe("delete", function() {
        it("should fail if no PhysicalResourceId is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "delete"
          };

          var context = {
            done: function(err) {
              assert(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (PhysicalResourceId) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "delete",
            PhysicalResourceId: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (physicalResourceId) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "delete",
            physicalResourceId: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });

        it("should run if PhysicalResourceId (id) is provided", function(cb) {
          var event = {
            resourceType: "resource1",
            requestType: "delete",
            id: 1
          };

          var context = {
            done: function(err) {
              assert.ifError(err);
              cb();
            }
          };
          project1.handler(event,context);
        });
      });
    });
  });
});