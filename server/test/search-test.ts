import request from 'supertest';
import { expect } from 'chai';
import app from '../server';
import contentSeedData from '../seed-data.json';

const getExpectedData = (query: string) => {
    let searchParam = query.toLowerCase();
    // Find the params which has double quotation
    let param = searchParam.match(/(?:"[^"]*"|^[^"]*$)/);
    searchParam = param?.length ? param[0].replace(/"/g, "") : '';

    const expectedData = contentSeedData.filter(content => {
        const {name, description} = content;
        if (name.toLowerCase().includes(searchParam) || description.toLowerCase().includes(searchParam))
            return content
    });
    return expectedData;
}

describe('POST /search', () => {

    // Case-1: fetch details for the param 'Customer'
    it('Should fetch details for search param: Customer', (done) => {
        const searchParam = 'Customer';

        request(app)
            .post('/v0/search')
            .send({searchParam})
            .expect(200)
            .end((err: any, res: any) => {
                if(err) return done(err);

                // Get the expected data
                const expectedData = getExpectedData(searchParam);
                
                // Response details
                const responseData = res.body;
                
                // check whether the response length is matching or not
                expect(responseData.length).to.equal(expectedData.length);

                // check whether the contents are matching or not
                expectedData.forEach((res, index) => {
                    expect(responseData[index]).to.deep.include(res);
                })
                done();
            });
    });

    // Case-2: fetch details for the param 'Customer Assurance Liaison'
    it('Should fetch details for search param: Customer Assurance Liaison', (done) => {
        const searchParam = 'Customer Assurance Liaison';

        request(app)
            .post('/v0/search')
            .send({searchParam})
            .expect(200)
            .end((err: any, res: any) => {
                if(err) return done(err);

                // Get the expected data
                const expectedData = getExpectedData(searchParam);
                
                // Response details
                const responseData = res.body;
                
                // check whether the response length is matching or not
                expect(responseData.length).to.equal(expectedData.length);

                // check whether the contents are matching or not
                expectedData.forEach((res, index) => {
                    expect(responseData[index]).to.deep.include(res);
                })
                done();
            });
    });


    // Case-3: Get validation error when search paramter is not passed
    it('Should get validation error when passed search paramter is empty', (done) => {
        const searchParam = '';

        request(app)
            .post('/v0/search')
            .send({searchParam})
            .expect(400)
            .end((err: any, res: any) => {
                if(err) return done(err);
                
                // check whether the server is returning validation error or not
                const expectedData = {
                    title: 'validation_error',
                    detail: { params: 'Invalid search param', type: 'ValidationError' }
                }
                expect(res.body).to.deep.include(expectedData);
                done();
            });
    });


    // Case-4: fetch details for the param 'Customer Assurance Liaison'
    it('Should fetch details for search param: Customer "Assurance" Liaison', (done) => {
        const searchParam = 'Customer "Assurance" Liaison';

        request(app)
            .post('/v0/search')
            .send({searchParam})
            .expect(200)
            .end((err: any, res: any) => {
                if(err) return done(err);

                // Get the expected data
                const expectedData = getExpectedData(searchParam);
                
                // Response details
                const responseData = res.body;
                
                // check whether the response length is matching or not
                expect(responseData.length).to.equal(expectedData.length);

                // check whether the contents are matching or not
                expectedData.forEach((res, index) => {
                    expect(responseData[index]).to.deep.include(res);
                })
                done();
            });
    });


    // Case-5: fetch details for the param 'molestiae soluta dolore nobis aut'
    it('Should fetch details for search param: molestiae soluta dolore nobis aut', (done) => {
        const searchParam = 'molestiae soluta dolore nobis aut.';

        request(app)
            .post('/v0/search')
            .send({searchParam})
            .expect(200)
            .end((err: any, res: any) => {
                if(err) return done(err);

                // Get the expected data
                const expectedData = getExpectedData(searchParam);
                
                // Response details
                const responseData = res.body;
                
                // check whether the response length is matching or not
                expect(responseData.length).to.equal(expectedData.length);

                // check whether the contents are matching or not
                expectedData.forEach((res, index) => {
                    expect(responseData[index]).to.deep.include(res);
                })
                done();
            });
    });
});
  