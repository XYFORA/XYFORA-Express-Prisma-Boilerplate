import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const index = async (req, res) => {

    try {

        const tests = await prisma.test.findMany({
            orderBy: { createdAt: "desc" }
        });

        res.json(tests);

    } catch (err) {

        console.error(err);

        res.status(500).json({ message: "Server Error" });

    }

};

const store = async (req, res) => {

    try {

        const { data } = req.body;

        if (!data) {

            return res.status(400).json({ message: "Data Is Required" });

        }

        const newTest = await prisma.test.create({
            data: {
                data
            }
        });

        res.status(201).json({ message: "Test created", test: newTest });

    } catch (err) {

        console.error(err);

        res.status(500).json({ message: "Server Error" });

    }

};

export default { index, store };