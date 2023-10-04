const axios = require("axios");

const apiUrl = "https://mocki.io/v1/87710faf-a388-4ee1-815c-e6f50ffa69ea";

describe("Response from API", () => {
    it("Status code is 200", async () => {
        const response = await axios.get(apiUrl);
        expect(response.status).toBe(200);
    });

    it("fetching users from the API", async () => {
        const response = await axios.get(apiUrl);
        expect(response.data).toBeDefined();
    });

    it("returns an array of products with Id, title, price and thumbnail", async () => {
        const response = await axios.get(apiUrl);
        const users = response.data;

        expect(users).toBeInstanceOf(Array);

        if (users.length > 0) {
            const firstUser = users[0];
            expect(firstUser).toHaveProperty("Id");
            expect(firstUser).toHaveProperty("Email");
            expect(firstUser).toHaveProperty("Name");
            expect(firstUser).toHaveProperty("Contact");
        }
    });
});
