 const request = require("supertest");
    const app = require("./server");

    describe("GET /", () => {
      it("respond with Hello World", (done) => {
        request(app).get("/").expect("Hello World", done);
      })
     
     it("respond message ", (done) => {
        request(app).get("/data").expect({msg:"it is okay"}, done);
      })
     
     it('Get user details', (done) => {
        request(app)
        .get('/user/')
        .end((err, res) => {
         const expectedResponse={
           name:"Maulik Bhalala",
           desg:"Backend Engineer"
         };
            expect(res.body.user).toEqual(expectedResponse)
            done();
        })
    })
    });

