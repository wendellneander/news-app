import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // create default categories
  await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: "General" },
  })
  await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, name: "Politics" },
  })
  await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: { id: 3, name: "Entertainment" },
  })
  await prisma.category.upsert({
    where: { id: 4 },
    update: {},
    create: { id: 4, name: "Sports" },
  })
  await prisma.category.upsert({
    where: { id: 5 },
    update: {},
    create: { id: 5, name: "World" },
  })

  // create default authors
  await prisma.author.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: "Lukas Ruiz" },
  })
  await prisma.author.upsert({
    where: { id: 2 },
    update: {},
    create: { id: 2, name: "Boris Brejcha" },
  })
  await prisma.author.upsert({
    where: { id: 3 },
    update: {},
    create: { id: 3, name: "Eli Iwasa" },
  })

  // create default articles
  await prisma.article.deleteMany()

  const article1: Prisma.ArticleUncheckedCreateInput = {
    title: "Fusce ullamcorper consectetur",
    content:
      "Fusce ullamcorper consectetur elit quis convallis. Curabitur nec odio aliquet, fermentum elit vel, efficitur orci. Integer placerat arcu at tellus tincidunt, vitae commodo ipsum commodo. Ut facilisis orci a felis luctus, ac convallis felis fermentum. Duis eget leo eget nunc facilisis lacinia ut a risus. Fusce ullamcorper consectetur elit quis convallis. Curabitur nec odio aliquet, fermentum elit vel, efficitur orci. Integer placerat arcu at tellus tincidunt, vitae commodo ipsum commodo. Ut facilisis orci a felis luctus, ac convallis felis fermentum. Duis eget leo eget nunc facilisis lacinia ut a risus.",
    slug: "fusce-ullamcorper-consectetur",
    categoryId: 1,
    authorId: 1,
  }
  const article2: Prisma.ArticleUncheckedCreateInput = {
    title: "Pellentesque habitant morbi tristique",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec auctor libero vitae nunc lobortis tristique. Vivamus nec urna ut leo cursus varius sed sit amet velit.",
    slug: "pellentesque-habitant-morbi-tristique",
    categoryId: 2,
    authorId: 1,
  }
  const article3: Prisma.ArticleUncheckedCreateInput = {
    title: "Vestibulum ante ipsum primis",
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc rutrum arcu et justo posuere lobortis. Morbi ac ullamcorper est, in efficitur ex. Sed vitae vestibulum nunc.",
    slug: "vestibulum-ante-ipsum-primis",
    categoryId: 3,
    authorId: 2,
  }
  const article4: Prisma.ArticleUncheckedCreateInput = {
    title: "Maecenas ultricies tortor",
    content:
      "Maecenas ultricies tortor eget dapibus. Integer sodales risus non quam blandit, a vehicula nulla consequat. Sed ut ex eget urna accumsan mattis.",
    slug: "maecenas-ultricies-tortor",
    categoryId: 2,
    authorId: 2,
  }
  const article5: Prisma.ArticleUncheckedCreateInput = {
    title: "Cras non ligula in justo",
    content:
      "Cras non ligula in justo commodo blandit. Ut id dui eget turpis tincidunt consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    slug: "cras-non-ligula-in-justo",
    categoryId: 1,
    authorId: 3,
  }
  const article6: Prisma.ArticleUncheckedCreateInput = {
    title: "Phasellus auctor libero",
    content:
      "Phasellus auctor libero et quam ultrices, a tempor nunc efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Aliquam erat volutpat.",
    slug: "phasellus-auctor-libero",
    categoryId: 2,
    authorId: 3,
  }

  await prisma.article.createMany({
    data: [article1, article2, article3, article4, article5, article6],
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("Error running seeds:", e)
    await prisma.$disconnect()
  })
