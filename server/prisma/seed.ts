import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Carlão d Massa",
      email: 'carsslao@gmail.com',
      avatarUrl: "https://github.com/lucadboer.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Exampele Pool",
      code: "B23ww",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  // Sem palpite
  await prisma.game.create({
    data: {
      date: "2022-11-01T19:48:38.520Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  // Com palpite
  await prisma.game.create({
    data: {
      date: '2022-11-02T11:45:21.441Z',
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guess: {
        create: {
          firstTeamPoints: 3,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }

    },
  });

  /*   const participant = await prisma.participant.create({
    data: {
      poolId: pool.id,
      userId: user.id,
    },
  }); */
}

main();