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
      const expectedResponse={
           name:"Maulik",
           desg:"Backend Engineer"
         };
      
        request(app)
        .get('/user/')
        .expect(expectedResponse,done);
    });
     
     it('Sum should be equal', (done) => {
        const {a,b}={10,15};
        request(app)
        .put('/user/1')
        .send({a,b})
        .expect(res.body).toEqual(a+b,done);
    })

    });

