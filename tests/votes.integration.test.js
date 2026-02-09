require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const connectDB = require("../src/config/db");

describe("POST /api/votes", () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should register a like vote for Pikachu", async () => {
    const response = await request(app).post("/api/votes").send({
      source: "pokemon",
      externalId: "25",
      name: "pikachu",
      vote: "like",
    });

    expect(response.status).toBe(200);
    expect(response.body.likes).toBeGreaterThanOrEqual(1);
  }, 10000);
});
