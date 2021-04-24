 const request = require("supertest");
    const app = require("./server");

    describe("GET /", () => {
      it("respond with Hello World", (done) => {
        request(app).get("/").expect("Hello World", done);
      })
     
     it("respond message ", (done) => {
        request(app).get("/data").expect({msg:"it is okay"}, done);
        request(app).get("/data").expect({msg:"it is not okay"}, done);
      })
    });

