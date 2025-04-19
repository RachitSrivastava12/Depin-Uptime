import { prismaClient} from '../src/index.ts'

async function seed() {
  const user = await prismaClient.user.create({
    data: {
      email: "example@example.com",
      id:"8"
    }
  });

  const website = await prismaClient.website.create({
    data: {
      url: "example.com",
      userId: user.id
    }
  });

  const validator = await prismaClient.validator.create({
    data: {
      publicKey: "hvjhbkhbgukhui",
      location: "USA",
      ip: "127.0.0.1"
    }
  });

  await prismaClient.websiteTick.createMany({
    data: [
      {
        websiteId: website.id,
        validatorId: validator.id,
        status: "Good",
        createdAt: new Date(),
        latency: 100
      },
      {
        websiteId: website.id,
        validatorId: validator.id,
        status: "Good",
        createdAt: new Date(Date.now() - 1000 * 60 * 10),
        latency: 100
      },
      {
        websiteId: website.id,
        validatorId: validator.id,
        status: "Bad",
        createdAt: new Date(Date.now() - 1000 * 60 * 20),
        latency: 100
      }
    ]
  });
}

seed();
